/* Lerninhalte für Rettung-zey.
   Orientierung: gängige Lehrbuchinhalte und NUN-Algorithmen (Niedersachsen).
   Verbindlich sind immer die SOPs des Rettungsdienstes Landkreis Aurich
   und die Anweisungen des Notarztes. */

window.DATA = {};

/* ---------- Medikamente ---------- */
DATA.medis = [
  {
    id: "sauerstoff", name: "Sauerstoff", namen: ["sauerstoff", "o2"], handel: "", thema: "Atmung",
    darreichung: "Druckgasflasche (z. B. 2 l / 10 l, 200 bar)",
    kurz: "Hypoxie (erniedrigte Sauerstoffsättigung)",
    indikation: ["Hypoxie, SpO₂ unter Zielwert", "Schock, Reanimation, schwere Atemnot", "CO-Vergiftung (hochdosiert, unabhängig von der SpO₂)"],
    kontra: ["Keine absolute Kontraindikation im Notfall", "Vorsicht bei COPD: Zielsättigung 88–92 %", "ACS ohne Hypoxie: kein routinemäßiger Sauerstoff"],
    dosis: ["Zielsättigung meist 94–98 %", "Nasenbrille 1–6 l/min", "Maske 6–10 l/min", "Maske mit Reservoir 10–15 l/min"],
    vorbereitung: ["Flaschendruck prüfen und Restlaufzeit abschätzen", "Passende Applikationshilfe wählen", "Reservoirbeutel vor dem Aufsetzen füllen"],
    applikation: "inhalativ",
    nw: ["Austrocknung der Schleimhäute", "Bei COPD Hyperkapnie möglich"],
    merke: "Kein Fett und kein Öl an Armaturen: Brandgefahr! Restlaufzeit = Volumen (l) × Druck (bar) ÷ Flow (l/min)."
  },
  {
    id: "ass", name: "Acetylsalicylsäure", namen: ["acetylsalicylsaeure", "acetylsalicylsäure", "ass"], handel: "Aspirin i.v.", thema: "Herz",
    darreichung: "Trockensubstanz 500 mg + 5 ml Lösungsmittel",
    kurz: "Akutes Koronarsyndrom (ACS)",
    indikation: ["Akutes Koronarsyndrom (STEMI, NSTEMI, instabile Angina pectoris)"],
    kontra: ["Bekannte Allergie / ASS-Asthma", "Akute Blutung, Magen-Darm-Ulkus", "Verdacht auf Aortendissektion", "Schwangerschaft letztes Drittel", "Schlaganfall präklinisch (Blutung nicht ausgeschlossen)"],
    dosis: ["Typisch 150–300 mg i.v., häufig 250 mg (laut SOP)"],
    vorbereitung: ["Trockensubstanz mit 5 ml Lösungsmittel auflösen → 100 mg/ml", "250 mg = 2,5 ml", "Spritze beschriften"],
    applikation: "langsam i.v.",
    nw: ["Blutungsneigung", "Magenbeschwerden", "Allergische Reaktion, Bronchospasmus"],
    merke: "Beim Schlaganfall präklinisch kein ASS, weil eine Hirnblutung nicht ausgeschlossen ist."
  },
  {
    id: "heparin", name: "Heparin", namen: ["heparin"], handel: "Heparin-Natrium", thema: "Herz",
    darreichung: "z. B. 5.000 I.E./0,2 ml oder 25.000 I.E./5 ml",
    kurz: "Gerinnungshemmung beim ACS",
    indikation: ["Akutes Koronarsyndrom", "Lungenembolie (laut SOP/NA)"],
    kontra: ["Akute Blutung, Blutungsneigung", "Heparin-induzierte Thrombozytopenie (HIT II)", "Bereits laufende orale Antikoagulation (Rücksprache)", "Verdacht auf Aortendissektion"],
    dosis: ["Typisch 5.000 I.E. i.v. bzw. 70–100 I.E./kg (laut SOP)"],
    vorbereitung: ["Konzentration der Ampulle genau prüfen: es gibt sehr unterschiedliche Stärken!", "Mit 1-ml- oder 2-ml-Spritze aufziehen", "Beschriften: Wirkstoff und I.E."],
    applikation: "i.v.",
    nw: ["Blutungen", "HIT", "Allergie"],
    merke: "Einheit ist I.E. (Internationale Einheiten), nicht mg."
  },
  {
    id: "nitro", name: "Glyceroltrinitrat", namen: ["glyceroltrinitrat", "nitroglycerin", "nitro"], handel: "Nitrolingual Spray", thema: "Herz",
    darreichung: "Pumpspray 0,4 mg pro Hub",
    kurz: "Brustschmerz bei ACS mit ausreichendem Blutdruck, kardiales Lungenödem",
    indikation: ["Pektanginöse Beschwerden / ACS", "Kardiales Lungenödem", "Hypertensiver Notfall mit Herzbeteiligung"],
    kontra: ["Systolischer Blutdruck unter Grenzwert (meist < 90–100 mmHg, laut SOP)", "Einnahme von PDE-5-Hemmern (z. B. Sildenafil 24 h, Tadalafil 48 h)", "Rechtsherzinfarkt / inferiorer Infarkt mit RV-Beteiligung", "Schock, schwere Aortenstenose"],
    dosis: ["1–2 Hübe (0,4–0,8 mg) sublingual, ggf. Wiederholung (laut SOP)"],
    vorbereitung: ["Spray vor erstem Gebrauch bzw. nach längerer Pause einmal in die Luft sprühen", "Vorher Blutdruck messen", "Patient sitzt oder liegt"],
    applikation: "sublingual",
    nw: ["Blutdruckabfall", "Kopfschmerz", "Reflextachykardie", "Flush"],
    merke: "Immer nach Potenzmitteln fragen. Nach der Gabe Blutdruck kontrollieren."
  },
  {
    id: "salbutamol", name: "Salbutamol", namen: ["salbutamol"], handel: "Sultanol Fertiginhalat", thema: "Atmung",
    darreichung: "Fertiginhalat 2,5 mg / 2,5 ml",
    kurz: "Bronchospasmus bei Asthma oder COPD (Beta-2-Sympathomimetikum)",
    indikation: ["Asthmaanfall", "Exazerbierte COPD", "Bronchospasmus bei Anaphylaxie (zusätzlich zu Adrenalin)"],
    kontra: ["Tachykarde Herzrhythmusstörungen (relativ)", "Bekannte Überempfindlichkeit"],
    dosis: ["Erwachsene 2,5 mg vernebelt, Wiederholung laut SOP"],
    vorbereitung: ["Fertiginhalat in den Vernebler geben", "Vernebler mit Sauerstoff 6–8 l/min betreiben", "Kann mit Ipratropiumbromid gemischt werden"],
    applikation: "inhalativ über Vernebler",
    nw: ["Tachykardie", "Zittern (Tremor)", "Unruhe", "Hypokaliämie"],
    merke: "Wirkt schnell bronchienerweiternd. Herzfrequenz überwachen."
  },
  {
    id: "ipratropium", name: "Ipratropiumbromid", namen: ["ipratropiumbromid", "ipratropium"], handel: "Atrovent Fertiginhalat", thema: "Atmung",
    darreichung: "Fertiginhalat 250 µg / 2 ml oder 500 µg / 2 ml",
    kurz: "Bronchospasmus, zusätzlich zu Salbutamol (Parasympatholytikum)",
    indikation: ["Schwerer Asthmaanfall", "Exazerbierte COPD"],
    kontra: ["Engwinkelglaukom", "Tachyarrhythmie (relativ)"],
    dosis: ["Erwachsene 500 µg vernebelt, meist zusammen mit Salbutamol"],
    vorbereitung: ["Zusammen mit Salbutamol in den Vernebler", "Maske dicht, aber nicht drückend"],
    applikation: "inhalativ über Vernebler",
    nw: ["Mundtrockenheit", "Tachykardie", "Augeninnendruck steigt, wenn Nebel in die Augen gerät"],
    merke: "Ergänzt Salbutamol über einen anderen Wirkmechanismus."
  },
  {
    id: "prednisolon", name: "Prednisolon", namen: ["prednisolon"], handel: "Solu-Decortin H, Prednisolut", thema: "Atmung",
    darreichung: "Trockensubstanz 100 mg oder 250 mg + Lösungsmittel",
    kurz: "Entzündungshemmung bei Asthma, COPD und Anaphylaxie (Glukokortikoid)",
    indikation: ["Asthmaanfall, exazerbierte COPD", "Anaphylaxie (nach Adrenalin)", "Pseudokrupp (als Zäpfchen, z. B. Rectodelt 100 mg)"],
    kontra: ["Im Notfall keine absoluten Kontraindikationen"],
    dosis: ["Typisch 100–250 mg i.v. (laut SOP)"],
    vorbereitung: ["Trockensubstanz mit beiliegendem Lösungsmittel auflösen", "Nicht kräftig schütteln, sanft schwenken"],
    applikation: "i.v.",
    nw: ["Blutzuckeranstieg", "Bei einmaliger Gabe kaum relevant"],
    merke: "Wirkt erst nach 30–60 Minuten. Ersetzt niemals Adrenalin bei Anaphylaxie."
  },
  {
    id: "adrenalin", name: "Adrenalin (Epinephrin)", namen: ["adrenalin", "epinephrin", "epinephrine"], handel: "Suprarenin", thema: "Notfall",
    darreichung: "Ampulle 1 mg / 1 ml",
    kurz: "Reanimation und Anaphylaxie",
    indikation: ["Herz-Kreislauf-Stillstand", "Anaphylaxie", "Schwerer Pseudokrupp / Larynxödem (vernebelt, laut SOP)"],
    kontra: ["In der Reanimation und bei Anaphylaxie keine"],
    dosis: ["Reanimation: 1 mg i.v./i.o. alle 3–5 min (bei Kammerflimmern ab dem 3. Schock)", "Anaphylaxie: 0,5 mg i.m. bei Erwachsenen (0,01 mg/kg), Wiederholung nach ca. 5 min möglich", "Inhalation: z. B. 4 mg unverdünnt vernebelt (laut SOP)"],
    vorbereitung: ["Reanimation: häufig 1 mg auf 10 ml NaCl 0,9 % → 0,1 mg/ml (oder unverdünnt mit Nachspülen, laut SOP)", "i.m.: 1 mg/1 ml unverdünnt, 0,5 ml = 0,5 mg", "Spritze deutlich beschriften: Gesamtmenge und ml"],
    applikation: "i.v., i.o., i.m., inhalativ",
    nw: ["Tachykardie, Rhythmusstörungen", "Blutdruckanstieg", "Unruhe"],
    merke: "i.m. an die Oberschenkelaußenseite. Bei Anaphylaxie niemals unverdünnt i.v. als Bolus!"
  },
  {
    id: "amiodaron", name: "Amiodaron", namen: ["amiodaron"], handel: "Cordarex", thema: "Notfall",
    darreichung: "Ampulle 150 mg / 3 ml",
    kurz: "Antiarrhythmikum bei Kammerflimmern / pulsloser VT",
    indikation: ["Reanimation bei Kammerflimmern oder pulsloser VT nach dem 3. Schock", "Tachykarde Rhythmusstörungen (NA)"],
    kontra: ["In der Reanimation keine"],
    dosis: ["Nach dem 3. Schock 300 mg i.v./i.o.", "Nach dem 5. Schock 150 mg"],
    vorbereitung: ["300 mg = 2 Ampullen à 150 mg (6 ml)", "Laut Fachinformation nur mit Glukose 5 % verdünnen (z. B. auf 20 ml), nicht mit NaCl 0,9 %", "Manche SOPs geben unverdünnt mit Nachspülen: Vorgabe der Wache beachten"],
    applikation: "i.v., i.o.",
    nw: ["Blutdruckabfall", "Bradykardie"],
    merke: "Merksatz Reanimation: nach dem 3. Schock Adrenalin 1 mg + Amiodaron 300 mg."
  },
  {
    id: "atropin", name: "Atropin", namen: ["atropin"], handel: "Atropinsulfat", thema: "Herz",
    darreichung: "Ampulle 0,5 mg / 1 ml",
    kurz: "Symptomatische Bradykardie",
    indikation: ["Symptomatische Bradykardie", "Vergiftung mit Alkylphosphaten (sehr hohe Dosen, NA)"],
    kontra: ["Tachykardie", "Engwinkelglaukom (relativ)"],
    dosis: ["0,5 mg i.v., Wiederholung bis max. 3 mg (laut SOP)"],
    vorbereitung: ["Unverdünnt in 2-ml- oder 5-ml-Spritze aufziehen", "Beschriften"],
    applikation: "i.v.",
    nw: ["Tachykardie", "Mundtrockenheit", "Pupillenerweiterung", "Unruhe, Verwirrtheit"],
    merke: "Bei Bradykardie gleichzeitig an Schrittmacher (Pacing) denken."
  },
  {
    id: "glukose", name: "Glukose 40 %", namen: ["glukose", "glucose", "g40", "glukose40"], handel: "Glucose 40 % Braun", thema: "Stoffwechsel",
    darreichung: "Ampulle 10 ml = 4 g Glukose",
    kurz: "Hypoglykämie",
    indikation: ["Hypoglykämie mit Bewusstseinsstörung oder wenn orale Gabe nicht sicher möglich"],
    kontra: ["Hyperglykämie", "Ohne Blutzuckermessung nicht geben"],
    dosis: ["Titriert, z. B. 8–10 g (20–25 ml) i.v., danach BZ-Kontrolle (laut SOP)", "Alternative: Glukose 10 % als Infusion"],
    vorbereitung: ["Sicher liegender, gut laufender Zugang (große Vene)", "Nur in eine laufende Infusion geben", "20-ml-Spritze"],
    applikation: "i.v. in laufende Infusion",
    nw: ["Venenreizung", "Paravenös: Gewebsnekrosen!"],
    merke: "G40 ist stark hyperton. Vor der Gabe Zugang auf korrekte Lage prüfen."
  },
  {
    id: "midazolam", name: "Midazolam", namen: ["midazolam"], handel: "Dormicum, Buccolam", thema: "Neurologie",
    darreichung: "z. B. 5 mg / 1 ml, 15 mg / 3 ml oder 5 mg / 5 ml (unterschiedliche Stärken!)",
    kurz: "Krampfanfall / Status epilepticus, Sedierung (Benzodiazepin)",
    indikation: ["Krampfanfall länger als 5 Minuten (Status epilepticus)", "Sedierung, Angst, Kombination mit Esketamin"],
    kontra: ["Atemdepression ohne Beatmungsmöglichkeit", "Myasthenia gravis", "Allergie"],
    dosis: ["Status: z. B. 10 mg i.m. (> 40 kg) oder 5–10 mg intranasal über Zerstäuber, bukkal oder titriert i.v. (laut SOP)"],
    vorbereitung: ["Konzentration der Ampulle genau prüfen!", "Intranasal: MAD-Zerstäuber aufsetzen, auf beide Nasenlöcher verteilen", "Beatmungsbeutel und Absaugung bereitlegen"],
    applikation: "i.v., i.m., intranasal, bukkal",
    nw: ["Atemdepression", "Blutdruckabfall", "Paradoxe Unruhe (v. a. bei Älteren und Kindern)"],
    merke: "Antidot: Flumazenil (Anexate). Nach der Gabe Atmung und SpO₂ eng überwachen."
  },
  {
    id: "esketamin", name: "Esketamin", namen: ["esketamin", "ketamin"], handel: "Ketanest S", thema: "Schmerz",
    darreichung: "z. B. 25 mg / 5 ml oder 50 mg / 2 ml",
    kurz: "Starke Schmerzen, v. a. bei Trauma; Narkose (NA)",
    indikation: ["Starke Schmerzen bei Trauma und Verbrennung", "Narkoseeinleitung (NA)", "Therapierefraktärer Status asthmaticus (NA)"],
    kontra: ["Unkontrollierte Hypertonie", "ACS (relativ)", "Präeklampsie / Eklampsie"],
    dosis: ["Analgesie z. B. 0,125–0,25 mg/kg i.v. titriert (laut SOP)"],
    vorbereitung: ["Konzentration prüfen: es gibt 5 mg/ml und 25 mg/ml", "Meist zusammen mit Midazolam (gegen Albträume)"],
    applikation: "i.v., intranasal",
    nw: ["Albträume, Halluzinationen", "Blutdruck- und Herzfrequenzanstieg", "Vermehrter Speichelfluss"],
    merke: "Schutzreflexe bleiben weitgehend erhalten. Ruhige Umgebung hilft gegen Albträume."
  },
  {
    id: "fentanyl", name: "Fentanyl", namen: ["fentanyl"], handel: "Fentanyl", thema: "Schmerz",
    darreichung: "Ampulle 0,1 mg / 2 ml (50 µg/ml)",
    kurz: "Sehr starke Schmerzen (Opioid, Betäubungsmittel)",
    indikation: ["Sehr starke Schmerzen", "Narkose (NA)"],
    kontra: ["Atemdepression", "Allergie"],
    dosis: ["Titriert, z. B. 0,05–0,1 mg i.v. bei Erwachsenen (laut SOP/NA)"],
    vorbereitung: ["Betäubungsmittel: Entnahme dokumentieren, Ampulle aufbewahren", "Naloxon und Beatmungsbeutel bereithalten"],
    applikation: "i.v., intranasal",
    nw: ["Atemdepression", "Übelkeit", "Thoraxrigidität bei schneller Gabe"],
    merke: "Betäubungsmittel (BtM): lückenlose Dokumentation. Antidot: Naloxon."
  },
  {
    id: "morphin", name: "Morphin", namen: ["morphin"], handel: "Morphin", thema: "Schmerz",
    darreichung: "Ampulle 10 mg / 1 ml",
    kurz: "Starke Schmerzen, z. B. beim ACS (Opioid, Betäubungsmittel)",
    indikation: ["Starke Schmerzen", "ACS mit starken Schmerzen (laut SOP)"],
    kontra: ["Atemdepression", "Hypotonie", "Allergie"],
    dosis: ["Titriert, z. B. 2–5 mg i.v. (laut SOP/NA)"],
    vorbereitung: ["10 mg mit NaCl 0,9 % auf 10 ml verdünnen → 1 mg/ml", "Betäubungsmittel: Dokumentation, Ampulle aufbewahren"],
    applikation: "i.v.",
    nw: ["Atemdepression", "Übelkeit, Erbrechen", "Blutdruckabfall"],
    merke: "Antidot: Naloxon."
  },
  {
    id: "paracetamol", name: "Paracetamol", namen: ["paracetamol"], handel: "Perfalgan", thema: "Schmerz",
    darreichung: "Infusionsflasche 1.000 mg / 100 ml",
    kurz: "Leichte bis mittlere Schmerzen, Fieber",
    indikation: ["Leichte bis mittlere Schmerzen", "Fieber"],
    kontra: ["Schwere Leberschädigung", "Allergie"],
    dosis: ["Erwachsene über 50 kg: 1 g als Kurzinfusion über ca. 15 min", "Kinder: 15 mg/kg"],
    vorbereitung: ["Infusionssystem anschließen und entlüften", "Datum und Uhrzeit auf die Flasche"],
    applikation: "i.v. als Kurzinfusion",
    nw: ["Selten: Blutdruckabfall, Allergie", "Überdosierung: Leberschaden"],
    merke: "Vorher fragen, ob der Patient heute schon Paracetamol genommen hat."
  },
  {
    id: "metamizol", name: "Metamizol", namen: ["metamizol"], handel: "Novalgin", thema: "Schmerz",
    darreichung: "Ampulle 1 g / 2 ml oder 2,5 g / 5 ml",
    kurz: "Koliken und mittlere bis starke Schmerzen",
    indikation: ["Nieren- und Gallenkolik", "Mittlere bis starke Schmerzen, Fieber"],
    kontra: ["Allergie, Agranulozytose in der Vorgeschichte", "Hypotonie", "Schwangerschaft letztes Drittel"],
    dosis: ["Erwachsene z. B. 1 g als Kurzinfusion (laut SOP)"],
    vorbereitung: ["In 100 ml NaCl 0,9 % geben und langsam laufen lassen", "Infusion beschriften"],
    applikation: "i.v. als Kurzinfusion",
    nw: ["Blutdruckabfall bei zu schneller Gabe", "Allergische Reaktion bis Schock"],
    merke: "Nie als schnellen Bolus. Blutdruck überwachen."
  },
  {
    id: "butylscopolamin", name: "Butylscopolamin", namen: ["butylscopolamin", "butylscopolaminbromid"], handel: "Buscopan", thema: "Bauch",
    darreichung: "Ampulle 20 mg / 1 ml",
    kurz: "Krampfartige Bauchschmerzen, Koliken (Spasmolytikum)",
    indikation: ["Nieren-, Gallen- und Darmkoliken"],
    kontra: ["Tachyarrhythmie", "Engwinkelglaukom", "Harnverhalt", "Myasthenia gravis"],
    dosis: ["20 mg langsam i.v."],
    vorbereitung: ["Unverdünnt oder mit NaCl 0,9 % verdünnt aufziehen", "Beschriften"],
    applikation: "langsam i.v.",
    nw: ["Tachykardie", "Mundtrockenheit", "Sehstörungen"],
    merke: "Oft zusammen mit Metamizol bei Koliken."
  },
  {
    id: "dimenhydrinat", name: "Dimenhydrinat", namen: ["dimenhydrinat"], handel: "Vomex A", thema: "Bauch",
    darreichung: "Ampulle 62 mg / 10 ml",
    kurz: "Übelkeit, Erbrechen, Schwindel (Antihistaminikum)",
    indikation: ["Übelkeit und Erbrechen", "Schwindel, Reisekrankheit"],
    kontra: ["Krampfanfälle in der Vorgeschichte (relativ)", "Engwinkelglaukom", "Akuter Asthmaanfall"],
    dosis: ["62 mg langsam i.v. bei Erwachsenen"],
    vorbereitung: ["10-ml-Spritze", "Langsam spritzen"],
    applikation: "langsam i.v.",
    nw: ["Müdigkeit", "Mundtrockenheit"],
    merke: "Macht müde. Patient darf danach nicht selbst Auto fahren."
  },
  {
    id: "ondansetron", name: "Ondansetron", namen: ["ondansetron"], handel: "Zofran", thema: "Bauch",
    darreichung: "Ampulle 4 mg / 2 ml",
    kurz: "Übelkeit und Erbrechen (macht nicht müde)",
    indikation: ["Übelkeit und Erbrechen, z. B. nach Opioidgabe"],
    kontra: ["Angeborenes langes QT-Syndrom", "Allergie"],
    dosis: ["4 mg langsam i.v."],
    vorbereitung: ["2-ml- oder 5-ml-Spritze", "Beschriften"],
    applikation: "langsam i.v.",
    nw: ["Kopfschmerz", "QT-Verlängerung", "Verstopfung"],
    merke: "Gute Alternative, wenn der Patient nicht müde werden soll."
  },
  {
    id: "furosemid", name: "Furosemid", namen: ["furosemid"], handel: "Lasix", thema: "Herz",
    darreichung: "Ampulle 20 mg / 2 ml oder 40 mg / 4 ml",
    kurz: "Kardiales Lungenödem (Diuretikum)",
    indikation: ["Kardiales Lungenödem", "Überwässerung bei Herzinsuffizienz"],
    kontra: ["Volumenmangel, Hypotonie", "Hypokaliämie", "Anurie"],
    dosis: ["20–40 mg i.v. (laut SOP)"],
    vorbereitung: ["Unverdünnt aufziehen", "Beschriften"],
    applikation: "langsam i.v.",
    nw: ["Blutdruckabfall", "Elektrolytverschiebung", "Starker Harndrang"],
    merke: "Patient wird viel Wasser lassen müssen: Urinflasche bereitstellen."
  },
  {
    id: "urapidil", name: "Urapidil", namen: ["urapidil"], handel: "Ebrantil", thema: "Herz",
    darreichung: "Ampulle 25 mg / 5 ml oder 50 mg / 10 ml",
    kurz: "Hypertensiver Notfall (Blutdrucksenkung)",
    indikation: ["Hypertensiver Notfall mit Organbeteiligung"],
    kontra: ["Aortenisthmusstenose", "Hypotonie"],
    dosis: ["Fraktioniert, z. B. 5–10 mg langsam i.v., nach Wirkung (laut SOP)"],
    vorbereitung: ["Unverdünnt in 5-ml- oder 10-ml-Spritze", "Beschriften"],
    applikation: "langsam i.v.",
    nw: ["Zu starker Blutdruckabfall", "Schwindel, Übelkeit"],
    merke: "Blutdruck langsam senken: in der ersten Stunde nicht mehr als ca. 20–25 %."
  },
  {
    id: "dimetinden", name: "Dimetinden", namen: ["dimetinden"], handel: "Fenistil", thema: "Allergie",
    darreichung: "Ampulle 4 mg / 4 ml",
    kurz: "Allergische Reaktion (H1-Antihistaminikum)",
    indikation: ["Allergische Reaktion", "Anaphylaxie (nach Adrenalin)"],
    kontra: ["Kinder unter 1 Jahr (laut Fachinfo)", "Allergie"],
    dosis: ["0,1 mg/kg, also ca. 1 ml pro 10 kg (Erwachsene meist 4–8 mg) langsam i.v."],
    vorbereitung: ["Unverdünnt aufziehen", "Beschriften"],
    applikation: "langsam i.v.",
    nw: ["Müdigkeit", "Mundtrockenheit"],
    merke: "Wirkt langsamer als Adrenalin und ersetzt es nicht."
  },
  {
    id: "txa", name: "Tranexamsäure", namen: ["tranexamsaeure", "tranexamsäure", "txa"], handel: "Cyklokapron", thema: "Trauma",
    darreichung: "Ampulle 500 mg / 5 ml",
    kurz: "Blutung bei Trauma (Antifibrinolytikum)",
    indikation: ["Trauma mit relevanter Blutung, innerhalb von 3 Stunden nach dem Unfall", "Schwere Blutungen anderer Ursache (NA)"],
    kontra: ["Mehr als 3 Stunden nach dem Trauma", "Thromboembolie, Krampfanfälle in der Vorgeschichte (relativ)"],
    dosis: ["1 g i.v. über ca. 10 min (laut SOP)"],
    vorbereitung: ["1 g = 2 Ampullen à 500 mg (10 ml)", "Als Kurzinfusion in 100 ml NaCl 0,9 % oder langsam i.v.", "Unfallzeitpunkt notieren"],
    applikation: "langsam i.v.",
    nw: ["Blutdruckabfall bei schneller Gabe", "Übelkeit"],
    merke: "Zeitfenster 3 Stunden: je früher, desto besser."
  },
  {
    id: "naloxon", name: "Naloxon", namen: ["naloxon"], handel: "Narcanti, Nyxoid", thema: "Notfall",
    darreichung: "Ampulle 0,4 mg / 1 ml (Nasenspray 1,8 mg)",
    kurz: "Opioid-Überdosierung mit Atemdepression (Antidot)",
    indikation: ["Opioidvergiftung mit Atemdepression"],
    kontra: ["Allergie"],
    dosis: ["Titriert, z. B. 0,04–0,1 mg-weise i.v. bis ausreichende Atmung (laut SOP)", "Intranasal 1,8 mg (Nyxoid)"],
    vorbereitung: ["0,4 mg mit NaCl 0,9 % auf 10 ml verdünnen → 0,04 mg/ml", "Zuerst Beatmung sicherstellen"],
    applikation: "i.v., i.m., intranasal",
    nw: ["Akuter Entzug: Unruhe, Aggression, Erbrechen", "Tachykardie, Blutdruckanstieg"],
    merke: "Wirkt kürzer als viele Opioide: Patient kann wieder eintrüben (Rebound). Transport und Überwachung!"
  },
  {
    id: "vel", name: "Vollelektrolytlösung", namen: ["vollelektrolytloesung", "vollelektrolytlösung", "vel", "ringer", "ringeracetat"], handel: "z. B. Sterofundin ISO, Jonosteril", thema: "Infusion",
    darreichung: "Infusionsbeutel/-flasche 500 ml oder 1.000 ml",
    kurz: "Volumenmangel und Trägerlösung für Medikamente",
    indikation: ["Volumenmangel / Schock", "Trägerlösung, Offenhalten des Zugangs", "Verbrennungen"],
    kontra: ["Kardiales Lungenödem, Überwässerung (relativ)"],
    dosis: ["Nach Kreislaufsituation, z. B. 500 ml zügig, dann nach Wirkung (laut SOP/NA)"],
    vorbereitung: ["Infusion auf Klarheit, Unversehrtheit und Verfallsdatum prüfen", "Infusionssystem einstechen, Tropfkammer zu ½ bis ⅔ füllen", "System luftfrei entlüften", "Datum, Uhrzeit und Zusätze auf den Beutel schreiben", "Im Winter angewärmte Infusion verwenden"],
    applikation: "i.v., i.o.",
    nw: ["Überwässerung, Lungenödem bei Herzinsuffizienz"],
    merke: "Bei Trauma mit Blutung: permissive Hypotension, Volumen nach SOP."
  },
  {
    id: "nacl", name: "NaCl 0,9 %", namen: ["nacl", "kochsalz", "natriumchlorid"], handel: "Isotone Kochsalzlösung", thema: "Infusion",
    darreichung: "Ampulle 10 ml, Infusion 100 ml / 250 ml / 500 ml",
    kurz: "Verdünnen von Medikamenten und Spülen des Zugangs",
    indikation: ["Verdünnung von Medikamenten", "Spülen und Nachspülen des Zugangs", "Trägerlösung für Kurzinfusionen"],
    kontra: ["Nicht zum Verdünnen von Amiodaron (Glukose 5 % verwenden)"],
    dosis: ["Nach Bedarf"],
    vorbereitung: ["10-ml-Ampullen für Spritzen", "Spülspritze immer beschriften, damit sie nicht verwechselt wird"],
    applikation: "i.v.",
    nw: ["Keine relevanten"],
    merke: "Nach jeder Medikamentengabe nachspülen, damit das Medikament ankommt."
  }
];

