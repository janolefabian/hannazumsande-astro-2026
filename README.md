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

Das optionale Foto kann aus dem Bildarchiv ausgewählt oder direkt hochgeladen werden. „Bildbeschreibung“ und „Fotocredit“ werden beim selben Termin gepflegt. Das Foto erscheint nur auf der Detailseite und wird vollständig ohne Beschnitt dargestellt. Ein Fotocredit erscheint nur, wenn er ausgefüllt ist. Die beiden früheren Beispieltermine bleiben als einfache Archiveinträge ohne erfundene Zusatzinformationen erhalten.

Neue Termine erhalten ihren Dateinamen beim Speichern aus Veranstaltungsdatum, Uhrzeit und Titel. Neue CDs werden nach ihrem Titel benannt. Das technische Dateinamenfeld bleibt verborgen: Pages CMS befüllt es sonst bereits aus dem leeren Formular und erzeugt dabei leere Dateinamen wie `-.md`. Die Uhrzeit unterscheidet gleichnamige Aufführungen am selben Tag. Bestehende Dateinamen bleiben bei späteren Änderungen stabil. Hannas Paulus-Termin wurde unter Beibehaltung aller Angaben in `2026-11-08-1800-mendelssohn-paulus.md` umbenannt.

Veranstaltungslinks öffnen in einem neuen Tab. Ein entsprechender Hinweis ist auch für Screenreader hinterlegt.

Unter „Vita Downloads“ lassen sich die lange und kurze Fassung als PDF auswählen. Beide gelieferten Fassungen von September 2026 sind eingebunden. Die Auswahl liegt in `src/data/downloads.json` und erscheint sowohl auf der Vitaseite als auch oberhalb der Pressefotos. Die gelieferten PDFs bleiben inhaltlich unverändert.

Unter „Vita Text“ werden die Überschrift des Vitaabschnitts auf der Startseite und der vollständige Webseitentext gepflegt. Absätze mit einer Leerzeile trennen. Der erste Absatz erscheint automatisch auch auf der Startseite. Eine Änderung dieses Texts verändert nicht die PDF-Downloads. Im neuen freigegebenen Fließtext bleibt „Sopranistin“ erhalten; Header, Footer und strukturierte Berufsbezeichnung verwenden weiterhin „Sopran“.

Unter „Diskografie“ kann Hanna CDs anlegen, bearbeiten, ausblenden und löschen. Die bisherigen 16 Aufnahmen wurden übernommen. Titel und Cover sind Pflichtfelder. Komponist beziehungsweise Werk, Mitwirkende, musikalische Leitung, Label, Jahr und ein externer Link sind optional. Bei „Musikalische Leitung“ nur den Namen eintragen. Neue Erscheinungsjahre stehen automatisch oben, innerhalb desselben Jahres bestimmt die optionale Reihenfolge die Position.

Unter „Fotos auf der Webseite“ sind Startseite, Vita und Medienübersicht getrennt bearbeitbar. Die Fotogalerie unterscheidet Porträts und Konzertfotos. Bei Porträts ist der Originaldownload optional. Pressefotos im Downloadbereich verlinken auf das ausgewählte Original, ersatzweise auf das Bild selbst. Die von Hanna gelieferten Webbilder sind optimierte WebP-Dateien; ausgewählte JPG-Originale liegen getrennt unter `public/downloads/2026`. Beim späteren Hochladen möglichst kleinere Webversionen für die Anzeige verwenden und die volle Auflösung nur als Download hinterlegen.

Die unterschiedlichen Originaldownloads sind bewusst übernommen: Galerie 006, 010, 014, 016; Downloadbereich 006, 010, 012, 018. Die sechs Konzertfotos führen die Credits Simon Redel beziehungsweise Klaus Landry.

Die drei YouTube-Videos verwenden lokal gespeicherte Vorschaubilder. Erst „Video laden“ bindet den Player ein. „Video schließen“ entfernt ihn und stellt die Vorschau wieder her. Ohne JavaScript und als Alternative bleibt der direkte YouTube-Link verfügbar. Es werden keine Einwilligungen gespeichert und vor dem Klick keine YouTube-Ressourcen angefordert.

## Veröffentlichung

Unter „Rechtliches“ werden der vollständige Anbietername und die Anschrift einmalig für Impressum und Datenschutz gepflegt. Die E-Mail-Adresse bleibt zentral unter „Grunddaten“. Der Anbietername darf vom künstlerischen Namen der Website abweichen. Die beiden weiteren Rechtstexte sind getrennte formatierte Textfelder. HTML wird beim Bauen bereinigt; Skripte, Bilder, eingebettete Inhalte und fremde Formatierungen werden nicht übernommen. Die Verlinkung zum YouTube-Datenschutzhinweis bleibt auch nach Änderungen im Editor erhalten.

