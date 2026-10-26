// Lernmodule nach Stundenplan. Inhalte zusammengefasst aus Lernzettel, Fallbeispielen,
// Medikamentenkarten, Schemata/Scores, S3-Leitlinie Polytrauma (2022/23) und ERC-Leitlinien.
// Abschnitte: { h: Überschrift, p: [Stichpunkte] } oder { h, tabelle: [[Kopf...], [Zeile...]] }
// **fett** wird hervorgehoben. karten: [Vorderseite, Rückseite]
window.RS = window.RS || {};

RS.module = [
  {
    id: 'nktw',
    titel: 'N-KTW, Doku & Übergabe',
    kurz: 'Rolle als Einsatzführer auf dem N-KTW, Notarztindikationen, Dokumentation, SINNHAFT-Übergabe.',
    abschnitte: [
      { h: 'Rolle auf dem N-KTW', p: [
        'Als RS Plus bist du **Einsatzführer** auf dem Notfall-KTW: Du triffst die ersten Entscheidungen, forderst nach und übergibst strukturiert.',
        'Erst **Eigenschutz und Lage** (SSSS: Scene, Safety, Situation, Support), dann Patient nach **xABCDE**.',
        'Kritischer Patient = **früh nachfordern** (RTW, Notarzt). Lieber einmal zu früh als zu spät.',
        'Maßnahmen und Medikamente nur im Rahmen deiner **Kompetenz und der RS-Plus-Leitlinie** (Aurich, Leer, Wittmund) oder nach Freigabe durch den Notarzt.'
      ]},
      { h: 'Einsatzspektrum des N-KTW in Niedersachsen', p: [
        'Der Notfall-KTW ist für Patienten mit **akuter Erkrankung oder Verletzung ohne Bedrohung der Vitalfunktionen** gedacht, die zeitnah versorgt und meist in eine Klinik gebracht werden müssen. Er fährt in der Regel **ohne Sonderrechte**.',
        'Ziel: RTW und Notarzt für zeitkritische Notfälle freihalten.',
        'Besetzung laut NRettDG-Änderung: mindestens ein Rettungssanitäter mit Einsatzerfahrung (Richtwert ≥ 100 Notfalleinsätze) und Zusatzqualifikation **RS Plus** als Einsatzführer. Details regelt der Träger.',
        'Typische Einsätze: Stürze älterer Menschen (Hüfte, Handgelenk, Kopfplatzwunde ohne Bewusstseinsstörung), geschlossene Extremitätenverletzungen, Schnittwunden, Einweisungen vom Hausarzt, Infekte, Harnverhalt/Katheterprobleme, Nasenbluten, Exsikkose, Bauchschmerz ohne Schock, Synkope mit rascher Erholung, leichte Intoxikationen, Transportverweigerungen.',
        'In Ostfriesland disponiert die **Kooperative Regionalleitstelle Ostfriesland (KRLO)** in Wittmund für die Landkreise Aurich, Leer, Wittmund und die Stadt Emden. Regionale Besonderheiten: Urlauber und Radtouristen, Fähr- und Inselverkehr, Landwirtschaft, Häfen, Volksfeste (z. B. Gallimarkt), Kohlfahrten, viele ältere Menschen in ländlichen Gebieten mit langen Anfahrten.'
      ]},
      { h: 'Upgrade: wann der N-KTW nicht reicht', p: [
        'Das Einsatzstichwort ist eine **Vermutung der Leitstelle** – deine Untersuchung entscheidet.',
        'Sofort RTW (und ggf. NA) nachfordern bei: Problem in **A, B, C oder D**, Schockzeichen, neu aufgetretener Bewusstseinsstörung, ST-Hebung, Instabilitätszeichen bei Rhythmusstörungen, Sepsisverdacht, NEWS2 ≥ 5 (bzw. 3 in einem Einzelwert), gefährlichem Mechanismus (Sturz > 3 m, Tritt in den Bauch, Hochrasanz).',
        'Auch nachfordern, wenn **Maßnahmen außerhalb deiner Kompetenz** nötig sind (z. B. stärkere Analgesie, i.v.-Medikamente) – je nach Region über Notarzt oder Telenotarzt.',
        'Patienten bei Zweifel **nicht laufen lassen** und am Monitor behalten, bis das höherwertige Rettungsmittel da ist.'
      ]},
      { h: 'Transportziele und Alternativen', p: [
        'Klinik passend zur Verdachtsdiagnose: Unfallchirurgie, Urologie, HNO, Handchirurgie, Kinderklinik, Stroke Unit, HKL.',
        'Kein Transport nötig? Hausarzt, kassenärztlicher Bereitschaftsdienst **116 117** – aber nur nach gründlicher Untersuchung, Aufklärung und Dokumentation (ggf. Rücksprache NA).',
        'Unterlagen mitnehmen: Medikamentenplan, Arztbriefe, Überleitungsbogen, Patientenverfügung, Hilfsmittel (Brille, Hörgerät, Gebiss).'
      ]},
      { h: 'Notarztindikationen (Auswahl)', p: [
        'Bewusstlosigkeit oder relevante **Bewusstseinsstörung** (ab AVPU **P**)',
        '**Schwere Atemnot**, Atemstillstand, SpO₂ deutlich erniedrigt',
        '**Hypotonie**/Schock, Tachykardie oder **symptomatische Bradykardie**',
        '**ST-Hebung** im 12-Kanal-EKG (≥ 2 benachbarte Ableitungen), ACS mit Instabilität',
        '**Reanimation**, Krampfanfall (v. a. anhaltend), schwere Verletzungen/**Polytrauma**',
        'Vergiftungen, **starke Schmerzen**, kritischer Gesamteindruck',
        'Schlaganfall: ein positives BE-FAST reicht für **schnellen Transport in die Stroke Unit**; Notarzt v. a. bei Bewusstseins- oder Atemstörung.'
      ]},
      { h: 'Dokumentation', p: [
        'Das Einsatzprotokoll ist **Urkunde**: zeitnah, vollständig, wahr, lesbar.',
        'Uhrzeiten von Maßnahmen notieren (z. B. **Tourniquet-Zeit**, Medikamentengabe, Defibrillationen).',
        'Vitalwerte mit Verlauf: Ausgangswert und Kontrolle nach Maßnahme.',
        'Transportverweigerung: Aufklärung inkl. möglichem Tod, Einwilligungsfähigkeit, **Unterschrift + Zeuge**, Notarzt nachfordern.',
        'Verdacht Kindesmisshandlung: **neutral und wörtlich** dokumentieren, keine Wertungen.'
      ]},
      { h: 'Übergabe nach SINNHAFT', tabelle: [
        ['Buchstabe', 'Inhalt'],
        ['S – Sicherstellen', '„Alle mal herhören“, Hands off, nur einer spricht'],
        ['I – Identifikation', 'Name, Alter, Geschlecht'],
        ['N – Notfallereignis', 'Was, wann, Leitsymptom'],
        ['N – Notfallpriorität', 'ABCDE mit allen Werten (Atemfrequenz nicht vergessen!)'],
        ['H – Handlung', 'Maßnahmen und Wirkung (Zugang mit Lage und Größe, Medikamente)'],
        ['A – Anamnese', 'Das Wichtigste aus SAMPLER'],
        ['F – Fazit', 'Verdachtsdiagnose, Besonderheiten, Zielklinik'],
        ['T – Teamfrage', '„Gibt es noch Fragen?“']
      ]},
      { h: 'Übergabe-Tipps', p: [
        'Zahlen genau nennen, **keine Zahlendreher** (Puls, RR, Zugangsseite).',
        'EKG-Befund und **Atemfrequenz** gehören immer dazu.',
        'Nichts doppelt sagen; bei Versprecher kurz korrigieren und weitermachen.',
        'Am Ende immer die **Teamfrage**.'
      ]}
    ],
    karten: [
      ['Für welche Patienten ist der N-KTW gedacht?', 'Akut erkrankte oder verletzte Patienten ohne Bedrohung der Vitalfunktionen – meist ohne Sonderrechte.'],
      ['Wann forderst du als N-KTW-Einsatzführer nach?', 'Bei A-, B-, C- oder D-Problem, Schock, neuer Bewusstseinsstörung, ST-Hebung, Sepsisverdacht, NEWS2 ≥ 5, gefährlichem Mechanismus oder Maßnahmen außerhalb deiner Kompetenz.'],
      ['Welche Leitstelle disponiert in Ostfriesland?', 'Die Kooperative Regionalleitstelle Ostfriesland (KRLO) in Wittmund – für Aurich, Leer, Wittmund und Emden.'],
      ['Telefonnummer des ärztlichen Bereitschaftsdienstes?', '116 117.'],
      ['Wofür steht SINNHAFT?', 'Sicherstellen – Identifikation – Notfallereignis – Notfallpriorität (ABCDE) – Handlung – Anamnese – Fazit – Teamfrage'],
      ['Ab welcher AVPU-Stufe ist der Patient kritisch?', 'Ab **P** (reagiert nur auf Schmerz): Atemweg sichern, Notarzt nachfordern.'],
      ['Was gehört bei einer Transportverweigerung in die Doku?', 'Einwilligungsfähigkeit, Aufklärung inkl. möglichem Tod, Notarzt nachgefordert, Unterschrift des Patienten + Zeuge.'],
      ['SSSS-Schema bei Eintreffen?', 'Scene (Einsatzstelle, Anzahl Patienten) – Safety (Gefahren) – Situation (Krankheitsbild/Verletzungsmuster) – Support (Nachforderung NA, FW, Polizei).'],
      ['Welche typischen Fehler passieren bei der Übergabe?', 'Atemfrequenz und EKG-Befund vergessen, Zahlendreher, Teamfrage vergessen.']
    ]
  },

  {
    id: 'schemata',
    titel: 'Schemata & Anamnese',
    kurz: 'xABCDE, AVPU, GCS, SAMPLER(S), OPQRST, BE-FAST, NACA, NEWS2 – das Gerüst jeder Versorgung.',
    abschnitte: [
      { h: 'xABCDE', p: [
        '**x / c – critical bleeding**: lebensbedrohliche Blutung sofort stoppen (Kompression, Tourniquet, Wundpacking) – noch vor A.',
        '**A – Airway**: frei? Schnarchen = Zunge, Gurgeln = Flüssigkeit, Stridor = Enge. Esmarch (bei Trauma ohne Überstrecken), Absaugen, Guedel/Wendl.',
        '**B – Breathing**: AF, Tiefe, SpO₂ (Ziel 94–98 %, COPD 88–92 %), Thoraxbewegung seitengleich, Auskultation, Atemhilfsmuskulatur, Zyanose.',
        '**C – Circulation**: Puls zentral/peripher, RR, EKG, Rekap-Zeit (< 2 s), Haut. Schockzeichen: Tachykardie, blass-kalt-schweißig, Unruhe, später Hypotonie. Betablocker maskieren die Tachykardie!',
        '**D – Disability**: AVPU/GCS, Pupillen, BE-FAST, **Blutzucker**.',
        '**E – Exposure/Environment**: entkleiden, Bodycheck, Temperatur, sofort Wärmeerhalt, Umfeld (Medikamente, Mechanismus, Kälte).',
        'Erstuntersuchung in ca. **60–90 Sekunden**; bei Zustandsänderung von vorne.'
      ]},
      { h: 'AVPU', tabelle: [
        ['Stufe', 'Bedeutung'],
        ['A – Alert', 'Wach (Verwirrtheit extra notieren, z. B. „A, desorientiert“)'],
        ['V – Voice', 'Reagiert erst auf Ansprache'],
        ['P – Pain', 'Reagiert nur auf Schmerzreiz (z. B. Trapeziusgriff)'],
        ['U – Unresponsive', 'Keine Reaktion → Atmung max. 10 s prüfen']
      ]},
      { h: 'Glasgow Coma Scale', tabelle: [
        ['Kategorie', 'Punkte'],
        ['Augen öffnen (max. 4)', '4 spontan · 3 auf Aufforderung · 2 auf Schmerz · 1 kein'],
        ['Verbal (max. 5)', '5 orientiert · 4 desorientiert · 3 inadäquate Worte · 2 unverständliche Laute · 1 keine'],
        ['Motorik (max. 6)', '6 befolgt · 5 gezielte Abwehr · 4 ungezielte Abwehr · 3 Beugesynergismen · 2 Strecksynergismen · 1 keine']
      ]},
      { h: 'GCS-Auswertung', p: [
        'Minimum **3**, Maximum **15**.',
        '13–15 leicht · 9–12 mittelschwer · **≤ 8 schwer** („GCS 8 – der Tubus lacht“: Schutzreflexe gefährdet).',
        'Merkhilfe: 4 Augen (deine + Patient), V wie römisch 5, Motor mit 6 Zylindern.'
      ]},
      { h: 'SAMPLER(S)', tabelle: [
        ['Buchstabe', 'Frage'],
        ['S – Symptome', 'Leitsymptom'],
        ['A – Allergien', 'Auch Medikamentenunverträglichkeiten'],
        ['M – Medikamente', 'Blutverdünner, Betablocker, Insulin, Potenzmittel'],
        ['P – Patientengeschichte', 'Vorerkrankungen (Herz, Asthma, Diabetes …)'],
        ['L – Letzte …', 'Mahlzeit, Einnahme, Stuhlgang, Wasserlassen, Regelblutung'],
        ['E – Ereignis', 'Was ist passiert, was wurde gerade gemacht?'],
        ['R – Risikofaktoren', 'Rauchen, Alkohol, Drogen, Übergewicht, Familie'],
        ['S – Schwangerschaft', 'Bei SAMPLERS']
      ]},
      { h: 'OPQRST (Schmerz)', tabelle: [
        ['Buchstabe', 'Frage'],
        ['O – Onset', 'Wann und wie begonnen? Plötzlich/schleichend, Ruhe/Belastung'],
        ['P – Provocation/Palliation', 'Was verschlimmert, was lindert?'],
        ['Q – Quality', 'Drückend, stechend, brennend, reißend?'],
        ['R – Region/Radiation', 'Wo? Ausstrahlung (Arm, Kiefer, Rücken)?'],
        ['S – Severity', 'Stärke 0–10 (NRS)'],
        ['T – Time', 'Seit wann, dauerhaft oder wellenförmig?']
      ]},
      { h: 'BE-FAST & weitere', p: [
        '**B**alance · **E**yes · **F**ace · **A**rms · **S**peech · **T**ime (Symptombeginn / zuletzt gesund gesehen).',
        'Immer **Blutzucker** – Hypoglykämie imitiert Schlaganfall.',
        '**NACA**-Score 0–VII: IV = Vitalgefährdung möglich (NA nötig), V = akute Lebensgefahr, VI = Reanimation, VII = tot.',
        '**4S-Regel** (psychische Erste Hilfe): Sag, dass du da bist – Sprich und hör zu – Suche Körperkontakt – Schirm ab.'
      ]},
      { h: 'NEWS2 – Frühwarnscore', tabelle: [
        ['Parameter', '3', '2', '1', '0', '1', '2', '3'],
        ['Atemfrequenz', '≤ 8', '', '9–11', '12–20', '', '21–24', '≥ 25'],
        ['SpO₂ (Skala 1)', '≤ 91', '92–93', '94–95', '≥ 96', '', '', ''],
        ['Sauerstoff', '', 'ja', '', 'Raumluft', '', '', ''],
        ['RR systolisch', '≤ 90', '91–100', '101–110', '111–219', '', '', '≥ 220'],
        ['Puls', '≤ 40', '', '41–50', '51–90', '91–110', '111–130', '≥ 131'],
        ['Bewusstsein', '', '', '', 'wach (A)', '', '', 'neu verwirrt, V, P, U'],
        ['Temperatur', '≤ 35,0', '', '35,1–36,0', '36,1–38,0', '38,1–39,0', '≥ 39,1', '']
      ]},
      { h: 'NEWS2 – Auswertung', p: [
        '**0–4**: niedriges Risiko · **3 Punkte in einem einzelnen Wert**: dringend ärztlich prüfen.',
        '**5–6**: mittleres Risiko → dringende Abklärung. **Ab 7**: hohes Risiko → Notfall, Notarzt.',
        'SpO₂-**Skala 2** nur bei bekannter Hyperkapnie (z. B. COPD) mit Ziel 88–92 %.',
        'Gut für **Verlaufskontrollen** und Übergaben: steigender Score = Patient verschlechtert sich.'
      ]}
    ],
    karten: [
      ['Was bedeutet das kleine x/c im xABCDE?', 'Critical bleeding / Exsanguination: lebensbedrohliche Blutungen werden sofort gestoppt – noch vor dem Atemweg.'],
      ['Ziel-SpO₂ normal und bei COPD?', 'Normal 94–98 %, COPD 88–92 %.'],
      ['Normale Rekapillarisierungszeit?', 'Unter 2 Sekunden (am besten zentral, z. B. Sternum).'],
      ['GCS – Minimum, Maximum, Intubationsgrenze?', 'Min. 3, max. 15, ≤ 8 = schwere Bewusstseinsstörung, Schutzreflexe gefährdet.'],
      ['GCS Motorik: was gibt 5 Punkte?', 'Gezielte Abwehr auf Schmerzreiz (6 = befolgt Aufforderungen).'],
      ['Wofür steht SAMPLER?', 'Symptome, Allergien, Medikamente, Patientengeschichte, Letzte Mahlzeit/Einnahme, Ereignis, Risikofaktoren (+ S = Schwangerschaft).'],
      ['Wofür steht OPQRST?', 'Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Time.'],
      ['Warnzeichen in der Schmerzanamnese für Aortendissektion?', 'Plötzlicher, reißender Schmerz mit Ausstrahlung in den Rücken / zwischen die Schulterblätter.'],
      ['Wofür steht BE-FAST?', 'Balance, Eyes, Face, Arms, Speech, Time.'],
      ['Was gehört in D (Disability)?', 'AVPU/GCS, Pupillen, BE-FAST, Blutzucker.'],
      ['Tödliche Trias beim Trauma?', 'Hypothermie, Azidose (Übersäuerung), Koagulopathie (Gerinnungsstörung).'],
      ['NEWS2 – welche 7 Parameter?', 'Atemfrequenz, SpO₂, Sauerstoffgabe, RR systolisch, Puls, Bewusstsein (ACVPU), Temperatur.'],
      ['NEWS2 – Auswertung?', '0–4 niedrig (3 in einem Wert = dringend prüfen), 5–6 mittel, ab 7 hoch/Notfall.'],
      ['NACA V bedeutet?', 'Akute Lebensgefahr – Transport unter Reanimationsbereitschaft.']
    ]
  },

  {
    id: 'intern',
    titel: 'Internistische Notfälle',
    kurz: 'ACS, Aortendissektion, Lungenödem, Lungenembolie, Asthma/COPD, Anaphylaxie, Hypoglykämie, Rhythmusstörungen.',
    abschnitte: [
      { h: 'Akutes Koronarsyndrom (ACS)', p: [
        'Leitsymptom: Brustschmerz/-druck > 20 min, Ausstrahlung Arm/Kiefer/Rücken/Oberbauch, kaltschweißig, Übelkeit, Angst. **Atypisch** bei Frauen, Diabetikern, Älteren.',
        '**12-Kanal-EKG innerhalb von 10 Minuten**, Defi griffbereit, Patient **nicht laufen** lassen, Oberkörper hoch.',
        'Sauerstoff **nur bei SpO₂ < 90 %**.',
        'Medikamente (Leitlinie/NA): **ASS 250 mg i.v.** (alternativ 500 mg p.o.), **Heparin 5.000 IE i.v.**, Nitro bei RR > 100 syst. und ohne Kontraindikation, Morphin bei starkem Schmerz.',
        '**Kein Nitro** bei Hinterwand-/Rechtsherzinfarkt, RR < 100 syst., Potenzmitteln (24–72 h).',
        'STEMI: ST-Hebung in ≥ 2 benachbarten Ableitungen → **Klinik mit Herzkatheterlabor (HKL)**, voranmelden.',
        'Hinterwand: **II, III, aVF** – oft mit Bradykardie (rechte Kranzarterie versorgt AV-Knoten).'
      ]},
      { h: 'Aortendissektion', p: [
        'Plötzlicher **reißender** Schmerz, wandert in den Rücken; oft Hypertoniker.',
        'RR an **beiden Armen**: Differenz **≥ 20 mmHg** verdächtig. Pulse beidseits, auch Leiste/Füße.',
        'Neurologie prüfen (BE-FAST, Beine) – Abgänge können betroffen sein.',
        '**Kein ASS, kein Heparin!** Patient nicht bewegen, beruhigen. Ziel: Klinik mit Herz-/Gefäßchirurgie.'
      ]},
      { h: 'Kardiales Lungenödem vs. Lungenembolie', tabelle: [
        ['', 'Lungenödem (dekomp. Herzinsuffizienz)', 'Lungenembolie'],
        ['Typisch', 'Nachts, kann nicht liegen, Brodeln, schaumiger Auswurf, Beinödeme, RR hoch', 'Plötzliche Atemnot, atemabhängiger Thoraxschmerz, Tachykardie, TVT-Zeichen'],
        ['Risiko', 'Herzinsuffizienz, Wassertabletten', 'Langstreckenflug, Pille, Rauchen, OP, Immobilisation'],
        ['Lagerung', 'Sitzend, Beine tief', 'Oberkörper hoch, nicht laufen lassen'],
        ['O₂ / CPAP', 'O₂ hochdosiert, **CPAP ist Therapie**', 'O₂ hochdosiert, **kein CPAP** (rechtes Herz!)'],
        ['NA-Medikamente', 'Nitro (bei hohem RR), Furosemid', 'Heparin; bei Instabilität Lyse'],
        ['Ziel', 'Kardiologie/Intensiv (bei ACS HKL)', 'Klinik mit CT + Intensiv']
      ]},
      { h: 'Asthma & COPD', p: [
        'Zeichen: Dyspnoe, Giemen/Brummen, verlängertes Exspirium, Sprechdyspnoe, Atemhilfsmuskulatur, Tachykardie. **„Silent chest“** = lebensbedrohlich.',
        'Lagerung sitzend (Kutschersitz), **Lippenbremse**, beruhigen.',
        'Sauerstoff: Asthma Ziel 94–98 %, **COPD 88–92 %** (nicht ganz weglassen, aber titrieren).',
        'Medikamente: **Salbutamol 2,5–5 mg vernebelt** (+ **Ipratropium 0,25–0,5 mg**), Prednisolon 50–100 mg i.v.; schwerer Anfall: Reproterol, Magnesium (NA).',
        'Eselsbrücke: Salbutamol = **Gaspedal** (β2), Ipratropium = **Bremse lösen** (Parasympathikus blockieren).'
      ]},
      { h: 'Anaphylaxie', p: [
        'Haut (Quaddeln, Flush), **Atemweg** (Heiserkeit, Stridor, Schwellung), Atmung (Bronchospasmus), Kreislauf (Schock), Magen-Darm.',
        '**Adrenalin i.m. sofort** (Oberschenkel außen): Erwachsene **0,5 mg** (Pen 0,3 mg), Kinder 6–12 J. 0,3 mg, < 6 J. 0,15 mg. Wiederholung nach 5–10 min.',
        'Allergenzufuhr stoppen, O₂ hochdosiert, Notarzt.',
        'Lagerung: Atemnot = sitzend, Schock = flach mit Beinen hoch, nie plötzlich aufstehen lassen.',
        'Antihistaminika (Dimetinden/Clemastin) und Prednisolon **ersetzen kein Adrenalin**.',
        '**Immer Klinik**: biphasische Reaktion möglich, Adrenalin wirkt nur kurz.'
      ]},
      { h: 'Hypoglykämie & Hyperglykämie', p: [
        'Hypoglykämie: **< 60 mg/dl** (bzw. Symptome): Schwitzen, Zittern, Unruhe, Heißhunger, Verwirrtheit, Krampf, Bewusstlosigkeit, neurologische Ausfälle.',
        'Wach und schluckfähig → Glukose oral. **Bewusstseinsgestört → nichts per os** (Aspiration).',
        '**Glukose 40 %** i.v. (z. B. 8–10 g, titriert) nur über **sicheren Zugang mit laufender Infusion** (stark venenreizend), danach BZ-Kontrolle. Alternative: Glucagon (NA/SOP).',
        'Bei Alkoholikern/Mangelernährung: Thiamin vor Glukose (NA).',
        'Hyperglykämie/Ketoazidose: Polyurie, Durst, Exsikkose, **Kussmaul-Atmung**, Azetongeruch, Bewusstseinsstörung → Volumen (NA), Klinik.'
      ]},
      { h: 'Rhythmusstörungen mit Instabilitätszeichen', p: [
        'Gefährlich, wenn **Schock**, **Synkope**, **Myokardischämie** (Brustschmerz) oder **Herzinsuffizienz** (Lungenödem) vorliegen → Notarzt.',
        'Symptomatische Bradykardie: Atropin 0,5 mg (bis 3 mg), Adrenalin, externer Schrittmacher (NA).',
        'Synkope mit Bradykardie und Hypotonie: **flach lagern**, nicht hinsetzen. Medikamente prüfen (Betablocker doppelt genommen?).'
      ]},
      { h: 'Weitere', p: [
        '**Hypertensiver Notfall**: RR stark erhöht + Organsymptome (Brustschmerz, Lungenödem, Neurologie). RR max. um **25 %** senken (Urapidil durch NA). Bei Schlaganfall nicht unter 180/110 (bzw. bis 220/120 tolerieren).',
        '**Sepsis**: qSOFA ≥ 2 von 3 (AF ≥ 22, Bewusstseinsänderung, RR syst. ≤ 100) → Verdacht, Fokussuche, Voranmeldung.',
        '**Hitzschlag**: Bewusstseinsstörung + heiße, trockene Haut, > 40 °C → aktiv kühlen, NA, keine Fiebermittel.',
        '**Akutes Abdomen**: Schonhaltung, Abwehrspannung, Schock möglich → nüchtern lassen, Knierolle, Analgesie (NA/SOP).'
      ]}
    ],
    karten: [
      ['Wann gibt man beim ACS Sauerstoff?', 'Nur bei SpO₂ < 90 %.'],
      ['Innerhalb welcher Zeit muss beim ACS das 12-Kanal-EKG geschrieben sein?', 'Innerhalb von 10 Minuten nach Erstkontakt.'],
      ['Welche Ableitungen zeigen einen Hinterwandinfarkt?', 'II, III, aVF.'],
      ['Kontraindikationen für Nitro?', 'RR syst. < 100, Hinterwand-/Rechtsherzinfarkt, Potenzmittel (PDE-5-Hemmer) in 24–72 h, kardiogener Schock, Schlaganfall/Hirndruck.'],
      ['Was ist bei Verdacht auf Aortendissektion verboten?', 'ASS und Heparin.'],
      ['Welche Blutdruckdifferenz zwischen den Armen ist verdächtig?', 'Ab 20 mmHg.'],
      ['CPAP bei Lungenödem oder Lungenembolie?', 'Lungenödem: ja (Therapie). Lungenembolie: nein (Überdruck belastet das rechte Herz → RR-Absturz).'],
      ['Adrenalin-Dosis bei Anaphylaxie (Erwachsene, i.m.)?', '0,5 mg i.m. an der Oberschenkelaußenseite, Wiederholung nach 5–10 min möglich.'],
      ['Adrenalin i.m. bei Kindern?', '6–12 Jahre 0,3 mg, < 6 Jahre 0,15 mg.'],
      ['Warum Anaphylaxie-Patienten immer in die Klinik?', 'Biphasische Reaktion möglich, Adrenalin wirkt nur 10–20 min, Allergen noch im Körper.'],
      ['Ab welchem BZ spricht man (Lernzettel) von Hypoglykämie?', 'Unter ca. 60 mg/dl.'],
      ['Worauf achten bei Glukose 40 %?', 'Stark venenreizend: nur über sicheren Zugang mit laufender Infusion, nachspülen, danach BZ-Kontrolle.'],
      ['Was ist eine „silent chest“?', 'Kaum noch Atemgeräusch beim schweren Asthmaanfall – lebensbedrohlich, keine Entwarnung!'],
      ['Vier Instabilitätszeichen bei Rhythmusstörungen?', 'Schock, Synkope, Myokardischämie, Herzinsuffizienz.'],
      ['qSOFA-Kriterien?', 'AF ≥ 22/min, Bewusstseinsveränderung (GCS < 15), RR syst. ≤ 100 mmHg – ab 2 Punkten Sepsisverdacht.']
    ]
  },

  {
    id: 'trauma',
    titel: 'Traumatologische Notfälle',
    kurz: 'xABCDE beim Trauma, Blutstillung, Schock, Spannungspneu, SHT, Becken, Wirbelsäule, Verbrennung – nach S3-Leitlinie Polytrauma.',
    abschnitte: [
      { h: 'Vorgehen am Unfallort', p: [
        '**Eigenschutz**: Fahrzeug schräg vor die Unfallstelle, Blaulicht + Warnblinker, Warnweste. Gefahren erkennen.',
        'Rückmeldung: Anzahl Verletzte, Nachforderung (**RTW, NA, Polizei**, ggf. Feuerwehr), nach weiteren Beteiligten fragen.',
        'Unfallmechanismus beachten: Sturz > 3 m, Herausschleudern, Fußgänger/Radfahrer angefahren, Einklemmung → an schwere Verletzung denken.',
        'Kurze Versorgungszeit vor Ort – **„treat first what kills first“**, kritische Patienten zügig in ein Traumazentrum.'
      ]},
      { h: 'x – Blutstillung', p: [
        'Arterielle, spritzende Extremitätenblutung: **sofort manuell komprimieren, dann Tourniquet** (S3: wenn mit anderen Maßnahmen nicht zeitgerecht stillbar).',
        'Tourniquet **eine Handbreit oberhalb** der Wunde bzw. hoch am Oberschenkel/Oberarm, festziehen bis die Blutung steht, **Uhrzeit notieren**, nicht wieder lockern.',
        'Rumpfnahe Blutungen: Wundpacking (ggf. Hämostyptikum) + Druck.',
        'Typischer Fehler: Druckverband probieren statt direkt Tourniquet bei lebensbedrohlicher Blutung.'
      ]},
      { h: 'A/B – Atemweg und Thorax', p: [
        'Kopf manuell stabilisieren, Esmarch **ohne Überstrecken**, Helm zu zweit abnehmen.',
        'HWS-Immobilisation **gezielt**, nicht routinemäßig; Stiffneck nur bei Indikation.',
        '15 l O₂ über Maske mit Reservoir bei kritischem Patienten.',
        '**Spannungspneumothorax**: einseitig fehlendes Atemgeräusch + zunehmende Atemnot, fallende SpO₂ und fallender RR, evtl. gestaute Halsvenen → sofortige Entlastung durch NA.',
        'Entlastungsorte: **Monaldi** 2.–3. ICR medioklavikular, **Bülau** 4.–5. ICR vordere/mittlere Axillarlinie – immer am **Oberrand der unteren Rippe**.'
      ]},
      { h: 'C – Schock', p: [
        '**Schockindex** = Puls / RR syst. > 1 → Schock (S3-Schockraumkriterium: > 0,9).',
        'Schockformen: hypovolämisch/hämorrhagisch, kardiogen, distributiv (anaphylaktisch, septisch, neurogen), obstruktiv (Spannungspneu, Tamponade, Lungenembolie).',
        'Permissive Hypotonie bei unkontrollierter Blutung: Ziel syst. ca. **80–90 mmHg**; bei **SHT** höher (ca. **110 mmHg**), S3 für Erwachsene mit SHT: syst. ≥ 90 mmHg Normotension anstreben.',
        '**Tranexamsäure 1 g** i.v. über 10 min bei (drohendem) hämorrhagischem Schock, möglichst früh (innerhalb 3 h).',
        '**Beckengurt** bei Verdacht auf instabile Beckenverletzung + Kreislaufinstabilität (auf Höhe der Trochanter major).',
        'Zugang/Volumen nach Leitlinie bzw. NA.'
      ]},
      { h: 'D – Schädel-Hirn-Trauma', p: [
        'GCS, Pupillen (Anisokorie = Alarm), Bewusstseinsverlauf, BZ.',
        'Oberkörper ca. 30° hoch (wenn kein Schock), Kopf achsengerecht, SpO₂ > 90 %, Normoventilation, Hypotonie vermeiden.',
        '**Antikoagulation (z. B. Marcumar, DOAK) + Kopfverletzung → immer Klinik mit CT.**',
        'Alkohol kann Symptome einer Hirnblutung verschleiern.',
        'Hirndruckzeichen: Kopfschmerz, Erbrechen, Bewusstseinsminderung, Anisokorie, Cushing (Bradykardie + Hypertonie).'
      ]},
      { h: 'E – Exposure', p: [
        'Bodycheck: versteckte Blutungen, Frakturen (Schenkelhals: verkürztes, außenrotiertes Bein), Becken, Wirbelsäule.',
        'Sofort **Wärmeerhalt** – Hypothermie ist Teil der tödlichen Trias.',
        'pDMS vor und nach jeder Schienung (periphere Durchblutung, Motorik, Sensibilität).',
        'Amputat: trocken steril einpacken, in Beutel, indirekt kühlen (nie direkt auf Eis), mitnehmen.',
        'Pfählungsverletzung: Fremdkörper **belassen** und fixieren.'
      ]},
      { h: 'Verbrennungen', p: [
        'Ausdehnung: **Neunerregel** (Erw.: Kopf 9 %, Arm je 9 %, Rumpf vorn 18 %, hinten 18 %, Bein je 18 %, Genitale 1 %); **Handfläche des Patienten ≈ 1 %**.',
        'Kühlen nur kurz und lauwarm bei kleinen Flächen, **Unterkühlung vermeiden**; steril/trocken abdecken.',
        'Inhalationstrauma (Ruß im Gesicht, Heiserkeit, versengte Haare) → frühe Atemwegssicherung (NA).',
        'Schockraum-/Zentrumsindikation u. a. > 20 % KOF ab Grad 2b.'
      ]},
      { h: 'Schockraum-Kriterien (S3, Auswahl)', tabelle: [
        ['Problem', 'Kriterium'],
        ['A/B', 'SpO₂ < 90 %, Atemwegssicherung nötig, AF < 10 oder > 29'],
        ['C', 'RR syst. < 90 mmHg, HF > 120/min, Schockindex > 0,9, positiver eFAST'],
        ['D', 'GCS ≤ 12'],
        ['E', 'Hypothermie < 35,0 °C'],
        ['Verletzungen', 'Instabiler Thorax, instabiles Becken, penetrierende Rumpf-Hals-Verletzung, Amputation proximal Hand/Fuß, neurologisches Defizit nach WS-Verletzung, prähospitale Intervention (z. B. Tourniquet)'],
        ['Mechanismus', 'Sturz > 3 m, VU mit Herausschleudern oder Fraktur langer Röhrenknochen']
      ]}
    ],
    karten: [
      ['Was tust du bei spritzender Blutung am Oberschenkel?', 'Sofort manuell komprimieren, dann direkt Tourniquet – eine Handbreit über der Wunde oder ganz proximal, fest bis Blutung steht, Uhrzeit notieren.'],
      ['Wie berechnet man den Schockindex?', 'Herzfrequenz ÷ systolischer Blutdruck. > 1 = Schock (S3-Schockraumkriterium > 0,9).'],
      ['Ziel-RR bei permissiver Hypotonie?', 'Syst. ca. 80–90 mmHg; bei SHT höher (ca. 110 mmHg; S3: ≥ 90 mmHg).'],
      ['Zeichen Spannungspneumothorax?', 'Einseitig fehlendes Atemgeräusch, zunehmende Atemnot, fallende SpO₂, fallender RR, evtl. gestaute Halsvenen.'],
      ['Monaldi-Position?', '2.–3. ICR, Medioklavikularlinie.'],
      ['Bülau-Position?', '4.–5. ICR, vordere bis mittlere Axillarlinie.'],
      ['Warum Punktion am Oberrand der Rippe?', 'Gefäße und Nerven verlaufen am Unterrand der Rippe.'],
      ['Tranexamsäure beim Trauma – Dosis und Zeitfenster?', '1 g i.v. über 10 min, möglichst früh, innerhalb von 3 h nach Trauma.'],
      ['Wann Beckengurt?', 'Bei Verdacht auf instabile Beckenverletzung und hämodynamischer Instabilität; Anlage auf Höhe der Trochanter major.'],
      ['Kopfverletzung unter Marcumar – Konsequenz?', 'Immer Klinik mit CT (Blutungsrisiko).'],
      ['Neunerregel – Bein beim Erwachsenen?', '18 % (je Bein). Handfläche des Patienten ≈ 1 %.'],
      ['Schockraumkriterium GCS?', 'GCS ≤ 12.'],
      ['Wie versorgst du ein Amputat?', 'Trocken und steril einpacken, in Beutel, indirekt kühlen (Beutel in Eiswasser), nie direkt auf Eis, mit in die Klinik.']
    ]
  },

  {
    id: 'nun',
    titel: 'NUN-Algorithmen',
    kurz: 'Wie Behandlungsalgorithmen aufgebaut sind und wie du sie im Einsatz sicher anwendest.',
    abschnitte: [
      { h: 'Was sind die NUN-Algorithmen?', p: [
        'Die NUN-Algorithmen sind **gemeinsame, standardisierte Behandlungspfade** für den Rettungsdienst in Niedersachsen (und angrenzenden Regionen). Sie legen fest, welche Maßnahmen das nichtärztliche Personal bei bestimmten Krankheitsbildern durchführt.',
        'Verbindlich ist **die aktuelle Version deines Trägers** und die **RS-Plus-Leitlinie** für Aurich, Leer und Wittmund – diese App fasst nur die gemeinsamen Grundprinzipien zusammen.'
      ]},
      { h: 'Typischer Aufbau eines Algorithmus', p: [
        '**Einstieg** über Leitsymptom/Verdachtsdiagnose (z. B. Brustschmerz, Atemnot, Hypoglykämie).',
        '**xABCDE-Untersuchung** und Basismonitoring (SpO₂, RR, HF, EKG, BZ, Temperatur).',
        '**Ausschluss- und Abbruchkriterien** (Kontraindikationen, Instabilität) → Notarzt nachfordern.',
        '**Maßnahmen** in fester Reihenfolge, Medikamente mit Dosis, Applikationsweg und Wiederholung.',
        '**Erfolgskontrolle** (Re-Evaluation nach jeder Maßnahme) und **Dokumentation**.',
        '**Transportziel** / Voranmeldung.'
      ]},
      { h: 'Häufige Algorithmen (Beispiele)', tabelle: [
        ['Krankheitsbild', 'Kernpunkte'],
        ['ACS', '12-Kanal ≤ 10 min, O₂ nur < 90 %, ASS/Heparin nach Freigabe, Nitro nur ohne KI, HKL'],
        ['Hypoglykämie', 'BZ < 60 mg/dl + Symptome, oral wenn wach, sonst G40 i.v. über laufende Infusion, BZ-Kontrolle'],
        ['Anaphylaxie', 'Adrenalin 0,5 mg i.m., O₂, Lagerung nach Symptom, Klinik'],
        ['Obstruktive Atemnot', 'Salbutamol ± Ipratropium vernebelt, Prednisolon, COPD-Zielsättigung'],
        ['Krampfanfall', 'Schutz, Atemweg, BZ, Benzodiazepin (i.n./i.v.) nach SOP/NA'],
        ['Schmerz', 'NRS erheben, Analgesie nach SOP, Re-Evaluation, Nebenwirkungen beachten'],
        ['Reanimation', 'BLS/ALS nach ERC, Adrenalin/Amiodaron-Schema']
      ]},
      { h: 'Sicherheitsprinzipien', p: [
        '**6-R-Regel** vor jeder Medikamentengabe: richtiger Patient, richtiges Medikament, richtige Dosis, richtige Applikation, richtiger Zeitpunkt, richtige Dokumentation.',
        'Allergien und Kontraindikationen **aktiv erfragen**.',
        'Ampulle zeigen, laut ansagen (**Vier-Augen-Prinzip**, Closed-Loop).',
        'Algorithmus endet, wenn der Patient instabil wird → Notarzt.',
        'Delegation durch den ÄLRD gilt nur für die beschriebenen Maßnahmen.'
      ]}
    ],
    karten: [
      ['Was ist die 6-R-Regel?', 'Richtiger Patient, Medikament, Dosis, Applikationsweg, Zeitpunkt, Dokumentation.'],
      ['Was passiert, wenn ein Patient im Algorithmus instabil wird?', 'Abbruch des Algorithmus, Notarzt nachfordern, symptomatisch weiter nach xABCDE.'],
      ['Welche Elemente hat ein typischer Algorithmus?', 'Einstieg/Leitsymptom, xABCDE + Monitoring, Ausschluss-/Abbruchkriterien, Maßnahmen mit Dosis, Re-Evaluation, Dokumentation, Transportziel.'],
      ['Was ist im Zweifel verbindlich – App oder Leitlinie?', 'Immer die aktuelle Leitlinie/SOP des Trägers und die Freigabe durch den Notarzt.']
    ]
  },

  {
    id: 'ekg',
    titel: 'EKG-Diagnostik',
    kurz: 'Systematische Rhythmusanalyse, die wichtigen präklinischen Rhythmen und das 12-Kanal-EKG beim Infarkt.',
    abschnitte: [
      { h: 'Grundlagen', p: [
        'Reizleitung: **Sinusknoten** (60–80/min) → Vorhöfe → **AV-Knoten** (40–60/min) → His-Bündel → Tawara-Schenkel → Purkinje-Fasern (20–40/min).',
        'P-Welle = Vorhoferregung · PQ-Zeit = Überleitung (**120–200 ms**) · QRS = Kammererregung (**< 120 ms**) · ST-Strecke · T-Welle = Rückbildung.',
        'Papier 25 mm/s: kleines Kästchen = **0,04 s**, großes Kästchen = **0,2 s**. 10 mm = 1 mV.',
        'Frequenz grob: 300 ÷ Anzahl großer Kästchen zwischen zwei R-Zacken.'
      ]},
      { h: 'Systematische Analyse (6 Fragen)', p: [
        '**1. Elektrische Aktivität vorhanden?**',
        '**2. Frequenz?** (Brady < 60, Tachy > 100)',
        '**3. Regelmäßig oder unregelmäßig?**',
        '**4. QRS schmal (< 0,12 s) oder breit?**',
        '**5. P-Wellen vorhanden? Beziehung P zu QRS?**',
        '**6. Hat der Patient einen Puls / wie geht es ihm?** – Behandle immer den Patienten, nicht den Monitor.'
      ]},
      { h: 'Reanimationsrhythmen', tabelle: [
        ['Rhythmus', 'Schockbar?', 'Merkmal'],
        ['Kammerflimmern (VF)', 'Ja', 'Chaotische Wellen, keine QRS-Komplexe'],
        ['Pulslose VT (pVT)', 'Ja', 'Breite, regelmäßige, schnelle Komplexe ohne Puls'],
        ['Asystolie', 'Nein', 'Nulllinie (Elektroden/Verstärkung prüfen!)'],
        ['PEA', 'Nein', 'Geordneter Rhythmus ohne tastbaren Puls']
      ]},
      { h: '12-Kanal-EKG beim Infarkt', tabelle: [
        ['Lokalisation', 'Ableitungen', 'Gefäß (meist)'],
        ['Vorderwand', 'V1–V4', 'RIVA (LAD)'],
        ['Seitenwand', 'I, aVL, V5–V6', 'RCX'],
        ['Hinterwand/inferior', 'II, III, aVF', 'RCA (oft Bradykardie, AV-Block)'],
        ['Rechtsherz', 'V3R/V4R (rechtspräkordial)', 'RCA proximal – kein Nitro!']
      ]},
      { h: 'STEMI-Kriterien', p: [
        'ST-Hebung in **≥ 2 benachbarten Ableitungen** (Extremitäten ≥ 1 mm; V2–V3 je nach Alter/Geschlecht ≥ 1,5–2,5 mm).',
        'Spiegelbildliche ST-Senkungen stützen die Diagnose.',
        'Neuer Linksschenkelblock mit Klinik = wie STEMI behandeln.',
        'Elektroden korrekt kleben: V1 4. ICR rechts parasternal, V2 4. ICR links parasternal, V4 5. ICR MCL, V3 dazwischen, V5 vordere, V6 mittlere Axillarlinie auf Höhe V4.'
      ]},
      { h: 'Extremitäten-Elektroden (Ampel)', p: [
        '**Rot** – rechter Arm · **Gelb** – linker Arm · **Grün** – linkes Bein · **Schwarz** – rechtes Bein (Erde).',
        'Merkspruch: „Rot – Gelb – Grün im Uhrzeigersinn ab rechter Schulter, schwarz ist der Rest.“'
      ]}
    ],
    karten: [
      ['Normale PQ-Zeit?', '120–200 ms (0,12–0,2 s).'],
      ['Ab wann ist QRS breit?', 'Ab 120 ms (0,12 s, 3 kleine Kästchen).'],
      ['Wie lang ist ein kleines Kästchen bei 25 mm/s?', '0,04 s (großes Kästchen 0,2 s).'],
      ['Eigenfrequenz Sinusknoten / AV-Knoten / Kammer?', 'Ca. 60–80 / 40–60 / 20–40 pro Minute.'],
      ['Welche Rhythmen sind schockbar?', 'Kammerflimmern und pulslose ventrikuläre Tachykardie.'],
      ['Was ist eine PEA?', 'Pulslose elektrische Aktivität: geordneter Rhythmus auf dem Monitor, aber kein tastbarer Puls → sofort weiterdrücken.'],
      ['Welche Ableitungen für Vorderwand?', 'V1–V4 (RIVA/LAD).'],
      ['Farben der Extremitätenelektroden?', 'Rot rechter Arm, gelb linker Arm, grün linkes Bein, schwarz rechtes Bein.'],
      ['Wo klebt V4?', '5. ICR in der linken Medioklavikularlinie.'],
      ['STEMI-Kriterium?', 'ST-Hebung in mindestens zwei benachbarten Ableitungen.']
    ]
  },

  {
    id: 'pharmacpr',
    titel: 'Pharmakologie zur CPR',
    kurz: 'Adrenalin, Amiodaron, Lidocain – wann, wie viel, wie vorbereitet. Dazu Grundlagen Sympathikus/Parasympathikus.',
    abschnitte: [
      { h: 'Adrenalin (Epinephrin) in der Reanimation', p: [
        '**1 mg i.v./i.o.** alle **3–5 Minuten** (also jeden zweiten Zyklus).',
        'Nicht schockbar (Asystolie/PEA): **so früh wie möglich**.',
        'Schockbar (VF/pVT): **nach dem 3. Schock**, dann alle 3–5 min.',
        'Kinder: **10 µg/kg** (0,01 mg/kg) i.v./i.o.',
        'Vorbereitung (gängig): 1 mg Adrenalin (1 mg/ml) **auf 10 ml NaCl 0,9 %** → 0,1 mg/ml; Erwachsene 10 ml, Kind 0,1 ml/kg. Nach jeder Gabe mit 20 ml NaCl nachspülen.'
      ]},
      { h: 'Amiodaron', p: [
        'Nur bei **VF/pVT** (therapierefraktär) – nicht bei Asystolie/PEA.',
        '**300 mg nach dem 3. Schock**, **150 mg nach dem 5. Schock**.',
        'Eselsbrücke: **„Drei-Hundert nach dem Dritten“**.',
        'Kinder: 5 mg/kg nach dem 3. und 5. Schock.',
        'Verdünnung in **Glukose 5 %** (nicht NaCl).',
        'Alternative (wenn kein Amiodaron): **Lidocain 100 mg** nach dem 3., 50 mg nach dem 5. Schock.'
      ]},
      { h: 'Weitere Medikamente rund um die CPR', p: [
        '**Magnesium 2 g** bei Torsade de pointes (NA).',
        'Zugangswege: **i.v. erste Wahl**, sonst **i.o.** (Tibia, Humerus). Kein endobronchialer Weg mehr.',
        'Nach ROSC: Ziel SpO₂ 94–98 %, RR syst. > 100 mmHg (MAP > 65), ggf. Noradrenalin (NA).'
      ]},
      { h: 'Grundlagen vegetatives Nervensystem', tabelle: [
        ['Rezeptor', 'Ort', 'Wirkung bei Stimulation'],
        ['α1', 'Gefäße', 'Vasokonstriktion → RR ↑'],
        ['β1', 'Herz', 'Frequenz ↑, Kraft ↑, Überleitung ↑'],
        ['β2', 'Bronchien, Gefäße, Uterus', 'Bronchodilatation, Wehenhemmung'],
        ['Muskarin (M)', 'Herz, Bronchien, Darm', 'Parasympathikus: HF ↓, Bronchokonstriktion, Sekretion ↑']
      ]},
      { h: 'Merksätze', p: [
        'Adrenalin wirkt auf **α und β** → Vasokonstriktion (Koronar-/Hirnperfusion in CPR), Herz, Bronchien.',
        'Noradrenalin: v. a. **α** → Gefäßtonus, Blutdruck.',
        'Salbutamol: **β2** → Bronchien weit (NW: Tachykardie, Zittern, Kalium ↓).',
        'Atropin/Ipratropium/Butylscopolamin: **Parasympatholytika** → HF ↑, Bronchien weit, Spasmolyse; NW trockener Mund, Harnverhalt, Glaukom.',
        'Betablocker: β1-Blockade → HF ↓, maskieren Schockzeichen.',
        'Agonist = aktiviert den Rezeptor, Antagonist = blockiert ihn (z. B. Naloxon am Opioidrezeptor, Flumazenil am Benzodiazepin-Rezeptor).'
      ]}
    ],
    karten: [
      ['Adrenalin in der CPR – Dosis und Intervall?', '1 mg i.v./i.o. alle 3–5 Minuten.'],
      ['Wann erstes Adrenalin bei Asystolie/PEA?', 'So früh wie möglich.'],
      ['Wann erstes Adrenalin bei VF/pVT?', 'Nach dem 3. Schock.'],
      ['Amiodaron-Schema?', '300 mg nach dem 3. Schock, 150 mg nach dem 5. Schock – nur bei VF/pVT.'],
      ['Womit wird Amiodaron verdünnt?', 'Glukose 5 %.'],
      ['Adrenalin für Kinder in der CPR?', '10 µg/kg (0,01 mg/kg) i.v./i.o.'],
      ['Alternative zu Amiodaron?', 'Lidocain 100 mg (nach 3. Schock), 50 mg (nach 5. Schock).'],
      ['Was bewirkt β2-Stimulation?', 'Bronchodilatation (und Wehenhemmung, Kaliumabfall).'],
      ['Was bewirkt α1-Stimulation?', 'Vasokonstriktion → Blutdruckanstieg.'],
      ['Zugangsweg der Wahl in der CPR?', 'i.v., alternativ i.o.']
    ]
  },

  {
    id: 'rea',
    titel: 'Reanimation Erwachsene',
    kurz: 'BLS und ALS nach ERC, AED, Ablauf im Team, reversible Ursachen und Postreanimation.',
    abschnitte: [
      { h: 'Erkennen & Start', p: [
        'Bewusstlos → Atemweg öffnen → **Atmung max. 10 Sekunden** prüfen (sehen, hören, fühlen).',
        '**Keine normale Atmung oder Schnappatmung = Reanimation.**',
        'Sofort nachfordern: RTW + NA, Stichwort „Reanimation“ (kann der Kollege machen).'
      ]},
      { h: 'Thoraxkompression', p: [
        'Druckpunkt **Mitte des Brustkorbs** (untere Sternumhälfte).',
        'Tiefe **5–6 cm**, Frequenz **100–120/min**, vollständig entlasten.',
        '**30 : 2**, bis Atemweg gesichert (i-gel/Tubus) – dann **durchgehend drücken und 10 Beatmungen/min**.',
        'Unterbrechungen minimal (< 5 s für Analyse/Schock). **Helferwechsel alle 2 Minuten**.'
      ]},
      { h: 'AED / Defibrillation', p: [
        'Pads ohne Druckpause kleben (rechts unter Schlüsselbein, links seitlich unter der Achsel).',
        'Analyse → schockbar? **VF/pVT** → Schock (biphasisch 120–200 J je nach Gerät, steigernd), **sofort weiterdrücken, kein Pulscheck**.',
        'Alle **2 Minuten** erneute Analyse.',
        'Sicherheit: „Weg vom Patienten!“, Sauerstoff weg vom Thorax, nasse Brust abtrocknen, Pflaster entfernen, Schrittmacher umgehen (≥ 8 cm).'
      ]},
      { h: 'ALS-Ablauf', p: [
        'Schockbar: Schock → 2 min CPR → Analyse … **Adrenalin 1 mg + Amiodaron 300 mg nach dem 3. Schock**, Amiodaron 150 mg nach dem 5., Adrenalin alle 3–5 min.',
        'Nicht schockbar: **Adrenalin 1 mg sofort**, dann alle 3–5 min, 2 min CPR zwischen den Analysen.',
        'Kapnografie: Tubuslage, CPR-Qualität; plötzlicher etCO₂-Anstieg → Hinweis auf ROSC.',
        '**Geordneter Rhythmus** auf dem Monitor → erst **Puls tasten** (Karotis, max. 10 s). Kein Puls = PEA → sofort weiterdrücken.'
      ]},
      { h: 'Reversible Ursachen: 4 H & HITS', tabelle: [
        ['4 H', 'HITS'],
        ['Hypoxie', 'Herzbeuteltamponade'],
        ['Hypovolämie', 'Intoxikation'],
        ['Hypo-/Hyperkaliämie (metabolisch)', 'Thrombose (Lungenembolie, Koronar)'],
        ['Hypothermie', 'Spannungspneumothorax']
      ]},
      { h: 'Nach ROSC', p: [
        'xABCDE, Monitoring, **12-Kanal-EKG**.',
        'Ziel **SpO₂ 94–98 %**, **RR syst. > 100 mmHg**, Normokapnie (etCO₂ 35–45 mmHg), BZ kontrollieren.',
        'Ursache suchen (Infarkt → HKL), Transport in Cardiac Arrest Center.',
        'Typischer Fehler: 4 H und HITS erst nach ROSC statt **während** der Reanimation bedenken.'
      ]}
    ],
    karten: [
      ['Wie lange Atmung prüfen?', 'Maximal 10 Sekunden.'],
      ['Schnappatmung bedeutet?', 'Keine normale Atmung → Reanimation beginnen.'],
      ['Drucktiefe und Frequenz Erwachsene?', '5–6 cm, 100–120/min.'],
      ['Verhältnis Kompression : Beatmung ohne gesicherten Atemweg?', '30 : 2.'],
      ['Beatmungsfrequenz mit gesichertem Atemweg?', '10/min bei durchgehender Kompression.'],
      ['Was tust du direkt nach einem Schock?', 'Sofort weiterdrücken – kein Pulscheck.'],
      ['Wie oft Rhythmusanalyse und Helferwechsel?', 'Alle 2 Minuten.'],
      ['Die 4 H?', 'Hypoxie, Hypovolämie, Hypo-/Hyperkaliämie, Hypothermie.'],
      ['HITS?', 'Herzbeuteltamponade, Intoxikation, Thrombose, Spannungspneumothorax.'],
      ['Monitor zeigt geordneten Rhythmus – was tun?', 'Puls an der Karotis tasten (max. 10 s) und Lebenszeichen prüfen. Kein Puls = PEA, weiterdrücken.'],
      ['Zielwerte nach ROSC?', 'SpO₂ 94–98 %, RR syst. > 100 mmHg.']
    ]
  },

  {
    id: 'reakind',
    titel: 'Reanimation Kinder & Säuglinge',
    kurz: 'Paediatric BLS: 5 initiale Beatmungen, 15 : 2, Technik bei Säugling und Kind, Fremdkörperverlegung.',
    abschnitte: [
      { h: 'Besonderheiten', p: [
        'Kinder haben meist eine **respiratorische Ursache** → Sauerstoff und Beatmung stehen im Vordergrund.',
        'Säugling = bis 1 Jahr, Kind = 1 Jahr bis Pubertät.'
      ]},
      { h: 'Ablauf Paediatric BLS (professionelle Helfer)', p: [
        'Keine normale Atmung → **5 initiale Beatmungen**.',
        'Keine Lebenszeichen → **15 Kompressionen : 2 Beatmungen**.',
        'Tiefe **mindestens 1/3 des Thoraxdurchmessers** (Säugling ca. 4 cm, Kind ca. 5 cm), Frequenz **100–120/min**.',
        'Säugling: Kopf in **Neutralposition** (nicht überstrecken), Mund-zu-Mund-und-Nase. Kompression mit **Zwei-Daumen-Technik** (umgreifend) bzw. zwei Fingern.',
        'Kind: Kopf leicht überstreckt, Kompression mit einer oder zwei Händen.',
        'AED ab Geburt möglich (Kinderpads/Energiereduktion, sonst Erwachsenenpads); Energie ca. **4 J/kg**.'
      ]},
      { h: 'Medikamente Kinder (NA)', p: [
        'Adrenalin **10 µg/kg** i.v./i.o. alle 3–5 min.',
        'Amiodaron **5 mg/kg** nach dem 3. und 5. Schock.',
        'Volumenbolus 10 ml/kg kristalloid (bei Verdacht Hypovolämie).'
      ]},
      { h: 'Normwerte Kinder (ungefähr)', tabelle: [
        ['Alter', 'Atemfrequenz', 'Herzfrequenz', 'RR syst.'],
        ['Neugeborenes', '40–60', '110–160', '60–70'],
        ['Säugling', '30–40', '100–160', '70–90'],
        ['Kleinkind (1–5 J.)', '20–30', '90–140', '80–100'],
        ['Schulkind', '15–20', '70–120', '90–110']
      ]},
      { h: 'Fremdkörperverlegung', p: [
        'Effektiver Husten → zum Husten ermutigen, beobachten.',
        'Ineffektiv, bei Bewusstsein → **5 Rückenschläge**, dann **5 Thoraxstöße** (Säugling) bzw. **5 Oberbauchkompressionen** (Kind > 1 Jahr), im Wechsel.',
        'Bewusstlos → Atemweg öffnen, 5 Beatmungen, CPR beginnen.'
      ]},
      { h: 'Pseudokrupp vs. Epiglottitis', tabelle: [
        ['', 'Pseudokrupp', 'Epiglottitis'],
        ['Beginn', 'Nachts, nach Erkältung', 'Plötzlich, schnell schlimmer'],
        ['Fieber', 'Eher leicht', 'Hoch, Kind schwer krank'],
        ['Husten', 'Bellend', 'Kaum'],
        ['Stimme', 'Heiser', 'Kloßig, leise'],
        ['Schlucken', 'Normal', 'Schluckschmerz, Speichelfluss'],
        ['Haltung', 'Normal', 'Aufrecht, nach vorn gebeugt']
      ]},
      { h: 'Pseudokrupp-Therapie', p: [
        '**Kind beruhigen** = wichtigste Maßnahme, auf dem Schoß der Eltern lassen, **nicht in den Rachen schauen**.',
        'Kühle, feuchte Luft; O₂ nur bei niedriger SpO₂ locker vorhalten.',
        'Medikamente (NA/Leitlinie): **Adrenalin vernebelt**, **Prednisolon-Zäpfchen 100 mg**. Nicht Salbutamol/Ipratropium (wirken auf die unteren Atemwege).',
        'Epiglottitis: nie hinlegen, nie in den Rachen schauen, NA, Klinik mit Kinderanästhesie.'
      ]}
    ],
    karten: [
      ['Wie viele initiale Beatmungen beim Kind?', '5.'],
      ['Kompressions-Beatmungs-Verhältnis Kinder (professionell)?', '15 : 2.'],
      ['Drucktiefe Kinder?', 'Mindestens 1/3 des Thoraxdurchmessers (Säugling ca. 4 cm, Kind ca. 5 cm).'],
      ['Kopfposition beim Säugling?', 'Neutralposition.'],
      ['Defibrillationsenergie Kinder?', 'Ca. 4 J/kg.'],
      ['Adrenalin-Dosis Kind in CPR?', '10 µg/kg.'],
      ['Fremdkörper beim Säugling, bei Bewusstsein, ineffektiver Husten?', '5 Rückenschläge, dann 5 Thoraxstöße, im Wechsel.'],
      ['Warum Kinder-CPR mit Beatmung beginnen?', 'Meist respiratorische Ursache (Hypoxie).'],
      ['Wichtigste Maßnahme bei Pseudokrupp?', 'Kind beruhigen (Eltern-Schoß, keine unnötigen Maßnahmen), kühle feuchte Luft.'],
      ['Medikamente bei Pseudokrupp?', 'Adrenalin vernebelt, Prednisolon-Zäpfchen – nicht Salbutamol/Ipratropium.'],
      ['Warnzeichen für Epiglottitis?', 'Hohes Fieber, kloßige Sprache, Speichelfluss, Schluckschmerz, sitzt nach vorn gebeugt.']
    ]
  },

  {
    id: 'airway',
    titel: 'Airway & Beatmung',
    kurz: 'Atemwegshilfen, extraglottische Atemwege (i-gel, Larynxtubus), Beutel-Masken-Beatmung, Kapnografie, CPAP.',
    abschnitte: [
      { h: 'Basismaßnahmen', p: [
        'Kopf überstrecken + Kinn anheben; bei Trauma **Esmarch-Handgriff** ohne Überstrecken.',
        '**Absaugen** bei Flüssigkeit/Erbrochenem (Absaugbereitschaft immer herstellen).',
        '**Guedel-Tubus** (oropharyngeal): Maß Mundwinkel → Ohrläppchen; nur bei Bewusstlosen ohne Schutzreflexe.',
        '**Wendl-Tubus** (nasopharyngeal): Maß Nasenspitze → Ohrläppchen; wird eher toleriert; Vorsicht bei Schädelbasisfraktur.'
      ]},
      { h: 'Beutel-Masken-Beatmung', p: [
        '**C-Griff** (Daumen + Zeigefinger auf Maske, übrige Finger am Unterkiefer) oder besser **doppelter C-Griff** zu zweit.',
        'Volumen ca. **6–8 ml/kg** (ca. 500–600 ml), **Inspiration ca. 1 s**, sichtbares Heben des Thorax.',
        'Zu viel Volumen/Druck → **Magenbeatmung** → Aspiration.',
        'Mit Reservoir und **15 l/min O₂** fast 100 % FiO₂.',
        'Ohne Reanimation: ca. **10–12 Beatmungen/min** (z. B. bei AF 5 bei Opioid-Intoxikation – Maske allein reicht nicht!).'
      ]},
      { h: 'Extraglottische Atemwege (EGA)', tabelle: [
        ['Hilfsmittel', 'Größenwahl (Erwachsene)', 'Hinweise'],
        ['i-gel', 'Größe 3: 30–60 kg · 4: 50–90 kg · 5: > 90 kg', 'Gelartiger Cuff ohne Blocken, Magenkanal, Beißschutz'],
        ['Larynxtubus (LTS-D)', 'Größe 3: < 155 cm · 4: 155–180 cm · 5: > 180 cm', 'Cuffs blocken (Cuffdruckmesser ~60 cmH₂O), Magensonde möglich']
      ]},
      { h: 'Lagekontrolle', p: [
        'Thoraxexkursionen beidseits, Auskultation (Lunge + Epigastrium), **Kapnografie** (Kurve = Goldstandard), Leckage prüfen.',
        'Fixieren, Beißschutz, Lage nach jeder Umlagerung erneut prüfen.',
        'etCO₂ normal **35–45 mmHg**. Plötzlicher Abfall: Dislokation, Obstruktion, Kreislaufstillstand. Plötzlicher Anstieg in CPR: ROSC.'
      ]},
      { h: 'DOPES bei Beatmungsproblemen', tabelle: [
        ['Buchstabe', 'Bedeutung'],
        ['D – Dislokation', 'Tubus/EGA verrutscht?'],
        ['O – Obstruktion', 'Sekret, Abknicken?'],
        ['P – Patient/Pneumothorax', 'Spannungspneu, Bronchospasmus, zu flache Sedierung?'],
        ['E – Equipment', 'Gerät, Schläuche, O₂-Versorgung?'],
        ['S – Stomach', 'Überblähter Magen?']
      ]},
      { h: 'CPAP / NIV', p: [
        'Indikation: v. a. **kardiales Lungenödem**, ggf. COPD-Exazerbation – wacher, kooperativer Patient mit Spontanatmung.',
        'Kontraindikationen: Bewusstlosigkeit, fehlende Schutzreflexe, Erbrechen, Pneumothorax, Schock, **Lungenembolie**, Gesichtsverletzungen.'
      ]}
    ],
    karten: [
      ['Wie misst du einen Guedel-Tubus ab?', 'Mundwinkel bis Ohrläppchen.'],
      ['Wie misst du einen Wendl-Tubus ab?', 'Nasenspitze bis Ohrläppchen.'],
      ['i-gel-Größe für 70 kg Erwachsenen?', 'Größe 4 (50–90 kg).'],
      ['Larynxtubus-Größe für 1,85 m?', 'Größe 5 (> 180 cm).'],
      ['Beatmungsvolumen Erwachsene?', 'Ca. 6–8 ml/kg (ca. 500–600 ml), Inspiration 1 s.'],
      ['Sicherste Lagekontrolle?', 'Kapnografie mit Kurve.'],
      ['Normaler etCO₂-Wert?', '35–45 mmHg.'],
      ['Wofür steht DOPES?', 'Dislokation, Obstruktion, Patient/Pneumothorax, Equipment, Stomach.'],
      ['Folge zu hoher Beatmungsdrücke mit Maske?', 'Magenbeatmung → Regurgitation/Aspiration.'],
      ['AF 5, SpO₂ 78 % bei Opioid-Intoxikation – O₂-Maske?', 'Reicht nicht: Beutel-Masken-Beatmung mit O₂, ca. 10/min.']
    ]
  },

  {
    id: 'kommunikation',
    titel: 'Kommunikation & Kultur',
    kurz: 'Kommunikationsmodelle, Teamkommunikation, Sprachbarrieren und kulturelle Aspekte im Einsatz.',
    abschnitte: [
      { h: 'Kommunikationsmodelle', p: [
        '**Vier-Seiten-Modell** (Schulz von Thun): jede Nachricht hat Sachinhalt, Selbstoffenbarung, Beziehung und Appell.',
        'Watzlawick: „Man kann **nicht nicht** kommunizieren“ – auch Körpersprache spricht.',
        '**Aktives Zuhören**: Blickkontakt, nicken, nachfragen, zusammenfassen („Habe ich richtig verstanden, dass …“).',
        'Offene Fragen für die Anamnese, geschlossene Fragen für gezielte Fakten.'
      ]},
      { h: 'Teamkommunikation (CRM)', p: [
        '**Closed-Loop**: Anweisung mit Name → Wiederholung durch Empfänger → Bestätigung („Erledigt“).',
        '**10-für-10**: Bei Problemen 10 Sekunden für 10 Minuten: Was ist das Problem? Was ist der Plan? Wer macht was?',
        'Klare Rollen, Teamleiter benennen, **laut denken**, Bedenken äußern („Speak up“).',
        'Übergabe strukturiert (SINNHAFT, SBAR).'
      ]},
      { h: 'Patient und Angehörige', p: [
        'Vorstellen mit Name und Funktion, auf Augenhöhe gehen, ruhig sprechen.',
        'Maßnahmen ankündigen und erklären.',
        '**4S-Regel**: Sag, dass du da bist – Sprich und hör zu – Suche Körperkontakt – Schirm ab.',
        'Kinder: Eltern einbeziehen, kindgerechte Sprache, Kuscheltier mitnehmen.',
        'Ältere/Schwerhörige: langsam, deutlich, Hörgerät/Brille nutzen.'
      ]},
      { h: 'Multikulturelle Aspekte', p: [
        '**Sprachbarriere**: Dolmetscher, Übersetzungs-App, Bildtafeln. Kinder möglichst **nicht** als Dolmetscher (Belastung, Fehlübersetzung).',
        '**Schamgefühl**: Intimsphäre schützen, möglichst gleichgeschlechtliche Untersuchung anbieten, nur so viel entkleiden wie nötig, Untersuchung erklären.',
        'Familienstrukturen respektieren (Wortführer), aber Patientenwille hat Vorrang.',
        'Schmerzäußerung ist **kulturell unterschiedlich** – nicht als übertrieben abtun, objektivieren.',
        'Religiöse Aspekte: Fasten (z. B. Ramadan → Hypoglykämie, Dehydratation, Medikamentenpause), Ablehnung von Blutprodukten (Zeugen Jehovas), Umgang mit Verstorbenen.',
        'Vorurteile vermeiden – jeder Patient wird individuell betrachtet.'
      ]}
    ],
    karten: [
      ['Vier Seiten einer Nachricht?', 'Sachinhalt, Selbstoffenbarung, Beziehung, Appell (Schulz von Thun).'],
      ['Was ist Closed-Loop-Kommunikation?', 'Anweisung mit Namen → Empfänger wiederholt → Bestätigung nach Ausführung.'],
      ['Was bedeutet 10-für-10?', '10 Sekunden Pause für 10 Minuten bessere Arbeit: Problem, Plan, Verteilung der Aufgaben.'],
      ['Warum Kinder nicht als Dolmetscher?', 'Psychische Belastung, Rollenkonflikt, Fehlübersetzungen bei medizinischen/intimen Themen.'],
      ['Welches Risiko besteht bei Diabetikern im Ramadan?', 'Hypoglykämie und Dehydratation (Fasten, Medikamentenanpassung).']
    ]
  },

  {
    id: 'manv',
    titel: 'MANV-Konzept',
    kurz: 'Massenanfall von Verletzten: erstes Fahrzeug, Sichtung, Kategorien, Strukturen.',
    abschnitte: [
      { h: 'Grundidee', p: [
        'MANV = mehr Patienten als mit den vorhandenen Kräften regulär versorgt werden können.',
        'Wechsel von **individualmedizinischer** zu **Versorgung nach Dringlichkeit**: das Beste für möglichst viele.'
      ]},
      { h: 'Erstes Fahrzeug an der Einsatzstelle', p: [
        '**Nicht** in die Patientenversorgung einsteigen – zuerst **Lage erkunden** und **Führung** übernehmen bis zur Ablösung.',
        '**Erstrückmeldung** an die Leitstelle: Was ist passiert? Wo genau? Wie viele Betroffene (geschätzt)? Gefahren? Was wird nachgefordert? Anfahrtsweg?',
        'Stichwort **MANV** nennen, Ressourcen nachfordern (RTW, NA, LNA, OrgL, Feuerwehr, Polizei).',
        'Fahrzeug so abstellen, dass Zufahrt frei bleibt; Fahrzeugschlüssel stecken lassen.',
        'Dann **Vorsichtung** beginnen.'
      ]},
      { h: 'Sichtungskategorien', tabelle: [
        ['Kategorie', 'Farbe', 'Bedeutung'],
        ['SK I', 'Rot', 'Akute vitale Bedrohung → Sofortbehandlung'],
        ['SK II', 'Gelb', 'Schwer verletzt/erkrankt → aufgeschobene Behandlungsdringlichkeit'],
        ['SK III', 'Grün', 'Leicht verletzt → spätere (ambulante) Behandlung'],
        ['SK IV', 'Blau', 'Ohne Überlebenschance → betreuende (palliative) Versorgung'],
        ['ex', 'Schwarz', 'Tote – Kennzeichnung, Registrierung']
      ]},
      { h: 'Vorsichtung (Prinzip mSTaRT / PRIOR)', p: [
        '**Gehfähig?** → grün, zur Sammelstelle schicken.',
        '**Lebensbedrohliche Blutung?** → sofort stoppen (Tourniquet) → rot.',
        '**Atmung?** Keine nach Freimachen der Atemwege → (keine Überlebenschance / tot).',
        '**Atemfrequenz > 30** → rot.',
        '**Kreislauf**: Radialispuls fehlt oder Rekap > 2 s → rot.',
        '**Befolgt Aufforderungen nicht** → rot.',
        'Sonst → gelb. Welcher Algorithmus genau gilt, legt der Träger fest – regional gültiges Schema verwenden.',
        'Pro Patient nur Sekunden: sichten, kennzeichnen (Anhängekarte), weiter. Nur lebensrettende Sofortmaßnahmen (Blutung stillen, Atemweg, stabile Seitenlage).'
      ]},
      { h: 'Strukturen', p: [
        '**LNA** (Leitender Notarzt) und **OrgL** (Organisatorischer Leiter Rettungsdienst) bilden die Sanitäts-Einsatzleitung.',
        'Räume: Patientenablage → **Behandlungsplatz** → Transport; **Bereitstellungsraum** für Fahrzeuge; Verletztensammelstelle.',
        'Registrierung aller Patienten (Patientenanhängekarte, Nummer).',
        'Kommunikation über Funk diszipliniert, nur Wesentliches.'
      ]}
    ],
    karten: [
      ['Was macht das erste Fahrzeug beim MANV?', 'Lage erkunden, Führung übernehmen, Erstrückmeldung mit Stichwort MANV, nachfordern, dann vorsichten – nicht in die Einzelversorgung einsteigen.'],
      ['Sichtungskategorie SK I?', 'Rot – akute vitale Bedrohung, Sofortbehandlung.'],
      ['Sichtungskategorie SK II?', 'Gelb – schwer verletzt, aufgeschobene Behandlungsdringlichkeit.'],
      ['Sichtungskategorie SK III?', 'Grün – leicht verletzt, spätere Behandlung.'],
      ['Sichtungskategorie SK IV?', 'Blau – ohne Überlebenschance, betreuende Versorgung.'],
      ['Gehfähiger Patient bei Vorsichtung?', 'Grün → zur Sammelstelle.'],
      ['AF > 30 bei Vorsichtung?', 'Rot.'],
      ['Wer bildet die Sanitäts-Einsatzleitung?', 'Leitender Notarzt (LNA) und Organisatorischer Leiter (OrgL).']
    ]
  },

  {
    id: 'spezial',
    titel: 'Adipositas & Dialyse',
    kurz: 'Besonderheiten bei adipösen Patienten und Dialysepatienten: Atemweg, Lagerung, Shunt, Hyperkaliämie.',
    abschnitte: [
      { h: 'Adipositas – Probleme', p: [
        'Definition: BMI **≥ 30 kg/m²** (≥ 40 = Grad III).',
        '**Atmung**: geringe Sauerstoffreserve → schnelle Entsättigung; Flachlagerung verschlechtert die Atmung → Oberkörper hoch.',
        '**Atemweg**: Maskenbeatmung schwierig → doppelter C-Griff, Guedel/Wendl, Rampenlagerung (Ohr auf Höhe Sternum).',
        '**Kreislauf**: passende **RR-Manschette** (zu klein misst falsch hoch), ggf. am Unterarm; EKG-Elektroden schlechter Kontakt.',
        '**Zugang** schwierig → früh an i.o. denken (NA).',
        'Begleiterkrankungen: Diabetes, Hypertonie, Schlafapnoe, Herzinsuffizienz, Thrombose-/LAE-Risiko.'
      ]},
      { h: 'Adipositas – Rettung & Transport', p: [
        '**Früh nachfordern**: Schwerlast-RTW, Feuerwehr (Tragehilfe), Drehleiter.',
        'Belastbarkeit von Trage, Tragestuhl und Vakuummatratze beachten (Herstellerangabe).',
        '**Rückenschonend** arbeiten, genug Personal, Rutschbretter/Tragetücher.',
        'Würde wahren – keine abfälligen Bemerkungen, Sichtschutz.',
        'Reanimation: gleiche Drucktiefe, harter Untergrund, Helferwechsel häufiger.'
      ]},
      { h: 'Dialyse – Grundlagen', p: [
        'Patienten mit terminaler Niereninsuffizienz; meist **Hämodialyse 3× pro Woche** (z. B. Mo/Mi/Fr) über **Shunt** (AV-Fistel am Arm), seltener Peritonealdialyse (Bauchkatheter).',
        'Fragen: Dialyseplan, **letzte Dialyse** (ausgefallen?), Trinkmenge, Restausscheidung, Dialysezentrum.'
      ]},
      { h: 'Shunt-Arm', p: [
        '**Am Shunt-Arm: keine RR-Messung, kein Zugang, keine Stauung, keine Abschnürung, nichts Enges.**',
        'Shunt-Kontrolle: **Schwirren** tasten / Rauschen hören. Fehlt es → Shunt-Verschluss, dringend Klinik.',
        '**Shunt-Blutung**: manuelle Kompression, Druckverband (nicht zu fest, Shunt erhalten). Bei lebensbedrohlicher, unstillbarer Blutung ist ein Tourniquet ultima ratio.'
      ]},
      { h: 'Notfälle bei Dialysepatienten', p: [
        '**Hyperkaliämie** (v. a. nach ausgefallener Dialyse): Muskelschwäche, Bradykardie, Rhythmusstörungen bis Kreislaufstillstand; EKG: **hohe, spitze T-Wellen**, breite QRS → NA, Monitoring.',
        '**Überwässerung** → Lungenödem, Hypertonie, Ödeme: Oberkörper hoch, O₂/CPAP, **keine großzügige Infusion**.',
        '**Hypotonie** nach Dialyse (Flüssigkeitsentzug), Krampf, Schwindel.',
        'Blutungsneigung (Heparin während Dialyse), Infektionen/Sepsis (Shunt, Katheter, Peritonitis bei PD: trübes Dialysat, Bauchschmerz, Fieber).',
        'Zielklinik mit Dialysemöglichkeit; Dialysezentrum informieren.'
      ]}
    ],
    karten: [
      ['Was darfst du am Shunt-Arm nicht?', 'Blutdruck messen, Zugang legen, stauen, abschnüren.'],
      ['Wie prüfst du einen Shunt?', 'Schwirren tasten bzw. Rauschen auskultieren.'],
      ['Typische EKG-Veränderung bei Hyperkaliämie?', 'Hohe, spitze (zeltförmige) T-Wellen, später breite QRS, Bradykardie.'],
      ['Gefahr bei ausgefallener Dialyse?', 'Hyperkaliämie (Rhythmusstörungen, Kreislaufstillstand) und Überwässerung (Lungenödem).'],
      ['Warum bei Adipositas Oberkörperhochlagerung?', 'Flachlagerung drückt Bauchinhalt aufs Zwerchfell → Atmung und Oxygenierung verschlechtern sich, geringe O₂-Reserve.'],
      ['Folge einer zu kleinen RR-Manschette?', 'Falsch hohe Blutdruckwerte.'],
      ['Ab welchem BMI spricht man von Adipositas?', 'BMI ≥ 30 kg/m².']
    ]
  },

  {
    id: 'neuro',
    titel: 'Neuro & Psych',
    kurz: 'Schlaganfall, Krampfanfall, Fieberkrampf, Meningitis, Synkope, Intoxikation, Suizidalität, Psychose, Delir.',
    abschnitte: [
      { h: 'Schlaganfall', p: [
        '**Erste Frage: Wann zuletzt gesund gesehen?** Mit Symptomen aufgewacht → Zeitpunkt des Schlafengehens zählt.',
        'BE-FAST, ABCDE, **Blutzucker** (Hypoglykämie imitiert Schlaganfall).',
        'Oberkörper ca. **30°** hoch, **nichts essen oder trinken** (Schluckstörung), **RR nicht senken** (bis 220/120 tolerieren).',
        'Nach **Blutverdünnern** fragen (Lyse!), Angehörige mitnehmen oder Telefonnummer notieren.',
        '**Stroke Unit voranmelden** mit Zeitfenster. „Time is brain.“ Versorgungszeit vor Ort < 20 min.',
        'Notarzt v. a. bei Bewusstseins- oder Atemstörung – sonst zählt schneller Transport.'
      ]},
      { h: 'Krampfanfall', p: [
        'Während des Anfalls: vor Verletzungen schützen, **nicht festhalten**, nichts in den Mund.',
        'Danach: Atemweg, Seitenlage, O₂, Absaugbereitschaft, Zungenbiss/Einnässen/Verletzungen suchen, **BZ**.',
        '**Status epilepticus**: Anfall > 5 min oder Serie ohne Aufwachen → Benzodiazepin (z. B. Midazolam i.n./i.m./i.v.) nach SOP/NA.',
        'Ursachen: Epilepsie, Hypoglykämie, Alkohol(entzug), SHT, Hirnblutung/-tumor, Eklampsie, Intoxikation, Fieber, Hypoxie.',
        'Erstes Ereignis → immer Klinik.'
      ]},
      { h: 'Fieberkrampf & Meningitis', p: [
        'Fieberkrampf: typisch **6 Monate bis 5 Jahre**, meist kurz, generalisiert.',
        '**Erster Anfall → immer Kinderklinik.** Kompliziert (> 15 min, einseitig, Wiederholung) → NA.',
        'Paracetamol-Zäpfchen nach Gewicht senkt Fieber, **verhindert aber keinen weiteren Krampf**.',
        'Meningitis ausschließen: Nackensteifigkeit (fehlt bei Säuglingen oft), vorgewölbte Fontanelle, **Petechien** (Glastest: bleiben sichtbar), Kind wird nicht richtig wach → FFP2, NA, zügig Klinik.'
      ]},
      { h: 'Intoxikationen', p: [
        '**Eigenschutz** (Spritzen, CO, Gase): CO-Warner mitführen, Handschuhe, Kanülen in Abwurfbehälter.',
        'Opioid: **Miosis**, Atemdepression, Bewusstseinsstörung → beatmen, Naloxon titriert durch NA (Ziel: ausreichende Atmung, nicht hellwach), Re-Narkotisierung → immer Klinik.',
        'Asservieren: Tablettenpackungen, Reste, Erbrochenes. Giftinformationszentrum einbeziehen.',
        'Alkohol: Hypothermie, Hypoglykämie, Aspiration, verschleierte Verletzungen.'
      ]},
      { h: 'Psychiatrische Notfälle', p: [
        '**Suizidalität**: direkt und offen ansprechen („Denken Sie daran, sich das Leben zu nehmen?“) – das erhöht das Risiko nicht. Nicht allein lassen, gefährliche Gegenstände entfernen.',
        '**Akute Psychose/Erregung**: Eigenschutz, Abstand, ruhig, nicht diskutieren über Wahninhalte, Polizei bei Gefahr.',
        '**Delir** (akute Verwirrtheit, schwankend): Ursache suchen – Hypoglykämie, Hypoxie, Infekt, Exsikkose, Medikamente, Entzug.',
        '**Hyperventilation/Panik** ist **Ausschlussdiagnose** – erst organische Ursachen (z. B. Lungenembolie) ausschließen; keine Tütenatmung.',
        'Unterbringung gegen den Willen nur nach **NPsychKG** bei Eigen-/Fremdgefährdung durch psychische Erkrankung – Polizei/Ordnungsbehörde, Arzt.'
      ]}
    ],
    karten: [
      ['Wichtigste Frage beim Schlaganfall?', 'Wann wurde der Patient zuletzt gesund gesehen (Symptombeginn)?'],
      ['Blutdruck beim Schlaganfall senken?', 'Nein – Hypertonie bis ca. 220/120 mmHg tolerieren.'],
      ['Warum beim Schlaganfall BZ messen?', 'Hypoglykämie kann einen Schlaganfall imitieren.'],
      ['Ab wann Status epilepticus?', 'Anfall > 5 Minuten oder Anfallsserie ohne zwischenzeitliches Aufwachen.'],
      ['Altersbereich Fieberkrampf?', 'Ca. 6 Monate bis 5 Jahre.'],
      ['Wie funktioniert der Glastest?', 'Glas fest auf rote Flecken drücken: verschwinden sie, meist harmlos; bleiben sie sichtbar = Petechien → bei Fieber Alarmzeichen Meningokokken-Sepsis.'],
      ['Opioid-Trias?', 'Miosis (Stecknadelpupillen), Atemdepression, Bewusstseinsstörung.'],
      ['Warum nach Naloxon immer Klinik?', 'Naloxon wirkt kürzer als viele Opioide → Re-Narkotisierung.'],
      ['Darf man Suizidgedanken direkt ansprechen?', 'Ja – offen und direkt fragen, das erhöht das Risiko nicht.'],
      ['Ist Hyperventilation eine Arbeitsdiagnose?', 'Nein, Ausschlussdiagnose – zuerst organische Ursachen wie Lungenembolie bedenken.']
    ]
  },

  {
    id: 'deeskalation',
    titel: 'Deeskalation & Eigenschutz',
    kurz: 'Gefahren erkennen, Eigenschutz, Deeskalation, Gewalt im Einsatz, Rückzug.',
    abschnitte: [
      { h: 'Gefahren an der Einsatzstelle (AAAA C EEEE)', tabelle: [
        ['Gefahr', 'Beispiel'],
        ['Atemgifte', 'CO, Rauch, Silogase, Faulgase'],
        ['Angstreaktion', 'Panik, Flucht'],
        ['Ausbreitung', 'Feuer, Gefahrstoffe'],
        ['Atomare Strahlung', 'Radioaktive Stoffe'],
        ['Chemische Stoffe', 'Gefahrgut, ätzende Stoffe'],
        ['Erkrankung/Verletzung', 'Infektionen, Spritzen'],
        ['Explosion', 'Gasgeruch – kein Licht, kein Handy, kein Klingeln'],
        ['Elektrizität', 'Stromunfall, Oberleitung'],
        ['Einsturz', 'Gebäude, Gräben']
      ]},
      { h: 'Eigenschutz', p: [
        '**Eigenschutz vor Fremdschutz** – ein verletzter Helfer hilft niemandem.',
        'CO-Warner beim Betreten mitführen; bei Alarm sofort raus, Feuerwehr.',
        'Persönliche Schutzausrüstung: Handschuhe, Schutzbrille, FFP2/3, Warnweste, Helm.',
        'Bei Gewaltlage: **nicht betreten**, Abstand, auf Polizei warten, Bereitstellung in sicherer Entfernung.',
        'Rückzugsweg immer frei halten, nicht zwischen Täter und Tür stellen.'
      ]},
      { h: 'Warnzeichen für Eskalation', p: [
        'Lauter werden, Beschimpfungen, Drohungen, starrer Blick, geballte Fäuste, Unruhe, Herumlaufen.',
        'Alkohol/Drogen, psychische Erkrankung, Schmerzen, Angst, Kontrollverlust.',
        'Viele Zuschauer, aufgebrachte Angehörige.'
      ]},
      { h: 'Deeskalation', p: [
        '**Abstand** (mind. zwei Armlängen), seitlich stehen, offene Haltung, Hände sichtbar.',
        '**Einer spricht**, ruhig, langsam, kurze Sätze, mit Namen ansprechen.',
        'Gefühle anerkennen („Ich sehe, dass Sie wütend sind“), nicht drohen, nicht provozieren, nicht diskutieren.',
        'Wahlmöglichkeiten anbieten, Kontrolle zurückgeben.',
        'Bei Eskalation: **Rückzug**, Notruf/Polizei (ggf. Notrufknopf), Eigenschutz geht vor.',
        'Nachbereitung: Dokumentation, Meldung, Angebot der **PSNV** (psychosoziale Notfallversorgung) nutzen.'
      ]},
      { h: 'Besondere Lagen', p: [
        'Häusliche Gewalt/Kindesmisshandlung: neutral dokumentieren, Kind in die Kinderklinik, Verdacht klar übergeben, Polizei bei akuter Gefahr (§ 34 StGB).',
        'Messer/Waffe sichtbar: Abstand, Rückzug, Polizei.',
        'Amok/Terror: nicht in den Gefahrenbereich, Anweisungen der Polizei folgen.'
      ]}
    ],
    karten: [
      ['Welchen Abstand bei aggressiven Patienten?', 'Mindestens zwei Armlängen, seitlich, Rückzugsweg frei.'],
      ['Was tun bei CO-Warner-Alarm?', 'Sofort raus, Gefahrenbereich verlassen, Feuerwehr nachfordern.'],
      ['Gasgeruch in der Wohnung – was nicht tun?', 'Kein Licht schalten, nicht klingeln, kein Handy im Gefahrenbereich, keine Funken.'],
      ['Grundregel bei Gewalt?', 'Eigenschutz vor Fremdschutz – Rückzug und Polizei.'],
      ['Wofür steht PSNV?', 'Psychosoziale Notfallversorgung (Unterstützung für Einsatzkräfte und Betroffene).']
    ]
  },

  {
    id: 'recht',
    titel: 'Rechtliches',
    kurz: 'StGB, BGB, StVO und Landesrecht: was du darfst und musst.',
    abschnitte: [
      { h: 'Strafrecht', tabelle: [
        ['Paragraf', 'Inhalt'],
        ['§ 34 StGB – Rechtfertigender Notstand', 'Erlaubt Eingriffe ohne Einwilligung oder Schweigepflichtbruch, wenn dadurch eine größere Gefahr abgewendet wird'],
        ['§ 203 StGB – Schweigepflicht', 'Keine Auskünfte an Nachbarn, Presse, Polizei (ohne Grund); Weitergabe ans Behandlungsteam ist erlaubt'],
        ['§ 138 StGB', 'Nichtanzeige geplanter schwerer Straftaten ist strafbar'],
        ['§ 323c StGB – Unterlassene Hilfeleistung', 'Gilt für jeden; im Dienst zusätzlich Garantenstellung (§ 13 StGB)'],
        ['§§ 223, 229 StGB – Körperverletzung', 'Jede Maßnahme ist rechtlich KV – gerechtfertigt durch Einwilligung, mutmaßlichen Willen oder Notstand'],
        ['§ 239 StGB – Freiheitsberaubung', 'Einwilligungsfähige Patienten nicht gegen ihren Willen mitnehmen']
      ]},
      { h: 'Zivilrecht', p: [
        '**§ 630d BGB – Einwilligung**: einwilligungsfähig = orientiert, nicht intoxikiert, versteht die Folgen. Sonst im Notfall **mutmaßlicher Wille**.',
        '**§ 1827 BGB – Patientenverfügung** (früher § 1901a): gültige Verfügung beachten; Betreuer/Vorsorgebevollmächtigte entscheiden für den Patienten.'
      ]},
      { h: 'Straßenverkehr', p: [
        '**§ 35 StVO – Sonderrechte („ich darf“)**: Befreiung von Verkehrsregeln bei höchster Eile, aber unter Berücksichtigung der öffentlichen Sicherheit. Defensiv fahren, an Kreuzungen fast anhalten – bei Unfall haftest du mit.',
        '**§ 38 StVO – Wegerecht („die anderen müssen“)**: nur mit **Blaulicht und Martinshorn** zusammen. Blaulicht allein ist nur Warnung.'
      ]},
      { h: 'Landesrecht Niedersachsen', p: [
        '**NRettDG**: Niedersächsisches Rettungsdienstgesetz – regelt den Rettungsdienst.',
        '**NPsychKG**: Hilfen und Schutzmaßnahmen bei psychischer Erkrankung mit Eigen-/Fremdgefährdung → Polizei/Ordnungsbehörde.',
        'Deine konkreten Kompetenzen regelt die **RS-Plus-Leitlinie** (Aurich, Leer, Wittmund).'
      ]},
      { h: 'Kurzfälle', p: [
        'Wacher, orientierter Patient verweigert Transport bei Brustschmerz → aufklären (auch Tod), NA nachfordern, dokumentieren, Unterschrift + Zeuge, **nicht gegen seinen Willen** mitnehmen.',
        'Betrunkener mit Kopfplatzwunde → nicht einwilligungsfähig → mutmaßlicher Wille, Transport; bei Aggression Abstand und Polizei.',
        'Nachbar fragt nach dem Patienten → **nichts sagen**, auch nicht, in welche Klinik (§ 203).',
        'Verdacht Kindesmisshandlung → Schweigepflichtbruch nach § 34 StGB erlaubt.'
      ]}
    ],
    karten: [
      ['§ 34 StGB?', 'Rechtfertigender Notstand – Eingriff/Schweigepflichtbruch erlaubt, wenn größere Gefahr abgewendet wird.'],
      ['§ 203 StGB?', 'Verletzung von Privatgeheimnissen – Schweigepflicht.'],
      ['§ 323c StGB?', 'Unterlassene Hilfeleistung.'],
      ['§ 13 StGB im Rettungsdienst?', 'Garantenstellung – Nichthandeln kann als Körperverletzung/Tötung durch Unterlassen gewertet werden.'],
      ['§ 239 StGB?', 'Freiheitsberaubung – einwilligungsfähige Patienten nicht gegen ihren Willen transportieren.'],
      ['§ 630d BGB?', 'Einwilligung; sonst mutmaßlicher Wille.'],
      ['§ 1827 BGB?', 'Patientenverfügung (früher § 1901a).'],
      ['§ 35 vs. § 38 StVO?', '§ 35 Sonderrechte („ich darf“), § 38 Wegerecht („die anderen müssen“, nur Blaulicht + Horn).'],
      ['Was ist das NPsychKG?', 'Niedersächsisches Gesetz über Hilfen und Schutzmaßnahmen für psychisch Kranke (Unterbringung bei Eigen-/Fremdgefährdung).'],
      ['Wann ist ein Patient einwilligungsfähig?', 'Orientiert, nicht intoxikiert, versteht Tragweite und Folgen seiner Entscheidung.']
    ]
  },

  {
    id: 'physio',
    titel: 'Physiologie-Basics',
    kurz: 'Herz, Kreislauf, Atmung und Blut – das Wissen hinter den Vitalwerten.',
    abschnitte: [
      { h: 'Herz', p: [
        '**Herzzeitvolumen (HZV) = Schlagvolumen × Herzfrequenz** (ca. 70 ml × 70/min ≈ 5 l/min).',
        'Systole = Kontraktion/Auswurf, Diastole = Füllung. In der Diastole werden die **Koronarien** durchblutet → hohe Herzfrequenz verkürzt die Koronarperfusion.',
        '**Frank-Starling**: mehr Füllung (Vorlast) → stärkere Kontraktion (bis zu einer Grenze).',
        'Sympathikus: HF ↑, Kontraktilität ↑. Parasympathikus (N. vagus): HF ↓, Überleitung ↓.'
      ]},
      { h: 'Kreislauf & Blutdruck', p: [
        '**Blutdruck = HZV × peripherer Widerstand.**',
        'MAP (mittlerer arterieller Druck) ≈ diastolisch + 1/3 Amplitude; Ziel meist **≥ 65 mmHg**.',
        'Kurzfristige Regulation über **Barorezeptoren** (Aortenbogen, Karotissinus) → Sympathikus/Vagus.',
        'Mittel-/langfristig: RAAS (Renin-Angiotensin-Aldosteron), ADH, Niere.',
        'Schock = Missverhältnis von Sauerstoffangebot und -bedarf der Gewebe → Zentralisation (Haut kalt/blass, Tachykardie), später Laktatazidose.'
      ]},
      { h: 'Atmung', p: [
        'Atemzugvolumen ca. **500 ml** (davon ~150 ml Totraum), AF Erwachsene **12–20/min** → Atemminutenvolumen ca. 6–8 l.',
        'Atemantrieb v. a. über **CO₂** (pH) – bei manchen COPD-Patienten zusätzlich über O₂-Mangel.',
        'Gasaustausch in den Alveolen durch **Diffusion**; Störung durch Ödem (Lungenödem), Perfusionsausfall (Lungenembolie), Ventilationsausfall (Asthma, Pneumothorax).',
        'Hyperventilation → CO₂ ↓ → Alkalose → Kribbeln, Pfötchenstellung.'
      ]},
      { h: 'Blut', p: [
        'Blutvolumen ca. **7–8 % des Körpergewichts** (≈ 5–6 l beim Erwachsenen).',
        'Erythrozyten: O₂-Transport (Hämoglobin). Leukozyten: Abwehr. Thrombozyten: Blutstillung.',
        'Pulsoxymetrie misst die O₂-Sättigung des Hämoglobins – **CO-Vergiftung** zeigt falsch normale Werte!',
        'Gerinnung braucht Wärme und normalen pH → deshalb ist Hypothermie beim Trauma so gefährlich.'
      ]},
      { h: 'Normwerte Erwachsene', tabelle: [
        ['Parameter', 'Normbereich'],
        ['Herzfrequenz', '60–100/min'],
        ['Blutdruck', 'ca. 120/80 mmHg'],
        ['Atemfrequenz', '12–20/min'],
        ['SpO₂', '94–98 % (COPD 88–92 %)'],
        ['Blutzucker (nüchtern)', '70–100 mg/dl'],
        ['Temperatur', '36,5–37,5 °C'],
        ['etCO₂', '35–45 mmHg'],
        ['Rekapillarisierung', '< 2 s']
      ]}
    ],
    karten: [
      ['Formel Herzzeitvolumen?', 'Schlagvolumen × Herzfrequenz (≈ 5 l/min).'],
      ['Formel Blutdruck?', 'Herzzeitvolumen × peripherer Gefäßwiderstand.'],
      ['Wann werden die Koronarien durchblutet?', 'Hauptsächlich in der Diastole.'],
      ['Blutvolumen Erwachsener?', 'Ca. 7–8 % des Körpergewichts (≈ 5–6 l).'],
      ['Warum ist die SpO₂ bei CO-Vergiftung unzuverlässig?', 'CO-Hämoglobin wird vom Pulsoxymeter als oxygeniert gemessen → falsch normale Werte.'],
      ['Normale Atemfrequenz Erwachsene?', '12–20/min.'],
      ['Wichtigster Atemantrieb?', 'CO₂-Partialdruck (pH im Liquor).']
    ]
  }
];