/* ---------- Akronyme & Schemata ---------- */
DATA.akronyme = [
  { id: "cabcde", kurz: "cABCDE", lang: "Strukturierte Untersuchung des Notfallpatienten", kat: "Untersuchung", ordnung: true,
    teile: [["c", "critical bleeding – kritische Blutung stoppen"], ["A", "Airway – Atemweg (und HWS)"], ["B", "Breathing – Atmung"], ["C", "Circulation – Kreislauf"], ["D", "Disability – neurologisches Defizit (GCS, Pupillen, BZ)"], ["E", "Exposure/Environment – entkleiden, untersuchen, Wärmeerhalt"]],
    info: "Erst behandeln, was zuerst tötet. Jedes Problem sofort beheben, bevor du zum nächsten Buchstaben gehst." },
  { id: "sampler", kurz: "SAMPLER", lang: "Strukturierte Anamnese", kat: "Untersuchung", ordnung: true,
    teile: [["S", "Symptome"], ["A", "Allergien"], ["M", "Medikamente"], ["P", "Patientengeschichte (Vorerkrankungen)"], ["L", "Letzte Mahlzeit, letzter Stuhlgang/Urin, letzte Periode"], ["E", "Ereignis – was ist passiert?"], ["R", "Risikofaktoren"]] },
  { id: "opqrst", kurz: "OPQRST", lang: "Schmerzanamnese", kat: "Untersuchung", ordnung: true,
    teile: [["O", "Onset – Beginn"], ["P", "Provocation/Palliation – was verstärkt oder lindert?"], ["Q", "Quality – Qualität (drückend, stechend …)"], ["R", "Region/Radiation – Ort und Ausstrahlung"], ["S", "Severity – Stärke (NRS 0–10)"], ["T", "Time – zeitlicher Verlauf"]] },
  { id: "befast", kurz: "BE-FAST", lang: "Schlaganfall-Erkennung", kat: "Neurologie", ordnung: true,
    teile: [["B", "Balance – Gleichgewicht, Schwindel"], ["E", "Eyes – Sehstörung"], ["F", "Face – Gesicht hängt"], ["A", "Arms – Armschwäche"], ["S", "Speech – Sprachstörung"], ["T", "Time – Zeitpunkt, zuletzt gesund gesehen"]],
    info: "Zeit dokumentieren: Wann wurde der Patient zuletzt gesund gesehen?" },
  { id: "gcs", kurz: "GCS", lang: "Glasgow Coma Scale", kat: "Neurologie",
    teile: [["Augen", "1–4 Punkte"], ["Verbal", "1–5 Punkte"], ["Motorik", "1–6 Punkte"]],
    info: "Summe 3–15 Punkte. GCS ≤ 8: Schutzreflexe gefährdet, Atemweg sichern (NA)." },
  { id: "avpu", kurz: "AVPU", lang: "Schnelle Bewusstseinsprüfung", kat: "Neurologie", ordnung: true,
    teile: [["A", "Alert – wach"], ["V", "Verbal – reagiert auf Ansprache"], ["P", "Pain – reagiert auf Schmerzreiz"], ["U", "Unresponsive – keine Reaktion"]],
    info: "Deutsche Variante: WASB (Wach, Ansprechbar, Schmerzreiz, Bewusstlos)." },
  { id: "isbar", kurz: "ISBAR", lang: "Strukturierte Übergabe", kat: "Übergabe", ordnung: true,
    teile: [["I", "Identifikation – wer bin ich, wer ist der Patient?"], ["S", "Situation – was ist los?"], ["B", "Background – Hintergrund, Vorgeschichte"], ["A", "Assessment – Einschätzung, Befunde, Maßnahmen"], ["R", "Recommendation – Empfehlung, offene Punkte"]] },
  { id: "mist", kurz: "MIST", lang: "Übergabe beim Trauma", kat: "Übergabe", ordnung: true,
    teile: [["M", "Mechanism – Unfallmechanismus"], ["I", "Injuries – Verletzungen"], ["S", "Signs – Vitalzeichen"], ["T", "Treatment – Maßnahmen"]] },
  { id: "hits", kurz: "4H / HITS", lang: "Reversible Ursachen des Kreislaufstillstands", kat: "Reanimation",
    teile: [["H", "Hypoxie"], ["H", "Hypovolämie"], ["H", "Hypo-/Hyperkaliämie (metabolisch)"], ["H", "Hypothermie"], ["H", "Herzbeuteltamponade"], ["I", "Intoxikation"], ["T", "Thromboembolie (Lungenembolie, Herzinfarkt)"], ["S", "Spannungspneumothorax"]] },
  { id: "aeiou", kurz: "AEIOU-TIPS", lang: "Ursachen einer Bewusstseinsstörung", kat: "Neurologie",
    teile: [["A", "Alkohol"], ["E", "Epilepsie, Elektrolyte, Enzephalopathie"], ["I", "Insulin – Hypo- oder Hyperglykämie"], ["O", "Overdose – Vergiftung, Drogen"], ["U", "Urämie"], ["T", "Trauma, Temperatur"], ["I", "Infektion"], ["P", "Psychiatrisch, Poison"], ["S", "Schlaganfall, Schock"]] },
  { id: "dms", kurz: "DMS", lang: "Kontrolle bei Extremitätenverletzung", kat: "Untersuchung", ordnung: true,
    teile: [["D", "Durchblutung"], ["M", "Motorik"], ["S", "Sensibilität"]],
    info: "Immer vor und nach jeder Schienung oder Lageveränderung prüfen." },
  { id: "pech", kurz: "PECH", lang: "Erstversorgung bei Sportverletzungen", kat: "Untersuchung", ordnung: true,
    teile: [["P", "Pause"], ["E", "Eis – kühlen (nicht direkt auf die Haut)"], ["C", "Compression – Druckverband"], ["H", "Hochlagern"]] },
  { id: "naca", kurz: "NACA-Score", lang: "Schweregrad von Erkrankung oder Verletzung", kat: "Scores",
    teile: [["0", "Keine Erkrankung oder Verletzung"], ["I", "Geringfügige Störung, keine ärztliche Behandlung nötig"], ["II", "Ambulante Abklärung nötig"], ["III", "Stationäre Behandlung nötig, nicht lebensbedrohlich"], ["IV", "Akute Lebensgefahr nicht auszuschließen"], ["V", "Akute Lebensgefahr"], ["VI", "Reanimation"], ["VII", "Tod"]] },
  { id: "qsofa", kurz: "qSOFA", lang: "Schnell-Score bei Verdacht auf Sepsis", kat: "Scores",
    teile: [["1", "Atemfrequenz ≥ 22/min"], ["2", "Veränderter Bewusstseinszustand (GCS < 15)"], ["3", "Systolischer Blutdruck ≤ 100 mmHg"]],
    info: "Ab 2 Punkten erhöhtes Risiko. Sepsis-Verdacht in der Klinik voranmelden." },
  { id: "schockindex", kurz: "Schockindex", lang: "Herzfrequenz geteilt durch systolischen Blutdruck", kat: "Scores",
    teile: [["< 1", "Normal (ca. 0,5)"], ["> 1", "Hinweis auf Schock"]],
    info: "Beispiel: HF 120 ÷ RR 100 = 1,2 → Schockverdacht." },
  { id: "fms", kurz: "FMS-Status", lang: "Statusmeldungen des Funkmeldesystems", kat: "Einsatztaktik", ordnung: true,
    teile: [["0", "Priorisierter Sprechwunsch (Notfall)"], ["1", "Einsatzbereit über Funk"], ["2", "Einsatzbereit auf der Wache"], ["3", "Einsatz übernommen"], ["4", "Am Einsatzort"], ["5", "Sprechwunsch"], ["6", "Nicht einsatzbereit"], ["7", "Patient aufgenommen"], ["8", "Am Transportziel"]] },
  { id: "aaaa", kurz: "AAAA-C-EEEE", lang: "Gefahren an der Einsatzstelle", kat: "Einsatztaktik",
    teile: [["A", "Atemgifte"], ["A", "Angstreaktion"], ["A", "Ausbreitung"], ["A", "Atomare Strahlung"], ["C", "Chemische Stoffe"], ["E", "Erkrankung/Verletzung"], ["E", "Explosion"], ["E", "Elektrizität"], ["E", "Einsturz"]] },
  { id: "gams", kurz: "GAMS", lang: "Vorgehen bei Gefahrgut", kat: "Einsatztaktik", ordnung: true,
    teile: [["G", "Gefahr erkennen"], ["A", "Absperren"], ["M", "Menschenrettung durchführen"], ["S", "Spezialkräfte nachfordern"]] },
  { id: "5w", kurz: "5 W", lang: "Inhalt einer Notfallmeldung", kat: "Einsatztaktik", ordnung: true,
    teile: [["W", "Wo ist es passiert?"], ["W", "Was ist passiert?"], ["W", "Wie viele Betroffene?"], ["W", "Welche Verletzungen/Erkrankungen?"], ["W", "Warten auf Rückfragen"]] },
  { id: "6r", kurz: "6-R-Regel", lang: "Sichere Medikamentengabe", kat: "Medikamente",
    teile: [["R", "Richtiger Patient"], ["R", "Richtiges Medikament"], ["R", "Richtige Dosierung"], ["R", "Richtige Applikationsart"], ["R", "Richtiger Zeitpunkt"], ["R", "Richtige Dokumentation"]],
    info: "Beim Vorbereiten besonders wichtig: Ampulle zeigen, Anordnung laut wiederholen, Spritze beschriften." },
  { id: "dopes", kurz: "DOPES", lang: "Verschlechterung beim beatmeten Patienten", kat: "Reanimation",
    teile: [["D", "Dislokation des Tubus"], ["O", "Obstruktion (Sekret, Abknicken)"], ["P", "Pneumothorax"], ["E", "Equipment – Gerätefehler"], ["S", "Stomach – geblähter Magen"]] },
  /* einfache Abkürzungen */
  { id: "rtw", kurz: "RTW", lang: "Rettungswagen", kat: "Abkürzungen" },
  { id: "ktw", kurz: "KTW", lang: "Krankentransportwagen", kat: "Abkürzungen" },
  { id: "nef", kurz: "NEF", lang: "Notarzteinsatzfahrzeug", kat: "Abkürzungen" },
  { id: "rth", kurz: "RTH", lang: "Rettungshubschrauber", kat: "Abkürzungen" },
  { id: "itw", kurz: "ITW", lang: "Intensivtransportwagen", kat: "Abkürzungen" },
  { id: "lna", kurz: "LNA", lang: "Leitender Notarzt", kat: "Abkürzungen" },
  { id: "orgl", kurz: "OrgL", lang: "Organisatorischer Leiter Rettungsdienst", kat: "Abkürzungen" },
  { id: "aelrd", kurz: "ÄLRD", lang: "Ärztlicher Leiter Rettungsdienst", kat: "Abkürzungen" },
  { id: "manv", kurz: "MANV", lang: "Massenanfall von Verletzten", kat: "Abkürzungen" },
  { id: "rosc", kurz: "ROSC", lang: "Return of Spontaneous Circulation – Wiedereinsetzen des Spontankreislaufs", kat: "Abkürzungen" },
  { id: "acs", kurz: "ACS", lang: "Akutes Koronarsyndrom", kat: "Abkürzungen" },
  { id: "stemi", kurz: "STEMI", lang: "ST-Strecken-Hebungsinfarkt", kat: "Abkürzungen" },
  { id: "nstemi", kurz: "NSTEMI", lang: "Herzinfarkt ohne ST-Strecken-Hebung", kat: "Abkürzungen" },
  { id: "copd", kurz: "COPD", lang: "Chronisch obstruktive Lungenerkrankung", kat: "Abkürzungen" },
  { id: "sht", kurz: "SHT", lang: "Schädel-Hirn-Trauma", kat: "Abkürzungen" },
  { id: "hws", kurz: "HWS", lang: "Halswirbelsäule", kat: "Abkürzungen" },
  { id: "hlw", kurz: "HLW", lang: "Herz-Lungen-Wiederbelebung", kat: "Abkürzungen" },
  { id: "aed", kurz: "AED", lang: "Automatisierter externer Defibrillator", kat: "Abkürzungen" },
  { id: "pci", kurz: "PCI", lang: "Perkutane Koronarintervention (Herzkatheter)", kat: "Abkürzungen" },
  { id: "btm", kurz: "BtM", lang: "Betäubungsmittel", kat: "Abkürzungen" },
  { id: "sop", kurz: "SOP", lang: "Standardarbeitsanweisung (Standard Operating Procedure)", kat: "Abkürzungen" },
  { id: "io", kurz: "i.o.", lang: "intraossär (in den Knochen)", kat: "Abkürzungen" },
  { id: "spo2", kurz: "SpO₂", lang: "Sauerstoffsättigung (pulsoxymetrisch gemessen)", kat: "Abkürzungen" },
  { id: "etco2", kurz: "etCO₂", lang: "Endtidales Kohlendioxid (Kapnografie)", kat: "Abkürzungen" }
];

