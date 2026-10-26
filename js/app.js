/* RS Plus Lernapp – Ansichten, Fortschritt (localStorage) und Navigation über #token */
(function () {
  'use strict';

  // ---------- Hilfsfunktionen ----------
  var $ = function (sel, el) { return (el || document).querySelector(sel); };
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); }
  function hash(s) { var h = 5381; for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
  function mischen(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function heuteISO(d) { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function modulName(id) { if (id === 'medis') return 'Medikamente'; var m = RS.module.find(function (x) { return x.id === id; }); return m ? m.titel : id; }

  // ---------- Icons ----------
  var I = {
    start: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    lernen: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7M8 11h7"/>',
    karten: '<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5v.01"/>',
    ekg: '<path d="M2 12h4l2-5 3 10 3-12 2 7h6"/>',
    medis: '<rect x="3" y="9" width="18" height="7" rx="3.5" transform="rotate(-35 12 12.5)"/><path d="M9.5 8.5l5 7"/>',
    faelle: '<path d="M9 4h6v3H9z"/><path d="M7 5H5v16h14V5h-2"/><path d="M12 10v6M9 13h6"/>',
    rechner: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>',
    plan: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    mehr: '<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',
    pruefung: '<path d="M8 3h8l3 3v15H5V3z"/><path d="M9 12l2 2 4-4"/>',
    ziel: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    zurueck: '<path d="M15 18l-6-6 6-6"/>',
    stat: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'
  };
  function ico(n) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + I[n] + '</svg>'; }
  var KREUZ = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/></svg>';

  // ---------- Fortschritt ----------
  var KEY = 'rsplus.lernapp.v1';
  var S = laden();
  function leer() { return { fragen: {}, karten: {}, gelesen: {}, faelle: {}, ekg: { r: 0, f: 0 }, pruefungen: [], tage: [] }; }
  function laden() {
    try { var d = JSON.parse(localStorage.getItem(KEY)); if (d && d.fragen) return Object.assign(leer(), d); } catch (e) {}
    return leer();
  }
  function speichern() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function tagMerken() { var t = heuteISO(); if (S.tage.indexOf(t) < 0) { S.tage.push(t); speichern(); } }

  // Fragen bekommen eine stabile ID aus dem Fragetext
  RS.fragen.forEach(function (q) { q.id = hash(q.f); });

  // Karteikarten: Modulkarten + automatisch erzeugte Medikamentenkarten
  var KARTEN = [];
  RS.module.forEach(function (m) { m.karten.forEach(function (k, i) { KARTEN.push({ key: m.id + ':' + i, m: m.id, v: k[0], h: k[1] }); }); });
  RS.medikamente.filter(function (x) { return x.kurs; }).forEach(function (x) {
    KARTEN.push({ key: 'medis:' + x.id + ':i', m: 'medis', v: x.name + ' – Gruppe und Indikation?', h: x.gruppe + '. ' + x.ind + '.' });
    KARTEN.push({ key: 'medis:' + x.id + ':d', m: 'medis', v: x.name + ' – Dosis (Erwachsene) und wichtigste Kontraindikation/Cave?', h: x.dosis + '. ' + (x.ki[0] ? 'KI: ' + x.ki[0] + '. ' : '') + (x.cave || '') });
  });

  var INTERVALL = [0, 10 * 60e3, 60 * 60e3, 24 * 3600e3, 3 * 24 * 3600e3, 7 * 24 * 3600e3];
  function karteFaellig(k) { var s = S.karten[k.key]; return !s || s.due <= Date.now(); }
  function karteBox(k) { var s = S.karten[k.key]; return s ? s.box : 0; }

  function modulStand(id) {
    var fr = RS.fragen.filter(function (q) { return q.m === id; });
    var ok = fr.filter(function (q) { var s = S.fragen[q.id]; return s && s.letzte; }).length;
    var ka = KARTEN.filter(function (k) { return k.m === id; });
    var kok = ka.filter(function (k) { return karteBox(k) >= 3; }).length;
    var g = S.gelesen[id] ? 1 : 0;
    var wert = 0.2 * g + 0.4 * (fr.length ? ok / fr.length : 0) + 0.4 * (ka.length ? kok / ka.length : 0);
    return { pct: Math.round(wert * 100), fragen: fr.length, fragenOk: ok, karten: ka.length, kartenOk: kok, gelesen: !!g };
  }
  function gesamt() {
    var ids = RS.module.map(function (m) { return m.id; }).concat(['medis']);
    var summe = ids.reduce(function (a, id) { return a + modulStand(id).pct; }, 0);
    var beantwortet = 0, richtig = 0, versuche = 0;
    Object.keys(S.fragen).forEach(function (k) { var s = S.fragen[k]; beantwortet++; richtig += s.r; versuche += s.r + s.f; });
    var gelernt = KARTEN.filter(function (k) { return karteBox(k) >= 3; }).length;
    return { pct: Math.round(summe / ids.length), beantwortet: beantwortet, quote: pct(richtig, versuche), gelernt: gelernt, faellig: KARTEN.filter(karteFaellig).length };
  }
  function serie() {
    var n = 0, d = new Date();
    while (S.tage.indexOf(heuteISO(d)) >= 0) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  // ---------- Navigation ----------
  var NAV = [
    ['start', 'Start', 'start'], ['lernen', 'Lernmodule', 'lernen'], ['karten', 'Karteikarten', 'karten'],
    ['quiz', 'Quiz & Prüfung', 'quiz'], ['ekg', 'EKG-Rhythmen', 'ekg'], ['medis', 'Medikamente', 'medis'],
    ['faelle', 'Fallbeispiele', 'faelle'], ['rechner', 'Rechner & Scores', 'rechner'], ['plan', 'Stundenplan', 'plan']
  ];
  var TABS = [['start', 'Start', 'start'], ['lernen', 'Lernen', 'lernen'], ['karten', 'Karten', 'karten'], ['quiz', 'Quiz', 'quiz'], ['mehr', 'Mehr', 'mehr']];
  var BEREICH = { modul: 'lernen', medi: 'medis', fall: 'faelle', ekgtrainer: 'ekg', pruefung: 'quiz', schwaechen: 'quiz', statistik: 'start' };

  function gehe(token) { if (location.hash.slice(1) === token) render(); else location.hash = token; }
  window.addEventListener('hashchange', function () { render(); window.scrollTo(0, 0); });

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-gehe]');
    if (el) { e.preventDefault(); gehe(el.getAttribute('data-gehe')); }
  });

  function rahmen() {
    var nav = NAV.map(function (n) { return '<button class="nav-link" data-gehe="' + n[0] + '" data-nav="' + n[0] + '">' + ico(n[2]) + '<span>' + n[1] + '</span></button>'; }).join('');
    var tabs = TABS.map(function (n) { return '<button data-gehe="' + n[0] + '" data-nav="' + n[0] + '">' + ico(n[2]) + '<span>' + n[1] + '</span></button>'; }).join('');
    $('#app').innerHTML =
      '<div class="app">' +
        '<aside class="sidebar"><div class="brand"><div class="brand-mark">' + KREUZ + '</div><div><div class="brand-name">RS Plus</div><div class="brand-sub">Lernapp 3/2026</div></div></div>' + nav +
        '<div class="sidebar-foot">Lernhilfe – verbindlich sind eure SOPs, die RS-Plus-Leitlinie und der Notarzt.</div></aside>' +
        '<header class="topbar"><div class="brand"><div class="brand-mark">' + KREUZ + '</div><div><div class="brand-name">RS Plus</div><div class="brand-sub">Lernapp 3/2026</div></div></div></header>' +
        '<main class="main"><div class="inhalt" id="view"></div></main>' +
        '<nav class="bottomnav">' + tabs + '</nav>' +
      '</div>';
  }

  var timer = null;
  function render() {
    if (timer) { clearInterval(timer); timer = null; }
    var t = location.hash.slice(1) || 'start';
    var teil = t.split('-'), name = teil[0], arg = teil.slice(1).join('-');
    var bereich = BEREICH[name] || name;
    document.querySelectorAll('[data-nav]').forEach(function (b) {
      var n = b.getAttribute('data-nav');
      var aktiv = n === bereich || (n === 'mehr' && ['ekg', 'medis', 'faelle', 'rechner', 'plan', 'mehr'].indexOf(bereich) >= 0 && b.closest('.bottomnav'));
      b.classList.toggle('aktiv', !!aktiv);
    });
    var v = $('#view');
    var f = VIEWS[name] || VIEWS.start;
    f(v, arg);
    tagMerken();
  }

  function zurueck(ziel, text) { return '<button class="zurueck" data-gehe="' + ziel + '">' + ico('zurueck') + esc(text) + '</button>'; }
  function balken(p, ok) { return '<div class="balken' + (ok ? ' ok' : '') + '"><span style="width:' + p + '%"></span></div>'; }
  function toast(t) {
    var el = document.createElement('div'); el.className = 'toast'; el.textContent = t; document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 1800);
  }

  // ---------- Ansichten ----------
  var VIEWS = {};

  // Dashboard
  VIEWS.start = function (v) {
    var g = gesamt();
    var umfang = 2 * Math.PI * 52, off = umfang * (1 - g.pct / 100);
    var heute = heuteISO();
    var tag = RS.stundenplan.find(function (d) { return d.datum === heute; });
    var heuteTitel = 'Heute im Kurs';
    if (!tag) {
      if (heute < RS.stundenplan[0].datum) { tag = RS.stundenplan[0]; heuteTitel = 'Erster Kurstag'; }
      else { tag = RS.stundenplan.find(function (d) { return d.datum > heute; }); heuteTitel = 'Nächster Kurstag'; }
    }
    var letzteP = S.pruefungen[S.pruefungen.length - 1];
    var heuteHtml = tag ? tag.einheiten.map(function (e) {
      return '<div class="heute-zeile"><span class="mono muted">' + e.zeit + '</span><span class="art ' + e.art + '">' + e.art + '</span><span>' + esc(e.titel) + '</span>' +
        (zielFuer(e.modul) ? '<button class="btn zweit klein" data-gehe="' + zielFuer(e.modul) + '">Lernen</button>' : '<span></span>') + '</div>';
    }).join('') : '<p class="muted">Der Lehrgang ist abgeschlossen. Wiederholen kannst du trotzdem jederzeit.</p>';

    v.innerHTML =
      '<section class="hero">' +
        '<div class="feld hero-text">' +
          '<div class="stapel"><span class="label">' + esc(RS.lehrgang.name) + ' · ' + esc(RS.lehrgang.ort) + '</span>' +
          '<h1>Bereit für Freitag?</h1>' +
          '<p class="muted">Schriftliche MC-Prüfung am 30.10. um 08:30, praktische Prüfung ab 12:45.</p></div>' +
          '<div class="countdown" id="countdown"></div>' +
        '</div>' +
        '<div class="feld ring-feld">' +
          '<svg class="ring" viewBox="0 0 120 120"><circle class="bahn" cx="60" cy="60" r="52" fill="none" stroke-width="10"/>' +
          '<circle class="wert" cx="60" cy="60" r="52" fill="none" stroke-width="10" stroke-linecap="round" stroke-dasharray="' + umfang.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 60 60)"/>' +
          '<text x="60" y="68" text-anchor="middle" font-size="26">' + g.pct + '%</text></svg>' +
          '<div class="stapel"><span class="label">Gesamtfortschritt</span><p>Aus gelesenen Modulen, richtig beantworteten Fragen und gelernten Karteikarten.</p>' +
          (letzteP ? '<span class="chip ' + (letzteP.pct >= 70 ? 'ok' : 'rot') + '">Letzte Probeprüfung: ' + letzteP.pct + ' %</span>' : '<span class="chip">Noch keine Probeprüfung</span>') + '</div>' +
        '</div>' +
      '</section>' +
      '<section class="kacheln">' +
        kachel(g.beantwortet + '<span class="muted" style="font-size:1rem">/' + RS.fragen.length + '</span>', 'Fragen bearbeitet') +
        kachel(g.quote + ' %', 'Trefferquote') +
        kachel(g.gelernt + '<span class="muted" style="font-size:1rem">/' + KARTEN.length + '</span>', 'Karten sicher') +
        kachel(serie() + (serie() === 1 ? ' Tag' : ' Tage'), 'Lernserie') +
      '</section>' +
      '<section class="aktionen">' +
        '<button class="btn aktion" data-gehe="pruefung">' + ico('pruefung') + 'Prüfung simulieren<small>40 Fragen · 45 Minuten</small></button>' +
        '<button class="btn aktion" data-gehe="karten-faellig">' + ico('karten') + 'Karteikarten<small>' + g.faellig + ' fällig</small></button>' +
        '<button class="btn aktion" data-gehe="ekgtrainer">' + ico('ekg') + 'EKG-Trainer<small>' + RS.rhythmen.length + ' Rhythmen erkennen</small></button>' +
        '<button class="btn aktion" data-gehe="schwaechen">' + ico('ziel') + 'Schwächen üben<small>' + schwaechen().length + ' offene Fehler</small></button>' +
      '</section>' +
      '<section class="raster-2">' +
        '<div class="feld stapel"><div class="kopf"><h2>' + heuteTitel + '</h2>' + (tag ? '<span class="chip rot">' + esc(tag.tag) + ', ' + tag.datum.split('-').reverse().slice(0, 2).join('.') + '.</span>' : '') + '</div>' +
          '<div class="heute-liste">' + heuteHtml + '</div><button class="btn zweit klein" data-gehe="plan" style="align-self:flex-start">Ganze Woche ansehen</button></div>' +
        '<div class="feld stapel"><div class="kopf"><h2>Module</h2><button class="btn zweit klein" data-gehe="lernen">Alle</button></div><div class="modul-liste">' +
          RS.module.map(function (m) { var s = modulStand(m.id); return '<button class="modul-zeile" data-gehe="modul-' + m.id + '"><span>' + esc(m.titel) + '</span>' + balken(s.pct, s.pct >= 80) + '<span class="pct">' + s.pct + '%</span></button>'; }).join('') +
        '</div></div>' +
      '</section>' +
      '<p class="hinweis">Diese App ist eine Lernhilfe aus deinen Kursunterlagen. Dosierungen sind Richtwerte für Erwachsene – verbindlich sind eure SOPs, die RS-Plus-Leitlinie und die Freigabe durch den Notarzt.</p>';

    function zeichneCountdown() {
      var el = $('#countdown'); if (!el) return;
      var diff = new Date(RS.lehrgang.pruefungMC) - new Date();
      if (diff <= 0) { el.innerHTML = '<div class="cd"><b>✓</b><span>Prüfung vorbei</span></div>'; return; }
      var d = Math.floor(diff / 864e5), h = Math.floor(diff / 36e5) % 24, m = Math.floor(diff / 6e4) % 60;
      el.innerHTML = '<div class="cd"><b>' + d + '</b><span>Tage</span></div><div class="cd"><b>' + h + '</b><span>Stunden</span></div><div class="cd"><b>' + m + '</b><span>Minuten</span></div>';
    }
    zeichneCountdown();
    timer = setInterval(zeichneCountdown, 30000);
  };
  function kachel(wert, label) { return '<div class="feld kachel"><b>' + wert + '</b><span class="label">' + label + '</span></div>'; }
  function zielFuer(modul) {
    if (!modul) return null;
    if (modul === 'faelle') return 'faelle';
    if (modul === 'pruefung') return 'pruefung';
    if (modul === 'ekg') return 'modul-ekg';
    return 'modul-' + modul;
  }

  // Modulübersicht
  VIEWS.lernen = function (v) {
    v.innerHTML = '<div class="kopf"><div class="stapel"><span class="label">Nach Stundenplan</span><h1>Lernmodule</h1></div></div>' +
      '<div class="raster">' + RS.module.map(function (m) {
        var s = modulStand(m.id);
        return '<button class="feld modul-karte" data-gehe="modul-' + m.id + '"><div class="reihe"><span class="chip">' + esc(m.tag) + '</span>' + (s.gelesen ? '<span class="chip ok">gelesen</span>' : '') + '</div>' +
          '<h3>' + esc(m.titel) + '</h3><p>' + esc(m.kurz) + '</p>' + balken(s.pct, s.pct >= 80) +
          '<span class="muted" style="font-size:.8rem">' + s.fragenOk + '/' + s.fragen + ' Fragen · ' + s.kartenOk + '/' + s.karten + ' Karten</span></button>';
      }).join('') + '</div>';
  };

  // Moduldetail
  VIEWS.modul = function (v, id) {
    var m = RS.module.find(function (x) { return x.id === id; });
    if (!m) return VIEWS.lernen(v);
    var s = modulStand(id);
    var extra = id === 'ekg' ? '<button class="btn zweit" data-gehe="ekg">' + ico('ekg') + 'Rhythmen ansehen</button>' : '';
    v.innerHTML = zurueck('lernen', 'Lernmodule') +
      '<div class="kopf"><div class="stapel"><span class="label">Modul · ' + esc(m.tag) + '</span><h1>' + esc(m.titel) + '</h1><p class="muted">' + esc(m.kurz) + '</p></div>' +
      '<div class="reihe"><button class="btn" data-gehe="quiz-' + id + '">' + ico('quiz') + 'Quiz (' + s.fragen + ')</button><button class="btn zweit" data-gehe="karten-' + id + '">' + ico('karten') + 'Karten (' + s.karten + ')</button>' + extra + '</div></div>' +
      m.abschnitte.map(function (a) {
        var body = a.tabelle ? tabelle(a.tabelle) : '<ul class="punkte">' + a.p.map(function (p) { return '<li>' + md(p) + '</li>'; }).join('') + '</ul>';
        return '<section class="feld abschnitt"><h3>' + esc(a.h) + '</h3>' + body + '</section>';
      }).join('') +
      '<div class="reihe"><button class="btn' + (s.gelesen ? ' zweit' : '') + '" id="gelesen">' + (s.gelesen ? 'Als ungelesen markieren' : 'Modul als gelesen markieren') + '</button>' +
      '<button class="btn zweit" data-gehe="quiz-' + id + '">Weiter zum Quiz</button></div>';
    $('#gelesen').onclick = function () { S.gelesen[id] = !S.gelesen[id]; speichern(); toast(S.gelesen[id] ? 'Als gelesen markiert' : 'Markierung entfernt'); render(); };
  };
  function tabelle(t) {
    return '<div class="tabelle-box"><table><thead><tr>' + t[0].map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      t.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + md(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
  }

  // ---------- Quiz ----------
  var Q = null; // laufende Sitzung
  function schwaechen() { return RS.fragen.filter(function (q) { var s = S.fragen[q.id]; return s && !s.letzte; }); }

  VIEWS.quiz = function (v, arg) {
    if (arg) {
      var pool = arg === 'alle' ? RS.fragen : RS.fragen.filter(function (q) { return q.m === arg; });
      return starteQuiz(v, mischen(pool), { titel: arg === 'alle' ? 'Alle Fragen' : modulName(arg), modus: 'uebung', zurueck: arg === 'alle' || arg === 'medis' ? 'quiz' : 'modul-' + arg });
    }
    var ids = RS.module.map(function (m) { return m.id; }).concat(['medis']);
    var verlauf = S.pruefungen.slice(-5).reverse();
    v.innerHTML = '<div class="kopf"><div class="stapel"><span class="label">Multiple Choice</span><h1>Quiz & Prüfung</h1></div></div>' +
      '<section class="raster-2">' +
        '<div class="feld stapel"><h2>Prüfungssimulation</h2><p class="muted">40 zufällige Fragen aus allen Themen, 45 Minuten. Die Auswertung kommt erst am Ende – wie am Freitag.</p>' +
          '<button class="btn" data-gehe="pruefung">' + ico('pruefung') + 'Simulation starten</button>' +
          (verlauf.length ? '<div class="stapel"><span class="label">Letzte Versuche</span>' + verlauf.map(function (p) { return '<div class="reihe" style="justify-content:space-between"><span class="mono muted">' + esc(p.datum) + '</span><span class="chip ' + (p.pct >= 70 ? 'ok' : 'rot') + '">' + p.richtig + '/' + p.n + ' · ' + p.pct + ' %</span></div>'; }).join('') + '</div>' : '') +
        '</div>' +
        '<div class="feld stapel"><h2>Gezielt üben</h2><p class="muted">Sofortige Rückmeldung mit Erklärung nach jeder Frage.</p>' +
          '<div class="reihe"><button class="btn" data-gehe="quiz-alle">Alle ' + RS.fragen.length + ' Fragen</button><button class="btn zweit" data-gehe="schwaechen">Schwächen (' + schwaechen().length + ')</button></div></div>' +
      '</section>' +
      '<section class="feld stapel"><h2>Nach Thema</h2><div class="modul-liste">' + ids.map(function (id) {
        var s = modulStand(id);
        return '<button class="modul-zeile" data-gehe="quiz-' + id + '"><span>' + esc(modulName(id)) + ' <span class="muted">· ' + s.fragen + '</span></span>' + balken(pct(s.fragenOk, s.fragen), s.fragenOk === s.fragen && s.fragen > 0) + '<span class="pct">' + s.fragenOk + '/' + s.fragen + '</span></button>';
      }).join('') + '</div></section>';
  };
  VIEWS.pruefung = function (v) {
    starteQuiz(v, mischen(RS.fragen).slice(0, 40), { titel: 'Prüfungssimulation', modus: 'pruefung', zeit: 45 * 60, zurueck: 'quiz' });
  };
  VIEWS.schwaechen = function (v) {
    var s = schwaechen();
    if (!s.length) {
      v.innerHTML = zurueck('quiz', 'Quiz') + '<div class="feld stapel"><h2>Keine offenen Fehler</h2><p class="muted">Alle Fragen, die du bisher beantwortet hast, sind beim letzten Versuch richtig gewesen. Starte ein Quiz, um neue Fragen zu bearbeiten.</p><button class="btn" data-gehe="quiz-alle" style="align-self:flex-start">Alle Fragen üben</button></div>';
      return;
    }
    starteQuiz(v, mischen(s), { titel: 'Schwächen üben', modus: 'uebung', zurueck: 'quiz' });
  };

  function starteQuiz(v, fragen, opt) {
    Q = { fragen: fragen.map(function (q) {
      var reihenfolge = mischen([0, 1, 2, 3].slice(0, q.a.length));
      return { q: q, ord: reihenfolge, wahl: null };
    }), i: 0, opt: opt, ende: opt.zeit ? Date.now() + opt.zeit * 1000 : null, fertig: false };
    zeigeFrage(v);
  }
  function antwortErfassen(q, richtig) {
    var s = S.fragen[q.id] || { r: 0, f: 0 };
    if (richtig) s.r++; else s.f++;
    s.letzte = richtig; S.fragen[q.id] = s; speichern();
  }
  function zeigeFrage(v) {
    if (timer) { clearInterval(timer); timer = null; }
    var x = Q.fragen[Q.i], q = x.q, n = Q.fragen.length, pruef = Q.opt.modus === 'pruefung';
    var beantwortet = x.wahl !== null;
    var navi = '<div class="punkte-navi">' + Q.fragen.map(function (f, j) {
      var c = j === Q.i ? 'jetzt' : '';
      if (f.wahl !== null) c += pruef ? ' ok' : (f.wahl === f.q.k ? ' ok' : ' nein');
      return '<span class="' + c + '"></span>';
    }).join('') + '</div>';
    v.innerHTML = zurueck(Q.opt.zurueck, 'Beenden') +
      '<div class="quiz-kopf"><div class="stapel" style="gap:4px"><span class="label">' + esc(Q.opt.titel) + ' · ' + esc(modulName(q.m)) + '</span><h2>Frage ' + (Q.i + 1) + ' von ' + n + '</h2></div>' +
      (Q.ende ? '<span class="timer" id="timer"></span>' : '') + '</div>' + navi +
      '<section class="feld stapel"><p class="frage">' + md(q.f) + '</p><div class="antworten">' +
      x.ord.map(function (ai, j) {
        var c = '';
        if (beantwortet) {
          if (pruef) { if (ai === x.wahl) c = ' gewaehlt'; }
          else { if (ai === q.k) c = ' richtig'; else if (ai === x.wahl) c = ' falsch'; }
        }
        return '<button class="antwort' + c + '" data-a="' + ai + '"' + (beantwortet && !pruef ? ' disabled' : '') + '><span class="bst">' + 'ABCD'[j] + '</span><span>' + md(q.a[ai]) + '</span></button>';
      }).join('') + '</div>' +
      (beantwortet && !pruef ? '<div class="erklaerung' + (x.wahl === q.k ? '' : ' falsch') + '"><strong>' + (x.wahl === q.k ? 'Richtig.' : 'Leider falsch.') + '</strong> ' + md(q.e) + '</div>' : '') +
      '</section>' +
      '<div class="reihe" style="justify-content:space-between">' +
        '<button class="btn zweit" id="zurueckBtn"' + (Q.i === 0 ? ' disabled' : '') + '>Zurück</button>' +
        (Q.i < n - 1 ? '<button class="btn" id="weiterBtn"' + (!beantwortet && !pruef ? ' disabled' : '') + '>Weiter</button>' : '<button class="btn" id="fertigBtn"' + (!beantwortet && !pruef ? ' disabled' : '') + '>Auswerten</button>') +
      '</div>';

    v.querySelectorAll('.antwort').forEach(function (b) {
      b.onclick = function () {
        var ai = +b.getAttribute('data-a');
        if (!pruef && x.wahl !== null) return;
        x.wahl = ai;
        if (!pruef) antwortErfassen(q, ai === q.k);
        zeigeFrage(v);
      };
    });
    $('#zurueckBtn').onclick = function () { Q.i--; zeigeFrage(v); };
    if ($('#weiterBtn')) $('#weiterBtn').onclick = function () { Q.i++; zeigeFrage(v); window.scrollTo(0, 0); };
    if ($('#fertigBtn')) $('#fertigBtn').onclick = function () { auswerten(v); };
    if (Q.ende) {
      var tick = function () {
        var rest = Math.max(0, Math.round((Q.ende - Date.now()) / 1000)), el = $('#timer');
        if (el) { el.textContent = Math.floor(rest / 60) + ':' + String(rest % 60).padStart(2, '0'); el.classList.toggle('knapp', rest < 300); }
        if (rest <= 0) auswerten(v);
      };
      tick(); timer = setInterval(tick, 1000);
    }
  }
  function auswerten(v) {
    if (timer) { clearInterval(timer); timer = null; }
    if (Q.fertig) return;
    Q.fertig = true;
    var pruef = Q.opt.modus === 'pruefung', n = Q.fragen.length;
    var richtig = Q.fragen.filter(function (x) { return x.wahl === x.q.k; }).length;
    var p = pct(richtig, n);
    if (pruef) {
      Q.fragen.forEach(function (x) { if (x.wahl !== null) antwortErfassen(x.q, x.wahl === x.q.k); });
      var d = new Date();
      S.pruefungen.push({ datum: heuteISO(d) + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'), n: n, richtig: richtig, pct: p });
      speichern();
    }
    var nachThema = {};
    Q.fragen.forEach(function (x) { var t = nachThema[x.q.m] = nachThema[x.q.m] || { n: 0, r: 0 }; t.n++; if (x.wahl === x.q.k) t.r++; });
    var falsche = Q.fragen.filter(function (x) { return x.wahl !== x.q.k; });
    v.innerHTML = zurueck(Q.opt.zurueck, 'Zurück') +
      '<section class="raster-2"><div class="feld stapel"><span class="label">' + esc(Q.opt.titel) + '</span><div class="ergebnis-zahl">' + p + ' %</div>' +
        '<p>' + richtig + ' von ' + n + ' richtig.</p>' +
        (pruef ? '<span class="chip ' + (p >= 70 ? 'ok' : 'rot') + '" style="align-self:flex-start">' + (p >= 70 ? 'Bestanden (Richtwert 70 %)' : 'Unter 70 % – weiter üben') + '</span><p class="hinweis">Die 70-%-Grenze ist ein Richtwert. Die genaue Bestehensgrenze nennt euch die Schule.</p>' : '') +
        '<div class="reihe"><button class="btn" id="nochmal">Nochmal</button>' + (falsche.length ? '<button class="btn zweit" data-gehe="schwaechen">Fehler üben</button>' : '') + '</div></div>' +
      '<div class="feld stapel"><h3>Nach Thema</h3>' + Object.keys(nachThema).map(function (m) {
        var t = nachThema[m]; return '<div class="stapel" style="gap:4px"><div class="reihe" style="justify-content:space-between"><span>' + esc(modulName(m)) + '</span><span class="mono muted">' + t.r + '/' + t.n + '</span></div>' + balken(pct(t.r, t.n), t.r === t.n) + '</div>';
      }).join('') + '</div></section>' +
      (falsche.length ? '<section class="feld stapel"><h2>Falsch beantwortet</h2>' + falsche.map(function (x) {
        return '<div class="feld-2 stapel" style="gap:6px"><strong>' + md(x.q.f) + '</strong>' +
          (x.wahl !== null ? '<span class="muted">Deine Antwort: ' + md(x.q.a[x.wahl]) + '</span>' : '<span class="muted">Nicht beantwortet</span>') +
          '<span>Richtig: <strong>' + md(x.q.a[x.q.k]) + '</strong></span><span class="muted" style="font-size:.88rem">' + md(x.q.e) + '</span></div>';
      }).join('') + '</section>' : '');
    $('#nochmal').onclick = function () {
      if (pruef) VIEWS.pruefung(v); else starteQuiz(v, mischen(Q.fragen.map(function (x) { return x.q; })), Q.opt);
    };
  }

  // ---------- Karteikarten ----------
  var K = null;
  VIEWS.karten = function (v, arg) {
    if (arg) return starteKarten(v, arg);
    var ids = RS.module.map(function (m) { return m.id; }).concat(['medis']);
    var boxen = [0, 0, 0, 0, 0];
    KARTEN.forEach(function (k) { boxen[Math.min(4, karteBox(k))]++; });
    var namen = ['Neu', 'Box 1', 'Box 2', 'Box 3', 'Sicher'];
    var g = gesamt();
    v.innerHTML = '<div class="kopf"><div class="stapel"><span class="label">Lernkartei</span><h1>Karteikarten</h1><p class="muted">Gewusste Karten wandern eine Box weiter und kommen später wieder. Falsche Karten kommen sofort zurück.</p></div>' +
      '<div class="reihe"><button class="btn" data-gehe="karten-faellig">' + ico('karten') + g.faellig + ' fällige lernen</button><button class="btn zweit" data-gehe="karten-alle">Alle mischen</button></div></div>' +
      '<section class="feld boxen">' + boxen.map(function (b, i) { return '<div class="feld-2 box"><b>' + b + '</b><span>' + namen[i] + '</span></div>'; }).join('') + '</section>' +
      '<section class="feld stapel"><h2>Nach Thema</h2><div class="modul-liste">' + ids.map(function (id) {
        var ka = KARTEN.filter(function (k) { return k.m === id; }), ok = ka.filter(function (k) { return karteBox(k) >= 3; }).length;
        return '<button class="modul-zeile" data-gehe="karten-' + id + '"><span>' + esc(modulName(id)) + ' <span class="muted">· ' + ka.length + '</span></span>' + balken(pct(ok, ka.length), ok === ka.length) + '<span class="pct">' + ok + '/' + ka.length + '</span></button>';
      }).join('') + '</div></section>';
  };
  function starteKarten(v, arg) {
    var deck;
    if (arg === 'faellig') deck = KARTEN.filter(karteFaellig).sort(function (a, b) { return karteBox(a) - karteBox(b); });
    else if (arg === 'alle') deck = mischen(KARTEN);
    else deck = mischen(KARTEN.filter(function (k) { return k.m === arg; }));
    if (arg === 'faellig') deck = mischen(deck.slice(0, 30));
    K = { deck: deck, i: 0, gewusst: 0, arg: arg };
    zeigeKarte(v);
  }
  function zeigeKarte(v) {
    var titel = K.arg === 'faellig' ? 'Fällige Karten' : K.arg === 'alle' ? 'Alle Karten' : modulName(K.arg);
    if (!K.deck.length || K.i >= K.deck.length) {
      v.innerHTML = zurueck('karten', 'Karteikarten') + '<div class="feld stapel"><span class="label">' + esc(titel) + '</span><h2>' + (K.deck.length ? 'Runde geschafft' : 'Nichts fällig') + '</h2>' +
        '<p class="muted">' + (K.deck.length ? K.gewusst + ' von ' + K.deck.length + ' Karten gewusst.' : 'Alle Karten sind gerade gelernt. Schau später wieder rein oder lerne ein Thema.') + '</p>' +
        '<div class="reihe"><button class="btn" data-gehe="karten-alle">Alle mischen</button><button class="btn zweit" data-gehe="karten">Übersicht</button></div></div>';
      return;
    }
    var k = K.deck[K.i];
    v.innerHTML = zurueck('karten', 'Karteikarten') +
      '<div class="quiz-kopf"><div class="stapel" style="gap:4px"><span class="label">' + esc(titel) + ' · ' + esc(modulName(k.m)) + '</span><h2>Karte ' + (K.i + 1) + ' von ' + K.deck.length + '</h2></div><span class="chip">Box ' + karteBox(k) + '</span></div>' +
      balken(pct(K.i, K.deck.length)) +
      '<div class="karte-buehne"><div class="karte" id="karte" tabindex="0" role="button" aria-label="Karte umdrehen">' +
        '<div class="karte-seite vorne"><span class="label">Frage</span><p class="karte-text">' + md(k.v) + '</p><span class="muted" style="font-size:.85rem">Tippen zum Umdrehen</span></div>' +
        '<div class="karte-seite hinten"><span class="label">Antwort</span><p class="karte-text">' + md(k.h) + '</p></div>' +
      '</div></div>' +
      '<div class="bewertung" id="bewertung" style="visibility:hidden">' +
        '<button class="btn zweit" data-b="0">Nicht gewusst</button><button class="btn zweit" data-b="1">Unsicher</button><button class="btn" data-b="2">Gewusst</button></div>';
    var karte = $('#karte');
    function drehen() { karte.classList.toggle('umgedreht'); $('#bewertung').style.visibility = 'visible'; }
    karte.onclick = drehen;
    karte.onkeydown = function (e) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); drehen(); } };
    v.querySelectorAll('[data-b]').forEach(function (b) {
      b.onclick = function () {
        var wert = +b.getAttribute('data-b'), s = S.karten[k.key] || { box: 0, due: 0 };
        if (wert === 0) { s.box = 1; s.due = Date.now() + 60e3; K.deck.push(k); }
        else if (wert === 1) { s.box = Math.max(1, s.box); s.due = Date.now() + INTERVALL[1]; }
        else { s.box = Math.min(5, s.box + 1); s.due = Date.now() + INTERVALL[s.box]; K.gewusst++; }
        S.karten[k.key] = s; speichern();
        K.i++; zeigeKarte(v);
      };
    });
  }

  // ---------- EKG ----------
  VIEWS.ekg = function (v, arg) {
    if (arg) {
      var r = RS.rhythmen.find(function (x) { return x.id === arg; });
      if (r) return ekgDetail(v, r);
    }
    v.innerHTML = '<div class="kopf"><div class="stapel"><span class="label">Präklinisch wichtige Rhythmen</span><h1>EKG-Rhythmen</h1><p class="muted">Ableitung II, 25 mm/s, 10 mm/mV. Die Streifen sind berechnete Schemabilder.</p></div>' +
      '<div class="reihe"><button class="btn" data-gehe="ekgtrainer">' + ico('ekg') + 'EKG-Trainer</button><button class="btn zweit" data-gehe="modul-ekg">Grundlagen</button></div></div>' +
      '<div class="filter" id="ekgfilter"><button class="aktiv" data-f="alle">Alle</button><button data-f="kritisch">Kritisch</button><button data-f="schockbar">Schockbar</button></div>' +
      '<div class="raster" id="ekgliste"></div>';
    function liste(f) {
      $('#ekgliste').innerHTML = RS.rhythmen.filter(function (r) { return f === 'alle' || (f === 'kritisch' && r.status === 'kritisch') || (f === 'schockbar' && r.schockbar); }).map(function (r) {
        return '<button class="feld rhythmus-karte" data-gehe="ekg-' + r.id + '">' + RS.ekgSVG(r.id, true) +
          '<div class="reihe" style="justify-content:space-between"><h3>' + esc(r.name) + '</h3>' + statusChip(r) + '</div><span class="muted" style="font-size:.85rem">' + esc(r.gruppe) + '</span></button>';
      }).join('');
    }
    liste('alle');
    $('#ekgfilter').onclick = function (e) {
      var b = e.target.closest('button'); if (!b) return;
      $('#ekgfilter').querySelectorAll('button').forEach(function (x) { x.classList.toggle('aktiv', x === b); });
      liste(b.getAttribute('data-f'));
    };
  };
  function statusChip(r) {
    if (r.schockbar) return '<span class="chip rot">Schockbar</span>';
    return r.status === 'kritisch' ? '<span class="chip rot">Kritisch</span>' : r.status === 'warn' ? '<span class="chip warn">Beachten</span>' : '<span class="chip ok">Stabil</span>';
  }
  function ekgDetail(v, r) {
    v.innerHTML = zurueck('ekg', 'Alle Rhythmen') +
      '<div class="kopf"><div class="stapel"><span class="label">' + esc(r.gruppe) + '</span><h1>' + esc(r.name) + '</h1></div><div class="reihe">' + statusChip(r) + (r.schockbar ? '' : '<span class="chip">Nicht schockbar</span>') + '</div></div>' +
      '<section class="feld stapel"><div class="ekg-scroll">' + RS.ekgSVG(r.id) + '</div><div class="massstab"><span>1 kleines Kästchen = 0,04 s / 0,1 mV</span><span>1 großes Kästchen = 0,2 s / 0,5 mV</span><span>Streifen = 6 s</span></div></section>' +
      '<section class="raster-2"><div class="feld stapel"><h3>Erkennungsmerkmale</h3><ul class="punkte">' + r.kriterien.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="feld stapel"><h3>Was tun?</h3><ul class="punkte">' + r.massnahmen.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul></div></section>' +
      '<p class="hinweis">Immer zuerst den Patienten beurteilen: Puls, Bewusstsein, Kreislauf. Der Monitor ergänzt die Untersuchung.</p>';
  }
  VIEWS.ekgtrainer = function (v) {
    var runde = { n: 0, r: 0 };
    function neu() {
      var r = RS.rhythmen[Math.floor(Math.random() * RS.rhythmen.length)];
      var andere = mischen(RS.rhythmen.filter(function (x) { return x.id !== r.id; })).slice(0, 3);
      var opts = mischen([r].concat(andere));
      v.innerHTML = zurueck('ekg', 'EKG-Rhythmen') +
        '<div class="quiz-kopf"><div class="stapel" style="gap:4px"><span class="label">EKG-Trainer</span><h2>Welcher Rhythmus ist das?</h2></div><span class="chip">' + runde.r + '/' + runde.n + ' richtig · gesamt ' + S.ekg.r + '/' + (S.ekg.r + S.ekg.f) + '</span></div>' +
        '<section class="feld"><div class="ekg-scroll">' + RS.ekgSVG(r.id) + '</div></section>' +
        '<div class="antworten">' + opts.map(function (o, j) { return '<button class="antwort" data-id="' + o.id + '"><span class="bst">' + 'ABCD'[j] + '</span><span>' + esc(o.name) + '</span></button>'; }).join('') + '</div>' +
        '<div id="feedback"></div>';
      v.querySelectorAll('.antwort').forEach(function (b) {
        b.onclick = function () {
          var ok = b.getAttribute('data-id') === r.id;
          runde.n++; if (ok) { runde.r++; S.ekg.r++; } else S.ekg.f++;
          speichern();
          v.querySelectorAll('.antwort').forEach(function (x) {
            x.disabled = true;
            if (x.getAttribute('data-id') === r.id) x.classList.add('richtig'); else if (x === b) x.classList.add('falsch');
          });
          $('#feedback').innerHTML = '<div class="feld stapel"><div class="erklaerung' + (ok ? '' : ' falsch') + '"><strong>' + (ok ? 'Richtig: ' : 'Das war: ') + esc(r.name) + '.</strong> ' + esc(r.kriterien.join(' · ')) + '</div>' +
            '<div class="reihe"><button class="btn" id="naechster">Nächster Rhythmus</button><button class="btn zweit" data-gehe="ekg-' + r.id + '">Details</button></div></div>';
          $('#naechster').onclick = neu;
        };
      });
    }
    neu();
  };

  // ---------- Medikamente ----------
  VIEWS.medis = function (v, arg) {
    v.innerHTML = '<div class="kopf"><div class="stapel"><span class="label">' + RS.medikamente.length + ' Wirkstoffe</span><h1>Medikamente</h1><p class="muted">Richtwerte für Erwachsene. Verbindlich sind eure SOPs und die Freigabe durch den Notarzt.</p></div>' +
      '<div class="reihe"><button class="btn" data-gehe="karten-medis">' + ico('karten') + 'Karten</button><button class="btn zweit" data-gehe="quiz-medis">Quiz</button></div></div>' +
      '<input class="suche" id="medisuche" type="search" placeholder="Suchen: Name, Handelsname, Indikation …" aria-label="Medikamente durchsuchen">' +
      '<div class="filter" id="medifilter"><button class="aktiv" data-f="kurs">18 aus dem Kurs</button><button data-f="alle">Alle</button></div>' +
      '<div class="raster" id="mediliste"></div>';
    var filter = 'kurs';
    function liste() {
      var s = $('#medisuche').value.trim().toLowerCase();
      var l = RS.medikamente.filter(function (x) {
        if (filter === 'kurs' && !x.kurs && !s) return false;
        return !s || [x.name, x.handel, x.gruppe, x.ind].join(' ').toLowerCase().indexOf(s) >= 0;
      });
      $('#mediliste').innerHTML = l.length ? l.map(function (x) {
        return '<button class="feld medi-zeile" data-gehe="medi-' + x.id + '"><span class="medi-name">' + esc(x.name) + '</span>' + (x.kurs ? '<span class="chip rot">Kurs</span>' : '<span></span>') +
          '<span class="ind">' + esc(x.gruppe) + ' · ' + esc(x.ind) + '</span></button>';
      }).join('') : '<p class="muted">Kein Medikament gefunden.</p>';
    }
    $('#medisuche').oninput = liste;
    $('#medifilter').onclick = function (e) {
      var b = e.target.closest('button'); if (!b) return;
      filter = b.getAttribute('data-f');
      $('#medifilter').querySelectorAll('button').forEach(function (x) { x.classList.toggle('aktiv', x === b); });
      liste();
    };
    liste();
  };
  VIEWS.medi = function (v, id) {
    var x = RS.medikamente.find(function (m) { return m.id === id; });
    if (!x) return VIEWS.medis(v);
    var zeilen = [['Gruppe', esc(x.gruppe)], ['Indikation', md(x.ind)], ['Kontraindikationen', '<ul>' + x.ki.map(function (k) { return '<li>' + md(k) + '</li>'; }).join('') + '</ul>'],
      ['Dosierung Erwachsene', '<span class="dosis">' + md(x.dosis) + '</span>']];
    if (x.kinder) zeilen.push(['Dosierung Kinder', '<span class="dosis">' + md(x.kinder) + '</span>']);
    if (x.wirk) zeilen.push(['Wirkung / Merkhilfe', md(x.wirk)]);
    v.innerHTML = zurueck('medis', 'Medikamente') +
      '<div class="kopf"><div class="stapel"><span class="label">' + esc(x.handel || 'Wirkstoff') + '</span><h1>' + esc(x.name) + '</h1></div>' + (x.kurs ? '<span class="chip rot">Aus der Lernsession</span>' : '') + '</div>' +
      '<section class="feld" style="padding:0;overflow:hidden"><div class="steckbrief">' + zeilen.map(function (z) { return '<div>' + z[0] + '</div><div>' + z[1] + '</div>'; }).join('') + '</div></section>' +
      (x.cave ? '<div class="cave"><span class="label" style="color:#ff8a8f">Cave</span><p>' + md(x.cave) + '</p></div>' : '') +
      (x.fehler ? '<div class="feld-2"><span class="label">Typischer Fehler im Kurs</span><p>' + md(x.fehler) + '</p></div>' : '');
  };

  // ---------- Fallbeispiele ----------
  VIEWS.faelle = function (v) {
    v.innerHTML = '<div class="kopf"><div class="stapel"><span class="label">Simulationstraining</span><h1>Fallbeispiele</h1><p class="muted">Lies die Lage, überlege deine Antwort und decke dann die Musterlösung auf.</p></div></div>' +
      '<div class="raster">' + RS.faelle.map(function (f) {
        var s = S.faelle[f.id];
        return '<button class="feld modul-karte" data-gehe="fall-' + f.id + '"><div class="reihe"><span class="chip">' + esc(f.kat) + '</span>' + (s ? '<span class="chip ok">bearbeitet</span>' : '') + '</div><h3>' + esc(f.titel) + '</h3><p>' + esc(f.lage) + '</p></button>';
      }).join('') + '</div>';
  };
  VIEWS.fall = function (v, id) {
    var f = RS.faelle.find(function (x) { return x.id === id; });
    if (!f) return VIEWS.faelle(v);
    var offen = 0;
    function zeichne() {
      var werte = Object.keys(f.werte);
      v.innerHTML = zurueck('faelle', 'Fallbeispiele') +
        '<div class="kopf"><div class="stapel"><span class="label">' + esc(f.kat) + '</span><h1>' + esc(f.titel) + '</h1></div><span class="chip">' + offen + '/' + f.schritte.length + ' aufgedeckt</span></div>' +
        '<section class="feld stapel"><span class="label">Lage</span><p>' + md(f.lage) + '</p>' +
          (werte.length ? '<div class="werte">' + werte.map(function (k) { return '<div class="wert"><span>' + esc(k.replace('SpO2', 'SpO₂')) + '</span><b>' + esc(f.werte[k]) + '</b></div>'; }).join('') + '</div>' : '') + '</section>' +
        f.schritte.map(function (s, i) {
          if (i > offen) return '';
          return '<section class="feld schritt"><span class="schritt-nr">Schritt ' + (i + 1) + '</span><p><strong>' + md(s.q) + '</strong></p>' +
            (i < offen ? '<div class="loesung">' + md(s.a) + '</div>' : '<button class="btn" id="aufdecken" style="align-self:flex-start">Lösung aufdecken</button>') + '</section>';
        }).join('') +
        (offen >= f.schritte.length ?
          '<section class="feld stapel"><span class="label">Verdachtsdiagnose</span><h2>' + esc(f.diagnose) + '</h2>' +
            (f.fehler.length ? '<div class="stapel" style="gap:6px"><span class="label">Typische Fehler</span><ul class="punkte">' + f.fehler.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul></div>' : '') +
            (f.uebergabe ? '<div class="feld-2 stapel"><span class="label">Muster-Übergabe (SINNHAFT)</span><p class="uebergabe">' + md(f.uebergabe) + '</p></div>' : '') +
            '<div class="reihe"><button class="btn" id="naechsterFall">Nächster Fall</button><button class="btn zweit" id="neuStart">Neu beginnen</button></div></section>' : '');
      var a = $('#aufdecken');
      if (a) a.onclick = function () { offen++; if (offen >= f.schritte.length) { S.faelle[f.id] = { done: Date.now() }; speichern(); } zeichne(); };
      if ($('#naechsterFall')) {
        var idx = RS.faelle.indexOf(f);
        $('#naechsterFall').onclick = function () { gehe('fall-' + RS.faelle[(idx + 1) % RS.faelle.length].id); };
        $('#neuStart').onclick = function () { offen = 0; zeichne(); };
      }
    }
    zeichne();
  };

  // ---------- Rechner ----------
  VIEWS.rechner = function (v) {
    function sel(id, opts) { return '<select id="' + id + '">' + opts.map(function (o) { return '<option value="' + o[0] + '">' + o[0] + ' – ' + esc(o[1]) + '</option>'; }).join('') + '</select>'; }
    v.innerHTML = '<div class="kopf"><div class="stapel"><span class="label">Schnell berechnet</span><h1>Rechner & Scores</h1></div></div>' +
      '<section class="raster-2">' +
        '<div class="feld stapel rechner"><h2>Glasgow Coma Scale</h2>' +
          '<label>Augen öffnen' + sel('gA', [[4, 'spontan'], [3, 'auf Aufforderung'], [2, 'auf Schmerzreiz'], [1, 'kein Öffnen']]) + '</label>' +
          '<label>Verbale Reaktion' + sel('gV', [[5, 'orientiert'], [4, 'desorientiert'], [3, 'inadäquate Worte'], [2, 'unverständliche Laute'], [1, 'keine']]) + '</label>' +
          '<label>Motorische Reaktion' + sel('gM', [[6, 'befolgt Aufforderungen'], [5, 'gezielte Abwehr'], [4, 'ungezielte Abwehr'], [3, 'Beugesynergismen'], [2, 'Strecksynergismen'], [1, 'keine']]) + '</label>' +
          '<div class="reihe"><span class="ergebnis" id="gcsErg"></span><span id="gcsTxt"></span></div></div>' +
        '<div class="feld stapel rechner"><h2>Schockindex</h2>' +
          '<div class="raster-2"><label>Herzfrequenz /min<input id="siHF" type="number" inputmode="numeric" value="130"></label><label>RR systolisch mmHg<input id="siRR" type="number" inputmode="numeric" value="90"></label></div>' +
          '<div class="reihe"><span class="ergebnis" id="siErg"></span><span id="siTxt"></span></div>' +
          '<p class="hinweis">Schockindex = HF ÷ RR syst. Über 1 = Schock; S3-Schockraumkriterium > 0,9.</p></div>' +
        '<div class="feld stapel rechner"><h2>qSOFA</h2>' +
          '<label class="check"><input type="checkbox" id="q1"> Atemfrequenz ≥ 22/min</label>' +
          '<label class="check"><input type="checkbox" id="q2"> Bewusstseinsveränderung (GCS &lt; 15)</label>' +
          '<label class="check"><input type="checkbox" id="q3"> RR systolisch ≤ 100 mmHg</label>' +
          '<div class="reihe"><span class="ergebnis" id="qErg"></span><span id="qTxt"></span></div></div>' +
        '<div class="feld stapel rechner"><h2>Kinder-Notfall</h2>' +
          '<label>Alter in Jahren (1–10)<input id="kAlter" type="number" inputmode="numeric" min="1" max="10" value="4"></label>' +
          '<div id="kErg" class="stapel" style="gap:6px"></div>' +
          '<p class="hinweis">Gewichtsschätzung (Alter + 4) × 2. Nur Orientierung – Dosierung legt der Notarzt fest.</p></div>' +
      '</section>';
    function gcs() {
      var s = +$('#gA').value + +$('#gV').value + +$('#gM').value;
      $('#gcsErg').textContent = s;
      $('#gcsTxt').innerHTML = s <= 8 ? '<span class="chip rot">schwer – Schutzreflexe gefährdet</span>' : s <= 12 ? '<span class="chip warn">mittelschwer (Schockraum ≤ 12)</span>' : '<span class="chip ok">leicht</span>';
    }
    function si() {
      var hf = +$('#siHF').value, rr = +$('#siRR').value;
      if (!hf || !rr) { $('#siErg').textContent = '–'; $('#siTxt').innerHTML = ''; return; }
      var w = hf / rr;
      $('#siErg').textContent = w.toFixed(2).replace('.', ',');
      $('#siTxt').innerHTML = w > 1 ? '<span class="chip rot">Schock</span>' : w > 0.9 ? '<span class="chip warn">Schockraumkriterium</span>' : '<span class="chip ok">unauffällig</span>';
    }
    function q() {
      var n = ['#q1', '#q2', '#q3'].filter(function (x) { return $(x).checked; }).length;
      $('#qErg').textContent = n + '/3';
      $('#qTxt').innerHTML = n >= 2 ? '<span class="chip rot">Sepsisverdacht</span>' : '<span class="chip">unter 2 Punkten</span>';
    }
    function kind() {
      var a = Math.min(10, Math.max(1, +$('#kAlter').value || 1)), kg = (a + 4) * 2;
      var z = [['Geschätztes Gewicht', kg + ' kg'], ['Adrenalin CPR (10 µg/kg)', (kg * 0.01).toFixed(2).replace('.', ',') + ' mg = ' + (kg * 0.1).toFixed(1).replace('.', ',') + ' ml (1 mg auf 10 ml)'],
        ['Defibrillation (4 J/kg)', kg * 4 + ' J'], ['Amiodaron (5 mg/kg)', kg * 5 + ' mg'], ['Volumenbolus (10 ml/kg)', kg * 10 + ' ml']];
      $('#kErg').innerHTML = z.map(function (r) { return '<div class="reihe" style="justify-content:space-between"><span class="muted">' + r[0] + '</span><b class="mono">' + r[1] + '</b></div>'; }).join('');
    }
    ['#gA', '#gV', '#gM'].forEach(function (x) { $(x).onchange = gcs; });
    $('#siHF').oninput = si; $('#siRR').oninput = si;
    ['#q1', '#q2', '#q3'].forEach(function (x) { $(x).onchange = q; });
    $('#kAlter').oninput = kind;
    gcs(); si(); q(); kind();
  };

  // ---------- Stundenplan ----------
  VIEWS.plan = function (v) {
    var heute = heuteISO();
    v.innerHTML = '<div class="kopf"><div class="stapel"><span class="label">' + esc(RS.lehrgang.ort) + '</span><h1>Stundenplan</h1><p class="muted">Tippe auf eine Einheit, um das passende Modul zu öffnen.</p></div>' +
      '<div class="reihe"><span class="chip">T Theorie</span><span class="chip warn">P Praxis</span><span class="chip rot">X Prüfung</span></div></div>' +
      '<div class="tag-spalten">' + RS.stundenplan.map(function (d) {
        return '<div class="feld tag-spalte' + (d.datum === heute ? ' heute' : '') + '"><div class="reihe" style="justify-content:space-between"><h3>' + esc(d.tag) + '</h3><span class="mono muted">' + d.datum.split('-').reverse().slice(0, 2).join('.') + '.</span></div>' +
          d.einheiten.map(function (e) {
            var z = zielFuer(e.modul);
            return '<button class="einheit"' + (z ? ' data-gehe="' + z + '" data-ziel="1"' : ' disabled') + '><span class="reihe" style="gap:8px"><span class="art ' + e.art + '">' + e.art + '</span><span class="mono muted">' + e.zeit + '</span></span><span>' + esc(e.titel) + '</span></button>';
          }).join('') + '</div>';
      }).join('') + '</div>';
  };

  // ---------- Mehr (Handy) ----------
  VIEWS.mehr = function (v) {
    v.innerHTML = '<h1>Mehr</h1><div class="mehr-menue">' +
      [['ekg', 'EKG-Rhythmen', 'ekg'], ['ekgtrainer', 'EKG-Trainer', 'ekg'], ['medis', 'Medikamente', 'medis'], ['faelle', 'Fallbeispiele', 'faelle'], ['rechner', 'Rechner & Scores', 'rechner'], ['plan', 'Stundenplan', 'plan'], ['pruefung', 'Prüfung simulieren', 'pruefung'], ['statistik', 'Fortschritt', 'stat']]
        .map(function (x) { return '<button class="btn zweit" data-gehe="' + x[0] + '">' + ico(x[2]) + x[1] + '</button>'; }).join('') + '</div>' +
      '<p class="hinweis">Lernhilfe – verbindlich sind eure SOPs, die RS-Plus-Leitlinie und der Notarzt.</p>';
  };

  // ---------- Fortschritt / Zurücksetzen ----------
  VIEWS.statistik = function (v) {
    var g = gesamt(), bestaetigen = false;
    function zeichne() {
      v.innerHTML = zurueck('start', 'Start') + '<h1>Fortschritt</h1>' +
        '<section class="kacheln">' + kachel(g.pct + ' %', 'Gesamt') + kachel(g.beantwortet, 'Fragen bearbeitet') + kachel(g.gelernt, 'Karten sicher') + kachel(S.ekg.r + '/' + (S.ekg.r + S.ekg.f), 'EKG richtig') + '</section>' +
        '<section class="feld stapel"><h2>Module</h2><div class="modul-liste">' + RS.module.map(function (m) { var s = modulStand(m.id); return '<button class="modul-zeile" data-gehe="modul-' + m.id + '"><span>' + esc(m.titel) + '</span>' + balken(s.pct, s.pct >= 80) + '<span class="pct">' + s.pct + '%</span></button>'; }).join('') + '</div></section>' +
        '<section class="feld stapel"><h2>Daten</h2><p class="muted">Dein Fortschritt wird nur in diesem Browser gespeichert.</p>' +
        (bestaetigen ? '<p>Wirklich alles löschen? Das lässt sich nicht rückgängig machen.</p><div class="reihe"><button class="btn" id="jaLoeschen">Ja, alles löschen</button><button class="btn zweit" id="abbrechen">Abbrechen</button></div>'
          : '<button class="btn zweit" id="loeschen" style="align-self:flex-start">Fortschritt zurücksetzen</button>') + '</section>';
      if ($('#loeschen')) $('#loeschen').onclick = function () { bestaetigen = true; zeichne(); };
      if ($('#abbrechen')) $('#abbrechen').onclick = function () { bestaetigen = false; zeichne(); };
      if ($('#jaLoeschen')) $('#jaLoeschen').onclick = function () { S = leer(); speichern(); toast('Fortschritt gelöscht'); g = gesamt(); bestaetigen = false; zeichne(); };
    }
    zeichne();
  };

  // ---------- Start ----------
  rahmen();
  render();
})();
