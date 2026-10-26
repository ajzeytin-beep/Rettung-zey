// Fallbeispiele aus dem Simulationstraining. schritte: Frage → Musterantwort (zum Aufdecken)
window.RS = window.RS || {};

RS.faelle = [
  { id: 'f1', titel: 'Sturz im Bad', diagnose: 'Synkope mit symptomatischer Bradykardie', kat: 'Internistisch',
    lage: '78-jähriger Mann ist im Bad umgekippt. Wach, aber verlangsamt, Platzwunde an der Stirn, vorher schwindelig. Medikamente: Marcumar, Bisoprolol.',
    werte: { RR: '95/60', HF: '42 unregelmäßig', SpO2: '94 %', BZ: '110 mg/dl' },
    schritte: [
      { q: 'Was machst du beim Betreten und als Erstes am Patienten?', a: 'Eigenschutz, CO-Warner mitführen. HWS manuell stabilisieren (Sturz mit Kopfverletzung), xABCDE, Blutzucker.' },
      { q: 'Wie bewertest du Puls und Blutdruck?', a: 'Symptomatische Bradykardie mit Hypotonie und Synkope. Der Betablocker verhindert die Gegenregulation – fragen, ob Tabletten doppelt genommen wurden.' },
      { q: 'Wen forderst du nach, welche Diagnostik?', a: 'RTW und Notarzt nachfordern, 12-Kanal-EKG.' },
      { q: 'Lagerung?', a: 'Flach lagern, nicht hinsetzen – Kreislauf geht vor Kopfhochlagerung.' },
      { q: 'Welche Bedeutung hat Marcumar?', a: 'Kopfverletzung unter Antikoagulation → immer Klinik mit CT.' }
    ],
    fehler: ['Patient hingesetzt', 'Betablocker als Ursache nicht bedacht', 'CT-Indikation bei Marcumar vergessen'] },

  { id: 'f2', titel: 'Krampfanfall im Supermarkt', diagnose: 'Hypoglykämie', kat: 'Internistisch',
    lage: '25-jährige Frau, Krampf ist vorbei, sie atmet und reagiert nur auf Schmerz.',
    werte: { AVPU: 'P', SpO2: '93 %', HF: '110', RR: '130/80', BZ: '42 mg/dl' },
    schritte: [
      { q: 'Erste Schritte?', a: 'Notarzt nachfordern (AVPU P). Fremdanamnese: Dauer, Epilepsie, Diabetes, Drogen, Schwangerschaft.' },
      { q: 'Was suchst du bei xABCDE gezielt?', a: 'Zungenbiss, Blut, Erbrochenes – Absaugbereitschaft. Diabetikerausweis, Insulinpumpe.' },
      { q: 'Lagerung und Sauerstoff?', a: 'Stabile Seitenlage, Sauerstoff.' },
      { q: 'Darf sie Traubenzucker in den Mund bekommen?', a: 'Nein – bei Bewusstseinsstörung nichts per os (Aspiration).' },
      { q: 'Wie wird die Hypoglykämie behandelt?', a: 'Zugang und G40 nur nach Leitlinie/Freigabe NA, über sicheren Zugang mit laufender Infusion, danach BZ-Kontrolle.' },
      { q: 'Sie ist wieder wach und will nicht mit. Was jetzt?', a: 'Einwilligungsfähigkeit prüfen, an absichtliche Überdosis denken, Gefahr erneuter Unterzuckerung erklären, sofort essen, nicht allein lassen, BZ vor Abfahrt, NA aufklären lassen, Unterschrift + Zeuge.' }
    ],
    fehler: ['Glukose oral bei Bewusstseinsstörung', 'Transportverweigerung unvollständig dokumentiert'] },

  { id: 'f3', titel: 'Brustschmerz', diagnose: 'Hinterwand-STEMI', kat: 'Internistisch',
    lage: '58-jähriger Mann, Druck in der Brust seit 30 Minuten, Ausstrahlung in den linken Arm, blass, kaltschweißig. ST-Hebungen in II, III, aVF.',
    werte: { RR: '100/65', HF: '54', SpO2: '95 %' },
    schritte: [
      { q: 'Sofortmaßnahmen?', a: 'Notarzt und RTW nachfordern, Patient darf nicht laufen, Oberkörper hoch, 12-Kanal-EKG in 10 Minuten, Defi griffbereit.' },
      { q: 'Wie interpretierst du das EKG und den Puls?', a: 'II, III, aVF = Hinterwandinfarkt. Bradykardie passt – die rechte Kranzarterie versorgt oft den AV-Knoten.' },
      { q: 'Sauerstoff?', a: 'Nein – SpO₂ 95 %, Sauerstoff nur unter 90 %.' },
      { q: 'Nitro?', a: 'Nein: grenzwertiger RR und Verdacht auf Rechtsherzbeteiligung. Trotzdem nach Potenzmitteln fragen.' },
      { q: 'Zielklinik?', a: 'Klinik mit Herzkatheterlabor (HKL), vorher anmelden.' }
    ],
    uebergabe: '„Alle mal herhören. Patient männlich, 57 Jahre. Vor 30 Minuten beim Aufstehen beginnende Brustschmerzen mit Ausstrahlung in den linken Arm, blass und kaltschweißig. A frei. B: Atemfrequenz 18, SpO₂ 95 %, beidseits vesikuläres Atemgeräusch. C: hämodynamisch grenzwertig, RR 100/60, Bradykardie 54 pro Minute. Im 12-Kanal ST-Hebungen in II, III und aVF. D: neurologisch unauffällig, BZ 80 mg/dl. E: unauffällig, 36,6 °C. Maßnahmen: PVK 20G Handrücken links, Infusion läuft. ASS 250 mg und Heparin 5000 IE vorbereitet, noch nicht gegeben. Kein Nitro wegen Hinterwand und grenzwertigem Blutdruck. Anamnese: keine Allergien, keine Dauermedikation, keine Vorerkrankungen, kein Asthma. Letzte Mahlzeit vor zwei Stunden. Raucher, Vater an Herzinfarkt verstorben. Fazit: Verdacht auf Hinterwand-STEMI, HKL ist angemeldet. Gibt es noch Fragen?“',
    fehler: ['Atemfrequenz und EKG-Befund in der Übergabe vergessen', 'Zahlendreher (Puls, RR, Zugangsseite)', 'Teamfrage vergessen'] },

  { id: 'f4', titel: 'Reißender Schmerz', diagnose: 'Aortendissektion', kat: 'Internistisch',
    lage: '68-jähriger Mann mit bekanntem Bluthochdruck bekommt beim Rasenmähen plötzlich einen reißenden Brustschmerz, der zwischen die Schulterblätter wandert. Blass, unruhig.',
    werte: { 'RR rechts': '170/95', 'RR links': '120/70' },
    schritte: [
      { q: 'Erste Maßnahmen?', a: 'RTW und Notarzt nachfordern, Patient nicht bewegen, beruhigen.' },
      { q: 'Welche gezielten Untersuchungen?', a: 'RR an beiden Armen (ab 20 mmHg Differenz verdächtig), Pulse beidseits inkl. Leiste und Füße. D: BE-FAST, Beine auf Lähmung prüfen.' },
      { q: 'Welche Medikamente sind tabu?', a: 'Kein ASS, kein Heparin.' },
      { q: 'Zielklinik und Meldung?', a: 'Klinik mit Herz-/Gefäßchirurgie. „Verdacht auf Aortendissektion, RR-Differenz 50 mmHg, rechts 170/95, links 120/70, kein ASS gegeben.“' }
    ],
    fehler: ['ASS gegeben', 'RR nur einseitig gemessen'] },

  { id: 'f6', titel: 'Radfahrer angefahren', diagnose: 'Polytrauma mit hämorrhagischem Schock und Spannungspneu', kat: 'Trauma',
    lage: 'Radfahrer, ca. 40 Jahre, auf der Landstraße von einem Auto erfasst, liegt am Fahrbahnrand. Pulsierende Blutung am Oberschenkel. Haut blass und kalt. Im Verlauf: links kein Atemgeräusch, zunehmende Atemnot.',
    werte: { AF: '28', SpO2: '91 %', HF: '130', RR: '90/55' },
    schritte: [
      { q: 'Eigenschutz und Rückmeldung?', a: 'Fahrzeug schräg vor die Unfallstelle, Blaulicht + Warnblinker, Warnweste. RTW, Notarzt und Polizei nachfordern, nach weiteren Verletzten fragen (Autofahrer).' },
      { q: 'Was zuerst – und wie?', a: 'Kleines c: Arterielle Blutung sofort mit der Hand komprimieren, dann direkt Tourniquet (kein Druckverband-Versuch). Handbreit oberhalb oder ganz oben am Oberschenkel, festziehen bis Blutung steht, Uhrzeit notieren.' },
      { q: 'A und B?', a: 'Kopf manuell stabilisieren, Helm zu zweit abnehmen, Esmarch ohne Überstrecken. 15 l O₂ über Maske, Thorax ansehen, abtasten, beidseits abhören.' },
      { q: 'Wie beurteilst du den Kreislauf?', a: 'Hämorrhagischer Schock, Schockindex 130/90 ≈ 1,4. Permissive Hypotonie: syst. 80–90 mmHg (bei SHT höher). Zugang nach Leitlinie/NA. Wärmeerhalt (tödliche Trias).' },
      { q: 'Links kein Atemgeräusch, Atemnot nimmt zu. Was denkst du, was meldest du?', a: 'Spannungspneumothorax. „Verdacht auf Spannungspneu links, kein Atemgeräusch links, zunehmende Dyspnoe, Sättigung fallend, bitte Entlastung vorbereiten.“ Monaldi 2.–3. ICR MCL, Bülau 4.–5. ICR vordere/mittlere Axillarlinie, Oberrand der Rippe.' }
    ],
    fehler: ['Druckverband vor Tourniquet', 'Polizei vergessen', 'Monaldi und Bülau verwechselt'] },

  { id: 'f7', titel: 'Nussallergie im Restaurant', diagnose: 'Anaphylaxie mit Atemwegsbeteiligung', kat: 'Internistisch',
    lage: '32-jährige Frau hat vor 10 Minuten ein Gericht mit Nüssen gegessen. Quaddeln am ganzen Körper, geschwollenes Gesicht, Heiserkeit, hörbare Atemnot. Begleiter hält einen Adrenalin-Pen.',
    werte: {},
    schritte: [
      { q: 'Wie schwer ist die Reaktion?', a: 'Schwere Anaphylaxie mit Atemwegsbeteiligung (Heiserkeit, Stridor).' },
      { q: 'Was ist die wichtigste Maßnahme?', a: 'Adrenalin-Pen sofort, Außenseite Oberschenkel, auch durch die Hose, je nach Modell 3–10 s halten. Im Zweifel selbst setzen (§ 34 StGB). Uhrzeit notieren. Keine Besserung: zweiter Pen nach 5–10 min.' },
      { q: 'Nachforderung und weitere Maßnahmen?', a: 'NA + RTW: „Anaphylaxie mit Atemwegsbeteiligung“. Hochdosiert O₂, Allergenzufuhr stoppen.' },
      { q: 'Lagerung?', a: 'Atemnot = sitzend. Kreislaufversagen = flach, Beine hoch. Beides = halb liegend. Nie plötzlich aufstehen lassen.' },
      { q: 'Sie fühlt sich besser und will nach Hause. Argumente?', a: 'Adrenalin wirkt nur 10–20 min, Allergen noch im Körper, biphasische Reaktion Stunden später möglich, Überwachung 6–24 h.' }
    ],
    fehler: ['Zu zögerlich mit dem Pen', 'Bei Atemnot hingelegt', 'Grund für Klinik nicht gewusst'] },

  { id: 'f8', titel: 'Kleinkind mit bellendem Husten', diagnose: 'Pseudokrupp', kat: 'Pädiatrie',
    lage: '2-jähriger Junge, nachts um 2 Uhr aufgewacht mit bellendem Husten, inspiratorischem Stridor und Heiserkeit. Tagsüber Schnupfen, leichtes Fieber. Mutter sehr aufgelöst.',
    werte: {},
    schritte: [
      { q: 'Was ist die wichtigste Therapie?', a: 'Kind beruhigen: auf Mamas Schoß lassen, keine unnötigen Maßnahmen, nicht in den Rachen schauen. Mutter beruhigen – ihre Angst überträgt sich.' },
      { q: 'Weitere Maßnahmen?', a: 'Kühle, feuchte Luft (offenes Fenster). O₂ nur bei niedriger SpO₂, locker vorhalten. Bei Stridor in Ruhe NA + RTW.' },
      { q: 'Welche Medikamente (NA/Leitlinie)?', a: 'Vernebeltes Adrenalin, Prednisolon-Zäpfchen. Nicht Salbutamol/Atrovent (untere Atemwege).' },
      { q: 'Welche Differenzialdiagnosen musst du kennen?', a: 'Epiglottitis (hohes Fieber, kloßige Stimme, Speichelfluss, sitzt vorgebeugt – nie hinlegen, nicht in den Rachen schauen) und Fremdkörperaspiration (plötzlich beim Spielen/Essen, kein Fieber).' }
    ],
    fehler: ['Salbutamol/Atrovent statt Adrenalin', 'O₂ routinemäßig', 'Epiglottitis nicht gekannt'] },

  { id: 'f9', titel: 'Zusammenbruch im Garten', diagnose: 'Kreislaufstillstand', kat: 'Reanimation',
    lage: 'Mann, ca. 60 Jahre, im Garten zusammengebrochen, liegt auf dem Rücken, keine Reaktion auf Ansprache und Trapeziusgriff. Die Ehefrau hat noch nichts gemacht.',
    werte: { AVPU: 'U' },
    schritte: [
      { q: 'Was prüfst du, wie lange?', a: 'Kopf überstrecken, max. 10 s sehen, hören, fühlen. Keine normale Atmung oder Schnappatmung = Reanimation.' },
      { q: 'Wen alarmierst du?', a: 'Sofort RTW + NA, Stichwort „Reanimation“ (kann der Kollege machen).' },
      { q: 'Wie drückst du?', a: 'Oberkörper frei, Mitte Brustkorb, 5–6 cm, 100–120/min, vollständig entlasten.' },
      { q: 'AED – was ist zu beachten?', a: 'Pads ohne Druckpause kleben. Schockbar: VF, pVT. Nach dem Schock sofort weiterdrücken, kein Pulscheck. Alle 2 min Analyse und Helferwechsel.' },
      { q: 'Beatmung?', a: '30 : 2 mit Beutel und 15 l O₂, bis i-gel liegt, dann durchgehend drücken und 10 Beatmungen/min.' },
      { q: 'Monitor zeigt geordneten Rhythmus. Was tust du?', a: 'Puls tasten (Karotis, max. 10 s), Lebenszeichen. Kein Puls = PEA → weiterdrücken. Währenddessen 4 H und HITS bedenken.' },
      { q: 'ROSC – und dann?', a: 'xABCDE, Monitoring, 12-Kanal-EKG, Ziel SpO₂ 94–98 %, RR syst. > 100 mmHg.' }
    ],
    fehler: ['Atemkontrolle und Nachforderung vergessen', 'Geordneten Rhythmus mit ROSC gleichgesetzt', '4 H/HITS erst nach ROSC'] },

  { id: 'f10', titel: 'Verwirrt beim Frühstück', diagnose: 'Schlaganfall', kat: 'Neurologie',
    lage: '72-jährige Frau, um 8 Uhr beim Frühstück plötzlich verwirrt, verwaschene Sprache, rechter Arm schlaff. Gestern 22 Uhr normal, beim Aufstehen um 7 Uhr laut Ehemann noch normal.',
    werte: {},
    schritte: [
      { q: 'Was ist die erste Frage?', a: 'Wann zuletzt gesund gesehen? Hier 7 Uhr. (Mit Symptomen aufgewacht → Zeitpunkt des Schlafengehens.)' },
      { q: 'Welche Untersuchungen?', a: 'BE-FAST, xABCDE, v. a. Blutzucker – Hypoglykämie kann Schlaganfall imitieren.' },
      { q: 'Lagerung, Essen, Blutdruck?', a: 'Oberkörper ca. 30° hoch, nichts essen/trinken (Schluckstörung), Blutdruck nicht senken.' },
      { q: 'Was klärst du für die Klinik?', a: 'Blutverdünner (Lyse!), Ehemann mitnehmen oder Telefonnummer notieren, Stroke Unit voranmelden mit Zeitfenster.' },
      { q: 'Notarzt?', a: 'Nur bei Bewusstseins- oder Atemstörung – sonst zählt der schnelle Transport. „Time is brain.“' }
    ],
    fehler: ['ABCDE und BZ übersprungen', 'Voranmeldung und Angehörigen-Kontakt vergessen'] },

  { id: 'f11', titel: 'Atemnot nach Thailand-Urlaub', diagnose: 'Lungenembolie', kat: 'Internistisch',
    lage: '34-jährige Frau, vor einer Woche aus Thailand zurück. Seit 1 Stunde plötzlich Atemnot, atemabhängiger Brustschmerz, unruhig. Ehemann: „Panikattacke“. Rechte Wade geschwollen und druckschmerzhaft. Pille, Raucherin.',
    werte: { AF: '28', SpO2: '89 %', HF: '118 (Sinustachykardie)', RR: '105/70' },
    schritte: [
      { q: 'Verdachtsdiagnose?', a: 'TVT → Lungenembolie (Langstreckenflug, Pille, Rauchen). Hyperventilation ist Ausschlussdiagnose – „Panikattacke“ nicht übernehmen.' },
      { q: 'Sauerstoff – und CPAP?', a: 'O₂ hochdosiert über Maske mit Reservoir. Kein CPAP – Überdruck belastet das rechte Herz → RR-Absturz.' },
      { q: 'Lagerung und Transport?', a: 'Oberkörper hoch, nicht laufen lassen, Bein nicht massieren.' },
      { q: 'Nachforderung, Überwachung, Ziel?', a: 'NA + RTW (gibt meist Heparin). RR engmaschig – fällt er: instabile LAE, Reanimationsgefahr, Lyse. Klinik mit CT und Intensiv, voranmelden.' }
    ],
    fehler: ['CPAP vorgeschlagen', 'LAE erst auf Nachfrage erkannt', 'Patientin laufen lassen'] },

  { id: 'f12', titel: 'Nächtliche Atemnot', diagnose: 'Kardiales Lungenödem', kat: 'Internistisch',
    lage: '79-jähriger Mann, 3 Uhr nachts, sitzt auf der Bettkante, kann nicht liegen, Brodeln hörbar, dicke Unterschenkel, nimmt Wassertabletten. Kaltschweißig, schaumiger Auswurf.',
    werte: { AF: '32', SpO2: '84 %', HF: '108 unregelmäßig', RR: '185/100' },
    schritte: [
      { q: 'Verdacht?', a: 'Akut dekompensierte Herzinsuffizienz mit Lungenödem.' },
      { q: 'Lagerung und Transport?', a: 'Sitzend, Beine tief. Tragen statt laufen.' },
      { q: 'Atmung?', a: 'O₂ hochdosiert, CPAP ist hier die Therapie (Gegensatz zur LAE!).' },
      { q: 'Was macht der Notarzt typischerweise?', a: 'Nitro (bei hohem RR), Furosemid.' },
      { q: 'EKG und Ziel?', a: '12-Kanal: unregelmäßiger Puls → Vorhofflimmern? Infarkt als Auslöser? Ziel: Kardiologie mit Intensiv, bei ACS HKL – keine Herzchirurgie.' }
    ],
    fehler: ['Herzchirurgie statt Kardiologie', 'CPAP nicht genannt', 'O₂ zu zurückhaltend'] },

  { id: 'f13', titel: 'Festival bei 34 °C', diagnose: 'Hitzschlag', kat: 'Internistisch',
    lage: '19-jähriger Festivalbesucher, den ganzen Tag in der Sonne getanzt, Bier. Verwirrt/somnolent, einmal erbrochen. Haut heiß und trocken.',
    werte: { AF: '26', SpO2: '96 %', HF: '132', RR: '95/55', Temp: '40,8 °C', BZ: '95 mg/dl' },
    schritte: [
      { q: 'Verdacht und Abgrenzung?', a: 'Hitzschlag (Bewusstseinsstörung + heiße, trockene Haut) – lebensgefährlich, anders als Hitzeerschöpfung.' },
      { q: 'Sofortmaßnahmen?', a: 'Raus aus der Sonne in kühle Umgebung (RTW), NA + RTW nachfordern.' },
      { q: 'Wie kühlst du?', a: 'Aktiv: entkleiden, Haut befeuchten + fächeln, Kühlpacks an Hals, Achseln, Leisten (nicht direkt auf die Haut).' },
      { q: 'Was ist falsch?', a: 'Fiebermittel; Trinken bei Eintrübung. Zugang + gekühlte VEL nur über NA. Seitenlage bei Eintrübung, Krampfgefahr.' }
    ],
    fehler: ['Zugang als erste Maßnahme (Kompetenz!)', 'Aktive Kühlung und Nachforderung vergessen'] },

  { id: 'f14', titel: 'Bewusstlos auf dem Sofa', diagnose: 'Opioid-Intoxikation', kat: 'Neurologie',
    lage: '27-jähriger Mann bewusstlos, auf dem Tisch Löffel, Feuerzeug, Spritze. Schnarchende, langsame Atmung, Zyanose, stecknadelkopfgroße Pupillen.',
    werte: { AF: '5', SpO2: '78 %', HF: '52', RR: '100/60', BZ: '102 mg/dl' },
    schritte: [
      { q: 'Was zuerst?', a: 'Eigenschutz: Handschuhe, Spritze in Abwurfbehälter, Vorsicht bei Taschen.' },
      { q: 'Atemweg?', a: 'NA nachfordern, Atemweg freimachen (Überstrecken/Esmarch, Guedel/Wendl), Absaugbereitschaft.' },
      { q: 'Reicht eine O₂-Maske?', a: 'Nein – bei AF 5 Beutel-Masken-Beatmung mit O₂, ca. 10/min.' },
      { q: 'Was macht der Notarzt, worauf achten?', a: 'Naloxon langsam titriert – Ziel ausreichende Atmung, nicht hellwach (Entzug, Aggression). Re-Narkotisierung möglich → immer Klinik.' }
    ],
    fehler: ['Eigenschutz vergessen', 'Bei AF 5 nur O₂-Maske'] },

  { id: 'f15', titel: 'Kleinkind hat gezuckt', diagnose: 'Fieberkrampf', kat: 'Pädiatrie',
    lage: '18 Monate alter Junge, erster Krampfanfall ca. 2 Minuten, bei Ankunft vorbei. Schläfrig, weckbar, Kopf heiß, Infekt seit gestern.',
    werte: {},
    schritte: [
      { q: 'Verdacht?', a: 'Fieberkrampf (typisch 6 Monate bis 5 Jahre).' },
      { q: 'Maßnahmen?', a: 'xABCDE, Temperatur, Blutzucker, entkleiden, Mutter beruhigen und mitnehmen.' },
      { q: 'Klinik?', a: 'Erster Anfall → immer Kinderklinik.' },
      { q: 'Paracetamol?', a: 'Nur als Zäpfchen nach Gewicht und SOP/NA – verhindert keinen weiteren Krampf.' },
      { q: 'Woran musst du unbedingt denken?', a: 'Meningitis: Nackensteifigkeit (fehlt oft), vorgewölbte Fontanelle, Petechien (Glastest!), Kind wird nicht richtig wach → FFP2 + NA. NA auch bei kompliziertem Fieberkrampf (> 15 min, einseitig, Wiederholung).' }
    ],
    fehler: ['Paracetamol als Hauptmaßnahme', 'Meningitis nicht bedacht'] },

  { id: 'f5', titel: 'Rechtliche Kurzfälle', diagnose: 'Recht im Einsatz', kat: 'Recht',
    lage: 'Vier kurze Situationen aus dem Alltag auf dem N-KTW.',
    werte: {},
    schritte: [
      { q: 'Wacher, orientierter Patient mit Brustschmerz verweigert den Transport.', a: 'Einwilligungsfähigkeit prüfen, deutlich aufklären (auch über Tod), NA nachfordern, dokumentieren mit Unterschrift und Zeuge. Nicht gegen seinen Willen mitnehmen (§ 239 StGB).' },
      { q: 'Betrunkener mit Kopfplatzwunde will nicht mit.', a: 'Nicht einwilligungsfähig → mutmaßlicher Wille, Transport. Alkohol kann Hirnblutung verschleiern. Bei Aggression: Abstand, Polizei.' },
      { q: 'Verdacht auf Kindesmisshandlung.', a: 'Neutral dokumentieren, ruhig bleiben, keine Vorwürfe, Kind in die Kinderklinik, Verdacht bei Übergabe klar benennen, Vorgesetzten informieren. Polizei bei akuter Gefahr. Schweigepflichtbruch nach § 34 StGB erlaubt.' },
      { q: 'Nachbar fragt nach dem Patienten.', a: 'Gar nichts sagen – auch nicht die Klinik oder ob er Patient ist (§ 203 StGB).' }
    ],
    fehler: [] },
  // ---------- Erweiterung ----------
  { id: 'f16', titel: 'Atemnot beim Treppensteigen', diagnose: 'Schwerer Asthmaanfall', kat: 'Internistisch',
    lage: '24-jährige Frau mit bekanntem Asthma, nach Erkältung seit Stunden zunehmende Atemnot. Spray hilft nicht mehr. Sitzt vornübergebeugt, stützt die Arme auf, spricht nur in kurzen Satzteilen.',
    werte: { AF: '30', SpO2: '89 %', HF: '124', RR: '135/85' },
    schritte: [
      { q: 'Wie schwer ist der Anfall?', a: 'Schwer: Sprechdyspnoe, AF ≥ 25, HF > 110, SpO₂ < 92 %. Achte auf „silent chest“, Erschöpfung und Bewusstseinsminderung – dann lebensbedrohlich.' },
      { q: 'Lagerung und Basismaßnahmen?', a: 'Sitzend (Kutschersitz), beengende Kleidung öffnen, Lippenbremse anleiten, beruhigen. O₂ titriert, Ziel 94–98 %.' },
      { q: 'Wen forderst du nach?', a: 'Notarzt (schwere Atemnot) und RTW.' },
      { q: 'Welche Medikamente nach Leitlinie/NA?', a: 'Salbutamol 2,5–5 mg vernebelt, dazu Ipratropium 0,5 mg; Prednisolon 50–100 mg i.v. Bei Verschlechterung NA: Reproterol i.v., Magnesium 2 g.' },
      { q: 'Was beobachtest du im Verlauf?', a: 'AF, SpO₂, Sprechfähigkeit, Auskultation, Herzfrequenz (Salbutamol → Tachykardie), Erschöpfung. Zunehmende Müdigkeit ist ein Alarmzeichen, keine Besserung.' }
    ],
    fehler: ['Silent chest als Besserung gedeutet', 'Patientin hingelegt', 'Ipratropium als Vasodilatator bezeichnet'] },

  { id: 'f17', titel: 'Raucher mit Infekt', diagnose: 'COPD-Exazerbation', kat: 'Internistisch',
    lage: '71-jähriger Mann, langjähriger Raucher mit bekannter COPD und Heim-Inhalatoren. Seit 3 Tagen mehr Husten, gelblicher Auswurf, heute deutlich mehr Luftnot. Fassförmiger Thorax, Lippenbremse.',
    werte: { AF: '26', SpO2: '84 %', HF: '102', RR: '150/90', Temp: '38,1 °C' },
    schritte: [
      { q: 'Welche Ziel-SpO₂ gilt?', a: '88–92 %. Sauerstoff nicht weglassen, aber titrieren (z. B. Nasenbrille 1–2 l oder Venturi-Maske) – zu viel O₂ kann bei manchen COPD-Patienten zu CO₂-Anstieg führen.' },
      { q: 'Worauf achtest du bei hohem O₂-Bedarf?', a: 'Zunehmende Müdigkeit/Schläfrigkeit, Kopfschmerz, warme Haut = Zeichen der CO₂-Narkose. Dann O₂ reduzieren, ggf. assistiert beatmen, NA.' },
      { q: 'Medikamente?', a: 'Salbutamol + Ipratropium vernebelt (mit Druckluft oder kurz mit O₂), Prednisolon (NA/SOP). NIV/CPAP kann der NA erwägen.' },
      { q: 'Was verbindet der NEWS2 hier?', a: 'Mit SpO₂-Skala 2 rechnen (Ziel 88–92 %). Beispiel: AF 26 (3), SpO₂ 84 (3), O₂ (2), Puls 102 (1), RR 150 (0), Temp 38,1 (1) = 10 → hoch.' }
    ],
    fehler: ['15 l O₂ ohne Kontrolle', 'Schläfrigkeit als Beruhigung gedeutet'] },

  { id: 'f18', titel: 'Fieber und Verwirrtheit im Pflegeheim', diagnose: 'Sepsis (Urosepsis)', kat: 'Internistisch',
    lage: '84-jährige Bewohnerin, seit heute verwirrt (sonst orientiert), Dauerkatheter, trüber Urin. Pflegekraft: „Sie isst und trinkt seit zwei Tagen kaum.“',
    werte: { AF: '24', SpO2: '93 %', HF: '118', RR: '92/55', Temp: '39,2 °C', BZ: '145 mg/dl' },
    schritte: [
      { q: 'Woran denkst du, welcher Score hilft?', a: 'Sepsis. qSOFA: AF ≥ 22, Bewusstseinsänderung, RR ≤ 100 → 3/3. NEWS2 deutlich erhöht.' },
      { q: 'Welche Informationen brauchst du vom Heim?', a: 'Medikamentenplan, Vorerkrankungen, Patientenverfügung, Betreuer/Angehörige, Normalzustand („wie ist sie sonst?“), Überleitungsbogen.' },
      { q: 'Maßnahmen?', a: 'xABCDE, O₂ nach Sättigung, Flachlagerung/Beine hoch bei Hypotonie, Wärmeerhalt nicht übertreiben, Fokus suchen (Urin, Lunge, Haut, Wunden). NA nachfordern – Volumen und ggf. Noradrenalin.' },
      { q: 'Übergabe-Kernsatz?', a: '„Verdacht auf Sepsis mit Fokus Harnwege, qSOFA 3, RR 92/55, HF 118, 39,2 °C, neu verwirrt.“ Klinik voranmelden – frühe Antibiose zählt.' }
    ],
    fehler: ['Verwirrtheit als Demenz abgetan', 'Kein Fokus gesucht', 'Voranmeldung vergessen'] },

  { id: 'f19', titel: 'Dialyse verpasst', diagnose: 'Hyperkaliämie bei Dialysepatient', kat: 'Internistisch',
    lage: '62-jähriger Dialysepatient (Mo/Mi/Fr) hat wegen eines Familienfests die Freitag-Dialyse ausgelassen. Sonntag: starke Schwäche, Kribbeln, Übelkeit. Shunt am linken Unterarm.',
    werte: { HF: '38', RR: '105/60', SpO2: '92 %', AF: '22' },
    schritte: [
      { q: 'Was vermutest du?', a: 'Hyperkaliämie (ausgefallene Dialyse) mit Bradykardie. Zusätzlich Überwässerung möglich.' },
      { q: 'Was zeigt typischerweise das EKG?', a: 'Hohe, spitze T-Wellen, flache P-Wellen, breite QRS, Bradykardie – bis Kammerflimmern oder Asystolie.' },
      { q: 'Was ist am Shunt-Arm verboten?', a: 'Kein Blutdruck, kein Zugang, keine Stauung, nichts Abschnürendes. Schwirren tasten.' },
      { q: 'Maßnahmen und Ziel?', a: 'NA nachfordern, Monitoring, Defi-Pads kleben (Schrittmacherbereitschaft), Oberkörper leicht hoch bei Atemnot, keine großzügige Infusion. Ziel: Klinik mit Dialyse, Dialysezentrum informieren.' }
    ],
    fehler: ['RR am Shunt-Arm gemessen', 'Infusion „zur Kreislaufstütze“ laufen lassen'] },

  { id: 'f20', titel: 'Herzrasen aus heiterem Himmel', diagnose: 'Tachyarrhythmie bei Vorhofflimmern', kat: 'Internistisch',
    lage: '67-jährige Frau, seit 2 Stunden Herzrasen, leichte Luftnot, Schwindel. Keine Brustschmerzen. Bekannte Hypertonie.',
    werte: { HF: '148 unregelmäßig', RR: '128/80', SpO2: '96 %', AF: '20' },
    schritte: [
      { q: 'Was zeigt der Monitor vermutlich?', a: 'Absolute Arrhythmie ohne P-Wellen, schmale QRS → Tachyarrhythmia absoluta bei Vorhofflimmern.' },
      { q: 'Ist die Patientin instabil?', a: 'Instabilitätszeichen prüfen: Schock, Synkope, Myokardischämie, Herzinsuffizienz. Hier eher stabil, aber symptomatisch.' },
      { q: 'Welche Fragen sind wichtig?', a: 'Beginn (< oder > 48 h – Thrombusgefahr bei Kardioversion), bekanntes VHF, Antikoagulation, Schilddrüse, Infekt, Alkohol.' },
      { q: 'Maßnahmen?', a: '12-Kanal-EKG, Monitoring, Pads bereit, NA bei Instabilität oder nach SOP. Transport in Klinik mit Kardiologie.' }
    ],
    fehler: ['Beginn der Symptome nicht erfragt', 'Antikoagulation nicht erfragt'] },

  { id: 'f21', titel: 'Schwindel beim Gartenfest', diagnose: 'AV-Block III°', kat: 'Internistisch',
    lage: '79-jähriger Mann ist zweimal kurz bewusstlos geworden, jetzt wach, blass, schwitzig. Kein Krampf, keine Verletzung.',
    werte: { HF: '32 regelmäßig', RR: '85/50', SpO2: '94 %', BZ: '118 mg/dl' },
    schritte: [
      { q: 'Was siehst du im EKG?', a: 'P-Wellen und breite QRS laufen unabhängig voneinander, Kammerfrequenz 32 → AV-Block III°.' },
      { q: 'Was bedeuten die Bewusstlosigkeiten?', a: 'Adams-Stokes-Anfälle durch Kammerpausen – lebensbedrohlich.' },
      { q: 'Maßnahmen?', a: 'Flach lagern, nicht aufstehen lassen, O₂ nach Bedarf, NA sofort, **Pads kleben** (externer Schrittmacher), Zugang vorbereiten. Atropin oft wirkungslos, NA: Adrenalin.' },
      { q: 'Zielklinik?', a: 'Kardiologie mit Schrittmacher-Möglichkeit, voranmelden.' }
    ],
    fehler: ['Patient sitzend gelassen', 'Pads nicht geklebt'] },

  { id: 'f22', titel: 'Motorradunfall auf der Bundesstraße', diagnose: 'Instabiles Becken mit hämorrhagischem Schock', kat: 'Trauma',
    lage: '35-jähriger Motorradfahrer, mit ca. 80 km/h gegen eine Leitplanke. Liegt auf dem Rücken, Helm auf, ansprechbar, starke Schmerzen im Becken.',
    werte: { AF: '26', SpO2: '94 %', HF: '128', RR: '88/60', GCS: '14' },
    schritte: [
      { q: 'Eigenschutz und Nachforderung?', a: 'Absichern, Warnweste. NA, RTW, Polizei; ggf. RTH. Hochrasanztrauma → Traumazentrum.' },
      { q: 'Wie gehst du mit dem Helm um?', a: 'Zu zweit abnehmen: einer stabilisiert den Kopf von unten, einer zieht den Helm. Danach manuelle Inline-Stabilisierung.' },
      { q: 'Becken – was tun, was nicht?', a: 'Kein „Federn“ oder Kompressionstest! Bei Verdacht + Schock **Beckengurt** auf Höhe der Trochanter major. Beine leicht innenrotiert zusammenbinden.' },
      { q: 'Kreislauf?', a: 'Schockindex 128/88 ≈ 1,5. Permissive Hypotonie (ca. 80–90 syst.), Wärmeerhalt, TXA 1 g durch NA, Volumen nach NA. Schaufeltrage/Vakuummatratze, minimal bewegen.' },
      { q: 'Schockraum-Kriterien?', a: 'RR < 90, HF > 120, SI > 0,9, instabiles Becken → Schockraum voranmelden (ATMIST).' }
    ],
    fehler: ['Becken „durchgefedert“', 'Wärmeerhalt vergessen', 'Log-Roll trotz Beckenverdacht statt Schaufeltrage'] },

  { id: 'f23', titel: 'Messerstich in der Kneipe', diagnose: 'Penetrierendes Thoraxtrauma', kat: 'Trauma',
    lage: 'Nachts, Notruf von Gästen: Mann nach Streit mit Stichwunde rechts am Brustkorb. Täter angeblich geflüchtet. Polizei noch auf der Anfahrt.',
    werte: { AF: '30', SpO2: '90 %', HF: '122', RR: '100/70' },
    schritte: [
      { q: 'Was tust du vor dem Betreten?', a: 'Eigenschutz: auf Polizei warten bzw. Lage bestätigen lassen, in sicherem Abstand bereitstellen. Erst rein, wenn die Lage sicher ist.' },
      { q: 'Wie versorgst du die Wunde?', a: 'Steckt das Messer noch: belassen und fixieren. Offene Wunde: Abdecken, z. B. Chest Seal mit Ventil; keine vollständig luftdichte Abdeckung ohne Ventil.' },
      { q: 'Woran musst du bei Verschlechterung denken?', a: 'Spannungspneu (fehlendes Atemgeräusch, Atemnot, RR-Abfall), Hämatothorax, Perikardtamponade (Halsvenenstau, leise Herztöne, Hypotonie).' },
      { q: 'Taktik?', a: 'Kurze Versorgung vor Ort, NA, Oberkörper hoch bei stabilem Kreislauf, schnell ins Traumazentrum. Spuren schonen, Kleidung in Beutel (Polizei).' }
    ],
    fehler: ['Ohne Lagebestätigung reingegangen', 'Messer entfernt'] },

  { id: 'f24', titel: 'Sturz der Treppe herunter', diagnose: 'Schädel-Hirn-Trauma unter Antikoagulation', kat: 'Trauma',
    lage: '81-jährige Frau ist vor einer Stunde die Treppe heruntergestürzt. Erst „ging es“, jetzt zunehmend schläfrig, erbricht, Kopfschmerzen. Nimmt Apixaban (Eliquis).',
    werte: { GCS: '12', HF: '58', RR: '178/95', SpO2: '95 %', BZ: '132 mg/dl', Pupillen: 'rechts weiter' },
    schritte: [
      { q: 'Was bedeutet der Verlauf?', a: 'Zunehmende Bewusstseinsstörung nach freiem Intervall + Erbrechen + Anisokorie → Hirnblutung mit steigendem Hirndruck.' },
      { q: 'Welche Vitalzeichen passen dazu?', a: 'Bradykardie + Hypertonie = Cushing-Reflex, Spätzeichen erhöhten Hirndrucks.' },
      { q: 'Maßnahmen?', a: 'NA sofort, HWS-Stabilisierung, Oberkörper 30° (Kopf gerade), SpO₂ > 90 %, Normoventilation, Absaugbereitschaft, Hypotonie vermeiden, engmaschig GCS/Pupillen.' },
      { q: 'Warum ist Eliquis wichtig?', a: 'Antikoagulation → höheres Blutungsrisiko; in der Klinik ggf. Antagonisierung. Letzte Einnahme notieren, Medikamentenplan mitnehmen.' },
      { q: 'Zielklinik?', a: 'Klinik mit CT und Neurochirurgie, voranmelden.' }
    ],
    fehler: ['Freies Intervall als Entwarnung gedeutet', 'Pupillen nicht kontrolliert'] },

  { id: 'f25', titel: 'Kopfsprung in den Baggersee', diagnose: 'HWS-Verletzung mit Querschnitt', kat: 'Trauma',
    lage: '19-jähriger Mann, Kopfsprung ins flache Wasser, von Freunden an Land gezogen. Wach, kann Arme und Beine nicht bewegen, Kribbeln.',
    werte: { HF: '52', RR: '85/45', SpO2: '95 %', AF: '20 (Bauchatmung)', Temp: '35,6 °C' },
    schritte: [
      { q: 'Erste Maßnahme am Patienten?', a: 'Manuelle Inline-Stabilisierung des Kopfes, Bewegungen minimieren.' },
      { q: 'Warum Bradykardie und Hypotonie trotz Unfall?', a: 'Neurogener Schock: Ausfall des Sympathikus → Gefäßweitstellung, keine Gegenregulation über den Puls. Haut warm und trocken unterhalb der Läsion.' },
      { q: 'Was fällt bei der Atmung auf?', a: 'Bauchatmung (Zwerchfell intakt, Interkostalmuskeln gelähmt) → Atemversagen möglich, besonders bei hoher Läsion.' },
      { q: 'Immobilisation und Transport?', a: 'HWS-Orthese nach Indikation, Schaufeltrage/Vakuummatratze, Wärmeerhalt (keine Temperaturregulation), NA, Zielklinik mit Wirbelsäulenchirurgie (Querschnittzentrum).' }
    ],
    fehler: ['Schock als hämorrhagisch gedeutet', 'Wärmeerhalt vergessen'] },

  { id: 'f26', titel: 'Fettbrand in der Küche', diagnose: 'Verbrennung mit Inhalationstrauma-Verdacht', kat: 'Trauma',
    lage: '45-jähriger Mann hat brennendes Fett mit Wasser gelöscht. Verbrennungen an Gesicht, Hals, beiden Unterarmen und Händen. Heiser, Ruß an den Nasenlöchern.',
    werte: { AF: '24', SpO2: '96 %', HF: '110', RR: '140/85' },
    schritte: [
      { q: 'Wie groß ist die Fläche ungefähr?', a: 'Kopf/Hals ca. 4–5 %, beide Unterarme mit Händen ca. 9–10 % → ca. 14 %. Handfläche des Patienten ≈ 1 %.' },
      { q: 'Was ist das größte Risiko?', a: 'Inhalationstrauma: Heiserkeit, Ruß, versengte Nasenhaare → Schwellung der Atemwege möglich → frühe Atemwegssicherung durch NA.' },
      { q: 'Kühlen?', a: 'Nur kurz und lauwarm zur Schmerzlinderung bei kleinen Flächen; Unterkühlung vermeiden. Steril und trocken abdecken (Metalline), Schmuck entfernen.' },
      { q: 'Warum ist die SpO₂ hier evtl. trügerisch?', a: 'Mögliche CO-Vergiftung bei Rauchexposition – Pulsoxymeter zeigt falsch normal. Hochdosiert O₂.' },
      { q: 'Zielklinik?', a: 'Gesicht, Hände und Inhalationstrauma sind Kriterien für ein Verbrennungszentrum (Absprache NA/Leitstelle).' }
    ],
    fehler: ['Lange mit kaltem Wasser gekühlt', 'SpO₂ als Entwarnung gedeutet'] },

  { id: 'f27', titel: 'Kopfschmerz in der Garage', diagnose: 'CO-Vergiftung', kat: 'Internistisch',
    lage: 'Ehepaar, beide mit Kopfschmerz, Schwindel und Übelkeit. Der Mann hat in der geschlossenen Garage am Auto mit laufendem Motor geschraubt. Beim Betreten piept dein CO-Warner.',
    werte: { SpO2: '99 % (!)', HF: '108', RR: '130/80' },
    schritte: [
      { q: 'Was tust du sofort?', a: 'Eigenschutz: Gefahrenbereich verlassen, Patienten nur ohne Eigengefährdung herausbringen (lassen), Feuerwehr nachfordern.' },
      { q: 'Warum ist die SpO₂ von 99 % nicht beruhigend?', a: 'CO-Hämoglobin wird vom Pulsoxymeter als oxygeniert gemessen – falsch normale Werte.' },
      { q: 'Therapie?', a: 'O₂ so hoch wie möglich (Maske mit Reservoir 15 l), Monitoring, 12-Kanal (Myokardschaden), NA bei Bewusstseinsstörung, Brustschmerz oder Schwangerschaft.' },
      { q: 'Woran denkst du noch?', a: 'Weitere Betroffene (Nachbarn, Haustiere), Transport in geeignete Klinik – ggf. Druckkammer (Absprache NA).' }
    ],
    fehler: ['Ohne Rücksicht auf den Warner weitergearbeitet', 'SpO₂ als Entwarnung genommen'] },

  { id: 'f28', titel: 'Bewusstlos auf der Parkbank im Winter', diagnose: 'Hypothermie mit Alkoholintoxikation', kat: 'Internistisch',
    lage: 'Januar, −3 °C. Mann, ca. 50 Jahre, auf einer Parkbank, reagiert nur auf Schmerz, riecht nach Alkohol, nasse Kleidung.',
    werte: { AVPU: 'P', AF: '10', HF: '44', RR: '95/60', Temp: '29,8 °C', BZ: '52 mg/dl' },
    schritte: [
      { q: 'Was sind die Gefahren?', a: 'Hypothermie (< 30 °C: Gefahr von Kammerflimmern), Hypoglykämie, Aspiration, versteckte Verletzungen (SHT!).' },
      { q: 'Wie bewegst du ihn?', a: 'So wenig und so vorsichtig wie möglich, horizontal – Gefahr des „Bergungstods“ durch kaltes Blut aus der Peripherie.' },
      { q: 'Wärmeerhalt?', a: 'Nasse Kleidung vorsichtig entfernen (aufschneiden), Rettungsdecke, Decken, warmer RTW. Keine aktive Erwärmung der Extremitäten, nicht reiben.' },
      { q: 'Blutzucker 52?', a: 'Glukose i.v. nach Freigabe NA, vorher Thiamin bei Alkoholkrankheit. Nichts per os.' },
      { q: 'Und wenn er reanimationspflichtig wird?', a: 'Reanimieren – „Nobody is dead until warm and dead“. Unter 30 °C max. 3 Schocks, Medikamente nach NA. Klinik mit ECMO-Möglichkeit.' }
    ],
    fehler: ['Patient aufgesetzt/laufen lassen', 'Nur „betrunken“ angenommen, BZ vergessen'] },

  { id: 'f29', titel: 'Krampf hört nicht auf', diagnose: 'Status epilepticus', kat: 'Neurologie',
    lage: '38-jähriger Mann mit bekannter Epilepsie krampft laut Ehefrau seit etwa 8 Minuten. Bei Ankunft weiterhin tonisch-klonische Zuckungen, Zungenbiss, Zyanose.',
    werte: { SpO2: '85 %', HF: '130', BZ: '96 mg/dl' },
    schritte: [
      { q: 'Wie nennt man das, was ist das Risiko?', a: 'Status epilepticus (> 5 min). Hypoxie, Aspiration, Hirnschaden – Notfall.' },
      { q: 'Maßnahmen während des Krampfs?', a: 'Vor Verletzungen schützen, nicht festhalten, nichts in den Mund, O₂ vorhalten, Zeit dokumentieren, NA nachfordern.' },
      { q: 'Medikament?', a: 'Benzodiazepin nach SOP/NA: z. B. Midazolam 10 mg i.n. oder i.m. (Buccolam/Nasenapplikator), sonst i.v.' },
      { q: 'Nach dem Anfall?', a: 'Atemweg, Absaugen, stabile Seitenlage, BZ, Temperatur, Verletzungen suchen. Atemdepression nach Benzodiazepin möglich → Beutel bereit. Klinik.' }
    ],
    fehler: ['Patient festgehalten', 'Atemkontrolle nach Midazolam vergessen'] },

  { id: 'f30', titel: 'Frau auf der Brücke', diagnose: 'Akute Suizidalität', kat: 'Psychiatrie',
    lage: 'Polizei und RTW werden zu einer 29-jährigen Frau gerufen, die am Geländer einer Brücke steht und weint. Sie spricht mit niemandem.',
    werte: {},
    schritte: [
      { q: 'Wie gehst du vor?', a: 'Eigenschutz, Absprache mit Polizei, nur eine Person spricht. Nicht plötzlich nähern, Abstand halten, Zeit lassen.' },
      { q: 'Wie sprichst du sie an?', a: 'Vorstellen mit Namen, ruhig, Gefühle anerkennen, offen nach Suizidgedanken fragen – das erhöht das Risiko nicht.' },
      { q: 'Was nicht?', a: 'Keine Versprechen, die du nicht halten kannst, nicht bagatellisieren, keine Vorwürfe, nicht diskutieren.' },
      { q: 'Danach?', a: 'Nicht allein lassen, Klinik (Psychiatrie) bzw. bei akuter Eigengefährdung Unterbringung nach NPsychKG über Polizei/Ordnungsbehörde. PSNV für dich und das Team.' }
    ],
    fehler: ['Thema Suizid vermieden', 'Mehrere Helfer reden durcheinander'] },

  { id: 'f31', titel: 'Aggressiver Angehöriger', diagnose: 'Deeskalation im Einsatz', kat: 'Recht',
    lage: 'Einsatz bei einem älteren Mann mit Atemnot. Sein Sohn ist alkoholisiert, schreit euch an, ihr wärt zu spät, und baut sich vor dir auf.',
    werte: {},
    schritte: [
      { q: 'Wie positionierst du dich?', a: 'Mindestens zwei Armlängen Abstand, seitlich stehen, Rückzugsweg zur Tür frei, Hände sichtbar.' },
      { q: 'Wie sprichst du?', a: 'Ruhig, langsam, kurze Sätze, mit Namen ansprechen, Ärger anerkennen („Ich verstehe, dass Sie sich Sorgen machen“), Aufgabe geben („Können Sie die Medikamente holen?“).' },
      { q: 'Wann brichst du ab?', a: 'Bei Drohung, Waffe oder körperlicher Gewalt: Rückzug, Polizei nachfordern – Eigenschutz geht vor.' },
      { q: 'Und der Patient?', a: 'Versorgung nach xABCDE, sobald die Lage es zulässt; Kollege übernimmt den Patienten, während einer deeskaliert. Danach dokumentieren und melden.' }
    ],
    fehler: ['Zurückgeschrien', 'Zwischen Angehörigen und Tür gestanden'] },

  { id: 'f32', titel: 'Verkehrsunfall mit Bus', diagnose: 'MANV – erstes Fahrzeug', kat: 'MANV',
    lage: 'Ihr trefft als erstes Fahrzeug an einem Unfall ein: Linienbus gegen Lkw, viele Personen schreien, einige laufen herum, mehrere liegen am Boden.',
    werte: {},
    schritte: [
      { q: 'Was tust du nicht?', a: 'Nicht direkt einen Patienten versorgen.' },
      { q: 'Erstrückmeldung an die Leitstelle?', a: 'Stichwort MANV, was ist passiert, genauer Ort, geschätzte Zahl Betroffener, Gefahren (Kraftstoff, Verkehr), Nachforderung (RTW, NA, LNA, OrgL, Feuerwehr, Polizei), Anfahrtsweg.' },
      { q: 'Wie beginnst du die Sichtung?', a: 'Gehfähige zu einer Sammelstelle schicken (grün). Dann systematisch vorsichten, nur lebensrettende Sofortmaßnahmen (Blutung stoppen, Atemweg, Seitenlage), Patienten kennzeichnen.' },
      { q: 'Patient mit AF 34 und fehlendem Radialispuls?', a: 'Rot (SK I).' },
      { q: 'Wann gibst du die Führung ab?', a: 'An den eintreffenden OrgL/LNA mit kurzer Lageübergabe. Fahrzeug so abstellen, dass Zu- und Abfahrt frei bleiben.' }
    ],
    fehler: ['In die Einzelversorgung eingestiegen', 'Rückmeldung ohne Anzahl/Gefahren'] },

  { id: 'f33', titel: 'Kleinkind atmet schwer', diagnose: 'Fremdkörperaspiration beim Kleinkind', kat: 'Pädiatrie',
    lage: '14 Monate altes Mädchen hat beim Spielen plötzlich angefangen zu husten und zu würgen, jetzt kaum noch hörbarer Husten, Lippen bläulich. Kein Fieber, vorher gesund.',
    werte: { SpO2: '84 %' },
    schritte: [
      { q: 'Was vermutest du?', a: 'Fremdkörperaspiration (plötzlich beim Spielen/Essen, kein Infekt).' },
      { q: 'Husten ineffektiv, Kind bei Bewusstsein – was tust du?', a: 'Kopf tief über den Unterarm: 5 Rückenschläge zwischen die Schulterblätter, dann (unter 1 Jahr) 5 Thoraxstöße, bei Kindern über 1 Jahr 5 Oberbauchkompressionen – im Wechsel.' },
      { q: 'Kind wird bewusstlos?', a: 'Atemweg öffnen, sichtbaren Fremdkörper entfernen (nicht blind auswischen), 5 initiale Beatmungen, dann CPR 15 : 2. NA.' },
      { q: 'Fremdkörper ist raus, Kind weint wieder. Fertig?', a: 'Nein – immer Kinderklinik: Reste in den Atemwegen, Verletzungen durch Thoraxstöße möglich.' }
    ],
    fehler: ['Blind im Mund gewischt', 'Nach Erfolg nicht in die Klinik'] },

  { id: 'f34', titel: 'Kind mit Wespenstich', diagnose: 'Anaphylaxie beim Kind', kat: 'Pädiatrie',
    lage: '7-jähriger Junge (ca. 25 kg) wurde am Badesee in den Arm gestochen. Nach 10 Minuten Quaddeln am ganzen Körper, Erbrechen, pfeifende Atmung, wirkt benommen.',
    werte: { AF: '34', SpO2: '91 %', HF: '140', RR: '80/45' },
    schritte: [
      { q: 'Schweregrad?', a: 'Anaphylaxie mit Atem- und Kreislaufbeteiligung – lebensbedrohlich.' },
      { q: 'Adrenalin – Dosis und Ort?', a: '6–12 Jahre: 0,3 mg i.m. in die Oberschenkelaußenseite (z. B. Pen 0,3 mg). Wiederholung nach 5–10 min möglich.' },
      { q: 'Weitere Maßnahmen?', a: 'O₂ hochdosiert, NA, Lagerung: Atemnot + Schock → halb liegend, Beine hoch. Salbutamol vernebelt bei Bronchospasmus (NA/SOP). Eltern einbeziehen.' },
      { q: 'Klinik?', a: 'Immer – biphasische Reaktion möglich. Kinderklinik.' }
    ],
    fehler: ['Erst Antihistaminikum statt Adrenalin', 'Erwachsenen-Dosis gewählt'] },

  { id: 'f35', titel: 'Plötzlich einsetzende Wehen', diagnose: 'Präklinische Geburt', kat: 'Gynäkologie',
    lage: '31-jährige Frau, 39. Woche, zweites Kind. Wehen alle 2 Minuten, Fruchtblase geplatzt, sie sagt: „Ich muss pressen!“ Der Kopf ist in der Scheide sichtbar.',
    werte: { HF: '100', RR: '125/80' },
    schritte: [
      { q: 'Transport oder Geburt vor Ort?', a: 'Kopf sichtbar und Pressdrang → Geburt vor Ort vorbereiten, NA (und ggf. Hebamme/Kinder-NA) nachfordern.' },
      { q: 'Vorbereitung?', a: 'Warmer Raum, Unterlagen, Tücher, Abnabelungsset, Wärmeerhalt fürs Kind, Absaugung bereit. Mutter in Rückenlage mit angewinkelten Beinen oder nach Wunsch.' },
      { q: 'Wie unterstützt du die Geburt des Kopfes?', a: 'Dammschutz mit einer Hand, Kopf langsam kommen lassen, nicht ziehen. Nabelschnur um den Hals locker über den Kopf streifen.' },
      { q: 'Direkt nach der Geburt?', a: 'Abtrocknen, warm halten (Mütze), Haut-zu-Haut auf die Mutter. APGAR nach 1, 5, 10 min. Keine normale Atmung → stimulieren, Atemweg, Beatmung.' },
      { q: 'Abnabeln und Nachgeburt?', a: 'Nicht vor 1 min abnabeln (zwei Klemmen, dazwischen schneiden). Plazenta nicht ziehen, mitnehmen. Blutung beobachten – Gebärmutter massieren, NA: Oxytocin.' }
    ],
    fehler: ['Am Kind gezogen', 'Wärmeerhalt des Neugeborenen vergessen'] },

  { id: 'f36', titel: 'Kolik in der Nacht', diagnose: 'Nierenkolik', kat: 'Internistisch',
    lage: '42-jähriger Mann wälzt sich vor Schmerzen, rechte Flanke mit Ausstrahlung in die Leiste, Übelkeit, einmal erbrochen. Kein Fieber.',
    werte: { HF: '104', RR: '155/90', Temp: '36,9 °C', NRS: '9/10' },
    schritte: [
      { q: 'Was spricht für eine Kolik?', a: 'Wellenförmiger, sehr starker Schmerz, Bewegungsdrang (wälzt sich), Ausstrahlung Flanke → Leiste.' },
      { q: 'Welche gefährlichen Differenzialdiagnosen?', a: 'Rupturiertes Bauchaortenaneurysma (ältere Patienten, Schock!), Appendizitis, Hodentorsion, Gallenkolik, Myokardinfarkt (Hinterwand) bei Oberbauchschmerz.' },
      { q: 'Analgesie?', a: 'Nach SOP/NA: Metamizol 1 g als Kurzinfusion, ggf. Opioid; Butylscopolamin bei Gallenkolik eher als bei Nierenkolik. Re-Evaluation mit NRS.' },
      { q: 'Wann wird es dringend?', a: 'Fieber + Kolik (infizierte Harnstauung → Urosepsis), Einzelniere, Schockzeichen.' }
    ],
    fehler: ['Aortenaneurysma nicht bedacht', 'Schmerz nicht re-evaluiert'] }
];
