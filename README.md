# Hanna Zumsande, Website 2026

Mehrseitige Astro Website für Hanna Zumsande. Die Veröffentlichung ist für GitHub Pages und die Domain `www.hannazumsande.de` vorbereitet.

Die aktuelle Vorabversion wird unter `https://janolefabian.github.io/hannazumsande-astro-2026/` veröffentlicht und ist für Suchmaschinen gesperrt. Die bestehende Domain bleibt bis zur finalen Freigabe unverändert.

## Lokale Vorschau

```sh
npm run dev
```

Astro zeigt anschließend die lokale Adresse an. Die Gestaltung basiert auf dem ausgewählten Entwurf Atelier.

## Inhalte bearbeiten

Die Termine liegen einzeln im Ordner `src/content/termine`. Nach dem Hochladen des Projekts zu GitHub kann Hanna sie über [Pages CMS](https://pagescms.org) ohne Arbeit am Quellcode verwalten.

Pages CMS liest dafür die Datei `.pages.yml`. Änderungen werden als normaler GitHub Commit gespeichert und lösen automatisch eine neue Veröffentlichung aus. Ein täglicher geplanter Build sorgt dafür, dass vergangene Termine ohne manuelle Arbeit in das Archiv wechseln.

Unter „Kalender“ sind „Weitere Informationen“, „Foto“ und der Veranstalterlink optional. Sobald eines dieser Felder ausgefüllt ist, erhält der veröffentlichte Auftritt eine eigene Detailseite und wird in der Übersicht sowie auf der Startseite anklickbar. Ohne diese Angaben bleibt er ein einfacher Eintrag. Nicht veröffentlichte Auftritte erhalten keine öffentliche Detailseite.

Das optionale Foto kann aus dem Bildarchiv ausgewählt oder direkt hochgeladen werden. „Bildbeschreibung“ und „Fotocredit“ werden beim selben Termin gepflegt. Das Foto erscheint nur auf der Detailseite und wird vollständig ohne Beschnitt dargestellt. Ein Fotocredit erscheint nur, wenn er ausgefüllt ist. Beim ersten Beispieltermin ist ein vorhandenes Porträt hinterlegt.

Unter „Vita Downloads“ lassen sich die lange und kurze Fassung als PDF auswählen. Die Auswahl liegt in `src/data/downloads.json`. Bis Hanna beide Fassungen bereitstellt, verwendet „Vita lang“ das vorhandene PDF; „Vita kurz“ ist vorbereitet und noch deaktiviert. Fehlende Dateien werden nicht durch doppelte oder leere Downloadlinks ersetzt.

## Veröffentlichung

Der Ablauf in `.github/workflows/deploy.yml` baut die Website bei jeder Änderung am Hauptzweig und veröffentlicht sie auf GitHub Pages. In den Einstellungen des GitHub Repositorys muss unter Pages einmalig GitHub Actions als Quelle gewählt werden.

## Vor der echten Veröffentlichung

1. Vita, Termine, Kontaktangaben und Management bestätigen lassen.
2. Vollständige Anschrift sowie Impressum und Datenschutz prüfen.
3. GitHub Repository verbinden und die Domain umstellen.