/* ---------- Organisation & Einsatzführung ---------- */
DATA.lektionen = [
  {
    id: "ersteintreffend", titel: "Als Erste vor Ort – bis NA oder RTW kommt", kurz: "Lage erkunden, rückmelden, nachfordern, führen",
    bloecke: [
      { p: "Wer als Erster an der Einsatzstelle ist, übernimmt die Führung, bis eine höher qualifizierte Kraft kommt. Das gilt auch für dich auf dem KTW oder als RS+ auf dem RTW." },
      { h: "Ablauf bei Ankunft" },
      { ol: [
        "Status 4 melden",
        "Fahrzeug sicher abstellen: Zufahrt freihalten, bei Verkehr absichern, Warnweste tragen",
        "Eigenschutz: Gefahren erkennen (AAAA-C-EEEE), im Zweifel Abstand halten",
        "Lage erkunden: Was ist passiert? Wie viele Patienten? Welche Gefahren?",
        "Erste Rückmeldung an die Leitstelle und Kräfte nachfordern",
        "Patienten nach Priorität versorgen (cABCDE)",
        "Weg für Nachrückende vorbereiten: Einweiser an die Straße, Haustür offen, Licht an, Treppenhaus frei",
        "Strukturierte Übergabe an NA oder RTW-Besatzung"
      ] },
      { h: "Rückmeldung an die Leitstelle" },
      { ul: [
        "Wer meldet (Funkrufname)",
        "Lage: was ist los, wie viele Patienten, wie schwer",
        "Gefahren an der Einsatzstelle",
        "Was wird gebraucht (NA, weitere RTW, Feuerwehr, Polizei)",
        "Was wird bereits getan"
      ] },
      { h: "Wen nachfordern?" },
      { ul: [
        "Notarzt: Bewusstseinsstörung, schwere Atemnot, Kreislaufinstabilität, starke Schmerzen, schweres Trauma, Reanimation, anhaltender Krampfanfall, schwer kranke Kinder, komplizierte Geburt (NA-Indikationskatalog)",
        "Feuerwehr: eingeklemmte Person, technische Rettung, Tragehilfe, Türöffnung, Brand, Gefahrstoffe",
        "Polizei: Gewalt, Verkehrsunfall, Suizidversuch, Verdacht auf Straftat, unklarer Todesfall",
        "Weitere RTW: mehr Patienten als Transportkapazität"
      ] },
      { merke: "Lieber früh nachfordern. Abbestellen geht immer, zu spät nachgefordert kostet Zeit." }
    ]
  },
  {
    id: "kritisch", titel: "Kritisch oder nicht kritisch?", kurz: "Ersteindruck, Warnzeichen, Konsequenzen",
    bloecke: [
      { h: "Ersteindruck in den ersten Sekunden" },
      { p: "Noch bevor du Geräte anschließt, verschaffst du dir einen Eindruck:" },
      { ul: [
        "Bewusstsein: Reagiert der Patient? Ist er wach und orientiert?",
        "Atmung: Atemarbeit, Geräusche, Frequenz, Sprechen in ganzen Sätzen?",
        "Haut: Farbe (blass, grau, zyanotisch), Schweiß, Temperatur",
        "Sichtbare starke Blutung?",
        "Position und Verhalten: Kutschersitz, Schonhaltung, Unruhe"
      ] },
      { h: "Warnzeichen beim Erwachsenen (Orientierungswerte)" },
      { ul: [
        "Atemfrequenz unter 10 oder über 30/min",
        "SpO₂ unter 90 %",
        "Herzfrequenz unter 50 oder über 120/min",
        "Systolischer Blutdruck unter 90 mmHg",
        "Rekapillarisierungszeit über 2 Sekunden, Haut blass, kalt und schweißig",
        "Neue Bewusstseinsstörung, GCS unter 13",
        "Starke, nicht stillbare Blutung",
        "Brustschmerz mit Begleitzeichen, neurologische Ausfälle (BE-FAST positiv)"
      ] },
      { h: "Konsequenzen" },
      { ul: [
        "Kritisch: Problem in c, A, B, C oder D. Sofort behandeln, früh NA nachfordern, zügiger Transport in eine geeignete Klinik mit Voranmeldung",
        "Nicht kritisch: ABCDE ohne Befund. In Ruhe Anamnese (SAMPLER, OPQRST), gründliche Untersuchung, passende Zielklinik"
      ] },
      { merke: "Die Einschätzung ist nie endgültig. Bei jeder Verschlechterung wieder bei A beginnen." }
    ]
  },
  {
    id: "uebergabe", titel: "Übergabe an NA, RTW und Klinik", kurz: "Hands-off, ISBAR, MIST",
    bloecke: [
      { h: "Grundsätze" },
      { ul: [
        "Hands-off: Während der Übergabe hören alle zu. Keine Maßnahmen am Patienten, außer lebensrettenden",
        "Eine Person spricht, die anderen hören zu",
        "Kurz und strukturiert, möglichst unter einer Minute",
        "Rückfragen erst am Ende"
      ] },
      { h: "Ablauf nach ISBAR" },
      { ol: [
        "Identifikation: Name und Alter des Patienten",
        "Situation: Leitsymptom, was ist passiert, seit wann",
        "Background: Vorerkrankungen, Dauermedikation, Allergien",
        "Assessment: ABCDE-Befund, erste und aktuelle Vitalwerte, Maßnahmen und Medikamente mit Dosis und Uhrzeit",
        "Recommendation: offene Punkte, was ist noch zu tun"
      ] },
      { h: "Beim Trauma: MIST" },
      { ul: ["Mechanism: Unfallmechanismus", "Injuries: Verletzungen", "Signs: Vitalzeichen", "Treatment: Maßnahmen"] },
      { h: "Übergabe an den Notarzt vor Ort" },
      { p: "Gleiche Struktur, dazu: was schon vorbereitet ist (Zugang, aufgezogene und beschriftete Medikamente, EKG) und was nachgefordert wurde." },
      { merke: "Was nicht dokumentiert ist, gilt als nicht gemacht. Medikamente immer mit Uhrzeit notieren." }
    ]
  },
  {
    id: "medivorbereitung", titel: "Medikamente sicher vorbereiten", kurz: "6-R-Regel, Closed Loop, Beschriften",
    bloecke: [
      { p: "Als RS+ gibst du keine Medikamente selbst, bereitest sie aber vor. Fehler beim Aufziehen gehören zu den häufigsten Fehlern im Rettungsdienst." },
      { h: "Closed-Loop-Kommunikation" },
      { ol: [
        "Anordnung: „Bitte 1 mg Adrenalin vorbereiten.“",
        "Wiederholen: „Ich bereite 1 mg Adrenalin vor.“",
        "Ampulle zeigen und Wirkstoff und Konzentration laut vorlesen",
        "Übergeben: „1 mg Adrenalin auf 10 ml, also 0,1 mg pro ml.“",
        "Bestätigen nach Gabe: „1 mg Adrenalin ist gegeben, 10:42 Uhr.“"
      ] },
      { h: "Beim Aufziehen" },
      { ul: [
        "Hände desinfizieren, Septum oder Ampullenhals desinfizieren",
        "Verfallsdatum, Unversehrtheit, Trübung und Ausflockung prüfen",
        "Konzentration der Ampulle prüfen: viele Wirkstoffe gibt es in mehreren Stärken",
        "Brechampulle mit Tupfer öffnen, mit Aufziehkanüle aufziehen",
        "Luft entfernen, Spritze sofort beschriften (Wirkstoff, Gesamtmenge, ml)",
        "Leere Ampulle bis Einsatzende aufbewahren (Nachweis)",
        "Betäubungsmittel: Entnahme lückenlos dokumentieren"
      ] },
      { h: "Rechnen" },
      { ul: [
        "Konzentration = Wirkstoffmenge ÷ Volumen",
        "Beispiel: 1 mg Adrenalin auf 10 ml = 0,1 mg/ml",
        "Beispiel: 0,4 mg Naloxon auf 10 ml = 0,04 mg/ml",
        "Beispiel: 500 mg ASS in 5 ml = 100 mg/ml, 250 mg = 2,5 ml"
      ] },
      { merke: "Unbeschriftete Spritzen gibt es nicht. Spülspritzen (NaCl) auch beschriften." }
    ]
  },
  {
    id: "manv", titel: "MANV: die ersten Minuten", kurz: "Führen statt behandeln, Sichtung nach mSTaRT",
    bloecke: [
      { p: "Beim Massenanfall von Verletzten behandelt das erste Fahrzeug nicht einzelne Patienten. Es führt, bis Organisatorischer Leiter und Leitender Notarzt eintreffen." },
      { h: "Aufgaben des ersten Fahrzeugs" },
      { ol: [
        "Lage erkunden: Anzahl Betroffene, Gefahren, Zufahrten",
        "Lagemeldung mit Stichwort MANV und Nachforderung an die Leitstelle",
        "Sichtung beginnen, Patienten kennzeichnen",
        "Raumordnung festlegen: Bereitstellungsraum, Patientenablage, Ein- und Ausfahrt",
        "Übergabe an OrgL und LNA"
      ] },
      { h: "Vorsichtung nach mSTaRT (Erwachsene)" },
      { ol: [
        "Gehfähig? Ja → grün (SK III)",
        "Kritische Blutung? Sofort stoppen (Tourniquet) → rot",
        "Atmung nach Freimachen der Atemwege? Nein → keine Lebenszeichen",
        "Atemfrequenz über 30/min? Ja → rot (SK I)",
        "Radialispuls fehlt oder Rekap über 2 s? Ja → rot (SK I)",
        "Befolgt einfache Aufforderungen nicht? Ja → rot (SK I)",
        "Sonst → gelb (SK II)"
      ] },
      { h: "Sichtungskategorien" },
      { ul: [
        "SK I – rot: akute vitale Bedrohung, Sofortbehandlung",
        "SK II – gelb: schwer verletzt, dringliche Behandlung",
        "SK III – grün: leicht verletzt, spätere Behandlung",
        "SK IV – blau: ohne Überlebenschance, betreuende Versorgung (Entscheidung durch Arzt)",
        "Schwarz/ex: verstorben"
      ] },
      { merke: "Pro Patient bei der Vorsichtung nur wenige Sekunden. Einzige Maßnahmen: Blutung stoppen, Atemweg freimachen, Seitenlage." }
    ]
  },
  {
    id: "funk", titel: "Funk und Status", kurz: "FMS-Status und Funkspruch",
    bloecke: [
      { h: "FMS-Status" },
      { ul: [
        "0 – Priorisierter Sprechwunsch (Notfall, z. B. Bedrohung)",
        "1 – Einsatzbereit über Funk",
        "2 – Einsatzbereit auf der Wache",
        "3 – Einsatz übernommen",
        "4 – Am Einsatzort",
        "5 – Sprechwunsch",
        "6 – Nicht einsatzbereit",
        "7 – Patient aufgenommen",
        "8 – Am Transportziel"
      ] },
      { h: "Funkspruch aufbauen" },
      { ol: [
        "Gerufene Stelle: „Leitstelle von …“",
        "Eigener Funkrufname",
        "Kurz und sachlich: Lage, Bedarf",
        "Abschluss: „kommen“ (Antwort erwartet) oder „Ende“"
      ] },
      { merke: "Erst denken, dann drücken. Keine Patientennamen über Funk." }
    ]
  },
  {
    id: "verweigerung", titel: "Transportverweigerung", kurz: "Einwilligungsfähigkeit, Aufklärung, Dokumentation",
    bloecke: [
      { p: "Ein einwilligungsfähiger Patient darf die Behandlung oder den Transport ablehnen, auch wenn das unvernünftig erscheint." },
      { h: "Vorgehen" },
      { ol: [
        "Einwilligungsfähigkeit prüfen: orientiert, versteht die Situation, keine Intoxikation, keine Hypoglykämie",
        "Verständlich über Risiken aufklären, bis hin zur Lebensgefahr",
        "Bei Zweifeln oder relevantem Befund: Notarzt hinzuziehen",
        "Alternativen anbieten: Hausarzt, ärztlicher Bereitschaftsdienst 116 117, erneuter Notruf 112",
        "Ablehnung schriftlich dokumentieren, Unterschrift des Patienten, möglichst Zeugen"
      ] },
      { merke: "Nicht einwilligungsfähig (z. B. Hypoglykämie, schwere Intoxikation): Es gilt der mutmaßliche Wille. NA und ggf. Polizei hinzuziehen." }
    ]
  }
];

