(function () {
  "use strict";

  var D = window.DATA;
  var view = document.getElementById("view");

  /* ---------- Hilfsfunktionen ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sample(a, n) { return shuffle(a).slice(0, n); }
  function uniq(a) { return a.filter(function (x, i) { return a.indexOf(x) === i; }); }
  function today() {
    var d = new Date();
    return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
  }
  function norm(s) {
    return String(s).toLowerCase().trim()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .replace(/,/g, ".").replace(/[^a-z0-9.]/g, "");
  }
  function matchText(input, answers) {
    var a = norm(input);
    if (!a) return false;
    var num = parseFloat(String(input).replace(",", "."));
    return answers.some(function (ans) {
      if (norm(ans) === a) return true;
      var n2 = parseFloat(String(ans).replace(",", "."));
      return !isNaN(num) && !isNaN(n2) && /^[\d\s.,]+[a-zA-Z\s]*$/.test(String(input).trim()) && Math.abs(num - n2) < 1e-9;
    });
  }
  function pct(x) { return Math.round(x * 100); }

  /* ---------- Speicher (nur auf diesem Gerät) ---------- */
  var KEY = "rettung-zey-v1";
  function fresh() {
    return { srs: {}, cases: {}, streak: { last: null, count: 0 }, stats: { answered: 0, correct: 0 }, exams: [], size: "normal" };
  }
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && typeof s === "object") {
        var f = fresh();
        for (var k in f) if (s[k] !== undefined) f[k] = s[k];
        return f;
      }
    } catch (e) { /* kein Speicher verfügbar */ }
    return fresh();
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignorieren */ }
  }
  var S = load();

  /* ---------- Fragenpool ---------- */
  var AREAS = {
    medis: { name: "Medikamente", route: "medikamente" },
    akronyme: { name: "Akronyme", route: "akronyme" },
    orga: { name: "Organisation", route: "organisation" }
  };

  function list(items) {
    return "<ul>" + items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
  }

  function medBack(m) {
    return '<p class="label">Wofür</p><p>' + esc(m.kurz) + "</p>" +
      '<p class="label">Dosierung</p>' + list(m.dosis) +
      '<p class="label">Vorbereitung</p>' + list(m.vorbereitung);
  }
  function acroBack(a) {
    var h = "<p><b>" + esc(a.lang) + "</b></p>";
    if (a.teile) {
      h += '<ul class="parts">' + a.teile.map(function (t) {
        return "<li><b>" + esc(t[0]) + "</b><span>" + esc(t[1]) + "</span></li>";
      }).join("") + "</ul>";
    }
    if (a.info) h += '<p class="muted">' + esc(a.info) + "</p>";
    return h;
  }

  function buildBank() {
    var qs = [];
    D.medis.forEach(function (m) {
      var other = D.medis.filter(function (o) { return o.thema !== m.thema; });
      qs.push({ id: "m-card-" + m.id, bereich: "medis", typ: "card", vorne: m.name, vorneSub: m.handel, hinten: medBack(m) });
      qs.push({ id: "m-ind-" + m.id, bereich: "medis", typ: "mc", frage: "Wofür wird " + m.name + " eingesetzt?",
        korrekt: m.kurz, pool: uniq(other.map(function (o) { return o.kurz; })),
        erklaerung: m.name + ": " + m.kurz + ". Dosierung: " + m.dosis[0] });
      qs.push({ id: "m-rev-" + m.id, bereich: "medis", typ: "mc", frage: "Welches Medikament passt zu: " + m.kurz + "?",
        korrekt: m.name, pool: other.map(function (o) { return o.name; }),
        erklaerung: m.name + (m.handel ? " (" + m.handel + ")" : "") + ": " + m.kurz + "." });
      qs.push({ id: "m-amp-" + m.id, bereich: "medis", typ: "mc", frage: "Wie liegt " + m.name + " im Rettungsdienst üblicherweise vor?",
        korrekt: m.darreichung, pool: uniq(D.medis.filter(function (o) { return o.id !== m.id; }).map(function (o) { return o.darreichung; })),
        erklaerung: m.name + ": " + m.darreichung + ". " + m.vorbereitung[0] });
      var hn = norm(m.handel);
      var verraet = m.namen.some(function (n) { return hn.indexOf(norm(n)) !== -1; });
      if (m.handel && !verraet && !/^z\. ?b\./i.test(m.handel) && !/^isoton/i.test(m.handel)) {
        qs.push({ id: "m-han-" + m.id, bereich: "medis", typ: "text", frage: "Welcher Wirkstoff steckt in " + m.handel + "?",
          antworten: m.namen, loesung: m.name, erklaerung: m.handel + " enthält " + m.name + "." });
      }
    });

    D.akronyme.forEach(function (a) {
      qs.push({ id: "a-card-" + a.id, bereich: "akronyme", typ: "card", vorne: a.kurz, hinten: acroBack(a) });
      qs.push({ id: "a-mc-" + a.id, bereich: "akronyme", typ: "mc", frage: "Wofür steht " + a.kurz + "?",
        korrekt: a.lang, pool: D.akronyme.filter(function (o) { return o.id !== a.id; }).map(function (o) { return o.lang; }),
        erklaerung: a.kurz + ": " + a.lang + (a.info ? ". " + a.info : "") });
      if (a.ordnung && a.teile) {
        qs.push({ id: "a-ord-" + a.id, bereich: "akronyme", typ: "order", frage: "Bringe " + a.kurz + " in die richtige Reihenfolge.",
          items: a.teile.map(function (t) { return t[1]; }),
          erklaerung: a.teile.map(function (t) { return t[0]; }).join(" – ") });
      }
      if (!a.teile) {
        qs.push({ id: "a-txt-" + a.id, bereich: "akronyme", typ: "text", frage: "Wie lautet die Abkürzung für „" + a.lang + "“?",
          antworten: [a.kurz], loesung: a.kurz, erklaerung: a.kurz + " = " + a.lang });
      }
    });

    D.fragen.forEach(function (q) { qs.push(q); });
    return qs;
  }
  var BANK = buildBank();
  var BY_ID = {};
  BANK.forEach(function (q) { BY_ID[q.id] = q; });

  /* ---------- Wiederholungssystem (Lernkartei mit 6 Fächern) ---------- */
  var INTERVAL = [0, 1, 2, 4, 7, 14];
  function grade(id, result) {
    var r = S.srs[id] || { box: 0, due: 0, seen: 0, wrong: 0 };
    r.seen++;
    if (result === 2) r.box = Math.min(5, r.box + 1);
    else if (result === 1) r.box = Math.max(1, r.box);
    else { r.box = 0; r.wrong++; }
    r.due = today() + (result === 0 ? 0 : result === 1 ? 1 : INTERVAL[r.box]);
    S.srs[id] = r;
    S.stats.answered++;
    if (result === 2) S.stats.correct++;
    save();
  }
  function mastery(area) {
    var qs = BANK.filter(function (q) { return q.bereich === area; });
    var sum = 0;
    qs.forEach(function (q) { var r = S.srs[q.id]; if (r) sum += Math.min(r.box, 4); });
    return qs.length ? sum / (qs.length * 4) : 0;
  }
  function isDue(q) { var r = S.srs[q.id]; return r && r.due <= today(); }
  function isNew(q) { return !S.srs[q.id]; }

  function interleave(groups) {
    var out = [], keys = Object.keys(groups), added = true;
    while (added) {
      added = false;
      keys.forEach(function (k) { if (groups[k].length) { out.push(groups[k].shift()); added = true; } });
    }
    return out;
  }
  function byArea(qs) {
    var g = {};
    qs.forEach(function (q) { (g[q.bereich] = g[q.bereich] || []).push(q); });
    return g;
  }
  /* Fällige zuerst (schwächste vorne), dann neue gemischt über die Bereiche, dann die am wenigsten sicheren */
  function pickSet(filter, n) {
    var pool = BANK.filter(filter);
    var due = shuffle(pool.filter(isDue)).sort(function (a, b) { return S.srs[a.id].box - S.srs[b.id].box; });
    var neu = interleave(byArea(shuffle(pool.filter(isNew))));
    var rest = shuffle(pool.filter(function (q) { return !isDue(q) && !isNew(q); }))
      .sort(function (a, b) { return S.srs[a.id].box - S.srs[b.id].box; });
    return shuffle(due.concat(neu, rest).slice(0, n));
  }

  function touchStreak() {
    var t = today(), st = S.streak;
    if (st.last === t) return;
    st.count = st.last === t - 1 ? st.count + 1 : 1;
    st.last = t;
    save();
  }
  function streakNow() {
    var st = S.streak;
    return st.last === today() || st.last === today() - 1 ? st.count : 0;
  }

  /* ---------- Icons ---------- */
  function icon(name, size) {
    size = size || 22;
    var p = {
      start: '<rect x="3" y="3" width="7.5" height="9" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="5" rx="1.5"/><rect x="13.5" y="11" width="7.5" height="10" rx="1.5"/><rect x="3" y="15" width="7.5" height="6" rx="1.5"/>',
      faelle: '<path d="M9 4h6v2.5H9z"/><path d="M15 5h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3"/><path d="M8 13h2l1.5-3 2 6 1.5-3h1"/>',
      medikamente: '<rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(-40 12 12)"/><path d="M9.2 9.2l5.6 5.6" transform="rotate(5 12 12)"/>',
      akronyme: '<path d="M3 19l4.5-13h1L13 19"/><path d="M4.8 14h6.4"/><path d="M15 12.5c.8-1 1.8-1.5 3-1.5 1.8 0 3 1 3 3V19"/><path d="M21 15.5c-.9-.6-2-.8-3-.8-1.7 0-3 .9-3 2.2S16.2 19 17.6 19c1.5 0 2.7-.8 3.4-2"/>',
      organisation: '<path d="M5 21V4"/><path d="M5 4h11l-2 3.5L16 11H5"/>',
      pruefung: '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 2.5"/><path d="M9.5 2.5h5"/><path d="M12 2.5v3.5"/>',
      up: '<path d="M6 15l6-6 6 6"/>',
      down: '<path d="M6 9l6 6 6-6"/>'
    }[name];
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>";
  }

  /* ---------- Navigation ---------- */
  var ROUTES = [
    { id: "start", name: "Dashboard" },
    { id: "faelle", name: "Fallbeispiele" },
    { id: "medikamente", name: "Medikamente" },
    { id: "akronyme", name: "Akronyme & Schemata" },
    { id: "organisation", name: "Organisation & Übergabe" },
    { id: "pruefung", name: "Prüfungsmodus" }
  ];
  var drawer = document.getElementById("drawer");
  var scrim = document.getElementById("scrim");
  var openBtn = document.getElementById("menu-open");

  document.getElementById("nav-list").innerHTML = ROUTES.map(function (r) {
    return '<li><a href="#' + r.id + '" data-route="' + r.id + '">' + icon(r.id) + "<span>" + esc(r.name) + "</span></a></li>";
  }).join("");

  function setDrawer(open) {
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    scrim.hidden = !open;
    openBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) drawer.querySelector("a").focus();
  }
  openBtn.addEventListener("click", function () { setDrawer(true); });
  document.getElementById("menu-close").addEventListener("click", function () { setDrawer(false); openBtn.focus(); });
  scrim.addEventListener("click", function () { setDrawer(false); });
  drawer.addEventListener("click", function (e) { if (e.target.closest("a")) setDrawer(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && drawer.classList.contains("open")) setDrawer(false); });

  /* Schriftgröße */
  var sizeSeg = document.getElementById("font-size");
  function applySize() {
    document.documentElement.setAttribute("data-size", S.size || "normal");
    sizeSeg.querySelectorAll("button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.size === (S.size || "normal") ? "true" : "false");
    });
  }
  sizeSeg.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    S.size = b.dataset.size;
    save();
    applySize();
  });
  applySize();

  var cleanup = null;
  function setTitle(t) { document.getElementById("topbar-title").textContent = t || ""; }
  function updateStreak() {
    var n = streakNow();
    document.getElementById("streak-chip").textContent = n ? n + (n === 1 ? " Tag" : " Tage") + " in Folge" : "";
  }
  function show(html, title) {
    if (cleanup) { cleanup(); cleanup = null; }
    view.innerHTML = html;
    setTitle(title);
    updateStreak();
    window.scrollTo(0, 0);
  }

  function route() {
    var id = (location.hash || "#start").slice(1);
    var r = ROUTES.filter(function (x) { return x.id === id; })[0] || ROUTES[0];
    document.querySelectorAll("#nav-list a").forEach(function (a) {
      if (a.dataset.route === r.id) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    PAGES[r.id]();
  }
  window.addEventListener("hashchange", route);

  /* ---------- Quiz-Engine ---------- */
  function instantiate(q) {
    var inst = { q: q };
    if (q.typ === "mc" && q.pool) {
      var wrong = sample(q.pool.filter(function (x) { return x !== q.korrekt; }), 3);
      inst.options = shuffle([q.korrekt].concat(wrong));
      inst.correct = [inst.options.indexOf(q.korrekt)];
    } else if (q.typ === "mc" || q.typ === "multi") {
      var idx = shuffle(q.optionen.map(function (_, i) { return i; }));
      var right = [].concat(q.richtig);
      inst.options = idx.map(function (i) { return q.optionen[i]; });
      inst.correct = idx.map(function (i, pos) { return right.indexOf(i) !== -1 ? pos : -1; }).filter(function (x) { return x !== -1; });
    } else if (q.typ === "order") {
      var o = q.items.map(function (_, i) { return i; });
      var s = shuffle(o);
      var tries = 0;
      while (o.length > 1 && s.join() === o.join() && tries++ < 10) s = shuffle(o);
      inst.order = s;
    }
    return inst;
  }

  function solutionText(inst) {
    var q = inst.q;
    if (q.typ === "mc" || q.typ === "multi") return inst.correct.map(function (i) { return inst.options[i]; });
    if (q.typ === "order") return q.items.slice();
    if (q.typ === "text") return [q.loesung || q.antworten[0]];
    return [];
  }

  function labelOf(q) { return q.frage || q.vorne; }

  /*
   * opts: title, mode ("learn" | "exam"), seconds (Timer), track (Lernkartei aktualisieren),
   *       header(inst, i) → HTML über der Frage, onFinish(results) → zusätzliches HTML im Ergebnis
   */
  function runQuiz(questions, opts) {
    opts = opts || {};
    var mode = opts.mode || "learn";
    var track = opts.track !== false;
    var items = questions.map(instantiate);
    var results = [];
    var i = 0;
    var deadline = opts.seconds ? Date.now() + opts.seconds * 1000 : 0;
    var timerId = null;

    function tick() {
      var el = document.getElementById("quiz-timer");
      if (!el) return;
      var left = Math.max(0, Math.round((deadline - Date.now()) / 1000));
      el.textContent = Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0");
      el.classList.toggle("low", left <= 60);
      if (left <= 0) finish(true);
    }

    function stop() { if (timerId) { clearInterval(timerId); timerId = null; } }

    function renderQ() {
      var inst = items[i], q = inst.q;
      var html = '<div class="quiz">' +
        '<div class="quiz-top">' +
        '<button class="btn ghost" type="button" data-act="quit">Beenden</button>' +
        '<div class="quiz-progress" aria-hidden="true"><i style="width:' + pct(i / items.length) + '%"></i></div>' +
        '<span class="quiz-count">' + (i + 1) + " / " + items.length + "</span>" +
        (deadline ? '<span class="timer" id="quiz-timer" aria-label="Verbleibende Zeit"></span>' : "") +
        "</div>" +
        (opts.header ? opts.header(inst, i) : "") +
        '<section class="panel q-card" aria-live="polite">' +
        (q.bereich && AREAS[q.bereich] ? '<div><span class="chip">' + esc(AREAS[q.bereich].name) + "</span></div>" : "") +
        body(inst) +
        '<div id="q-feedback"></div>' +
        "</section></div>";
      if (i === 0) {
        show(html, opts.title);
        cleanup = stop;
        if (deadline) { tick(); timerId = setInterval(tick, 1000); }
      } else {
        view.innerHTML = html;
        if (deadline) tick();
        window.scrollTo(0, 0);
      }
      wire(inst);
    }

    function body(inst) {
      var q = inst.q;
      if (q.typ === "card") {
        return '<div class="flashcard" id="fc"><div><div class="front' + (q.vorne.length > 18 ? " small" : "") + '">' + esc(q.vorne) + "</div>" +
          (q.vorneSub ? '<p class="muted">' + esc(q.vorneSub) + "</p>" : "") + "</div></div>" +
          '<button class="btn block" type="button" data-act="flip">Karte umdrehen</button>';
      }
      var h = '<p class="q-text">' + esc(q.frage) + "</p>";
      if (q.typ === "mc" || q.typ === "multi") {
        if (q.typ === "multi") h += '<p class="q-hint">Mehrere Antworten können richtig sein.</p>';
        h += '<div class="options">' + inst.options.map(function (o, k) {
          return '<button class="opt" type="button" data-opt="' + k + '" aria-pressed="false"><span class="key">' + String.fromCharCode(65 + k) + "</span><span>" + esc(o) + "</span></button>";
        }).join("") + "</div>";
        if (q.typ === "multi") h += '<button class="btn block" type="button" data-act="check">Antwort prüfen</button>';
      } else if (q.typ === "order") {
        h += '<p class="q-hint">Mit den Pfeilen sortieren, dann prüfen.</p><ol class="order-list" id="order"></ol>' +
          '<button class="btn block" type="button" data-act="check">Reihenfolge prüfen</button>';
      } else if (q.typ === "text") {
        h += '<form class="text-answer" id="text-form" autocomplete="off">' +
          '<input class="search" id="text-input" type="text" inputmode="text" autocapitalize="off" spellcheck="false" placeholder="Deine Antwort" aria-label="Deine Antwort">' +
          '<button class="btn" type="submit">Prüfen</button></form>';
      }
      return h;
    }

    function renderOrder(inst, mark) {
      var ol = document.getElementById("order");
      ol.innerHTML = inst.order.map(function (itemIdx, pos) {
        var cls = mark ? (itemIdx === pos ? " right" : " wrong") : "";
        return '<li class="order-item' + cls + '"><span class="pos">' + (pos + 1) + "</span><span>" + esc(inst.q.items[itemIdx]) + "</span>" +
          (mark ? "<span></span>" :
            '<span class="moves"><button type="button" data-move="-1" data-pos="' + pos + '" aria-label="Nach oben"' + (pos === 0 ? " disabled" : "") + ">" + icon("up", 18) + "</button>" +
            '<button type="button" data-move="1" data-pos="' + pos + '" aria-label="Nach unten"' + (pos === inst.order.length - 1 ? " disabled" : "") + ">" + icon("down", 18) + "</button></span>") +
          "</li>";
      }).join("");
    }

    function wire(inst) {
      var q = inst.q;
      var root = view.querySelector(".quiz");
      root.querySelector('[data-act="quit"]').addEventListener("click", function () {
        if (results.length) finish(false); else { stop(); (opts.onQuit || function () { route(); })(); }
      });

      if (q.typ === "card") {
        root.querySelector('[data-act="flip"]').addEventListener("click", function () {
          document.getElementById("fc").innerHTML = '<div class="back">' + q.hinten + "</div>";
          this.outerHTML = '<p class="label">Wie gut wusstest du es?</p><div class="rate">' +
            '<button class="btn r-no" type="button" data-rate="0">Nicht gewusst</button>' +
            '<button class="btn r-mid" type="button" data-rate="1">Unsicher</button>' +
            '<button class="btn r-yes" type="button" data-rate="2">Gewusst</button></div>';
          root.querySelectorAll("[data-rate]").forEach(function (b) {
            b.addEventListener("click", function () {
              var r = +b.dataset.rate;
              if (track) grade(q.id, r);
              results.push({ inst: inst, ok: r === 2, rate: r });
              next();
            });
          });
        });
        return;
      }

      if (q.typ === "mc") {
        root.querySelectorAll(".opt").forEach(function (b) {
          b.addEventListener("click", function () {
            var k = +b.dataset.opt;
            answer(inst, inst.correct.indexOf(k) !== -1, { chosen: [k] });
          });
        });
      }
      if (q.typ === "multi") {
        root.querySelectorAll(".opt").forEach(function (b) {
          b.addEventListener("click", function () {
            b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
          });
        });
        root.querySelector('[data-act="check"]').addEventListener("click", function () {
          var chosen = [];
          root.querySelectorAll(".opt").forEach(function (b) { if (b.getAttribute("aria-pressed") === "true") chosen.push(+b.dataset.opt); });
          if (!chosen.length) return;
          var ok = chosen.length === inst.correct.length && chosen.every(function (c) { return inst.correct.indexOf(c) !== -1; });
          answer(inst, ok, { chosen: chosen });
        });
      }
      if (q.typ === "order") {
        renderOrder(inst, false);
        document.getElementById("order").addEventListener("click", function (e) {
          var b = e.target.closest("[data-move]");
          if (!b || b.disabled) return;
          var p = +b.dataset.pos, d = +b.dataset.move, t = inst.order[p];
          inst.order[p] = inst.order[p + d];
          inst.order[p + d] = t;
          renderOrder(inst, false);
          var again = document.querySelector('[data-pos="' + (p + d) + '"][data-move="' + d + '"]');
          if (again && !again.disabled) again.focus();
        });
        root.querySelector('[data-act="check"]').addEventListener("click", function () {
          var ok = inst.order.every(function (v, k) { return v === k; });
          answer(inst, ok, {});
        });
      }
      if (q.typ === "text") {
        var input = document.getElementById("text-input");
        if (window.matchMedia("(pointer: fine)").matches) input.focus();
        document.getElementById("text-form").addEventListener("submit", function (e) {
          e.preventDefault();
          if (!input.value.trim()) return;
          answer(inst, matchText(input.value, q.antworten), { text: input.value });
        });
      }
    }

    function answer(inst, ok, info) {
      var q = inst.q, root = view.querySelector(".quiz");
      var res = { inst: inst, ok: ok, info: info };
      results.push(res);

      if (mode === "exam") {
        if (track) grade(q.id, ok ? 2 : 0);
        next();
        return;
      }

      /* Antwort sichtbar machen */
      root.querySelectorAll(".opt").forEach(function (b) {
        var k = +b.dataset.opt;
        b.disabled = true;
        if (inst.correct.indexOf(k) !== -1) b.classList.add("right");
        else if (info.chosen && info.chosen.indexOf(k) !== -1) b.classList.add("wrong");
      });
      var chk = root.querySelector('[data-act="check"]');
      if (chk) chk.remove();
      if (q.typ === "order") renderOrder(inst, true);
      if (q.typ === "text") {
        document.getElementById("text-input").disabled = true;
        var sb = root.querySelector('#text-form button');
        if (sb) sb.remove();
      }

      var fb = document.getElementById("q-feedback");
      function paint() {
        var sol = solutionText(inst);
        fb.innerHTML = '<div class="feedback ' + (res.ok ? "ok" : "bad") + '">' +
          "<strong>" + (res.ok ? "Richtig!" : "Leider falsch") + "</strong>" +
          (!res.ok && sol.length ? '<div><span class="label">Richtig ist</span>' +
            (q.typ === "order" ? "<ol>" + sol.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>"
              : '<p class="solution">' + sol.map(esc).join(" · ") + "</p>") + "</div>" : "") +
          (q.erklaerung ? "<p>" + esc(q.erklaerung) + "</p>" : "") +
          (!res.ok && q.typ === "text" ? '<button class="link-btn" type="button" data-act="override">Ich hatte es richtig gemeint</button>' : "") +
          "</div>" +
          '<button class="btn block" type="button" data-act="next" style="margin-top:14px">' + (i + 1 < items.length ? "Weiter" : "Auswertung") + "</button>";
        var ov = fb.querySelector('[data-act="override"]');
        if (ov) ov.addEventListener("click", function () { res.ok = true; paint(); });
        var nb = fb.querySelector('[data-act="next"]');
        nb.addEventListener("click", function () {
          if (track) grade(q.id, res.ok ? 2 : 0);
          next();
        });
        nb.focus({ preventScroll: true });
        fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
      paint();
    }

    function next() {
      i++;
      if (i < items.length) renderQ(); else finish(false);
    }

    function finish(timeUp) {
      stop();
      touchStreak();
      var answered = results.length;
      var right = results.filter(function (r) { return r.ok; }).length;
      var total = mode === "exam" ? items.length : answered;
      var score = total ? right / total : 0;
      var extra = opts.onFinish ? opts.onFinish({ right: right, total: total, score: score, results: results }) : "";
      var wrong = results.filter(function (r) { return !r.ok; });
      var r = 54, c = 2 * Math.PI * r;
      var color = score >= 0.8 ? "var(--ok)" : score >= 0.5 ? "var(--warn)" : "var(--red)";
      var html = '<div class="quiz"><section class="panel result">' +
        (timeUp ? '<span class="chip warn">Zeit abgelaufen</span>' : "") +
        '<svg class="ring" viewBox="0 0 140 140" role="img" aria-label="' + pct(score) + ' Prozent richtig">' +
        '<circle cx="70" cy="70" r="' + r + '" fill="none" stroke="var(--panel-2)" stroke-width="12"/>' +
        '<circle cx="70" cy="70" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + (c * score) + " " + c + '" transform="rotate(-90 70 70)"/>' +
        '<text x="70" y="80" text-anchor="middle" font-size="34">' + pct(score) + "%</text></svg>" +
        "<h2>" + (score >= 0.8 ? "Stark!" : score >= 0.5 ? "Auf gutem Weg" : "Dranbleiben") + "</h2>" +
        '<p class="muted num">' + right + " von " + total + " richtig" + (mode === "exam" && answered < total ? " · " + (total - answered) + " nicht beantwortet" : "") + "</p>" +
        extra +
        '<div class="btn-row" style="justify-content:center">' +
        (wrong.length ? '<button class="btn" type="button" data-act="retry">Fehler wiederholen (' + wrong.length + ")</button>" : "") +
        '<a class="btn secondary" href="#start" data-act="home">Zum Dashboard</a></div></section>' +
        (wrong.length ? '<h3>Das solltest du dir nochmal ansehen</h3><div class="result-list">' + wrong.map(function (w) {
          var q = w.inst.q;
          var sol = solutionText(w.inst);
          return '<div class="panel"><p><b>' + esc(labelOf(q)) + "</b></p>" +
            (sol.length ? '<p class="muted">Richtig: ' + sol.map(esc).join(q.typ === "order" ? " → " : " · ") + "</p>" : "") +
            (q.erklaerung ? "<p>" + esc(q.erklaerung) + "</p>" : "") + "</div>";
        }).join("") + "</div>" : "") +
        "</div>";
      view.innerHTML = html;
      setTitle(opts.title);
      updateStreak();
      window.scrollTo(0, 0);
      var retry = view.querySelector('[data-act="retry"]');
      if (retry) retry.addEventListener("click", function () {
        runQuiz(wrong.map(function (w) { return w.inst.q; }), { title: opts.title, mode: "learn", track: track, header: opts.header });
      });
      var home = view.querySelector('[data-act="home"]');
      home.addEventListener("click", function (e) { if (location.hash === "#start" || !location.hash) { e.preventDefault(); route(); } });
    }

    if (!items.length) {
      show('<section class="panel"><p>Keine passenden Fragen gefunden.</p></section>', opts.title);
      return;
    }
    renderQ();
  }

  /* ---------- Seiten ---------- */
  function areaCard(route, title, sub, value, okBar) {
    return '<a class="area" href="#' + route + '"><span class="area-icon">' + icon(route, 24) + "</span>" +
      "<h3>" + esc(title) + "</h3>" +
      '<div class="area-meta"><div class="bar' + (okBar ? " ok" : "") + '"><i style="width:' + pct(value) + '%"></i></div><span class="num">' + esc(sub) + "</span></div></a>";
  }

  function caseStats() {
    var done = D.faelle.filter(function (f) { return S.cases[f.id] && S.cases[f.id].best >= 0.8; }).length;
    return { done: done, total: D.faelle.length };
  }

  var PAGES = {};

  PAGES.start = function () {
    var dueN = BANK.filter(isDue).length;
    var newN = BANK.filter(isNew).length;
    var cs = caseStats();
    var acc = S.stats.answered ? pct(S.stats.correct / S.stats.answered) + " %" : "–";
    var weak = BANK.filter(function (q) { var r = S.srs[q.id]; return r && r.wrong > 0 && r.box < 3; })
      .sort(function (a, b) { return S.srs[b.id].wrong - S.srs[a.id].wrong; }).slice(0, 5);
    var d = new Date().toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    var lastExam = S.exams[0];

    show(
      '<div class="dash-hello"><div class="page-head"><p class="label">' + esc(d) + "</p><h1>Moin!</h1></div></div>" +
      '<div class="dash-grid">' +
        '<section class="today">' +
          '<p class="label">Heute üben</p>' +
          '<div class="today-count num">' + Math.min(10, dueN || 10) + "<small>Fragen</small></div>" +
          '<p class="muted">' + (dueN ? dueN + " zur Wiederholung fällig" : "Nichts fällig") + " · " + newN + " noch neu</p>" +
          '<div class="btn-row"><button class="btn" type="button" id="go-daily">Jetzt üben</button>' +
          '<a class="btn secondary" href="#faelle">Fallbeispiel starten</a></div>' +
        "</section>" +
        '<div style="display:grid;gap:12px;align-content:start">' +
          '<div class="stats">' +
            '<div class="stat"><b>' + streakNow() + "</b><span>Tage in Folge</span></div>" +
            '<div class="stat"><b>' + S.stats.answered + "</b><span>Antworten</span></div>" +
            '<div class="stat"><b>' + acc + "</b><span>Trefferquote</span></div>" +
          "</div>" +
          '<section class="panel" style="display:grid;gap:10px">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><p class="label">Prüfungsmodus</p>' +
            (lastExam ? '<span class="chip ' + (lastExam.score >= 0.8 ? "ok" : lastExam.score >= 0.5 ? "warn" : "red") + '">Zuletzt ' + pct(lastExam.score) + " %</span>" : "") + "</div>" +
            "<p>Gemischte Fragen mit Zeitlimit, wie in der Prüfung.</p>" +
            '<a class="btn secondary" href="#pruefung">Prüfung simulieren</a>' +
          "</section>" +
        "</div>" +
      "</div>" +
      '<section style="display:grid;gap:12px"><p class="label">Dein Fortschritt</p><div class="areas">' +
        areaCard("faelle", "Fallbeispiele", cs.done + " / " + cs.total, cs.total ? cs.done / cs.total : 0, true) +
        areaCard("medikamente", "Medikamente", pct(mastery("medis")) + " %", mastery("medis")) +
        areaCard("akronyme", "Akronyme & Schemata", pct(mastery("akronyme")) + " %", mastery("akronyme")) +
        areaCard("organisation", "Organisation & Übergabe", pct(mastery("orga")) + " %", mastery("orga")) +
      "</div></section>" +
      '<section class="panel" style="display:grid;gap:12px"><p class="label">Schwachstellen</p>' +
        (weak.length
          ? '<ul class="weak-list">' + weak.map(function (q) {
              return '<li><span class="chip red">' + S.srs[q.id].wrong + "× falsch</span><span>" + esc(labelOf(q)) + "</span></li>";
            }).join("") + '</ul><button class="btn secondary" type="button" id="go-weak">Schwachstellen üben</button>'
          : '<p class="muted">Noch keine. Fragen, die du falsch beantwortest, tauchen hier auf und kommen öfter dran.</p>') +
      "</section>" +
      '<section style="display:grid;gap:10px">' +
        '<p class="footer-note">Dein Fortschritt wird nur auf diesem Gerät gespeichert. Die Inhalte sind eine Lernhilfe. Verbindlich sind die SOPs des Rettungsdienstes Landkreis Aurich und die Anweisungen des Notarztes.</p>' +
        '<div class="confirm" id="reset-box"><button class="btn ghost" type="button" id="reset">Fortschritt zurücksetzen</button></div>' +
      "</section>",
      "Dashboard"
    );

    document.getElementById("go-daily").addEventListener("click", function () {
      runQuiz(pickSet(function () { return true; }, 10), { title: "Heute üben" });
    });
    var gw = document.getElementById("go-weak");
    if (gw) gw.addEventListener("click", function () { runQuiz(weak, { title: "Schwachstellen" }); });
    document.getElementById("reset").addEventListener("click", function () {
      var box = document.getElementById("reset-box");
      box.innerHTML = "<span>Wirklich alles löschen?</span>" +
        '<button class="btn" type="button" id="reset-yes">Ja, löschen</button>' +
        '<button class="btn secondary" type="button" id="reset-no">Abbrechen</button>';
      document.getElementById("reset-yes").addEventListener("click", function () {
        var size = S.size;
        S = fresh(); S.size = size; save(); route();
      });
      document.getElementById("reset-no").addEventListener("click", route);
    });
  };

  PAGES.faelle = function () {
    show(
      '<div class="page-head"><p class="label">Fallbeispiele</p><h1>Einsätze durchspielen</h1>' +
      "<p>Schritt für Schritt nach cABCDE. Zu jeder Entscheidung bekommst du sofort eine Rückmeldung. Ein Fall gilt ab 80 % als sicher.</p></div>" +
      '<div class="case-grid">' + D.faelle.map(function (f) {
        var c = S.cases[f.id];
        return '<button class="case-card" type="button" data-case="' + f.id + '">' +
          '<span class="stw">' + esc(f.meldung.stichwort) + "</span>" +
          "<h3>" + esc(f.titel) + "</h3>" +
          '<div class="row"><span class="chip">' + esc(f.thema) + '</span><span class="chip">' + f.schritte.length + " Schritte</span>" +
          (c ? '<span class="chip ' + (c.best >= 0.8 ? "ok" : "warn") + '">Bestwert ' + pct(c.best) + " %</span>" : '<span class="chip red">Neu</span>') +
          "</div></button>";
      }).join("") + "</div>",
      "Fallbeispiele"
    );
    view.querySelectorAll("[data-case]").forEach(function (b) {
      b.addEventListener("click", function () { runCase(b.dataset.case); });
    });
  };

  function runCase(id) {
    var f = D.faelle.filter(function (x) { return x.id === id; })[0];
    var qs = f.schritte.map(function (s, k) {
      var q = {};
      for (var key in s) q[key] = s[key];
      q.id = "fall-" + f.id + "-" + k;
      return q;
    });
    runQuiz(qs, {
      title: f.titel,
      track: false,
      header: function (inst) {
        var s = inst.q;
        return '<div class="alarm"><div class="alarm-top"><span class="alarm-dot" aria-hidden="true"></span>' +
          '<span class="alarm-word">' + esc(f.meldung.stichwort) + "</span></div>" +
          '<p class="alarm-text">' + esc(f.meldung.text) + "</p></div>" +
          (s.info ? '<div class="befund"><p class="label">Lage und Befund</p><p>' + esc(s.info) + "</p></div>" : "");
      },
      onFinish: function (r) {
        var prev = S.cases[f.id];
        S.cases[f.id] = { best: Math.max(prev ? prev.best : 0, r.score), last: r.score, at: Date.now() };
        save();
        return '<div class="panel" style="text-align:left;display:grid;gap:8px;width:100%">' +
          '<div><span class="chip ' + (f.kritisch ? "red" : "ok") + '">' + (f.kritisch ? "Kritischer Patient" : "Nicht kritischer Patient") + "</span></div>" +
          "<p>" + esc(f.fazit) + "</p></div>";
      },
      onQuit: function () { location.hash = "#faelle"; route(); }
    });
  }

  function filterChips(values, active) {
    return '<div class="filters" role="group" aria-label="Filter">' + ["Alle"].concat(values).map(function (v) {
      return '<button class="filter" type="button" data-filter="' + esc(v) + '" aria-pressed="' + (v === active ? "true" : "false") + '">' + esc(v) + "</button>";
    }).join("") + "</div>";
  }

  function searchablePage(cfg) {
    var active = "Alle", term = "";
    show(
      '<div class="page-head"><p class="label">' + esc(cfg.eyebrow) + "</p><h1>" + esc(cfg.h1) + "</h1><p>" + esc(cfg.intro) + "</p></div>" +
      '<div class="btn-row">' + cfg.actions.map(function (a, k) {
        return '<button class="btn' + (k ? " secondary" : "") + '" type="button" data-action="' + k + '">' + esc(a.label) + "</button>";
      }).join("") + "</div>" +
      '<div class="toolbar"><input class="search" id="' + cfg.id + '-search" type="search" placeholder="' + esc(cfg.placeholder) + '" aria-label="Suchen">' +
      filterChips(cfg.groups, active) + "</div>" +
      '<div class="list" id="list"></div>' +
      (cfg.footer ? '<p class="footer-note">' + esc(cfg.footer) + "</p>" : ""),
      cfg.title
    );
    function paint() {
      var t = norm(term);
      var items = cfg.items.filter(function (x) {
        return (active === "Alle" || cfg.group(x) === active) && (!t || norm(cfg.text(x)).indexOf(t) !== -1);
      });
      document.getElementById("list").innerHTML = items.length ? items.map(cfg.render).join("") :
        '<p class="muted">Nichts gefunden. Versuch einen anderen Suchbegriff.</p>';
    }
    view.querySelectorAll("[data-action]").forEach(function (b) {
      b.addEventListener("click", function () { cfg.actions[+b.dataset.action].run(); });
    });
    document.getElementById(cfg.id + "-search").addEventListener("input", function (e) { term = e.target.value; paint(); });
    view.querySelector(".filters").addEventListener("click", function (e) {
      var b = e.target.closest("[data-filter]");
      if (!b) return;
      active = b.dataset.filter;
      view.querySelectorAll(".filter").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      paint();
    });
    paint();
  }

  function fact(label, content, wide) {
    return '<div class="fact' + (wide ? " wide" : "") + '"><p class="label">' + esc(label) + "</p>" +
      (Array.isArray(content) ? list(content) : "<p>" + esc(content) + "</p>") + "</div>";
  }

  PAGES.medikamente = function () {
    searchablePage({
      id: "med", title: "Medikamente", eyebrow: "Medikamente", h1: "Medikamente kennen und vorbereiten",
      intro: "Steckbriefe mit Indikation, Kontraindikationen, Dosierung und dem, was du beim Aufziehen wissen musst.",
      placeholder: "Wirkstoff, Handelsname oder Indikation suchen",
      items: D.medis,
      groups: uniq(D.medis.map(function (m) { return m.thema; })),
      group: function (m) { return m.thema; },
      text: function (m) { return m.name + " " + m.handel + " " + m.kurz + " " + m.indikation.join(" "); },
      footer: "Dosierungen sind typische Erwachsenenwerte zur Orientierung. Welche Medikamente auf euren Fahrzeugen sind und wie sie dosiert werden, regelt die SOP des Rettungsdienstes Landkreis Aurich.",
      actions: [
        { label: "Quiz starten", run: function () { runQuiz(pickSet(function (q) { return q.bereich === "medis" && q.typ !== "card"; }, 10), { title: "Medikamente-Quiz" }); } },
        { label: "Karteikarten", run: function () { runQuiz(pickSet(function (q) { return q.bereich === "medis" && q.typ === "card"; }, 12), { title: "Medikamente-Karten" }); } }
      ],
      render: function (m) {
        return '<details class="item"><summary><span class="item-title">' + esc(m.name) + "</span>" +
          '<span class="item-sub">' + esc((m.handel ? m.handel + " · " : "") + m.darreichung) + "</span></summary>" +
          '<div class="item-body"><div><span class="chip">' + esc(m.thema) + '</span> <span class="chip">' + esc(m.applikation) + "</span></div>" +
          '<div class="facts">' +
          fact("Indikation", m.indikation) +
          fact("Kontraindikationen", m.kontra) +
          fact("Dosierung (typisch, laut SOP prüfen)", m.dosis) +
          fact("Vorbereitung", m.vorbereitung) +
          fact("Nebenwirkungen", m.nw, true) +
          "</div>" +
          (m.merke ? '<div class="merke"><b>Merke:</b> ' + esc(m.merke) + "</div>" : "") +
          "</div></details>";
      }
    });
  };

  PAGES.akronyme = function () {
    searchablePage({
      id: "acro", title: "Akronyme", eyebrow: "Akronyme & Schemata", h1: "Merkhilfen sicher abrufen",
      intro: "Schemata für Untersuchung, Übergabe und Einsatztaktik und die wichtigsten Abkürzungen aus dem Rettungsdienst.",
      placeholder: "Abkürzung oder Begriff suchen",
      items: D.akronyme,
      groups: uniq(D.akronyme.map(function (a) { return a.kat; })),
      group: function (a) { return a.kat; },
      text: function (a) { return a.kurz + " " + a.lang + " " + (a.teile ? a.teile.map(function (t) { return t[1]; }).join(" ") : ""); },
      actions: [
        { label: "Karteikarten", run: function () { runQuiz(pickSet(function (q) { return q.bereich === "akronyme" && q.typ === "card"; }, 12), { title: "Akronym-Karten" }); } },
        { label: "Quiz starten", run: function () { runQuiz(pickSet(function (q) { return q.bereich === "akronyme" && q.typ !== "card" && q.typ !== "order"; }, 10), { title: "Akronym-Quiz" }); } },
        { label: "Reihenfolge üben", run: function () { runQuiz(pickSet(function (q) { return q.bereich === "akronyme" && q.typ === "order"; }, 8), { title: "Reihenfolge" }); } }
      ],
      render: function (a) {
        if (!a.teile) {
          return '<div class="item" style="padding:14px 16px"><div class="acro-head"><span class="acro-kurz">' + esc(a.kurz) + "</span><span>" + esc(a.lang) + "</span></div></div>";
        }
        return '<details class="item"><summary><div class="acro-head"><span class="acro-kurz">' + esc(a.kurz) + "</span></div>" +
          '<span class="item-sub">' + esc(a.lang) + "</span></summary>" +
          '<div class="item-body"><ul class="parts">' + a.teile.map(function (t) {
            return "<li><b>" + esc(t[0]) + "</b><span>" + esc(t[1]) + "</span></li>";
          }).join("") + "</ul>" +
          (a.info ? '<div class="merke"><b>Merke:</b> ' + esc(a.info) + "</div>" : "") + "</div></details>";
      }
    });
  };

  function renderBlocks(blocks) {
    return blocks.map(function (b) {
      if (b.h) return "<h4>" + esc(b.h) + "</h4>";
      if (b.p) return "<p>" + esc(b.p) + "</p>";
      if (b.ul) return list(b.ul);
      if (b.ol) return "<ol>" + b.ol.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol>";
      if (b.merke) return '<div class="merke"><b>Merke:</b> ' + esc(b.merke) + "</div>";
      return "";
    }).join("");
  }

  PAGES.organisation = function () {
    show(
      '<div class="page-head"><p class="label">Organisation & Übergabe</p><h1>Einsatz führen bis NA oder RTW kommt</h1>' +
      "<p>Ersteintreffend handeln, Patienten richtig einschätzen, sauber übergeben. Erst lesen, dann üben.</p></div>" +
      '<div class="btn-row">' +
        '<button class="btn" type="button" id="orga-quiz">Quiz starten</button>' +
        '<button class="btn secondary" type="button" id="orga-krit">Kritisch oder nicht?</button>' +
        '<button class="btn secondary" type="button" id="orga-order">Abläufe sortieren</button>' +
      "</div>" +
      '<div class="list">' + D.lektionen.map(function (l) {
        return '<details class="item"><summary><span class="item-title">' + esc(l.titel) + '</span><span class="item-sub">' + esc(l.kurz) + "</span></summary>" +
          '<div class="item-body lesson-body">' + renderBlocks(l.bloecke) + "</div></details>";
      }).join("") + "</div>",
      "Organisation"
    );
    document.getElementById("orga-quiz").addEventListener("click", function () {
      runQuiz(pickSet(function (q) { return q.bereich === "orga"; }, 10), { title: "Organisation-Quiz" });
    });
    document.getElementById("orga-krit").addEventListener("click", function () {
      runQuiz(shuffle(BANK.filter(function (q) { return /^q-o-krit/.test(q.id); })), { title: "Kritisch oder nicht?" });
    });
    document.getElementById("orga-order").addEventListener("click", function () {
      runQuiz(shuffle(BANK.filter(function (q) { return q.bereich === "orga" && q.typ === "order"; })), { title: "Abläufe sortieren" });
    });
  };

  function examSet(n) {
    var pool = BANK.filter(function (q) { return q.typ !== "card"; });
    var g = byArea(shuffle(pool));
    var out = [], keys = ["orga", "medis", "akronyme"], k = 0;
    while (out.length < n && keys.some(function (x) { return g[x] && g[x].length; })) {
      var key = keys[k++ % keys.length];
      if (g[key] && g[key].length) out.push(g[key].shift());
    }
    return shuffle(out);
  }

  PAGES.pruefung = function () {
    var modes = [
      { n: 10, min: 0, name: "Kurz", text: "10 Fragen ohne Zeitlimit, mit Auswertung am Ende" },
      { n: 20, min: 20, name: "Standard", text: "20 Fragen in 20 Minuten" },
      { n: 40, min: 40, name: "Ausführlich", text: "40 Fragen in 40 Minuten" }
    ];
    show(
      '<div class="page-head"><p class="label">Prüfungsmodus</p><h1>Prüfung simulieren</h1>' +
      "<p>Gemischte Fragen aus Medikamenten, Akronymen und Organisation. Du bekommst erst am Ende eine Rückmeldung, wie in der echten Prüfung.</p></div>" +
      '<div class="mode-grid">' + modes.map(function (m, k) {
        return '<button class="mode" type="button" data-mode="' + k + '"><b>' + esc(m.name) + "</b><span>" + esc(m.text) + "</span></button>";
      }).join("") + "</div>" +
      '<section class="panel" style="display:grid;gap:10px"><p class="label">Letzte Ergebnisse</p>' +
      (S.exams.length ? '<ul class="history">' + S.exams.map(function (e) {
        return "<li><span>" + esc(new Date(e.t).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" })) +
          " · " + e.total + " Fragen</span><b>" + pct(e.score) + " %</b></li>";
      }).join("") + "</ul>" : '<p class="muted">Noch keine Prüfung gemacht.</p>') + "</section>",
      "Prüfungsmodus"
    );
    view.querySelectorAll("[data-mode]").forEach(function (b) {
      b.addEventListener("click", function () {
        var m = modes[+b.dataset.mode];
        runQuiz(examSet(m.n), {
          title: "Prüfung " + m.name, mode: "exam", seconds: m.min * 60,
          onFinish: function (r) {
            S.exams.unshift({ t: Date.now(), score: r.score, total: r.total });
            S.exams = S.exams.slice(0, 10);
            save();
            return "";
          }
        });
      });
    });
  };

  route();
})();
