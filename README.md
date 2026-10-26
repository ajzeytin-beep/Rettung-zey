# RS Plus Lernapp

**RS+ Lernapp Zey** – Lern-App für Rettungssanitäter Plus.
Schwarzes Layout mit anthrazitfarbenen Feldern und roten Buttons. Die Startseite ist ein Dashboard.

## Funktionen

- **Dashboard:** Tagesziele, Merksatz und Akronym des Tages, Gesamtfortschritt, Fortschritt je Modul
- **17 Lernmodule** (Internistik, Trauma nach S3-Leitlinie, EKG, CPR-Pharmakologie, Reanimation Erwachsene/Kinder, Airway, MANV, Adipositas/Dialyse, Neuro/Psych, Deeskalation, Recht u. a.)
- **Quiz:** rund 300 MC-Fragen mit Erklärung, Prüfungssimulation (40 Fragen, 45 min), „Schwächen üben“
- **Karteikarten** mit Lernkartei-System (Leitner)
- **EKG:** 19 präklinisch wichtige Rhythmen als berechnete Streifen plus EKG-Trainer
- **Medikamente:** 44 Wirkstoffe, die 18 aus der Lernsession sind markiert
- **Fallbeispiele:** 15 Fälle zum schrittweisen Aufdecken, mit Muster-Übergabe
- **Rechner:** GCS, Schockindex, qSOFA, Kinder-Notfalldosen
- **Akronyme:** 40 Merkschemata und Abkürzungen (SINNHAFT, SAMPLERS, AVPU, xABCDE, 4 H/HITS, NRettDG, NPsychKG …) mit Karten und Quiz

Der Fortschritt wird nur lokal im Browser gespeichert (`localStorage`).

## Starten

`index.html` im Browser öffnen. Es wird kein Build und kein Server benötigt.
`node tools/build-artifact.mjs` erzeugt eine Einzeldatei unter `dist/`.

## Hinweis

Die App ist eine Lernhilfe. Dosierungen sind Richtwerte für Erwachsene. Verbindlich sind die SOPs,
die RS-Plus-Leitlinie (Aurich, Leer, Wittmund) und die Freigabe durch den Notarzt.
Die Inhalte sind eigene Zusammenfassungen. Die Quell-PDFs liegen nicht im Repository.