/* ---------- Eigene Fragen (Medikamente, Akronyme, Organisation) ---------- */
DATA.fragen = [
  /* Medikamente */
  { id: "q-nitro-pde5", bereich: "medis", typ: "mc", frage: "Nach welcher Vorerkrankung bzw. Medikation musst du vor Nitro-Gabe unbedingt fragen?",
    optionen: ["Potenzmittel (PDE-5-Hemmer, z. B. Sildenafil)", "Schilddrüsentabletten", "Vitamin D", "Antibiotika"], richtig: 0,
    erklaerung: "Nitro und PDE-5-Hemmer zusammen können einen lebensbedrohlichen Blutdruckabfall auslösen." },
  { id: "q-amio-verd", bereich: "medis", typ: "mc", frage: "Womit wird Amiodaron laut Fachinformation verdünnt?",
    optionen: ["NaCl 0,9 %", "Glukose 5 %", "Aqua ad iniectabilia", "Vollelektrolytlösung"], richtig: 1,
    erklaerung: "Amiodaron nur mit Glukose 5 % verdünnen. Manche SOPs geben unverdünnt mit Nachspülen: Vorgabe deiner Wache beachten." },
  { id: "q-g40-para", bereich: "medis", typ: "mc", frage: "Was droht, wenn Glukose 40 % paravenös läuft?",
    optionen: ["Nichts, das ist harmlos", "Gewebsnekrosen", "Hypoglykämie", "Allergischer Schock"], richtig: 1,
    erklaerung: "G40 ist stark hyperton und schädigt das Gewebe. Nur über sicher liegenden Zugang in eine laufende Infusion." },
  { id: "q-adr-ana", bereich: "medis", typ: "mc", frage: "Wie wird Adrenalin bei Anaphylaxie beim Erwachsenen als Erstes gegeben?",
    optionen: ["1 mg unverdünnt i.v.", "0,5 mg i.m. in den Oberschenkel außen", "0,05 mg s.c.", "5 mg vernebelt als einzige Maßnahme"], richtig: 1,
    erklaerung: "0,5 mg i.m. (0,01 mg/kg), Wiederholung nach ca. 5 Minuten möglich. Eine i.v.-Gabe nur durch den NA, stark verdünnt und titriert." },
  { id: "q-nalox-rebound", bereich: "medis", typ: "mc", frage: "Warum muss ein Patient nach Naloxon-Gabe überwacht und transportiert werden?",
    optionen: ["Naloxon macht süchtig", "Naloxon wirkt kürzer als viele Opioide, der Patient kann wieder eintrüben", "Naloxon senkt den Blutzucker", "Naloxon verursacht Krampfanfälle"], richtig: 1,
    erklaerung: "Rebound-Gefahr: Die Opioidwirkung kann die Naloxonwirkung überdauern." },
  { id: "q-adr-reaverd", bereich: "medis", typ: "text", frage: "1 mg Adrenalin wird auf 10 ml verdünnt. Wie viel mg sind dann in 1 ml? (Zahl)",
    antworten: ["0,1", "0.1", "0,1 mg"], erklaerung: "1 mg ÷ 10 ml = 0,1 mg/ml." },
  { id: "q-ass-ml", bereich: "medis", typ: "text", frage: "ASS: 500 mg in 5 ml aufgelöst. Wie viele ml brauchst du für 250 mg? (Zahl)",
    antworten: ["2,5", "2.5"], erklaerung: "500 mg in 5 ml = 100 mg/ml. 250 mg = 2,5 ml." },
  { id: "q-nalox-ml", bereich: "medis", typ: "text", frage: "0,4 mg Naloxon auf 10 ml verdünnt: Wie viel mg sind in 1 ml? (Zahl)",
    antworten: ["0,04", "0.04"], erklaerung: "0,4 mg ÷ 10 ml = 0,04 mg/ml." },
  { id: "q-amio-amp", bereich: "medis", typ: "text", frage: "Wie viele Ampullen Amiodaron (150 mg) brauchst du für 300 mg? (Zahl)",
    antworten: ["2", "zwei"], erklaerung: "300 mg = 2 Ampullen à 150 mg = 6 ml." },
  { id: "q-txa-zeit", bereich: "medis", typ: "mc", frage: "Bis wann nach dem Trauma soll Tranexamsäure spätestens gegeben werden?",
    optionen: ["Innerhalb von 3 Stunden", "Innerhalb von 12 Stunden", "Innerhalb von 24 Stunden", "Zeit spielt keine Rolle"], richtig: 0,
    erklaerung: "Nach mehr als 3 Stunden kein Nutzen mehr, eher Schaden. Unfallzeit notieren." },
  { id: "q-btm", bereich: "medis", typ: "multi", frage: "Welche dieser Medikamente sind Betäubungsmittel (BtM)?",
    optionen: ["Fentanyl", "Morphin", "Esketamin", "Midazolam", "Metamizol"], richtig: [0, 1],
    erklaerung: "Fentanyl und Morphin sind BtM. Esketamin und Metamizol nicht. Midazolam-Ampullen in den üblichen Stärken fallen meist unter eine Ausnahmeregelung. Wie deine Wache das handhabt, steht in der SOP." },
  { id: "q-antidot-benzo", bereich: "medis", typ: "mc", frage: "Welches ist das Antidot zu Midazolam?",
    optionen: ["Naloxon", "Flumazenil", "Atropin", "Glukose"], richtig: 1, erklaerung: "Flumazenil (Anexate) hebt die Wirkung von Benzodiazepinen auf." },
  { id: "q-6r-ord", bereich: "medis", typ: "multi", frage: "Was gehört zur 6-R-Regel?",
    optionen: ["Richtiger Patient", "Richtige Dosierung", "Richtige Raumtemperatur", "Richtige Dokumentation", "Richtiger Zeitpunkt", "Richtiger Rettungswagen"], richtig: [0, 1, 3, 4],
    erklaerung: "Die 6 R: Patient, Medikament, Dosierung, Applikationsart, Zeitpunkt, Dokumentation." },
  { id: "q-closed-loop", bereich: "medis", typ: "order", frage: "Bringe die Closed-Loop-Kommunikation beim Vorbereiten in die richtige Reihenfolge.",
    items: ["NA ordnet an: „Bitte 1 mg Adrenalin.“", "Du wiederholst: „Ich bereite 1 mg Adrenalin vor.“", "Ampulle zeigen und laut vorlesen", "Spritze beschriftet übergeben: „1 mg auf 10 ml.“", "NA bestätigt die Gabe mit Uhrzeit"],
    erklaerung: "Anordnen – wiederholen – zeigen – übergeben – bestätigen. So fallen Verwechslungen auf." },
  { id: "q-vel-tropf", bereich: "medis", typ: "mc", frage: "Wie weit füllst du die Tropfkammer beim Vorbereiten einer Infusion?",
    optionen: ["Ganz voll", "Etwa ½ bis ⅔", "Gar nicht", "Nur ein paar Tropfen"], richtig: 1,
    erklaerung: "So kann man die Tropfen zählen und es gelangt keine Luft ins System." },

  /* Akronyme (zusätzlich zu den automatisch erzeugten) */
  { id: "q-gcs-min", bereich: "akronyme", typ: "text", frage: "Wie viele Punkte hat die GCS mindestens? (Zahl)", antworten: ["3", "drei"], erklaerung: "GCS reicht von 3 bis 15 Punkten." },
  { id: "q-gcs-mot", bereich: "akronyme", typ: "text", frage: "Wie viele Punkte gibt es bei der GCS maximal für die motorische Antwort? (Zahl)", antworten: ["6", "sechs"], erklaerung: "Augen 4, Verbal 5, Motorik 6." },
  { id: "q-gcs-8", bereich: "akronyme", typ: "mc", frage: "Was bedeutet eine GCS von 8 oder weniger?",
    optionen: ["Leichte Bewusstseinsstörung", "Schutzreflexe gefährdet, Atemweg muss gesichert werden", "Patient ist voll orientiert", "Patient ist verstorben"], richtig: 1,
    erklaerung: "GCS ≤ 8: Atemweg gefährdet. Notarzt, Atemwegssicherung." },
  { id: "q-dms-d", bereich: "akronyme", typ: "text", frage: "Wofür steht das D in DMS?", antworten: ["durchblutung"], erklaerung: "DMS: Durchblutung, Motorik, Sensibilität." },
  { id: "q-sampler-l", bereich: "akronyme", typ: "mc", frage: "Wofür steht das L in SAMPLER?",
    optionen: ["Lagerung", "Letzte Mahlzeit / letzte Ausscheidung / letzte Periode", "Lungenbefund", "Leitsymptom"], richtig: 1, erklaerung: "L = letzte orale Aufnahme, letzter Stuhlgang/Urin, letzte Periode." },
  { id: "q-hits-t", bereich: "akronyme", typ: "mc", frage: "Wofür steht das T bei HITS?",
    optionen: ["Trauma", "Thromboembolie", "Tachykardie", "Temperatur"], richtig: 1, erklaerung: "T = Thromboembolie (Lungenembolie, Koronarthrombose)." },
  { id: "q-schockindex-calc", bereich: "akronyme", typ: "text", frage: "HF 120/min, RR systolisch 80 mmHg. Wie hoch ist der Schockindex? (Zahl)",
    antworten: ["1,5", "1.5"], erklaerung: "120 ÷ 80 = 1,5. Werte über 1 sprechen für einen Schock." },
  { id: "q-naca-vi", bereich: "akronyme", typ: "mc", frage: "Welcher NACA-Score gilt für einen Patienten unter Reanimation?",
    optionen: ["NACA IV", "NACA V", "NACA VI", "NACA VII"], richtig: 2, erklaerung: "NACA VI = Reanimation, NACA VII = Tod." },

  /* Organisation */
  { id: "q-o-status4", bereich: "orga", typ: "text", frage: "Welchen FMS-Status drückst du bei Ankunft am Einsatzort? (Zahl)", antworten: ["4", "vier"], erklaerung: "Status 4 = am Einsatzort." },
  { id: "q-o-status7", bereich: "orga", typ: "text", frage: "Welchen FMS-Status drückst du, wenn der Patient im Fahrzeug ist und der Transport beginnt? (Zahl)", antworten: ["7", "sieben"], erklaerung: "Status 7 = Patient aufgenommen." },
  { id: "q-o-status8", bereich: "orga", typ: "mc", frage: "Was bedeutet FMS-Status 8?", optionen: ["Nicht einsatzbereit", "Am Transportziel", "Sprechwunsch", "Einsatz übernommen"], richtig: 1, erklaerung: "Status 8 = am Transportziel (z. B. Klinik)." },
  { id: "q-o-status0", bereich: "orga", typ: "mc", frage: "Wann nutzt du Status 0?", optionen: ["Wenn du Pause machst", "Bei Gefahr für die Besatzung oder dringendstem Sprechwunsch", "Bei Ankunft an der Wache", "Zum Tanken"], richtig: 1, erklaerung: "Status 0 = priorisierter Sprechwunsch, z. B. bei Bedrohung." },
  { id: "q-o-ankunft", bereich: "orga", typ: "order", frage: "Du triffst als Erster ein. Bringe die ersten Schritte in die richtige Reihenfolge.",
    items: ["Fahrzeug sicher abstellen und Status 4", "Eigenschutz: Gefahren erkennen", "Lage erkunden: was, wie viele, welche Gefahren", "Rückmeldung an die Leitstelle und Nachforderung", "Patienten nach Priorität versorgen"],
    erklaerung: "Erst Sicherheit, dann Überblick, dann melden, dann versorgen. Wer sofort behandelt, verliert den Überblick." },
  { id: "q-o-nachf", bereich: "orga", typ: "multi", frage: "Wann forderst du die Feuerwehr nach?",
    optionen: ["Eingeklemmte Person nach Verkehrsunfall", "Schwergewichtiger Patient, Tragehilfe nötig", "Verschlossene Wohnung, Patient ruft um Hilfe", "Patient mit Fieber", "Gasgeruch im Haus"], richtig: [0, 1, 2, 4],
    erklaerung: "Feuerwehr: technische Rettung, Tragehilfe, Türöffnung, Brand und Gefahrstoffe." },
  { id: "q-o-polizei", bereich: "orga", typ: "multi", frage: "Wann forderst du die Polizei nach?",
    optionen: ["Gewalt oder Bedrohung an der Einsatzstelle", "Verkehrsunfall mit Verletzten", "Unklarer Todesfall", "Hypoglykämie in der Wohnung", "Suizidversuch"], richtig: [0, 1, 2, 4],
    erklaerung: "Polizei bei Gefahr, Straftatverdacht, Verkehrsunfällen, Suizidversuch und unklaren Todesfällen." },
  { id: "q-o-handsoff", bereich: "orga", typ: "mc", frage: "Was bedeutet „Hands-off“-Übergabe?",
    optionen: ["Der Patient wird nicht angefasst, bis die Klinik übernimmt", "Während der Übergabe hören alle zu, keine Maßnahmen außer lebensrettenden", "Übergabe nur schriftlich", "Der NA übergibt ohne Rettungsdienst"], richtig: 1,
    erklaerung: "So geht keine Information verloren." },
  { id: "q-o-isbar", bereich: "orga", typ: "order", frage: "Bringe die Übergabe nach ISBAR in die richtige Reihenfolge.",
    items: ["Identifikation des Patienten", "Situation: Leitsymptom, Ereignis", "Background: Vorerkrankungen, Medikamente, Allergien", "Assessment: Befunde, Vitalwerte, Maßnahmen", "Recommendation: offene Punkte"],
    erklaerung: "ISBAR: Identifikation – Situation – Background – Assessment – Recommendation." },
  { id: "q-o-mist", bereich: "orga", typ: "text", frage: "Welches Übergabeschema mit 4 Buchstaben nutzt man beim Trauma?", antworten: ["mist"], erklaerung: "MIST: Mechanism, Injuries, Signs, Treatment." },
  { id: "q-o-krit1", bereich: "orga", typ: "mc", frage: "Patient, 70 Jahre: AF 34/min, SpO₂ 86 %, spricht nur einzelne Wörter. Wie schätzt du ihn ein?",
    optionen: ["Nicht kritisch", "Kritisch (B-Problem)", "Kritisch (D-Problem)", "Erst nach Anamnese beurteilbar"], richtig: 1,
    erklaerung: "Atemfrequenz über 30, SpO₂ unter 90 % und Sprechdyspnoe: klares B-Problem." },
  { id: "q-o-krit2", bereich: "orga", typ: "mc", frage: "Patientin, 25 Jahre: Umknicktrauma Sprunggelenk, Vitalwerte normal, wach und orientiert. Wie schätzt du sie ein?",
    optionen: ["Kritisch", "Nicht kritisch", "Reanimationspflichtig", "Sofort NA nachfordern"], richtig: 1,
    erklaerung: "Stabile Vitalwerte, kein ABCDE-Problem. In Ruhe untersuchen, DMS, PECH, Transport zur Abklärung." },
  { id: "q-o-krit3", bereich: "orga", typ: "mc", frage: "Patient, 50 Jahre: HF 135/min, RR 82/50 mmHg, Haut blass und kaltschweißig, Teerstuhl. Wie schätzt du ihn ein?",
    optionen: ["Nicht kritisch", "Kritisch (C-Problem, Schockverdacht)", "Kritisch (A-Problem)", "Nur Magen-Darm-Infekt"], richtig: 1,
    erklaerung: "Schockindex 1,6, Zentralisation und Teerstuhl: Verdacht auf obere GI-Blutung mit Schock." },
  { id: "q-o-krit4", bereich: "orga", typ: "multi", frage: "Welche Befunde sind Warnzeichen für einen kritischen Patienten (Erwachsener)?",
    optionen: ["Atemfrequenz 36/min", "SpO₂ 97 %", "RR systolisch 82 mmHg", "Neu aufgetretene Verwirrtheit", "HF 76/min", "Rekap 4 Sekunden"], richtig: [0, 2, 3, 5],
    erklaerung: "Tachypnoe, Hypotonie, neue Bewusstseinsstörung und verlängerte Rekap sind Warnzeichen." },
  { id: "q-o-start", bereich: "orga", typ: "mc", frage: "MANV-Vorsichtung: Ein Verletzter läuft selbstständig zu dir. Welche Kategorie?",
    optionen: ["Rot (SK I)", "Gelb (SK II)", "Grün (SK III)", "Blau (SK IV)"], richtig: 2, erklaerung: "Gehfähig = grün (SK III), wird später genauer nachgesichtet." },
  { id: "q-o-start2", bereich: "orga", typ: "mc", frage: "MANV-Vorsichtung: Patient nicht gehfähig, atmet, AF 36/min. Welche Kategorie?",
    optionen: ["Rot (SK I)", "Gelb (SK II)", "Grün (SK III)", "Schwarz"], richtig: 0, erklaerung: "Atemfrequenz über 30/min = rot (SK I)." },
  { id: "q-o-start-ord", bereich: "orga", typ: "order", frage: "Bringe die mSTaRT-Prüfschritte in die richtige Reihenfolge.",
    items: ["Gehfähig?", "Kritische Blutung?", "Atmung vorhanden (nach Atemwegsfreimachen)?", "Atemfrequenz über 30/min?", "Radialispuls / Rekap?", "Befolgt Aufforderungen?"],
    erklaerung: "Gehfähigkeit – Blutung – Atmung – Atemfrequenz – Kreislauf – Bewusstsein." },
  { id: "q-o-manv-erst", bereich: "orga", typ: "mc", frage: "Was ist beim MANV die Hauptaufgabe des ersten Rettungsmittels?",
    optionen: ["Den ersten Patienten komplett versorgen und transportieren", "Führen: Lage erkunden, melden, nachfordern, sichten, Raum ordnen", "Auf den OrgL warten und nichts tun", "Alle Patienten selbst ins Krankenhaus fahren"], richtig: 1,
    erklaerung: "Wer sich in der Einzelversorgung verliert, verliert den Überblick über alle anderen." },
  { id: "q-o-5w", bereich: "orga", typ: "order", frage: "Bringe die 5 W einer Notfallmeldung in die übliche Reihenfolge.",
    items: ["Wo ist es passiert?", "Was ist passiert?", "Wie viele Betroffene?", "Welche Verletzungen/Erkrankungen?", "Warten auf Rückfragen"], erklaerung: "Wo – Was – Wie viele – Welche – Warten." },
  { id: "q-o-verw", bereich: "orga", typ: "mc", frage: "Ein Patient mit BZ 35 mg/dl lehnt den Transport ab. Was gilt?",
    optionen: ["Er ist einwilligungsfähig, also gehen", "Er ist wahrscheinlich nicht einwilligungsfähig: erst behandeln, NA hinzuziehen", "Polizei ruft immer den Hausarzt", "Unterschrift genügt immer"], richtig: 1,
    erklaerung: "Bei Hypoglykämie ist die Einwilligungsfähigkeit eingeschränkt. Es gilt der mutmaßliche Wille." },
  { id: "q-o-116", bereich: "orga", typ: "text", frage: "Unter welcher Nummer erreicht man den ärztlichen Bereitschaftsdienst? (Zahl)", antworten: ["116117", "116 117"], erklaerung: "116 117: ärztlicher Bereitschaftsdienst, bundesweit." },
  { id: "q-o-aaaa", bereich: "orga", typ: "multi", frage: "Welche Gefahren gehören zur Gefahrenmatrix AAAA-C-EEEE?",
    optionen: ["Atemgifte", "Explosion", "Elektrizität", "Ermüdung", "Einsturz", "Angstreaktion"], richtig: [0, 1, 2, 4, 5],
    erklaerung: "Atemgifte, Angstreaktion, Ausbreitung, Atomare Strahlung, Chemische Stoffe, Erkrankung, Explosion, Elektrizität, Einsturz." },
  { id: "q-o-doku", bereich: "orga", typ: "card", vorne: "Was gehört bei der Übergabe zu jedem gegebenen Medikament dazu?",
    hinten: "Wirkstoff, Dosis, Applikationsweg, Uhrzeit und wer es gegeben bzw. angeordnet hat. Bei BtM zusätzlich die Dokumentation der Entnahme." },
  { id: "q-o-ersteindruck", bereich: "orga", typ: "card", vorne: "Welche 4 Dinge beurteilst du im Ersteindruck, noch ohne Geräte?",
    hinten: "Bewusstsein, Atmung (Atemarbeit, Geräusche), Haut (Farbe, Schweiß) und sichtbare starke Blutungen." }
];

