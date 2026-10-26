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
    fehler: [] }
];