Die internen Schalter „Impressum abschließend geprüft“ und „Datenschutzerklärung abschließend geprüft“ sind keine automatische Rechtsprüfung. Hannas Anschrift wurde von ihr eingetragen und übernommen. Umsatzsteuer-ID und Wirtschafts-ID sind noch zu klären; optionale CMS-Felder sind vorbereitet. Es wurde keine Nummer erfunden. Die Telefonnummer wird wie die E-Mail aus den Grunddaten übernommen.

Beide Prüfschalter stehen weiterhin auf `false`. Der Datenschutztext beschreibt jetzt das tatsächliche GitHub-Pages-Hosting, die Kontaktaufnahme über Gmail und Telefon, lokale Medien, die YouTube-Einbindung und Betroffenenrechte. Das ist eine sachliche Vorbereitung, keine anwaltliche Freigabe. Vor dem Domainwechsel müssen insbesondere die Rollen und Vertragsgrundlagen bei GitHub und Gmail, die tatsächlichen Löschregeln für Anfragen sowie erforderliche Identifikationsnummern bestätigt werden. Es wird kein nicht nachgewiesener Auftragsverarbeitungsvertrag behauptet und keine feste Protokoll-Löschfrist erfunden.

Die Vorschau zeigt den vorläufigen Stand bis zur Freigabe. Beim Bauen für Hannas endgültige Domain werden diese Hinweise ausgeblendet; die vorgeschaltete Freigabeprüfung verhindert einen verfrühten normalen Build. Auch die GitHub-Vorschau ist öffentlich zugänglich. Nach wesentlichen Änderungen an Angaben oder Diensten ist erneut zu prüfen.

Vor jedem `npm run build` wird geprüft, ob ausdrücklich Hannas Domain als `SITE_URL` eingestellt ist. In diesem Fall blockieren fehlende Anbieterangaben, leere Rechtstexte, ausstehende Freigaben oder veröffentlichte Kalender-Beispiele den Build. `npm run test:launch` zeigt diese offenen Punkte jederzeit an. Der normale GitHub-Vorschaubuild bleibt möglich. `npm run test:legal` prüft die gemeinsame Anschrift, die Bereinigung von Editorinhalten und die Freigabeprüfung.


Der Ablauf in `.github/workflows/deploy.yml` baut die Website bei jeder Änderung am Hauptzweig und veröffentlicht sie auf GitHub Pages. In den Einstellungen des GitHub Repositorys muss unter Pages einmalig GitHub Actions als Quelle gewählt werden.

## Vor der echten Veröffentlichung

1. Vita, Termine, Kontaktangaben und Management bestätigen lassen.
2. Vollständige Anschrift sowie Impressum und Datenschutz prüfen.
3. Kalender auf Vollständigkeit und eventuelle neue Beispielinhalte prüfen. Die ursprünglichen zwei Beispiele sind bereinigt.
4. Mit `npm run test:launch` die offenen Punkte prüfen. Beim finalen Build mit `npm run test:seo -- --indexable` oder `--final` sicherstellen, dass keine öffentlichen Entwurfs- oder Bearbeitungshinweise mehr vorhanden sind. Gemeint ist die Veröffentlichung unter Hannas Domain, nicht das Hochladen der Vorschau zu GitHub.
5. Domainumstellung einschließlich HTTPS und Weiterleitungen vorbereiten; E-Mail-Einstellungen unverändert lassen.

## Suchmaschinen und Favicon

Die Seitentitel und Beschreibungen werden zentral in `src/data/seo.ts` gepflegt. Jede HTML-Seite hat eine eigene kanonische URL, eine Hauptüberschrift und strukturierte Angaben zu Hanna, der Website und der jeweiligen Unterseite. Vorschauen und lokale Ansichten tragen immer `noindex`. Crawler dürfen die HTML-Seiten lesen, damit sie dieses Signal erkennen können. `noindex` ist kein Zugangsschutz.

`sitemap.xml` wird automatisch aus den Seiten und veröffentlichten Termindetailseiten erzeugt. Sie enthält nur zur Indexierung freigegebene Seiten. Impressum, Datenschutz, Fehlerseite und als Beispiel markierte Termine sind ausgeschlossen. Es werden keine künstlichen Änderungsdaten oder Prioritäten gesetzt. Prüfungen verhindern die Veröffentlichung neuer Beispieltexte.

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

- Sicherheitsupdates vom 6. Oktober 2026: Astro 7.3.5, sharp 0.35.5, js-yaml 4.3.2 sowie betroffene indirekte Abhängigkeiten aktualisiert. `npm audit` meldet danach keine bekannten Schwachstellen. Vor dem tatsächlichen Start erneut prüfen.

- Bestehende URLs der alten Website erfassen und bei geänderten Adressen echte 301-Weiterleitungen einrichten. GitHub Pages bietet keine frei konfigurierbaren serverseitigen 301-Regeln. Den Domainwechsel erst nach Wahl der passenden Weiterleitungslösung abschließen.
- HTTPS sowie die Zusammenführung von www und Nicht-www auf eine bevorzugte Adresse prüfen.
- Domain in Google Search Console bestätigen, Sitemap einreichen und einige Seiten mit der URL-Prüfung kontrollieren.
- Reale Ladezeiten und mobile Darstellung auf der endgültigen Domain prüfen.
- Die Diskografie darf laut Hanna nach dem Start weiter ergänzt werden und ist kein Freigabehindernis. Beide Vitae liegen vor. Veranstaltungs-Rich-Results werden nicht versprochen; dafür wären zusätzlich verlässliche Veranstaltungsangaben einschließlich vollständiger Adressen nötig.

