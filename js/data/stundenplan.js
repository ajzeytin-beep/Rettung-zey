// Stundenplan RettSan PLUS 3 / 2026 – DRK KV Leer (26.–30.10.2026)
window.RS = window.RS || {};

RS.lehrgang = {
  name: 'Rettungssanitäter PLUS 3/2026',
  ort: 'DRK Kreisverband Leer e.V.',
  start: '2026-10-26',
  pruefungMC: '2026-10-30T08:30:00',
  pruefungPraxis: '2026-10-30T12:45:00'
};

RS.bloecke = [
  { nr: 1, zeit: '08:30–10:00' },
  { nr: 2, zeit: '08:30–10:00' },
  { nr: 3, zeit: '10:30–12:00' },
  { nr: 4, zeit: '10:30–12:00' },
  { nr: 5, zeit: '12:45–14:15' },
  { nr: 6, zeit: '12:45–14:15' },
  { nr: 7, zeit: '14:30–16:00' },
  { nr: 8, zeit: '14:30–16:00' }
];

// art: T = Theorie, P = Praxis, X = Prüfung. modul verweist auf RS.module[].id
RS.stundenplan = [
  {
    datum: '2026-10-26', tag: 'Montag',
    einheiten: [
      { zeit: '08:30', art: 'T', titel: 'Begrüßung und Lehrgangseinweisung', modul: null },
      { zeit: '08:30', art: 'T', titel: 'Aufgabenfeld N-KTW, Dokumentation im Einsatz', modul: 'nktw' },
      { zeit: '10:30', art: 'T', titel: 'Standardisierte Patientenversorgung: Internistische Notfälle', modul: 'intern' },
      { zeit: '12:45', art: 'T', titel: 'Standardisierte Patientenversorgung: Traumatologische Notfälle', modul: 'trauma' },
      { zeit: '12:45', art: 'T', titel: 'Notarztindikationen und Übergabe in die weitere ärztliche Behandlung', modul: 'nktw' },
      { zeit: '14:30', art: 'P', titel: 'Reanimationstraining: Einweisung AED', modul: 'rea' },
      { zeit: '14:30', art: 'P', titel: 'Reanimationstraining: Einweisung EGA', modul: 'airway' }
    ]
  },
  {
    datum: '2026-10-27', tag: 'Dienstag',
    einheiten: [
      { zeit: '08:30', art: 'T', titel: 'NUN-Algorithmen', modul: 'nun' },
      { zeit: '10:30', art: 'T', titel: 'EKG-Diagnostik', modul: 'ekg' },
      { zeit: '10:30', art: 'T', titel: 'Pharmakologie zur CPR: Vorbereitung und Dosierung', modul: 'pharmacpr' },
      { zeit: '12:45', art: 'P', titel: 'Reanimationstraining: BLS Säuglinge / Kinder', modul: 'reakind' },
      { zeit: '14:30', art: 'P', titel: 'Reanimationstraining: BLS / ACLS Erwachsene', modul: 'rea' }
    ]
  },
  {
    datum: '2026-10-28', tag: 'Mittwoch',
    einheiten: [
      { zeit: '08:30', art: 'T', titel: 'Kommunikation und multikulturelle Aspekte im Einsatz', modul: 'kommunikation' },
      { zeit: '10:30', art: 'T', titel: 'Einweisung MANV-Konzept', modul: 'manv' },
      { zeit: '12:45', art: 'P', titel: 'Reanimationstraining: Airwaymanagement und Beatmung', modul: 'airway' },
      { zeit: '14:30', art: 'P', titel: 'Simulationstraining: Fallbeispiele', modul: 'faelle' }
    ]
  },
  {
    datum: '2026-10-29', tag: 'Donnerstag',
    einheiten: [
      { zeit: '08:30', art: 'T', titel: 'Spezielle Patientengruppen: Adipositas, Dialyse', modul: 'spezial' },
      { zeit: '10:30', art: 'T', titel: 'Neurologische / psychiatrische Notfälle', modul: 'neuro' },
      { zeit: '10:30', art: 'T', titel: 'Schwierige Einsatzsituationen, Deeskalation, Eigenschutz', modul: 'deeskalation' },
      { zeit: '12:45', art: 'P', titel: 'Simulationstraining: Fallbeispiele', modul: 'faelle' },
      { zeit: '14:30', art: 'P', titel: 'Simulationstraining: Fallbeispiele', modul: 'faelle' }
    ]
  },
  {
    datum: '2026-10-30', tag: 'Freitag',
    einheiten: [
      { zeit: '08:30', art: 'X', titel: 'Schriftliche Prüfung (Multiple Choice)', modul: 'pruefung' },
      { zeit: '09:15', art: 'P', titel: 'Simulationstraining: Fallbeispiele', modul: 'faelle' },
      { zeit: '12:45', art: 'X', titel: 'Praktische Prüfung: Fallbeispiel', modul: 'faelle' }
    ]
  }
];
