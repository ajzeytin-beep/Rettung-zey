// EKG-Rhythmen: Beschreibung + synthetische Streifen (Ableitung II, 25 mm/s, 10 mm/mV).
// Die Kurven werden berechnet – sie sind schematisch und ersetzen keine echten Monitorbilder.
window.RS = window.RS || {};

(function () {
  // Gauß-Glocke für P, Q, R, S, T
  function g(t, c, a, w) { var d = t - c; return a * Math.exp(-(d * d) / (2 * w * w)); }

  function rng(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      var x = Math.imul(seed ^ seed >>> 15, 1 | seed);
      x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x;
      return ((x ^ x >>> 14) >>> 0) / 4294967296;
    };
  }

  // Bausteine – geben Listen von Glocken [zentrum, amplitude, breite] zurück
  function pWelle(t0, a) { return [[t0 + 0.05, a == null ? 0.15 : a, 0.022]]; }
  function qrsSchmal(q, opt) {
    opt = opt || {};
    var amp = opt.amp || 1.1, tAmp = opt.tAmp == null ? 0.32 : opt.tAmp;
    var l = [[q + 0.015, -0.12 * amp, 0.008], [q + 0.04, amp, 0.011], [q + 0.065, -0.28 * amp, 0.011]];
    if (opt.st) { l.push([q + 0.16, opt.st, 0.06]); }
    l.push([q + (opt.tPos || 0.30), tAmp, opt.tW || 0.055]);
    return l;
  }
  function qrsBreit(q, opt) {
    opt = opt || {};
    var amp = opt.amp || 1.0;
    return [[q + 0.06, amp, 0.034], [q + 0.13, -0.42 * amp, 0.03], [q + 0.33, opt.tAmp == null ? -0.35 : opt.tAmp, 0.07]];
  }
  function spike(t) { return [[t, 1.6, 0.0016]]; }

  var DAUER = 6;

  // Jeder Generator liefert { glocken: [...], extra: function(t) } (extra = Grundlinie, Flimmern ...)
  var gen = {
    sinus: function () { return regel(75, 0.16); },
    sinusbrady: function () { return regel(42, 0.17); },
    sinustachy: function () { return regel(128, 0.13, { tAmp: 0.26, tPos: 0.25 }); },
    stemi: function () { return regel(82, 0.16, { st: 0.32, tAmp: 0.42, tPos: 0.27 }); },
    hyperkali: function () {
      var l = [], rr = 1.0;
      for (var q = 0.3; q < DAUER; q += rr) {
        l = l.concat(pWelle(q - 0.2, 0.05));
        l.push([q + 0.05, 0.85, 0.02], [q + 0.1, -0.3, 0.02], [q + 0.3, 0.9, 0.032]);
      }
      return { glocken: l };
    },
    vhf: function () {
      var r = rng(7), l = [], q = 0.25;
      while (q < DAUER) { l = l.concat(qrsSchmal(q, { tAmp: 0.22 })); q += 0.42 + r() * 0.55; }
      return { glocken: l, extra: function (t) {
        return 0.045 * Math.sin(2 * Math.PI * 5.7 * t + 1) + 0.035 * Math.sin(2 * Math.PI * 7.9 * t + 0.3) + 0.03 * Math.sin(2 * Math.PI * 9.6 * t + 2.2);
      } };
    },
    vorhofflattern: function () {
      var l = [], f = 0.2; // Flatterwellen 300/min, 4:1-Überleitung
      for (var i = 0; i * f < DAUER; i++) { if (i % 4 === 1) l = l.concat(qrsSchmal(i * f + 0.12, { tAmp: 0.18 })); }
      return { glocken: l, extra: function (t) { var ph = (t % f) / f; return ph < 0.75 ? 0.12 - 0.36 * (ph / 0.75) : -0.24 + 0.36 * ((ph - 0.75) / 0.25); } };
    },
    svt: function () {
      var l = [], rr = 60 / 185;
      for (var q = 0.1; q < DAUER; q += rr) l = l.concat(qrsSchmal(q, { tAmp: 0.2, tPos: 0.2, tW: 0.04 }));
      return { glocken: l };
    },
    avb1: function () { return regel(68, 0.32); },
    wenckebach: function () {
      var l = [], pp = 0.78, pr = [0.16, 0.25, 0.32, null], i = 0;
      for (var p = 0.1; p < DAUER; p += pp, i++) {
        l = l.concat(pWelle(p));
        var x = pr[i % 4];
        if (x) l = l.concat(qrsSchmal(p + x));
      }
      return { glocken: l };
    },
    mobitz2: function () {
      var l = [], pp = 0.72, i = 0;
      for (var p = 0.1; p < DAUER; p += pp, i++) {
        l = l.concat(pWelle(p));
        if (i % 3 !== 2) l = l.concat(qrsSchmal(p + 0.18));
      }
      return { glocken: l };
    },
    avb3: function () {
      var l = [], p, q;
      for (p = 0.15; p < DAUER; p += 0.68) l = l.concat(pWelle(p));
      for (q = 0.55; q < DAUER; q += 1.65) l = l.concat(qrsBreit(q, { amp: 0.95 }));
      return { glocken: l };
    },
    ves: function () {
      var l = [], q = 0.3, i = 0;
      while (q < DAUER) {
        if (i % 2 === 0) { l = l.concat(pWelle(q - 0.16)).concat(qrsSchmal(q)); q += 0.5; }
        else { l = l.concat(qrsBreit(q, { amp: 1.25, tAmp: -0.45 })); q += 1.1; }
        i++;
      }
      return { glocken: l };
    },
    vt: function () {
      var l = [], rr = 60 / 175;
      for (var q = 0.05; q < DAUER; q += rr) l.push([q + 0.08, 1.2, 0.045], [q + 0.2, -0.9, 0.05]);
      return { glocken: l };
    },
    vf: function () {
      return { glocken: [], extra: function (t) {
        var env = 0.55 + 0.25 * Math.sin(2 * Math.PI * 0.35 * t + 1) + 0.15 * Math.sin(2 * Math.PI * 0.9 * t);
        return env * (0.6 * Math.sin(2 * Math.PI * 4.6 * t) + 0.35 * Math.sin(2 * Math.PI * 6.3 * t + 1.7) + 0.2 * Math.sin(2 * Math.PI * 3.1 * t + 0.4));
      } };
    },
    torsade: function () {
      return { glocken: [], extra: function (t) {
        var env = 0.15 + 1.05 * Math.abs(Math.sin(Math.PI * t / 2.2));
        return env * Math.sin(2 * Math.PI * 4.2 * t);
      } };
    },
    asystolie: function () {
      var r = rng(3);
      return { glocken: [], extra: function (t) { return 0.03 * Math.sin(2 * Math.PI * 0.25 * t) + (r() - 0.5) * 0.012; } };
    },
    pea: function () { return regel(52, 0.18, { amp: 0.75, tAmp: 0.2 }); },
    schrittmacher: function () {
      var l = [], rr = 60 / 70;
      for (var q = 0.2; q < DAUER; q += rr) l = l.concat(spike(q)).concat(qrsBreit(q + 0.01, { amp: 1.05 }));
      return { glocken: l };
    }
  };

  function regel(hf, pr, opt) {
    var l = [], rr = 60 / hf;
    for (var q = 0.25 + pr; q < DAUER + 0.4; q += rr) l = l.concat(pWelle(q - pr)).concat(qrsSchmal(q, opt));
    return { glocken: l };
  }

  var zaehler = 0;
  RS.ekgSVG = function (rhythmusId, klein) {
    var spec = gen[rhythmusId](), pxS = 100, pxMV = 40, h = 180, base = 112;
    var pts = [], dt = 0.004;
    for (var t = 0; t <= DAUER + 1e-9; t += dt) {
      var y = spec.extra ? spec.extra(t) : 0;
      for (var i = 0; i < spec.glocken.length; i++) {
        var b = spec.glocken[i];
        if (Math.abs(t - b[0]) < b[2] * 5) y += g(t, b[0], b[1], b[2]);
      }
      pts.push((t * pxS).toFixed(1) + ',' + (base - y * pxMV).toFixed(1));
    }
    var id = 'eg' + (++zaehler), w = DAUER * pxS;
    return '<svg class="ekg-svg' + (klein ? ' klein' : '') + '" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none" role="img" aria-label="EKG-Streifen">' +
      '<defs><pattern id="' + id + 's" width="4" height="4" patternUnits="userSpaceOnUse"><path d="M4 0H0V4" class="ekg-gs"/></pattern>' +
      '<pattern id="' + id + 'l" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="20" height="20" fill="url(#' + id + 's)"/><path d="M20 0H0V20" class="ekg-gl"/></pattern></defs>' +
      '<rect width="' + w + '" height="' + h + '" class="ekg-bg"/><rect width="' + w + '" height="' + h + '" fill="url(#' + id + 'l)"/>' +
      '<polyline class="ekg-line" points="' + pts.join(' ') + '"/></svg>';
  };

  RS.rhythmen = [
    { id: 'sinus', name: 'Sinusrhythmus', gruppe: 'Normal', status: 'ok', schockbar: false,
      kriterien: ['Frequenz 60–100/min', 'Regelmäßig', 'Vor jedem QRS eine P-Welle, PQ 120–200 ms', 'QRS schmal (< 120 ms)'],
      massnahmen: ['Kein Handlungsbedarf durch den Rhythmus – immer den Patienten beurteilen.'] },
    { id: 'sinusbrady', name: 'Sinusbradykardie', gruppe: 'Bradykardie', status: 'warn', schockbar: false,
      kriterien: ['Frequenz < 60/min', 'Regelmäßig, P vor jedem QRS', 'QRS schmal'],
      massnahmen: ['Bei Sportlern/im Schlaf normal.', 'Medikamente prüfen (Betablocker, Digitalis).', 'Symptomatisch (Schwindel, Synkope, Hypotonie): flach lagern, NA, Atropin 0,5 mg (bis 3 mg) durch NA, ggf. Adrenalin/Schrittmacher.'] },
    { id: 'sinustachy', name: 'Sinustachykardie', gruppe: 'Tachykardie', status: 'warn', schockbar: false,
      kriterien: ['Frequenz > 100/min (meist < 150)', 'Regelmäßig, P vor jedem QRS', 'QRS schmal'],
      massnahmen: ['Fast immer eine Reaktion: Schmerz, Angst, Fieber, Volumenmangel, Hypoxie, Lungenembolie.', 'Ursache behandeln – nicht die Frequenz.'] },
    { id: 'vhf', name: 'Vorhofflimmern', gruppe: 'Tachykardie / Arrhythmie', status: 'warn', schockbar: false,
      kriterien: ['Absolute Arrhythmie – RR-Abstände völlig unregelmäßig', 'Keine P-Wellen, flimmernde Grundlinie', 'QRS meist schmal'],
      massnahmen: ['Häufig bekannt (Antikoagulation erfragen!).', 'Neu oder schnell (Tachyarrhythmie) oder instabil → NA.', 'Thrombembolie-Risiko (Schlaganfall).'] },
    { id: 'vorhofflattern', name: 'Vorhofflattern', gruppe: 'Tachykardie', status: 'warn', schockbar: false,
      kriterien: ['Sägezahnartige Flatterwellen (ca. 250–350/min)', 'Meist regelmäßige Überleitung (2:1, 3:1, 4:1)', 'QRS schmal'],
      massnahmen: ['Bei 2:1-Überleitung Kammerfrequenz ca. 150/min.', 'Monitoring, 12-Kanal, bei Instabilität NA.'] },
    { id: 'svt', name: 'Supraventrikuläre Tachykardie (AVNRT)', gruppe: 'Tachykardie', status: 'warn', schockbar: false,
      kriterien: ['Frequenz 150–220/min', 'Regelmäßig', 'QRS schmal', 'P-Wellen meist nicht sichtbar'],
      massnahmen: ['Oft junge Patienten, plötzlicher Beginn („Herzrasen“).', 'Stabil: Vagusmanöver (modifiziertes Valsalva) nach SOP.', 'NA: Adenosin 6 → 12 → 18 mg; instabil: Kardioversion.'] },
    { id: 'avb1', name: 'AV-Block I°', gruppe: 'Überleitungsstörung', status: 'ok', schockbar: false,
      kriterien: ['PQ-Zeit > 200 ms, aber konstant', 'Jede P-Welle wird übergeleitet'],
      massnahmen: ['Meist harmlos, keine Therapie. Dokumentieren.'] },
    { id: 'wenckebach', name: 'AV-Block II° Typ Wenckebach (Mobitz I)', gruppe: 'Überleitungsstörung', status: 'warn', schockbar: false,
      kriterien: ['PQ-Zeit wird von Schlag zu Schlag länger', 'Dann fällt ein QRS aus (P ohne QRS)', 'Danach beginnt der Zyklus von vorne'],
      massnahmen: ['Oft stabil. Monitoring, bei Symptomen NA.'] },
    { id: 'mobitz2', name: 'AV-Block II° Typ Mobitz II', gruppe: 'Überleitungsstörung', status: 'kritisch', schockbar: false,
      kriterien: ['PQ-Zeit konstant', 'Plötzlich nicht übergeleitete P-Wellen (z. B. 3:2 oder 2:1)'],
      massnahmen: ['Gefährlich: kann jederzeit in AV-Block III° übergehen.', 'NA, Pads kleben (Schrittmacherbereitschaft), Monitoring.'] },
    { id: 'avb3', name: 'AV-Block III° (totaler AV-Block)', gruppe: 'Überleitungsstörung', status: 'kritisch', schockbar: false,
      kriterien: ['P-Wellen und QRS-Komplexe völlig unabhängig voneinander', 'P-Frequenz normal, Kammer langsam (20–40/min)', 'Ersatzrhythmus oft breit'],
      massnahmen: ['Lebensbedrohlich (Adams-Stokes-Anfälle).', 'Flach lagern, NA, Pads kleben – externer Schrittmacher; Atropin oft wirkungslos, Adrenalin (NA).'] },
    { id: 'ves', name: 'Ventrikuläre Extrasystolen (Bigeminus)', gruppe: 'Extrasystolen', status: 'warn', schockbar: false,
      kriterien: ['Vorzeitige, breite, deformierte QRS-Komplexe ohne P', 'Danach kompensatorische Pause', 'Bigeminus: jeder zweite Schlag eine VES'],
      massnahmen: ['Einzelne VES oft harmlos.', 'Gehäuft, Salven oder bei ACS → Warnsignal für VT/VF, Monitoring, NA.', 'An Elektrolytstörung (Kalium) denken.'] },
    { id: 'vt', name: 'Ventrikuläre Tachykardie (VT)', gruppe: 'Tachykardie', status: 'kritisch', schockbar: true,
      kriterien: ['Breite QRS-Komplexe (≥ 120 ms)', 'Frequenz meist 150–250/min, regelmäßig', 'Keine zugeordneten P-Wellen'],
      massnahmen: ['Sofort Puls prüfen!', 'Pulslos → Reanimation, defibrillieren.', 'Mit Puls → NA, Pads kleben; instabil: Kardioversion, stabil: Amiodaron (NA).'] },
    { id: 'vf', name: 'Kammerflimmern (VF)', gruppe: 'Reanimation', status: 'kritisch', schockbar: true,
      kriterien: ['Chaotische, unregelmäßige Wellen', 'Keine erkennbaren QRS-Komplexe', 'Kein Puls'],
      massnahmen: ['Reanimation, sofort defibrillieren.', 'Nach Schock sofort weiterdrücken, Analyse alle 2 min.', 'Nach 3. Schock: Adrenalin 1 mg + Amiodaron 300 mg; nach 5. Schock Amiodaron 150 mg.'] },
    { id: 'torsade', name: 'Torsade de pointes', gruppe: 'Tachykardie', status: 'kritisch', schockbar: true,
      kriterien: ['Polymorphe VT', 'QRS-Amplitude schwillt spindelförmig an und ab („Spitzenumkehr“)', 'Häufig bei QT-Verlängerung'],
      massnahmen: ['Pulslos → wie Kammerflimmern defibrillieren.', 'NA: Magnesium 2 g i.v.', 'QT-verlängernde Medikamente erfragen.'] },
    { id: 'asystolie', name: 'Asystolie', gruppe: 'Reanimation', status: 'kritisch', schockbar: false,
      kriterien: ['Nulllinie, keine elektrische Aktivität', 'Evtl. noch einzelne P-Wellen („P-Wellen-Asystolie“)'],
      massnahmen: ['Elektroden, Kabel, Verstärkung prüfen (feines VF ausschließen).', 'Reanimation, Adrenalin 1 mg sofort, dann alle 3–5 min.', 'Nicht schockbar. 4 H / HITS bedenken.'] },
    { id: 'pea', name: 'Pulslose elektrische Aktivität (PEA)', gruppe: 'Reanimation', status: 'kritisch', schockbar: false,
      kriterien: ['Geordnete elektrische Aktivität auf dem Monitor', 'ABER: kein tastbarer Puls', 'Nur durch Pulskontrolle erkennbar – das Bild allein sagt es nicht!'],
      massnahmen: ['Sofort weiterdrücken, Adrenalin 1 mg so früh wie möglich.', 'Ursachen suchen: 4 H und HITS (z. B. Spannungspneu, Hypovolämie, Tamponade).'] },
    { id: 'stemi', name: 'ST-Hebung (STEMI, Ableitung II)', gruppe: 'Ischämie', status: 'kritisch', schockbar: false,
      kriterien: ['ST-Strecke angehoben, geht bogenförmig in T über', 'STEMI: in ≥ 2 benachbarten Ableitungen', 'In II, III, aVF → Hinterwand'],
      massnahmen: ['12-Kanal innerhalb 10 min, NA, HKL voranmelden.', 'Bei Hinterwand: Rechtsherzbeteiligung → kein Nitro, Bradykardie möglich.', 'Defi griffbereit (Kammerflimmern-Gefahr).'] },
    { id: 'hyperkali', name: 'Hyperkaliämie-Zeichen', gruppe: 'Elektrolyte', status: 'kritisch', schockbar: false,
      kriterien: ['Hohe, spitze, schmalbasige T-Wellen', 'Flache oder fehlende P-Wellen', 'QRS verbreitert, später Bradykardie bis Kreislaufstillstand'],
      massnahmen: ['Typisch bei Dialysepatienten nach ausgefallener Dialyse.', 'NA, Monitoring, Pads kleben, Dialysezentrum/Klinik mit Dialyse.'] },
    { id: 'schrittmacher', name: 'Schrittmacher-Rhythmus', gruppe: 'Schrittmacher', status: 'ok', schockbar: false,
      kriterien: ['Schmale, senkrechte Schrittmacher-Spikes', 'Nach Spike breiter QRS (ventrikuläre Stimulation)', 'Meist feste Frequenz (z. B. 60–70/min)'],
      massnahmen: ['Spike ohne nachfolgenden QRS = Exit-Block / Fehlfunktion → NA.', 'Defi-Pads mindestens 8 cm vom Aggregat entfernt kleben.'] }
  ];
})();
