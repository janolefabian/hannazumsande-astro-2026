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

## Suchmaschinen und Favicon

Die Seitentitel und Beschreibungen werden zentral in `src/data/seo.ts` gepflegt. Jede HTML-Seite hat eine eigene kanonische URL, eine Hauptüberschrift und strukturierte Angaben zu Hanna, der Website und der jeweiligen Unterseite. Vorschauen und lokale Ansichten tragen immer `noindex`. Crawler dürfen die HTML-Seiten lesen, damit sie dieses Signal erkennen können. `noindex` ist kein Zugangsschutz.

`sitemap.xml` wird automatisch aus den Seiten und veröffentlichten Termindetailseiten erzeugt. Sie enthält nur zur Indexierung freigegebene Seiten. Impressum, Datenschutz, Fehlerseite und als Beispiel markierte Termine sind ausgeschlossen. Es werden keine künstlichen Änderungsdaten oder Prioritäten gesetzt. Die beiden Beispieltermine müssen inhaltlich fertiggestellt werden; danach im CMS „Enthält noch Beispielinhalt“ ausschalten.

Die Originalfotos bleiben unangetastet. Die Darstellung bekommt automatisch die richtigen Bildmaße und passende Ladeprioritäten. Vorschaubilder zum Teilen verwenden vorhandene Fotos. Das Favicon ist ein HZ-Monogramm in den Websitefarben. Nach Änderungen an `public/favicon.svg` erzeugt `npm run icons` die PNG-, Apple- und ICO-Dateien neu.

### Freigabe unter der eigentlichen Domain

Erst nach Inhaltsfreigabe und Domainumstellung in den GitHub Actions Repository-Variablen setzen:

- `SITE_URL`: `https://www.hannazumsande.de`
- `SITE_BASE`: `/`
- `PUBLIC_ALLOW_INDEXING`: `true`

Danach neu bauen und veröffentlichen. Nur mit allen passenden Angaben wird die Indexierung freigegeben. Die GitHub-Vorschau bleibt auch bei versehentlich gesetztem Freigabeschalter auf `noindex`. Die Domain muss zusätzlich in GitHub Pages samt DNS und HTTPS eingerichtet sein; diese Konfiguration wird hierdurch nicht verändert.

### Prüfung

`npm run build` und `npm run test:seo` prüfen die normale, gesperrte Vorschau. Ein freigegebener Build wird mit `PUBLIC_ALLOW_INDEXING=true SITE_URL=https://www.hannazumsande.de SITE_BASE=/ npm run build` erstellt; danach `npm run test:seo -- --indexable` ausführen. Für einen GitHub-Build nimmt der Test `--site https://janolefabian.github.io --base /hannazumsande-astro-2026` entgegen. Die Prüfungen kontrollieren Titel, Beschreibungen, Canonicals, strukturierte Daten, Indexierung, Sitemap, interne Links, Bildmaße und Icons.

### Zum Start noch erforderlich

- Bestehende URLs der alten Website erfassen und bei geänderten Adressen echte 301-Weiterleitungen einrichten. GitHub Pages bietet keine frei konfigurierbaren serverseitigen 301-Regeln. Den Domainwechsel erst nach Wahl der passenden Weiterleitungslösung abschließen.
- HTTPS sowie die Zusammenführung von www und Nicht-www auf eine bevorzugte Adresse prüfen.
- Domain in Google Search Console bestätigen, Sitemap einreichen und einige Seiten mit der URL-Prüfung kontrollieren.
- Reale Ladezeiten und mobile Darstellung auf der endgültigen Domain prüfen.
- Die Beispielinhalte und die fehlende kurze Vita vor der Freigabe abschließen. Veranstaltungs-Rich-Results werden nicht versprochen; dafür wären zusätzlich verlässliche Veranstaltungsangaben einschließlich vollständiger Adressen nötig.

Es werden keine Trackingdienste eingebaut und keine Rankings garantiert.