Es werden keine Trackingdienste eingebaut und keine Rankings garantiert.

`npm run test:content` prüft zusätzlich die CMS-Konfiguration, Pflichtfelder, CD-Angaben, Termin-Dateinamen, Entwurfstexte und lokale Bild- und PDF-Verweise. Die GitHub-Veröffentlichung führt Inhalts-, Rechtliches- und Build-Prüfungen aus, bevor sie die Seiten freischaltet. `npm run test:built` verwendet dieselben Domain- und Basispfad-Variablen wie der Build. Die SEO-Prüfung kontrolliert auch neue Tabs für Veranstaltungslinks und das Fehlen vorab geladener YouTube-Player.

### Domainwechsel: vorbereiteter Stand vom 6. Oktober 2026

Es wurden noch keine Domain-, DNS-, Mail- oder GitHub-Pages-Einstellungen geändert. Die alte Website antwortet unter HTTP. HTTPS meldet aktuell `ERR_TLS_CERT_ALTNAME_INVALID`; dieser Fehler muss beim Umzug einschließlich www und Nicht-www behoben sein. Der aktuelle A-Eintrag ist `85.13.164.225`, der MX-Eintrag `10 w0141a01.kasserver.com.`. Das sind nur Bestandsdaten, keine einzutragenden Zielwerte. Vor Umstellung aktuelle Einträge einschließlich AAAA, CAA, SPF, DKIM und DMARC sichern. Mail-Einträge nicht durch Website-Zielwerte ersetzen.

Die folgenden alten Navigationsadressen wurden auf der bestehenden Website gelesen. Die Tabelle ist eine Vorlage für die Weiterleitungsregeln, nicht bereits aktiv:

| Alte Adresse | Neues Ziel |
| --- | --- |
| `/vita.html` | `/vita/` |
| `/contact.html` | `/kontakt/` |
| `/impressum.html` | `/impressum/` |
| `/links.html` | `/links/` |
| `/media2/photos.html` | `/medien/fotos/` |
| `/media2/audio.html` | `/medien/audio/` |
| `/media2/download.html` | `/medien/downloads/` |
| `/media2/discography.html` | `/medien/diskografie/` |
| `/repertoire/2014-05-22-18-41-33.html` | `/repertoire/konzert/` |
| `/repertoire/2014-05-22-18-41-34.html` | `/repertoire/oper/` |
| `/repertoire/2014-05-22-18-41-32.html` | `/repertoire/lied/` |
| `/calendar/archiv-2/range.listevents/-.html` | `/termine/` |
| `/calendar/archiv/range.listevents/-.html` | `/termine/#vergangene-auftritte` |

Der Archiv-Anker wurde gegen den Kalender geprüft. Alte `icalrepeat.detail`-Adressen möglichst einzeln passenden Terminen zuordnen, übrige alte Kalenderadressen zum Kalender führen. Joomla-Query-Adressen unter `index.php` getrennt prüfen; keine pauschalen Weiterleitungen aller unbekannten URLs zur Startseite. Der alte Joomla-Login darf nicht zum neuen Administratorzugang umgedeutet werden.

Für echte HTTP-301-Regeln braucht es einen geeigneten Webserver oder eine vorgeschaltete Weiterleitungsschicht. GitHub Pages allein liefert bei Astro-Weiterleitungen statische HTML-Weiterleitungen, keine konfigurierbaren HTTP-301-Antworten. Vor einer Änderung der Hostingarchitektur Rücksprache halten. Den bisherigen Webspace und die alte Website erst nach erfolgreicher Kontrolle und mit Rückfallmöglichkeit stilllegen.

Offene Freigaben: erforderliche Umsatzsteuer-/Wirtschafts-ID bei Hanna klären; Datenschutz einschließlich GitHub-/Gmail-Vertragsgrundlagen und Umgang mit Anfragen bestätigen; danach die beiden Prüfstatus bewusst setzen. Die verbleibenden Vorschauhinweise verschwinden erst im freigegebenen Domain-Build. Nicht nur zur Umgehung der Prüfung die Schalter aktivieren.

Quellen für diese Vorbereitung: [Pages CMS: Dateinamen](https://pagescms.org/docs/configuration/content/filename/), [GitHub Pages: Datenerhebung](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [GitHub: Datenschutz](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement), [GitHub: eigene Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Google: Datenschutz](https://policies.google.com/privacy?hl=de), [Google: Datenübermittlungen](https://policies.google.com/privacy/frameworks?hl=de), [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html), [§ 25 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html).
