// Entscheidungsmodus für Fallbeispiele: je Schritt [richtige Option, falsche Option].
// Reihenfolge entspricht RS.faelle[].schritte. Die ausführliche Erklärung steht in schritte[].a
window.RS = window.RS || {};

RS.entscheidungen = {
  f1: [
    ['Eigenschutz mit CO-Warner, HWS manuell stabilisieren, xABCDE und Blutzucker', 'Patienten sofort aufsetzen und zur Platzwunde befragen'],
    ['Symptomatische Bradykardie mit Hypotonie – Betablocker verhindert die Gegenregulation', 'Normale Werte für einen 78-Jährigen, kein Handlungsbedarf'],
    ['RTW und Notarzt nachfordern, 12-Kanal-EKG schreiben', 'N-KTW reicht, EKG macht die Klinik'],
    ['Flach lagern, nicht hinsetzen', 'Oberkörper hoch wegen der Kopfverletzung'],
    ['Kopfverletzung unter Marcumar → immer Klinik mit CT', 'Platzwunde kleben, Hausarzt morgen reicht']
  ],
  f2: [
    ['Notarzt nachfordern und Fremdanamnese erheben', 'Abwarten, bis sie von selbst aufwacht'],
    ['Zungenbiss, Blut, Erbrochenes suchen – Absaugen bereithalten', 'ABCDE überspringen, der Krampf ist ja vorbei'],
    ['Stabile Seitenlage, Sauerstoff, nach Diabetikerausweis suchen', 'Flach auf den Rücken legen, Beine hoch'],
    ['Nein – bei Bewusstseinsstörung nichts per os', 'Ja, Traubenzucker in die Wangentasche'],
    ['G40 nach Freigabe über sicheren Zugang mit laufender Infusion, dann BZ-Kontrolle', 'G40 als schnellen Bolus in eine Handrückenvene ohne Infusion'],
    ['Einwilligungsfähigkeit prüfen, aufklären, essen lassen, nicht allein lassen, Unterschrift + Zeuge', 'Wach ist wach – Protokoll abschließen und fahren']
  ],
  f3: [
    ['NA + RTW, nicht laufen lassen, Oberkörper hoch, 12-Kanal in 10 min, Defi bereit', 'Patient zum Fahrzeug laufen lassen, EKG im RTW'],
    ['Hinterwandinfarkt – Bradykardie passt (RCA versorgt AV-Knoten)', 'Vorderwandinfarkt, Bradykardie ist Zufall'],
    ['Kein O₂ – SpO₂ 95 %, Gabe nur unter 90 %', '15 l O₂ über Maske, das schadet nie'],
    ['Kein Nitro: grenzwertiger RR und Rechtsherzbeteiligung möglich', 'Nitro 2 Hübe gegen den Schmerz'],
    ['Klinik mit Herzkatheterlabor, voranmelden', 'Nächstes Krankenhaus ohne Voranmeldung']
  ],
  f4: [
    ['RTW + NA nachfordern, nicht bewegen, beruhigen', 'Patienten zum Auto gehen lassen, Klinik ist nah'],
    ['RR an beiden Armen, Pulse beidseits, BE-FAST, Beine prüfen', 'Nur einmal RR rechts messen'],
    ['Kein ASS, kein Heparin', 'ASS 250 mg i.v. wegen Brustschmerz'],
    ['Klinik mit Herz-/Gefäßchirurgie, Meldung mit RR-Differenz', 'Hausarzt informieren, Schmerzmittel geben']
  ],
  f5: [
    ['Aufklären, NA nachfordern, dokumentieren, Unterschrift + Zeuge – nicht gegen seinen Willen mitnehmen', 'Gegen seinen Willen mitnehmen, er ist ja krank'],
    ['Nicht einwilligungsfähig → mutmaßlicher Wille, Transport', 'Er ist erwachsen – Verweigerung akzeptieren und fahren'],
    ['Neutral dokumentieren, Kinderklinik, Verdacht übergeben, § 34 StGB', 'Eltern direkt zur Rede stellen'],
    ['Nichts sagen – Schweigepflicht (§ 203 StGB)', 'Nur die Klinik nennen, das ist harmlos']
  ],
  f6: [
    ['Fahrzeug schräg absichern, RTW, NA und Polizei, nach weiteren Verletzten fragen', 'Direkt zum Patienten laufen, Fahrzeug auf der Fahrbahn lassen'],
    ['Manuell komprimieren, dann direkt Tourniquet, Uhrzeit notieren', 'Erst einen Druckverband versuchen'],
    ['Kopf stabilisieren, Helm zu zweit abnehmen, Esmarch, 15 l O₂, Thorax untersuchen', 'Kopf überstrecken und Helm allein abziehen'],
    ['Hämorrhagischer Schock, SI ≈ 1,4 – permissive Hypotonie, Wärmeerhalt', 'Kreislauf stabil, SI 0,7'],
    ['Spannungspneu links – Entlastung durch NA vorbereiten', 'Hyperventilation durch Schmerz – beruhigen']
  ],
  f7: [
    ['Schwere Anaphylaxie mit Atemwegsbeteiligung', 'Leichte allergische Hautreaktion'],
    ['Adrenalin-Pen sofort in den Oberschenkel, Uhrzeit notieren', 'Erst Fenistil geben und 10 Minuten abwarten'],
    ['NA + RTW nachfordern, hochdosiert O₂, Allergenzufuhr stoppen', 'Nur beobachten, Begleitung beruhigen'],
    ['Atemnot = sitzend, Schock = flach mit Beinen hoch', 'Bei Atemnot flach hinlegen'],
    ['Biphasische Reaktion möglich, Adrenalin wirkt nur kurz → Klinik', 'Wenn es besser ist, darf sie nach Hause']
  ],
  f8: [
    ['Kind beruhigen, auf Mamas Schoß lassen, nicht in den Rachen schauen', 'Mit dem Spatel in den Rachen schauen'],
    ['Kühle, feuchte Luft, O₂ nur bei niedriger SpO₂, bei Ruhestridor NA', 'Routinemäßig O₂-Maske fest aufsetzen'],
    ['Adrenalin vernebelt und Prednisolon-Zäpfchen', 'Salbutamol und Ipratropium vernebeln'],
    ['Epiglottitis und Fremdkörperaspiration', 'Asthma und Pneumonie']
  ],
  f9: [
    ['Max. 10 s Atmung prüfen – Schnappatmung = Reanimation', 'Eine Minute lang Puls und Atmung beobachten'],
    ['Sofort RTW + NA mit Stichwort Reanimation', 'Erst nach dem ersten Zyklus nachfordern'],
    ['Mitte Brustkorb, 5–6 cm, 100–120/min, vollständig entlasten', 'Unteres Sternumende, 3 cm, 80/min'],
    ['Nach dem Schock sofort weiterdrücken, Analyse alle 2 min', 'Nach dem Schock Puls tasten'],
    ['30 : 2 mit Beutel und O₂, nach i-gel durchgehend drücken, 10 Beatmungen/min', '15 : 2 wie bei Kindern'],
    ['Puls tasten – kein Puls = PEA, weiterdrücken, 4 H/HITS', 'Geordneter Rhythmus = ROSC, Drücken beenden'],
    ['xABCDE, 12-Kanal, SpO₂ 94–98 %, RR syst. > 100', 'Sofort 100 % O₂ dauerhaft, RR egal']
  ],
  f10: [
    ['Wann zuletzt gesund gesehen? (hier 7 Uhr)', 'Welche Allergien hat sie?'],
    ['BE-FAST, xABCDE und Blutzucker', 'Nur BE-FAST, Blutzucker ist unwichtig'],
    ['Oberkörper 30°, nüchtern lassen, RR nicht senken', 'Flach lagern, Kaffee anbieten, RR senken'],
    ['Blutverdünner erfragen, Angehörige mitnehmen, Stroke Unit voranmelden', 'Angehörige zu Hause lassen, Klinik informiert sich selbst'],
    ['NA nur bei Bewusstseins- oder Atemstörung – sonst schnell fahren', 'Immer auf den Notarzt warten']
  ],
  f11: [
    ['TVT mit Lungenembolie – Panik ist Ausschlussdiagnose', 'Panikattacke – Tütenatmung'],
    ['O₂ hochdosiert über Maske, kein CPAP', 'CPAP mit hohem Druck'],
    ['Oberkörper hoch, nicht laufen lassen, Bein nicht massieren', 'Wade massieren, Patientin zum RTW laufen lassen'],
    ['NA + RTW, RR engmaschig, Klinik mit CT und Intensiv', 'N-KTW reicht, Hausarzt morgen']
  ],
  f12: [
    ['Akut dekompensierte Herzinsuffizienz mit Lungenödem', 'Pneumonie mit Fieber'],
    ['Sitzend, Beine tief, tragen statt laufen', 'Flach liegend mit Beinen hoch'],
    ['O₂ hochdosiert, CPAP ist hier Therapie', 'O₂ sparsam, CPAP ist kontraindiziert'],
    ['Nitro bei hohem RR und Furosemid', 'Volumen-Infusion 1000 ml'],
    ['12-Kanal, Kardiologie mit Intensiv (bei ACS HKL)', 'Herzchirurgie anfahren']
  ],
  f13: [
    ['Hitzschlag – lebensgefährlich', 'Harmlose Hitzeerschöpfung'],
    ['Raus aus der Sonne, NA + RTW nachfordern', 'Im Schatten Wasser trinken lassen'],
    ['Entkleiden, befeuchten, fächeln, Kühlpacks an Hals, Achseln, Leisten', 'Fiebersaft geben und abwarten'],
    ['Fiebermittel und Trinken bei Eintrübung', 'Aktive Kühlung']
  ],
  f14: [
    ['Eigenschutz: Handschuhe, Spritze in Abwurfbehälter', 'Sofort die Taschen nach Drogen durchsuchen'],
    ['NA nachfordern, Atemweg freimachen, Guedel/Wendl, Absaugen', 'Patient in Bauchlage drehen'],
    ['Nein – Beutel-Masken-Beatmung mit O₂, ca. 10/min', 'Ja, 15 l über Maske reichen'],
    ['Naloxon langsam titrieren (Ziel Atmung), danach immer Klinik', 'Naloxon schnell hochdosiert, danach kann er gehen']
  ],
  f15: [
    ['Fieberkrampf', 'Epilepsie, Medikation unnötig zu klären'],
    ['xABCDE, Temperatur, BZ, entkleiden, Mutter beruhigen', 'Kind warm einpacken'],
    ['Erster Anfall → immer Kinderklinik', 'Anfall vorbei → zu Hause lassen'],
    ['Nur als Zäpfchen nach SOP – verhindert keinen weiteren Krampf', 'Paracetamol als wichtigste Maßnahme'],
    ['An Meningitis denken – Petechien, Glastest, NA', 'An Zahnen denken']
  ],
  f16: [
    ['Schwerer Anfall: Sprechdyspnoe, AF ≥ 25, HF > 110', 'Leichter Anfall, Spray wiederholen reicht'],
    ['Sitzend, Lippenbremse, O₂ titriert, beruhigen', 'Flach hinlegen zum Ausruhen'],
    ['Notarzt und RTW', 'Hausarzt anrufen'],
    ['Salbutamol + Ipratropium vernebelt, Prednisolon', 'Dimetinden und Furosemid'],
    ['Müdigkeit und leise Lunge sind Alarmzeichen', 'Wird sie müde, ist das Besserung']
  ],
  f17: [
    ['88–92 %', '100 %'],
    ['Zunehmende Schläfrigkeit = CO₂-Narkose → O₂ reduzieren, ggf. beatmen', 'Schläfrigkeit = Beruhigung, O₂ weiter erhöhen'],
    ['Salbutamol + Ipratropium vernebelt, Prednisolon (NA/SOP)', 'Morphin gegen die Atemnot'],
    ['Skala 2 nutzen – Score hier hoch (≈ 10)', 'NEWS2 gilt bei COPD nicht']
  ],
  f18: [
    ['Sepsis – qSOFA 3/3', 'Demenz, wie immer'],
    ['Medikamentenplan, Verfügung, Betreuer, Normalzustand erfragen', 'Keine Fragen, schnell losfahren'],
    ['xABCDE, Fokus suchen, Hypotonie lagern, NA für Volumen', 'Fiebersaft und Decke, dann abwarten'],
    ['„Verdacht Sepsis Fokus Harnwege“ mit Werten, voranmelden', '„Oma ist etwas verwirrt“']
  ],
  f19: [
    ['Hyperkaliämie nach ausgefallener Dialyse', 'Hypoglykämie'],
    ['Hohe spitze T-Wellen, breite QRS', 'ST-Senkungen und hohe P-Wellen'],
    ['Kein RR, kein Zugang, keine Stauung – Schwirren tasten', 'RR am Shunt-Arm, der ist gut zugänglich'],
    ['NA, Pads kleben, keine großzügige Infusion, Klinik mit Dialyse', '1000 ml Infusion zur Kreislaufstütze']
  ],
  f20: [
    ['Tachyarrhythmia absoluta bei Vorhofflimmern', 'Sinustachykardie'],
    ['Instabilitätszeichen prüfen – hier eher stabil', 'Jede Tachykardie ist instabil'],
    ['Beginn, Antikoagulation, Schilddrüse, Infekt erfragen', 'Nur nach dem Hausarzt fragen'],
    ['12-Kanal, Monitoring, Pads bereit, Kardiologie', 'Vagusmanöver und zu Hause lassen']
  ],
  f21: [
    ['AV-Block III° – P und QRS unabhängig', 'Sinusbradykardie bei Sportler'],
    ['Adams-Stokes-Anfälle – lebensbedrohlich', 'Harmlose Kreislaufschwäche'],
    ['Flach lagern, NA, Pads kleben (Schrittmacher)', 'Aufsetzen und Kaffee anbieten'],
    ['Kardiologie mit Schrittmacher, voranmelden', 'Hausarzt am nächsten Tag']
  ],
  f22: [
    ['Absichern, NA, RTW, Polizei – Traumazentrum', 'Nur RTW, Polizei kommt von selbst'],
    ['Zu zweit, einer stabilisiert den Kopf', 'Allein am Kinnriemen abziehen'],
    ['Nicht federn – Beckengurt auf Höhe Trochanter major', 'Becken durch Kompression testen'],
    ['SI ≈ 1,5, permissive Hypotonie, Wärmeerhalt, Schaufeltrage', 'Volumen bis RR 140 syst.'],
    ['Schockraum voranmelden (RR < 90, HF > 120, Becken)', 'Normale Notaufnahme ohne Anmeldung']
  ],
  f23: [
    ['Eigenschutz – auf Polizei/Lagebestätigung warten', 'Sofort hinein, der Täter ist ja weg'],
    ['Messer belassen und fixieren; offene Wunde mit Ventil-Verband', 'Messer herausziehen und fest abdrücken'],
    ['Spannungspneu, Hämatothorax, Perikardtamponade', 'Hyperventilation durch Aufregung'],
    ['Kurz vor Ort, NA, schnell ins Traumazentrum, Spuren schonen', 'Ausführliche Wundversorgung vor Ort']
  ],
  f24: [
    ['Hirnblutung mit steigendem Hirndruck', 'Normale Müdigkeit nach dem Schreck'],
    ['Cushing-Reflex – Spätzeichen erhöhten Hirndrucks', 'Gute Kreislaufsituation'],
    ['NA, Oberkörper 30°, SpO₂ > 90 %, GCS/Pupillen engmaschig', 'Flach mit Beinen hoch'],
    ['Höheres Blutungsrisiko – letzte Einnahme notieren', 'Blutverdünner sind hier egal'],
    ['Klinik mit CT und Neurochirurgie', 'Nächster Hausarzt']
  ],
  f25: [
    ['Manuelle Inline-Stabilisierung', 'Aufsetzen und Wasser aus der Lunge klopfen'],
    ['Neurogener Schock – Sympathikus fällt aus', 'Hämorrhagischer Schock durch Blutung'],
    ['Bauchatmung – Atemversagen möglich', 'Normale Atmung bei jungem Mann'],
    ['Schaufeltrage/Vakuummatratze, Wärmeerhalt, NA, Querschnittzentrum', 'Zu Fuß zum RTW führen']
  ],
  f26: [
    ['Ca. 14 % (Handfläche ≈ 1 %)', 'Ca. 45 %'],
    ['Inhalationstrauma – Atemwegsschwellung', 'Die Hautverbrennung ist das größte Risiko'],
    ['Kurz und lauwarm, Unterkühlung vermeiden, steril abdecken', '20 Minuten mit eiskaltem Wasser kühlen'],
    ['CO-Vergiftung möglich – Pulsoxymeter falsch normal', 'SpO₂ 96 % ist sicher normal'],
    ['Verbrennungszentrum (Gesicht, Hände, Inhalation)', 'Hausarzt zur Wundkontrolle']
  ],
  f27: [
    ['Raus aus dem Gefahrenbereich, Feuerwehr', 'Weiterarbeiten, der Warner ist überempfindlich'],
    ['CO-Hb wird als oxygeniert gemessen – falsch normal', '99 % schließt eine Vergiftung aus'],
    ['O₂ hochdosiert mit Reservoir, Monitoring, 12-Kanal', 'Kein O₂ nötig bei 99 %'],
    ['Weitere Betroffene suchen, ggf. Druckkammer', 'Nur den Mann versorgen']
  ],
  f28: [
    ['Hypothermie, Hypoglykämie, Aspiration, verdecktes SHT', 'Nur Alkohol – ausnüchtern lassen'],
    ['So wenig wie möglich, horizontal', 'Aufsetzen und laufen lassen'],
    ['Nasse Kleidung aufschneiden, Decken, warmer RTW, nicht reiben', 'Arme und Beine kräftig reiben'],
    ['Glukose i.v. nach NA, vorher Thiamin, nichts per os', 'Zuckerwasser einflößen'],
    ['Reanimieren – „nobody is dead until warm and dead“', 'Bei 29,8 °C Reanimation nicht sinnvoll']
  ],
  f29: [
    ['Status epilepticus – Notfall', 'Normaler Anfall, abwarten'],
    ['Schützen, nicht festhalten, nichts in den Mund, NA', 'Festhalten und Beißkeil einführen'],
    ['Benzodiazepin nach SOP/NA, z. B. Midazolam i.n./i.m.', 'Paracetamol i.v.'],
    ['Atemweg, Seitenlage, BZ – Atemdepression beachten', 'Sofort aufsetzen und befragen']
  ],
  f30: [
    ['Eigenschutz, Absprache Polizei, einer spricht, Abstand', 'Schnell hinlaufen und festhalten'],
    ['Ruhig vorstellen, offen nach Suizidgedanken fragen', 'Das Thema Suizid vermeiden'],
    ['Keine leeren Versprechen, nicht bagatellisieren', '„Das wird schon wieder, alles halb so wild“'],
    ['Nicht allein lassen, Klinik bzw. NPsychKG, PSNV', 'Nach Beruhigung allein nach Hause lassen']
  ],
  f31: [
    ['Zwei Armlängen, seitlich, Rückzugsweg frei', 'Direkt vor ihn stellen, zwischen ihn und Tür'],
    ['Ruhig, Ärger anerkennen, Aufgabe geben', 'Laut zurückweisen und drohen'],
    ['Bei Drohung oder Gewalt: Rückzug, Polizei', 'Weiterarbeiten, egal was passiert'],
    ['Kollege versorgt den Patienten, danach dokumentieren', 'Patient warten lassen, bis der Sohn ruhig ist']
  ],
  f32: [
    ['Nicht sofort einen einzelnen Patienten versorgen', 'Den lautesten Patienten zuerst versorgen'],
    ['MANV, Ort, Anzahl, Gefahren, Nachforderung, Anfahrt', '„Großer Unfall, schickt alles“'],
    ['Gehfähige zur Sammelstelle, dann vorsichten', 'Jeden Patienten komplett untersuchen'],
    ['Rot (SK I)', 'Gelb (SK II)'],
    ['An OrgL/LNA mit kurzer Lageübergabe', 'Gar nicht – du bleibst Einsatzleiter']
  ],
  f33: [
    ['Fremdkörperaspiration', 'Pseudokrupp'],
    ['5 Rückenschläge, dann 5 Thoraxstöße bzw. Oberbauchkompressionen', 'Blind mit dem Finger im Mund auswischen'],
    ['Atemweg öffnen, 5 Beatmungen, CPR 15 : 2', 'Kopfüber schütteln'],
    ['Nein – immer Kinderklinik', 'Ja, das Kind weint ja wieder']
  ],
  f34: [
    ['Anaphylaxie mit Atem- und Kreislaufbeteiligung', 'Lokale Stichreaktion'],
    ['0,3 mg i.m. Oberschenkel außen', '0,5 mg i.v. unverdünnt'],
    ['O₂, NA, halb liegend mit Beinen hoch, Eltern einbeziehen', 'Kind herumlaufen lassen zur Ablenkung'],
    ['Immer Klinik – biphasische Reaktion', 'Nach Besserung zurück an den See']
  ],
  f35: [
    ['Geburt vor Ort vorbereiten, NA nachfordern', 'Schnell losfahren, das Kind kommt im RTW'],
    ['Warmer Raum, Tücher, Abnabelungsset, Absaugung', 'Kaltes Badezimmer mit Fliesenboden'],
    ['Dammschutz, Kopf langsam kommen lassen, nicht ziehen', 'Am Kopf ziehen, damit es schneller geht'],
    ['Abtrocknen, warm halten, Haut-zu-Haut, APGAR', 'Kind kopfüber halten und klapsen'],
    ['Nicht vor 1 min abnabeln, Plazenta nicht ziehen', 'Sofort abnabeln, Plazenta herausziehen']
  ],
  f36: [
    ['Wellenförmiger Schmerz, Bewegungsdrang, Ausstrahlung Leiste', 'Ruhig liegender Patient mit Dauerschmerz'],
    ['Bauchaortenaneurysma, Appendizitis, Hinterwandinfarkt', 'Keine – Koliken sind eindeutig'],
    ['Analgesie nach SOP/NA, Re-Evaluation mit NRS', 'Keine Schmerzmittel bis zur Klinik'],
    ['Fieber + Kolik, Einzelniere, Schockzeichen', 'Wenn der Patient laut jammert']
  ],
  n1: [
    ['Ja, wenn A, B, C, D stabil sind', 'Nein, Stürze sind immer RTW-Einsätze'],
    ['Sturzursache klären: Synkope, BZ, Infekt, Medikamente, Liegedauer', 'Die Ursache ist egal, nur die Hüfte zählt'],
    ['Bei Instabilität oder nötiger Analgesie außerhalb der Kompetenz', 'Nie – der N-KTW macht alles allein'],
    ['Vakuummatratze, Bein in vorgefundener Stellung, pDMS, Wärmeerhalt', 'Bein gerade ziehen und laufen lassen'],
    ['Überleitungsbogen, Medikamentenplan, Verfügung, Hilfsmittel', 'Nichts – die Klinik ruft das Heim an']
  ],
  n2: [
    ['Gerissener Helm = Kopfanprall – Kopf, HWS, Gerinnung prüfen', 'Helm ist egal, er sagt ja, am Kopf ist nichts'],
    ['Distale Radiusfraktur (Fourchette-Stellung)', 'Verstauchung ohne Bedeutung'],
    ['Uhr/Schmuck ab, pDMS, schienen, hochlagern, kühlen', 'Hand gerade ziehen und verbinden'],
    ['Bewusstlosigkeit, Erbrechen, Ausfälle, Antikoagulation mit Kopfanprall', 'Wenn der Urlauber das möchte'],
    ['Personalien, Begleitung, Unterkunft, E-Bike sichern', 'Das E-Bike bleibt einfach am Deich liegen']
  ],
  n3: [
    ['SHT verschleiert, Unterkühlung, Aspiration, Hypoglykämie', 'Nur Alkohol – ausschlafen lassen'],
    ['Eher nein – mutmaßlicher Wille, Transport', 'Ja – er darf weiterboßeln'],
    ['Nasse Kleidung aus, Wärmeerhalt, Wundversorgung, BZ', 'Wunde kleben, Jacke drüber, fertig'],
    ['Bei GCS-Abfall RTW/NA – Ziel Klinik mit CT', 'Nur wenn er bewusstlos wird']
  ],
  n4: [
    ['Tiere sichern, Güllegrube nie betreten', 'In die Güllegrube steigen, falls er dort war'],
    ['Atemgeräusch, Thoraxbewegung, Krepitation, Hautemphysem', 'Nur die Prellung ansehen'],
    ['Leberverletzung / innere Blutung', 'Fingerverletzung'],
    ['SpO₂-Abfall, einseitiges Atemgeräusch, Schockzeichen → RTW + NA', 'Wenn er über Schmerzen klagt'],
    ['Oberkörper hoch (wenn stabil), O₂ nach SpO₂, Unfallchirurgie mit CT', 'Flach auf den Rücken, keine Klinik nötig']
  ],
  n5: [
    ['NEWS2 = 10 → hohes Risiko', 'NEWS2 = 3 → niedriges Risiko'],
    ['qSOFA 2/3 → Sepsisverdacht', 'qSOFA 0 → unauffällig'],
    ['RTW/NA nachfordern bzw. Rücksprache, voranmelden', 'Einweisung ist harmlos – normal transportieren'],
    ['Eigene Untersuchung entscheidet, nicht das Stichwort', 'Das Stichwort der Leitstelle ist immer richtig']
  ],
  n6: [
    ['Abgeknickt, Beutel zu hoch, verstopft, disloziert?', 'Katheter ziehen und neu legen'],
    ['Volle Blase = starker Schmerz', 'Demenz – das ist normal'],
    ['Urosepsis und Blutung unter Antikoagulation', 'Hyperventilation'],
    ['Urologie; bei Fieber + Hypotonie RTW/NA', 'Hausarzt in drei Tagen']
  ],
  n7: [
    ['Kopf nach vorne beugen', 'Kopf in den Nacken legen'],
    ['Nasenflügel 10–15 min fest drücken, kalt in den Nacken', 'Taschentuch tief in die Nase stopfen'],
    ['Menge schätzen, Schockzeichen prüfen, RR nicht primär senken', 'RR sofort mit Nitro senken'],
    ['Bei Schock oder Rachenblutung RTW/NA, sonst HNO', 'Nach 5 Minuten zu Hause lassen']
  ],
  n8: [
    ['Volumenmangel mit orthostatischer Hypotonie', 'Simulation – sie will Aufmerksamkeit'],
    ['12-Kanal, BZ, Temperatur, RR vorsichtig im Verlauf', 'Nur den RR im Stehen messen'],
    ['Flach mit Beinen hoch, kühl, trinken wenn wach', 'Aufstehen lassen zum Testen'],
    ['Fallender RR, Verwirrtheit, Rhythmusstörung, Sepsiszeichen', 'Wenn sie Durst angibt']
  ],
  n9: [
    ['Verdacht auf K.-o.-Tropfen', 'Normaler Rausch'],
    ['Atemweg, Seitenlage, Wärme, BZ, engmaschig AVPU', 'Kaffee geben, damit sie wach wird'],
    ['Bei P/U, AF < 10, SpO₂-Abfall → RTW/NA', 'Nie, sie ist ja jung'],
    ['Zeuginnen, Verdacht übergeben, Proben früh, Polizei nach Rücksprache', 'Verdacht verschweigen, ist peinlich']
  ],
  n10: [
    ['Einfache Sprache, Englisch, Übersetzungs-App', 'Lauter auf Deutsch reden'],
    ['Belastung unmöglich, Knöchel-Druckschmerz, Fehlstellung → Röntgen', 'Wenn es weh tut, ist es gebrochen'],
    ['PECH, pDMS, schienen, Schuh ausziehen', 'Schuh fest zuschnüren zur Stabilisierung'],
    ['Ihre Entscheidung – aber über eingeschränkte Inselversorgung aufklären', 'Sie muss auf jeden Fall auf die Fähre']
  ],
  n11: [
    ['Sturzhöhe + Trittrauma → Bauch/Thorax gefährdet', 'Nur die Schulter ist betroffen'],
    ['Bauch, Thorax, Becken, Wirbelsäule untersuchen', 'Nur Schulter und Arm ansehen'],
    ['Klavikulafraktur – Schonhaltung, Dreiecktuch, pDMS', 'Arm kräftig einrenken'],
    ['HF 118 + Trittverdacht → eher RTW/NA nachfordern', 'Ja, Tachykardie ist nur Angst']
  ],
  n12: [
    ['Blass, Übelkeit, Diabetiker, Bradykardie', 'Typischer Hexenschuss'],
    ['12-Kanal in 10 min, RR beidseits, Monitoring', 'Schmerzsalbe und Wärmekissen'],
    ['STEMI → RTW + NA, nicht laufen lassen, HKL', 'Mit dem N-KTW in die Orthopädie'],
    ['Patient kritischer als gemeldet → sofort nachfordern', 'Das Stichwort der Leitstelle gilt immer']
  ],
  n13: [
    ['Auslöser, Prodromi, kurze Dauer, schnelle Erholung', 'Bewusstlosigkeit beim Sport ohne Vorzeichen'],
    ['Rhythmusstörung, LAE, BZ, Schwangerschaft, Krampf', 'Nichts – vasovagal ist eindeutig'],
    ['Synkope bei Belastung/im Liegen, Brustschmerz, auffälliges EKG', 'Wenn sie sich schämt'],
    ['Aufklären, 116 117/Hausarzt, nicht allein lassen, dokumentieren', 'Einfach ohne Unterschrift wegfahren']
  ],
  n14: [
    ['Ja – wach und sicher schluckend: Traubenzucker, dann Brot', 'Nein – immer nur G40 i.v.'],
    ['Lange Wirkung → erneute Unterzuckerung möglich', 'Glimepirid ist hier unwichtig'],
    ['Bewusstseinsstörung, Krampf, BZ steigt nicht', 'Wenn er Hunger hat'],
    ['Erst nach BZ-Normalisierung beurteilen, Rückfallgefahr erklären', 'Bei BZ 48 Unterschrift einholen und gehen']
  ],
  n15: [
    ['Hörgerät rein, langsam, deutlich, Plattdeutsch nutzen', 'Laut und schnell auf Hochdeutsch'],
    ['Unterkühlung, Exsikkose, Druckschäden, Rhabdomyolyse', 'Keine – sie hat ja nur gelegen'],
    ['Ursache suchen: Synkope, Schlaganfall, Infekt, Fraktur', 'Ursache ist egal'],
    ['Vorsichtig wärmen, EKG, Vakuummatratze, Klinik', 'Ins Bett legen, Pflegedienst informieren']
  ],
  n16: [
    ['Druckverband und Hochlagern', 'Sofort Tourniquet am Oberarm'],
    ['Trocken steril, Beutel, indirekt kühlen', 'Direkt in Eiswasser legen'],
    ['pDMS an jedem Finger, Ringe ab', 'Nur die Blutung ansehen'],
    ['Handchirurgie, Tetanus erfragen', 'Hausarzt näht das']
  ]
};
