# Rettung-zey

Lernplattform für den Rettungsdienst, gebaut für die Vorbereitung auf Rettungssanitäter und RS+
(Rettungsdienst Landkreis Aurich, Wache Norden).

## Bereiche

- **Dashboard:** Tagesübung mit 10 Fragen, Lernserie, Trefferquote, Fortschritt pro Bereich, Schwachstellen
- **Fallbeispiele:** interaktive Einsätze nach cABCDE mit Rückmeldung zu jedem Schritt
- **Medikamente:** Steckbriefe mit Indikation, Kontraindikationen, Dosierung und Vorbereitung, dazu Quiz und Karteikarten
- **Akronyme & Schemata:** cABCDE, SAMPLER, OPQRST, BE-FAST, ISBAR, MIST, 4H/HITS, FMS und mehr
- **Organisation & Übergabe:** ersteintreffendes Fahrzeug, kritisch oder nicht kritisch, Übergabe, MANV, Funk
- **Prüfungsmodus:** 10, 20 oder 40 gemischte Fragen, auf Wunsch mit Zeitlimit

Fragetypen: Multiple Choice, Mehrfachauswahl, Reihenfolge sortieren, Freitext und Karteikarten.
Ein Wiederholungssystem (Lernkartei) fragt falsch beantwortete Fragen öfter ab.
Der Fortschritt wird nur im Browser des eigenen Geräts gespeichert.

## Starten

Die App besteht nur aus statischen Dateien im Ordner `app/`:

```
cd app
python3 -m http.server 8000
```

Dann `http://localhost:8000` im Browser öffnen.

## Inhalte erweitern

Alle Lerninhalte stehen in `app/data.js`:

- `DATA.medis`: Medikamente
- `DATA.akronyme`: Akronyme, Schemata und Abkürzungen
- `DATA.lektionen`: Lerntexte zu Organisation und Übergabe
- `DATA.fragen`: eigene Quizfragen
- `DATA.faelle`: Fallbeispiele

Aus Medikamenten und Akronymen erzeugt die App automatisch zusätzliche Fragen und Karteikarten.

## Hinweis

Die Inhalte sind eine Lernhilfe und orientieren sich an gängigen Lehrbuchinhalten und den NUN-Algorithmen.
Verbindlich sind die SOPs des Rettungsdienstes Landkreis Aurich und die Anweisungen des Notarztes.
