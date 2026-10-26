# RS Plus Lernapp

Lern-App für den Lehrgang **Rettungssanitäter PLUS 3/2026** (DRK KV Leer, 26.–30.10.2026).
Schwarzes Layout mit anthrazitfarbenen Feldern und roten Buttons. Die Startseite ist ein Dashboard.

## Funktionen

- **Dashboard:** Countdown zur MC-Prüfung, Gesamtfortschritt, heutige Kurseinheiten, Fortschritt je Modul
- **17 Lernmodule** nach Stundenplan (Internistik, Trauma nach S3-Leitlinie, EKG, CPR-Pharmakologie, Reanimation Erwachsene/Kinder, Airway, MANV, Adipositas/Dialyse, Neuro/Psych, Deeskalation, Recht u. a.)
- **Quiz:** über 200 MC-Fragen mit Erklärung, Prüfungssimulation (40 Fragen, 45 min), „Schwächen üben“
- **Karteikarten** mit Lernkartei-System (Leitner)
- **EKG:** 19 präklinisch wichtige Rhythmen als berechnete Streifen plus EKG-Trainer
- **Medikamente:** 44 Wirkstoffe, die 18 aus der Lernsession sind markiert
- **Fallbeispiele:** 15 Fälle zum schrittweisen Aufdecken, mit Muster-Übergabe
- **Rechner:** GCS, Schockindex, qSOFA, Kinder-Notfalldosen
- **Stundenplan** der Kurswoche

Der Fortschritt wird nur lokal im Browser gespeichert (`localStorage`).

## Starten

`index.html` im Browser öffnen. Es wird kein Build und kein Server benötigt.
`node tools/build-artifact.mjs` erzeugt eine Einzeldatei unter `dist/`.

## Hinweis

Die App ist eine Lernhilfe. Dosierungen sind Richtwerte für Erwachsene. Verbindlich sind die SOPs,
die RS-Plus-Leitlinie (Aurich, Leer, Wittmund) und die Freigabe durch den Notarzt.
Die Inhalte sind eigene Zusammenfassungen. Die Quell-PDFs liegen nicht im Repository.