/* ---------- Fallbeispiele ---------- */
DATA.faelle = [
  {
    id: "f-acs", titel: "Brustschmerz in der Wohnung", thema: "Herz", kritisch: true,
    meldung: { stichwort: "RD 2 · Brustschmerz", text: "Männlich, 64 Jahre, Wohnung 2. OG, Norden" },
    schritte: [
      { info: "Der Patient sitzt auf dem Sofa, ist blass und kaltschweißig und hält sich die Brust. Er spricht in ganzen Sätzen.",
        typ: "mc", frage: "Wie schätzt du den Patienten im Ersteindruck ein?",
        optionen: ["Nicht kritisch, erst mal in Ruhe Anamnese", "Kritisch: Hinweise auf ein Kreislaufproblem (C-Problem)", "Kann man erst nach dem EKG sagen", "Kritisch: A-Problem"], richtig: 1,
        erklaerung: "Blässe und Kaltschweißigkeit sind Zeichen der Zentralisation. Brustschmerz mit diesen Zeichen ist kritisch, bis das Gegenteil bewiesen ist." },
      { info: "A frei. B: AF 20/min, SpO₂ 95 %. C: HF 92/min, RR 135/85 mmHg, Rekap 2 s. D: GCS 15, BZ 112 mg/dl. E: Schmerz seit 40 min, drückend, Ausstrahlung in den linken Arm, NRS 7.",
        typ: "mc", frage: "Was ist jetzt die wichtigste diagnostische Maßnahme?",
        optionen: ["Blutdruck am anderen Arm messen", "12-Kanal-EKG innerhalb von 10 Minuten nach Erstkontakt", "Temperatur messen", "Pupillen prüfen"], richtig: 1,
        erklaerung: "Bei Verdacht auf ACS muss innerhalb von 10 Minuten ein 12-Kanal-EKG abgeleitet und bewertet werden." },
      { info: "Das EKG zeigt ST-Hebungen in II, III und aVF.",
        typ: "mc", frage: "Welche Diagnose ist am wahrscheinlichsten?",
        optionen: ["Vorderwandinfarkt", "Hinterwandinfarkt (inferiorer STEMI)", "Lungenembolie", "Normalbefund"], richtig: 1,
        erklaerung: "ST-Hebungen in II, III und aVF sprechen für einen inferioren STEMI. Dabei kann der rechte Ventrikel beteiligt sein: dann Vorsicht mit Nitro, weil der Blutdruck stark fallen kann." },
      { typ: "multi", frage: "Der NA ist nachgefordert. Was bereitest du nach typischem ACS-Algorithmus vor?",
        optionen: ["Acetylsalicylsäure i.v.", "Heparin i.v.", "Glukose 40 %", "Salbutamol-Inhalation", "Venösen Zugang mit Vollelektrolytlösung"], richtig: [0, 1, 4],
        erklaerung: "ASS und Heparin sind die Standardmedikamente beim ACS (laut SOP). Dazu ein sicherer Zugang. Nitro nur bei ausreichendem Blutdruck und nicht bei Rechtsherzbeteiligung." },
      { typ: "mc", frage: "Wohin geht der Transport?",
        optionen: ["Ins nächstgelegene Krankenhaus, egal welches", "In eine Klinik mit Herzkatheterlabor (PCI), mit Voranmeldung", "Zum Hausarzt", "Kein Transport nötig"], richtig: 1,
        erklaerung: "Beim STEMI zählt die Zeit bis zur Herzkatheteruntersuchung. Voranmeldung, damit das Team bereitsteht." },
      { typ: "order", frage: "Bringe deine Übergabe in der Klinik in die richtige Reihenfolge (ISBAR).",
        items: ["Identifikation: Name und Alter des Patienten", "Situation: Brustschmerz seit 40 min, inferiorer STEMI", "Background: Vorerkrankungen, Dauermedikation, Allergien", "Assessment: ABCDE, Vitalwerte, Medikamente mit Uhrzeit", "Recommendation: Schmerz aktuell NRS 4, offene Punkte"],
        erklaerung: "Eine feste Struktur sorgt dafür, dass nichts vergessen wird." }
    ],
    fazit: "Kritischer Patient mit inferiorem STEMI. Entscheidend: Ersteindruck, EKG in 10 Minuten, NA nachfordern, ASS und Heparin vorbereiten, PCI-Klinik mit Voranmeldung."
  },
  {
    id: "f-stroke", titel: "Hängender Mundwinkel im Pflegeheim", thema: "Neurologie", kritisch: true,
    meldung: { stichwort: "RD 2 · V. a. Schlaganfall", text: "Weiblich, 78 Jahre, Pflegeheim, Norden" },
    schritte: [
      { info: "Die Pflegekraft berichtet: Beim Frühstück um 07:40 Uhr war noch alles normal. Um 08:15 Uhr hängt der rechte Mundwinkel, die Sprache ist verwaschen.",
        typ: "mc", frage: "Welche Information ist für die Klinik besonders wichtig?",
        optionen: ["Was es zum Frühstück gab", "Wann die Patientin zuletzt gesund gesehen wurde (07:40 Uhr)", "Die Zimmernummer", "Der Name des Hausarztes"], richtig: 1,
        erklaerung: "Der Zeitpunkt „zuletzt gesund gesehen“ entscheidet über Lyse oder Thrombektomie. Genau dokumentieren!" },
      { typ: "mc", frage: "Welche Messung machst du bei jedem Verdacht auf Schlaganfall früh?",
        optionen: ["Blutzucker", "Temperatur", "Peak-Flow", "Kapnometrie"], richtig: 0,
        erklaerung: "Eine Hypoglykämie kann genau wie ein Schlaganfall aussehen." },
      { info: "BZ 128 mg/dl, RR 175/95 mmHg, HF 84/min unregelmäßig, SpO₂ 96 %, GCS 14 (verwirrt). BE-FAST: Gesicht und Arm rechts schwach, Sprache verwaschen.",
        typ: "mc", frage: "Wie gehst du vor?",
        optionen: ["Abwarten, ob es besser wird", "Zügiger Transport in eine Klinik mit Stroke Unit, mit Voranmeldung", "ASS vorbereiten", "Blutdruck sofort auf 120 mmHg senken"], richtig: 1,
        erklaerung: "Time is brain. Kein ASS präklinisch, weil eine Blutung nicht ausgeschlossen ist. Den Blutdruck nur bei sehr hohen Werten vorsichtig senken (laut SOP)." },
      { typ: "multi", frage: "Welche Maßnahmen sind sinnvoll?",
        optionen: ["Oberkörper ca. 30° hochlagern", "Venösen Zugang legen, möglichst nicht am gelähmten Arm", "Etwas zu trinken geben", "Bezugsperson erfragen oder mitnehmen (Auskunft, Einwilligung)", "Sauerstoff routinemäßig bei SpO₂ 96 %"], richtig: [0, 1, 3],
        erklaerung: "Nichts zu trinken geben: Schluckstörung, Aspirationsgefahr. Sauerstoff nur bei erniedrigter Sättigung." }
    ],
    fazit: "Kritische Patientin mit Schlaganfallverdacht. Entscheidend: Zeitpunkt „zuletzt gesund“, BZ messen, BE-FAST, Stroke Unit mit Voranmeldung, kein ASS."
  },
  {
    id: "f-hypo", titel: "„Betrunken“ auf dem Parkplatz", thema: "Stoffwechsel", kritisch: true,
    meldung: { stichwort: "RD 1 · Hilflose Person", text: "Männlich, ca. 55 Jahre, Supermarktparkplatz, Norden" },
    schritte: [
      { info: "Der Mann sitzt im Auto, ist schweißig und unruhig und antwortet verwaschen. Ein Passant sagt: „Der ist doch betrunken.“",
        typ: "mc", frage: "Woran musst du zuerst denken?",
        optionen: ["Alkoholvergiftung, Polizei rufen", "Hypoglykämie: Blutzucker messen", "Panikattacke", "Hitzschlag"], richtig: 1,
        erklaerung: "Schweißig, unruhig, verwirrt: Hypoglykämie, bis das Gegenteil bewiesen ist. Nie vorschnell „betrunken“ annehmen (AEIOU-TIPS)." },
      { info: "BZ 38 mg/dl, GCS 12. Am Gürtel trägt er eine Insulinpumpe. Er kann nicht sicher schlucken.",
        typ: "mc", frage: "Was bereitest du vor?",
        optionen: ["Traubenzucker zum Kauen", "Venösen Zugang und Glukose (G40 in laufende Infusion oder G10-Infusion)", "Insulin", "Adrenalin i.m."], richtig: 1,
        erklaerung: "Bei Bewusstseinsstörung keine orale Gabe: Aspirationsgefahr. Glukose i.v. nach SOP." },
      { typ: "mc", frage: "Worauf achtest du bei Glukose 40 % besonders?",
        optionen: ["Nur i.m. geben", "Nur über sicher liegenden Zugang in eine laufende Infusion, paravenös drohen Nekrosen", "Darf nicht verdünnt werden", "Muss gekühlt sein"], richtig: 1,
        erklaerung: "G40 ist stark hyperton. Zugang vor der Gabe prüfen." },
      { info: "Nach der Glukosegabe: BZ 142 mg/dl, GCS 15. Er möchte nach Hause fahren.",
        typ: "mc", frage: "Was ist richtig?",
        optionen: ["Sofort entlassen, Problem gelöst", "Ursache klären (Pumpe, Mahlzeit ausgelassen), BZ-Kontrolle, Transport empfehlen. Bei Ablehnung aufklären und dokumentieren, nicht selbst fahren lassen", "Er darf weiterfahren", "Ohne Messung noch mehr Glukose geben"], richtig: 1,
        erklaerung: "Insulin wirkt weiter, eine erneute Hypoglykämie ist möglich. Ablehnung nur bei Einwilligungsfähigkeit, Aufklärung dokumentieren, ggf. NA." }
    ],
    fazit: "Kritisch durch D-Problem, nach Therapie stabil. Entscheidend: an Hypoglykämie denken, BZ messen, sichere Glukosegabe, Ursache und Weiterbetreuung klären."
  },
  {
    id: "f-ana", titel: "Wespenstich im Freibad", thema: "Allergie", kritisch: true,
    meldung: { stichwort: "RD 2 · Allergische Reaktion", text: "Weiblich, 34 Jahre, Freibad, Norddeich" },
    schritte: [
      { info: "Wespenstich vor 10 Minuten. Quaddeln am ganzen Körper, sie ist heiser und hat Atemnot. AF 28/min, SpO₂ 91 %, HF 128/min, RR 85/50 mmHg.",
        typ: "mc", frage: "Wie schwer ist die Reaktion?",
        optionen: ["Leicht, nur Haut (Grad I)", "Schwer, Atemwege und Kreislauf betroffen (Grad III)", "Kreislaufstillstand (Grad IV)", "Keine Anaphylaxie"], richtig: 1,
        erklaerung: "Heiserkeit (Larynxödem), Atemnot und Hypotonie: schwere Anaphylaxie." },
      { typ: "mc", frage: "Welches Medikament ist das wichtigste, und wie wird es gegeben?",
        optionen: ["Dimetinden i.v.", "Adrenalin 0,5 mg i.m. in den Oberschenkel außen", "Prednisolon i.v.", "Salbutamol inhalativ"], richtig: 1,
        erklaerung: "Adrenalin i.m. ist das Mittel der ersten Wahl und darf nicht verzögert werden. Antihistaminikum und Kortison wirken später." },
      { typ: "multi", frage: "Was gehört außerdem dazu?",
        optionen: ["Auslöser entfernen (Stachel)", "Sauerstoff hochdosiert", "Volumen über großlumigen Zugang", "Patientin zum RTW laufen lassen", "Lagerung nach Symptomen: Atemnot → Oberkörper hoch, Schock → flach, Beine hoch"], richtig: [0, 1, 2, 4],
        erklaerung: "Bei Schock nicht aufstehen oder laufen lassen: Kreislaufversagen droht." },
      { typ: "mc", frage: "Welche Ampullenstärke hat Adrenalin im Rettungsdienst üblicherweise?",
        optionen: ["1 mg / 1 ml", "10 mg / 1 ml", "0,1 mg / 1 ml", "5 mg / 5 ml"], richtig: 0,
        erklaerung: "1 mg/1 ml. Für 0,5 mg i.m. ziehst du also 0,5 ml auf." }
    ],
    fazit: "Kritische Patientin mit schwerer Anaphylaxie. Entscheidend: Adrenalin i.m. sofort, O₂, Volumen, Lagerung, NA."
  },
  {
    id: "f-asthma", titel: "Atemnot bei junger Frau", thema: "Atmung", kritisch: true,
    meldung: { stichwort: "RD 2 · Atemnot", text: "Weiblich, 22 Jahre, Wohnung, Norden" },
    schritte: [
      { info: "Die Patientin sitzt vornübergebeugt, stützt die Arme auf und spricht nur in Wortfetzen. Giemen hörbar, AF 30/min, SpO₂ 89 %, HF 118/min. Bekanntes Asthma.",
        typ: "mc", frage: "Welche Lagerung?",
        optionen: ["Flach auf dem Rücken", "Sitzend, Oberkörper hoch, Arme abgestützt (Kutschersitz)", "Stabile Seitenlage", "Schocklage"], richtig: 1,
        erklaerung: "So kann die Atemhilfsmuskulatur eingesetzt werden." },
      { typ: "multi", frage: "Was bereitest du für den Vernebler vor?",
        optionen: ["Salbutamol", "Ipratropiumbromid", "Furosemid", "Glukose 40 %"], richtig: [0, 1],
        erklaerung: "Salbutamol 2,5 mg + Ipratropiumbromid 500 µg, Vernebler mit 6–8 l/min O₂." },
      { typ: "mc", frage: "Welcher Befund ist ein Alarmzeichen für lebensbedrohliches Asthma?",
        optionen: ["Lautes Giemen", "„Stille Lunge“: kaum Atemgeräusch, Erschöpfung", "AF 20/min", "SpO₂ 97 %"], richtig: 1,
        erklaerung: "Kaum Atemgeräusch bedeutet kaum Luftbewegung. Dazu Erschöpfung, Bradykardie oder Bewusstseinsstörung: höchste Gefahr." },
      { typ: "mc", frage: "Welches Medikament wird zusätzlich i.v. gegeben, um die Entzündung zu hemmen?",
        optionen: ["Prednisolon", "Atropin", "Heparin", "Naloxon"], richtig: 0,
        erklaerung: "Prednisolon wirkt entzündungshemmend, aber erst nach 30–60 Minuten." }
    ],
    fazit: "Kritische Patientin mit schwerem Asthmaanfall (B-Problem). Entscheidend: Lagerung, O₂, Vernebler, Prednisolon, NA und Alarmzeichen kennen."
  },
  {
    id: "f-krampf", titel: "Krampfanfall in der Fußgängerzone", thema: "Neurologie", kritisch: true,
    meldung: { stichwort: "RD 2 · Krampfanfall", text: "Männlich, ca. 30 Jahre, Fußgängerzone, Norden" },
    schritte: [
      { info: "Der Mann krampft am Boden, Passanten halten ihn fest. Laut Zeugen krampft er schon seit 6 Minuten.",
        typ: "mc", frage: "Was ist jetzt richtig?",
        optionen: ["Festhalten und Beißkeil einlegen", "Vor Verletzungen schützen, nicht festhalten, nichts in den Mund. Ab 5 Minuten Status epilepticus: Medikament", "Wasser ins Gesicht", "Bis 15 Minuten abwarten"], richtig: 1,
        erklaerung: "Ein Anfall über 5 Minuten gilt als Status epilepticus und muss medikamentös durchbrochen werden." },
      { typ: "mc", frage: "Welches Medikament wird zur Durchbrechung meist vorbereitet?",
        optionen: ["Midazolam (i.n., i.m., bukkal oder i.v.)", "Glukose 40 %", "Esketamin", "Furosemid"], richtig: 0,
        erklaerung: "Midazolam, z. B. intranasal über Zerstäuber oder i.m., ohne vorher einen Zugang legen zu müssen." },
      { typ: "mc", frage: "Was überwachst du nach der Midazolamgabe besonders?",
        optionen: ["Temperatur", "Atmung und SpO₂ (Atemdepression)", "Nur die Pupillen", "Blutzucker stündlich"], richtig: 1,
        erklaerung: "Beatmungsbeutel und Absaugung bereithalten." },
      { info: "Der Krampf hört auf. Der Patient ist schläfrig, atmet ausreichend, BZ 96 mg/dl.",
        typ: "mc", frage: "Wie lagerst du ihn?",
        optionen: ["Seitenlage, Atemweg freihalten", "Hinsetzen", "Schocklage", "Bauchlage"], richtig: 0,
        erklaerung: "Postiktal sind die Schutzreflexe eingeschränkt. Zungenbiss, Einnässen und Verletzungen dokumentieren." }
    ],
    fazit: "Kritischer Patient mit Status epilepticus. Entscheidend: Schutz statt Festhalten, Midazolam nach 5 Minuten, Atmung überwachen, BZ messen."
  },
  {
    id: "f-rea", titel: "Bewusstlos im Hausflur", thema: "Reanimation", kritisch: true,
    meldung: { stichwort: "RD 2 · Person bewusstlos", text: "Männlich, ca. 60 Jahre, Einfamilienhaus, Norden" },
    schritte: [
      { info: "Der Mann liegt im Flur, reagiert nicht und hat Schnappatmung.",
        typ: "mc", frage: "Was tust du?",
        optionen: ["30 Sekunden Puls tasten", "Herz-Kreislauf-Stillstand: sofort Thoraxkompressionen 30:2, Defi anschließen, NA nachfordern", "Stabile Seitenlage", "Zuerst einen Zugang legen"], richtig: 1,
        erklaerung: "Schnappatmung ist keine normale Atmung! Jede Sekunde ohne Kompression verschlechtert die Prognose." },
      { typ: "mc", frage: "Wie tief und wie schnell drückst du beim Erwachsenen?",
        optionen: ["2–3 cm, 60/min", "5–6 cm, 100–120/min", "8 cm, 140/min", "4 cm, 80/min"], richtig: 1,
        erklaerung: "5–6 cm tief, 100–120/min, vollständig entlasten, möglichst wenig Unterbrechungen." },
      { info: "Rhythmusanalyse: Kammerflimmern. Der 3. Schock ist abgegeben.",
        typ: "multi", frage: "Welche Medikamente bereitest du jetzt vor?",
        optionen: ["Adrenalin 1 mg", "Amiodaron 300 mg", "Atropin 3 mg", "Glukose 40 %"], richtig: [0, 1],
        erklaerung: "Nach dem 3. Schock: Adrenalin 1 mg und Amiodaron 300 mg. Adrenalin dann alle 3–5 Minuten." },
      { typ: "mc", frage: "Womit wird Amiodaron laut Fachinformation verdünnt?",
        optionen: ["NaCl 0,9 %", "Glukose 5 %", "Aqua", "Gar nicht verdünnen"], richtig: 1,
        erklaerung: "Glukose 5 %. Manche SOPs geben unverdünnt mit Nachspülen: Vorgabe der Wache beachten." },
      { typ: "multi", frage: "Welche gehören zu den reversiblen Ursachen (4H/HITS)?",
        optionen: ["Hypoxie", "Hypovolämie", "Hypertonie", "Herzbeuteltamponade", "Spannungspneumothorax", "Hyperventilation"], richtig: [0, 1, 3, 4],
        erklaerung: "4H: Hypoxie, Hypovolämie, Hypo-/Hyperkaliämie, Hypothermie. HITS: Herzbeuteltamponade, Intoxikation, Thromboembolie, Spannungspneumothorax." }
    ],
    fazit: "Herz-Kreislauf-Stillstand. Entscheidend: sofort drücken, früh defibrillieren, Medikamente nach dem 3. Schock, reversible Ursachen suchen."
  },
  {
    id: "f-trauma", titel: "Motorradunfall auf der Landstraße", thema: "Trauma", kritisch: true,
    meldung: { stichwort: "RD 2 · VU mit Krad", text: "Motorrad gegen Pkw, Landstraße bei Norden" },
    schritte: [
      { typ: "mc", frage: "Du kommst an. Was hat Vorrang?",
        optionen: ["Sofort zum Patienten laufen", "Eigenschutz: Fahrzeug absichern, Warnweste, Gefahren erkennen (Verkehr, Betriebsstoffe)", "Fotos machen", "Das Motorrad aufheben"], richtig: 1,
        erklaerung: "Ein verletzter Helfer hilft niemandem." },
      { info: "Der Motorradfahrer liegt am Straßenrand, Helm auf, ansprechbar. Spritzende Blutung am linken Oberschenkel.",
        typ: "mc", frage: "Was ist nach cABCDE dein erster Schritt?",
        optionen: ["Helm abnehmen", "Kritische Blutung stoppen: Druck, ggf. Tourniquet", "Blutdruck messen", "Zugang legen"], richtig: 1,
        erklaerung: "c = critical bleeding kommt vor A. Aus einer Oberschenkelarterie kann man in wenigen Minuten verbluten." },
      { info: "Die Blutung steht nach dem Tourniquet. AF 28/min, SpO₂ 92 %, HF 130/min, RR 90/60 mmHg, Haut blass und kalt, GCS 14.",
        typ: "text", frage: "Wie hoch ist der Schockindex? (Zahl, eine Nachkommastelle)",
        antworten: ["1,4", "1.4", "1,44", "1.44"],
        erklaerung: "130 ÷ 90 ≈ 1,4. Über 1: Schock." },
      { typ: "multi", frage: "Welche Maßnahmen sind jetzt richtig?",
        optionen: ["Wärmeerhalt (Rettungsdecke, RTW heizen)", "Schnelle Rettung und zügiger Transport in ein Traumazentrum", "Lange Versorgung vor Ort, alles komplett untersuchen", "Tranexamsäure vorbereiten (laut SOP)", "Uhrzeit des Tourniquets dokumentieren"], richtig: [0, 1, 3, 4],
        erklaerung: "Kritischer Traumapatient: Zeit vor Ort kurz halten. Unterkühlung verschlechtert die Gerinnung." },
      { typ: "mc", frage: "Welches Übergabeschema nutzt du im Schockraum?",
        optionen: ["MIST", "SAMPLER", "BE-FAST", "OPQRST"], richtig: 0,
        erklaerung: "MIST: Mechanism, Injuries, Signs, Treatment." }
    ],
    fazit: "Kritischer Traumapatient mit hämorrhagischem Schock. Entscheidend: Eigenschutz, Blutung zuerst, Wärmeerhalt, kurze Zeit vor Ort, Traumazentrum."
  },
  {
    id: "f-sturz", titel: "Sturz einer älteren Dame", thema: "Trauma", kritisch: false,
    meldung: { stichwort: "RD 1 · Sturz", text: "Weiblich, 81 Jahre, Gehweg, Norddeich" },
    schritte: [
      { info: "Die Patientin sitzt auf einer Bank, ist wach und orientiert und hält ihr rechtes Handgelenk. Haut rosig, Atmung ruhig. AF 16/min, SpO₂ 97 %, HF 78/min, RR 145/80 mmHg, GCS 15, BZ 104 mg/dl.",
        typ: "mc", frage: "Wie schätzt du sie ein?",
        optionen: ["Kritisch", "Nicht kritisch: stabil, aber gründlich untersuchen", "Reanimationspflichtig", "Sofort NA nachfordern"], richtig: 1,
        erklaerung: "Kein ABCDE-Problem, stabile Vitalwerte. Jetzt in Ruhe Anamnese und Untersuchung." },
      { typ: "mc", frage: "Was fragst du bei einem Sturz älterer Menschen unbedingt?",
        optionen: ["Nach der Lieblingsfarbe", "Warum sie gestürzt ist (gestolpert oder schwarz vor Augen?), ob sie den Kopf angeschlagen hat und ob sie Blutverdünner nimmt", "Ob sie Haustiere hat", "Nichts weiter"], richtig: 1,
        erklaerung: "Synkope als Ursache? Blutverdünner und Kopfanprall bedeuten Risiko für eine Hirnblutung." },
      { info: "Das Handgelenk ist geschwollen und fehlgestellt.",
        typ: "multi", frage: "Wie versorgst du?",
        optionen: ["DMS vor und nach dem Schienen prüfen", "In vorgefundener Stellung schienen, hochlagern, kühlen", "Die Fehlstellung kräftig einrenken", "Ringe und Schmuck an der Hand entfernen"], richtig: [0, 1, 3],
        erklaerung: "Die Hand schwillt weiter an: Ringe früh entfernen. Nicht einrenken." },
      { typ: "mc", frage: "Welcher NACA-Score passt am ehesten?",
        optionen: ["NACA I", "NACA III: stationäre Abklärung nötig", "NACA V", "NACA VI"], richtig: 1,
        erklaerung: "Eine Fraktur mit Fehlstellung braucht wahrscheinlich eine stationäre Behandlung, ist aber nicht lebensbedrohlich." }
    ],
    fazit: "Nicht kritische Patientin. Entscheidend: trotzdem nach Sturzursache und Blutverdünnern fragen, DMS, fachgerechte Schienung."
  }
];
