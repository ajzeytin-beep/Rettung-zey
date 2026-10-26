# Lernen mit Rettung ZTN

**LernApp für RS+** – Lern-App für Rettungssanitäter Plus.
Schwarzes Layout mit anthrazitfarbenen Feldern und roten Buttons. Die Startseite ist ein Dashboard.

## Funktionen

- **Dashboard:** Tagesziele, Merksatz und Akronym des Tages, Gesamtfortschritt, Fortschritt je Modul
- **17 Lernmodule** (Internistik, Trauma nach S3-Leitlinie, EKG, CPR-Pharmakologie, Reanimation Erwachsene/Kinder, Airway, MANV, Adipositas/Dialyse, Neuro/Psych, Deeskalation, Recht u. a.)
- **Quiz:** rund 300 MC-Fragen mit Erklärung, Prüfungssimulation (40 Fragen, 45 min), „Fehler üben“ (falsche Fragen kommen wieder, bis sie sitzen)
- **Karteikarten** mit Lernkartei-System (Leitner)
- **EKG:** 19 präklinisch wichtige Rhythmen als berechnete Streifen plus EKG-Trainer
- **Medikamente:** 44 Wirkstoffe, die 18 aus der Lernsession sind markiert
- **Fallbeispiele:** 52 Fälle, davon 16 typische N-KTW-Einsätze aus Niedersachsen/Ostfriesland, mit Entscheidungen Schritt für Schritt (richtig oder falsch), Fehler-Auswertung und „Fehler üben“ (Internistik, Trauma, Neuro, Psychiatrie, Pädiatrie, Geburt, MANV, Recht), Filter und Zufallsfall
- **Übergabe-Trainer:** Übergabe nach SINNHAFT schreiben, App prüft Vollständigkeit und Zahlen
- **Protokoll-Übung:** vereinfachtes Einsatzprotokoll zu einem Fall ausfüllen und mit der Musterlösung vergleichen
- **Rechner:** GCS, Schockindex, qSOFA, NEWS2, Kinder-Notfalldosen
- **Akronyme:** 40 Merkschemata und Abkürzungen (SINNHAFT, SAMPLERS, AVPU, xABCDE, 4 H/HITS, NRettDG, NPsychKG …) mit Karten und Quiz

Der Fortschritt wird nur lokal im Browser gespeichert (`localStorage`). Die App lädt nichts von fremden Servern: Schriften liegen unter `fonts/` (SIL Open Font License), es gibt keine Tracker und keine Anmeldung.

## Als App aufs Handy (PWA)

Die App ist eine installierbare Web-App mit Offline-Speicher (`manifest.webmanifest`, `sw.js`, `icons/`).
Dafür muss sie über **https** erreichbar sein, z. B. mit GitHub Pages:

1. Repository → **Settings → Pages**
2. *Source*: **Deploy from a branch**, Branch `claude/rettsan-plus-lernapp` (bzw. `main`), Ordner `/ (root)` → **Save**
3. Nach 1–2 Minuten ist die App unter **https://ajzeytin-beep.github.io/Rettung-zey/** erreichbar.
4. Auf dem Handy öffnen → iPhone: Safari → Teilen → „Zum Home-Bildschirm“; Android: Chrome → Menü → „App installieren“.

Hinweis: GitHub Pages für **private** Repositories braucht GitHub Pro. Alternativ das Repository öffentlich stellen
oder den Ordner bei einem anderen statischen Hoster hochladen. Nach Änderungen an den Dateien `VERSION` in `sw.js` erhöhen.

## Starten

`index.html` im Browser öffnen. Es wird kein Build und kein Server benötigt.
`node tools/build-artifact.mjs` erzeugt eine Einzeldatei unter `dist/`.

## Hinweis

Die App ist eine Lernhilfe. Dosierungen sind Richtwerte für Erwachsene. Verbindlich sind die SOPs,
die RS-Plus-Leitlinie (Aurich, Leer, Wittmund) und die Freigabe durch den Notarzt.
Die Inhalte sind eigene Zusammenfassungen. Die Quell-PDFs liegen nicht im Repository.
