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

Übergabehinweis vom 11. Oktober 2026: Die Rechtstexte sind sachlich vorbereitete, nicht juristisch geprüfte Texte. Sie werden nicht als „nicht rechtsverbindlich“ bezeichnet. Die Aussage über einen bereits praktizierten Löschprozess bei Hanna wurde durch Kriterien zur Speicherdauer ersetzt; daraus folgt kein Nachweis ihrer tatsächlichen E-Mail-Praxis. Die pauschale ausschließliche Verantwortlichkeit fremder Websitebetreiber wurde aus dem Impressum entfernt. Bei der Übergabe nur konkrete, verständliche Rückfragen stellen. Eine eventuell zugeteilte Wirtschafts-ID kann Hanna über ihre Steuerberaterin klären und selbst unter Rechtliches eintragen; die verneinte Umsatzsteuer-ID nicht erneut abfragen. Hosting-Vertragsfragen bleiben Aufgabe der technischen Betreuung, nicht eine pauschale Prüfaufgabe für Hanna. Die vorhandenen Freigabeschalter wurden durch diese Textüberarbeitung nicht aktiviert.

Sachlicher Hostingabgleich vom 11. Oktober 2026, geprüft gegen Commit `01387aa`:

- GitHub bestätigt für das öffentliche Repository den persönlichen Eigentümer `janolefabian` (`owner.type: User`). Pages nutzt Actions, erzwingt HTTPS und hat noch keine eigene Domain. Eine Vertragsannahme oder ein Tarif lässt sich daraus nicht ableiten.
- Im Quellcode sind lokale Schriften und Medien, kein Analyse- oder Kontaktformulardienst und ein erst nach Klick erzeugter YouTube-Player vorhanden. Der ungenutzte DesignSwitcher ist nicht in die Website eingebunden. In den HTTP-Antworten von Startseite, Audio/Video, Impressum und Datenschutz wurden keine externen `src`-Ressourcen, vorab eingebetteten Iframes oder `Set-Cookie`-Header gefunden. Das ist eine technische Stichprobe, keine Aussage über jeden späteren YouTube-Aufruf oder die interne Verarbeitung beim Hoster.
- 11 Rechtliches-/Weiterleitungstests, die Inhaltsprüfung und die Prüfung des vorhandenen Vorschau-Builds bestehen. Die finale Freigabeprüfung meldet weiterhin die beiden nicht gesetzten Prüfschalter. Hannas bestätigte Adresse und fehlende Umsatzsteuer-ID bleiben unverändert.
- GitHubs [DPA](https://github.com/customer-terms/github-data-protection-agreement) ist Bestandteil des GitHub Customer Agreement. Die [Vertragsübersicht](https://github.com/customer-terms) nennt dafür Enterprise Cloud, Enterprise, Teams und Copilot; der dokumentierte [Wechsel zum Customer Agreement](https://docs.github.com/en/organizations/managing-organization-settings/upgrading-to-the-github-customer-agreement) erfolgt über eine Organisation. Das belegt weder einen bestehenden AVV für dieses persönliche Konto noch dessen Unzulässigkeit. Auch folgt daraus nicht, dass jede Verarbeitung von Besucherdaten Auftragsverarbeitung ist. Die konkrete Rollen- und Vertragsfrage bleibt unbestätigt.
- Die [Pages-Bedingungen](https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features#pages) unterscheiden Projektpräsentationen von kommerziellen Transaktionsangeboten. Keine pauschale Behauptung, jede berufliche Portfolioseite sei verboten oder automatisch erlaubt. Die konkrete Nutzung bei einer Rückfrage mitbeschreiben.

Nächster Schritt ist eine Anbieterklärung, keine pauschale anwaltliche Prüfung. Vorbereitete Rückfrage für das [GitHub-Supportportal](https://support.github.com/), noch nicht versandt:

> I maintain a static portfolio website for a professional singer in Germany in the public repository janolefabian/hannazumsande-astro-2026, owned by my personal GitHub account. The site contains biography, media, a concert calendar and contact links, but no checkout, online booking form or analytics. I charge the client an annual hosting/maintenance fee. For this setup, does GitHub act as an independent controller or as a processor for Pages visitor data? If a DPA applies, which agreement covers this account and how can I verify or enter into it? Please also confirm whether this portfolio use is permitted under the Pages terms.

Keine Supportnachricht, Vertragsannahme, Kontoübertragung, Tarifänderung oder Domainumschaltung ohne gesonderten Auftrag. Vorhandene öffentliche Texte mussten bei diesem Abgleich nicht erneut geändert werden. An Hanna nur die kurze Übergabe mit Hinweis auf die fehlende juristische Prüfung, die tatsächlichen offenen Angaben und eine Veröffentlichungsfreigabe geben. Die Freigabe ist keine pauschale Haftungsübernahme und keine Erklärung, Hanna habe selbst juristisch geprüft. Bereits bestätigte Angaben nicht erneut als offen darstellen.

Unter „Rechtliches“ werden der vollständige Anbietername und die Anschrift einmalig für Impressum und Datenschutz gepflegt. Die E-Mail-Adresse bleibt zentral unter „Grunddaten“. Der Anbietername darf vom künstlerischen Namen der Website abweichen. Die beiden weiteren Rechtstexte sind getrennte formatierte Textfelder. HTML wird beim Bauen bereinigt; Skripte, Bilder, eingebettete Inhalte und fremde Formatierungen werden nicht übernommen. Die Verlinkung zum YouTube-Datenschutzhinweis bleibt auch nach Änderungen im Editor erhalten.

Die internen Schalter „Impressum abschließend geprüft“ und „Datenschutzerklärung abschließend geprüft“ sind keine automatische Rechtsprüfung. Hannas Anschrift wurde von ihr eingetragen und übernommen. Hanna hat bestätigt, dass sie keine Umsatzsteuer-ID hat; das optionale Feld bleibt leer und wird nicht angezeigt. Eine gegebenenfalls zugeteilte Wirtschafts-ID ist davon getrennt zu klären. Es wurde keine Nummer erfunden. Die Telefonnummer wird wie die E-Mail aus den Grunddaten übernommen.

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

Erst im abgestimmten Umschaltfenster nach Inhalts- und Rechtstextfreigabe in den GitHub Actions Repository-Variablen setzen. Nicht schon für die laufende GitHub-Vorschau:

- `SITE_URL`: `https://www.hannazumsande.de`
- `SITE_BASE`: `/`
- `PUBLIC_ALLOW_INDEXING`: `true`

Danach neu bauen und veröffentlichen. Nur mit allen passenden Angaben wird die Indexierung freigegeben. Die GitHub-Vorschau bleibt auch bei versehentlich gesetztem Freigabeschalter auf `noindex`. Die Domain muss zusätzlich in GitHub Pages samt DNS und HTTPS eingerichtet sein; diese Konfiguration wird hierdurch nicht verändert.

### Prüfung

`npm run build` und `npm run test:seo` prüfen die normale, gesperrte Vorschau. `npm run build:release` setzt die drei Domain-Variablen nur für den lokalen Prozess, prüft die Freigaben und Inhalte, baut die finale Version und prüft deren SEO einschließlich Entwurfshinweisen. Der Befehl veröffentlicht nichts und ändert weder DNS noch GitHub-Einstellungen. Fehlende Freigaben stoppen ihn vor dem Build. Für einen GitHub-Build nimmt der Test `--site https://janolefabian.github.io --base /hannazumsande-astro-2026` entgegen. Die Prüfungen kontrollieren Titel, Beschreibungen, Canonicals, strukturierte Daten, Indexierung, Sitemap, interne Links, Bildmaße, Icons und alle alten Weiterleitungsadressen.

### Zum Start noch erforderlich

- Sicherheitsupdates vom 6. Oktober 2026: Astro 7.3.5, sharp 0.35.5, js-yaml 4.3.2 sowie betroffene indirekte Abhängigkeiten aktualisiert. `npm audit` meldet danach keine bekannten Schwachstellen. Vor dem tatsächlichen Start erneut prüfen.

- 27 bekannte alte URLs sind als sofortige HTML-Weiterleitungen vorbereitet. GitHub Pages liefert dabei HTTP 200 mit Meta-Refresh, nicht HTTP 301. Google behandelt sofortige Meta-Refresh-Weiterleitungen als dauerhaft. Für diese Lösung ist keine zusätzliche Hosting-Schicht nötig.
- HTTPS sowie die Zusammenführung von www und Nicht-www auf eine bevorzugte Adresse prüfen.
- Domain in Google Search Console bestätigen, Sitemap einreichen und einige Seiten mit der URL-Prüfung kontrollieren.
- Reale Ladezeiten und mobile Darstellung auf der endgültigen Domain prüfen.
- Die Diskografie darf laut Hanna nach dem Start weiter ergänzt werden und ist kein Freigabehindernis. Beide Vitae liegen vor. Veranstaltungs-Rich-Results werden nicht versprochen; dafür wären zusätzlich verlässliche Veranstaltungsangaben einschließlich vollständiger Adressen nötig.

Es werden keine Trackingdienste eingebaut und keine Rankings garantiert.

`npm run test:content` prüft zusätzlich die CMS-Konfiguration, Pflichtfelder, CD-Angaben, Termin-Dateinamen, Entwurfstexte und lokale Bild- und PDF-Verweise. Die GitHub-Veröffentlichung führt Inhalts-, Rechtliches- und Build-Prüfungen aus, bevor sie die Seiten freischaltet. `npm run test:built` verwendet dieselben Domain- und Basispfad-Variablen wie der Build. Die SEO-Prüfung kontrolliert auch neue Tabs für Veranstaltungslinks und das Fehlen vorab geladener YouTube-Player.

### Domainwechsel: vorbereiteter Stand vom 11. Oktober 2026

Es wurden noch keine Domain-, DNS-, Mail- oder GitHub-Pages-Einstellungen geändert. Die alte Website antwortet unter HTTP. HTTPS meldet aktuell `ERR_TLS_CERT_ALTNAME_INVALID`; dieser Fehler muss beim Umzug einschließlich www und Nicht-www behoben sein. Der aktuelle A-Eintrag ist `85.13.164.225`, der MX-Eintrag `10 w0141a01.kasserver.com.`. Das sind nur Bestandsdaten, keine einzutragenden Zielwerte. Vor Umstellung aktuelle Einträge einschließlich AAAA, CAA, SPF, DKIM und DMARC sichern. Mail-Einträge nicht durch Website-Zielwerte ersetzen.

Die folgenden alten Navigationsadressen wurden auf der bestehenden Website gelesen. Die Weiterleitungen liegen in `src/data/legacy-urls.mjs` und werden beim Build als echte `.html`-Dateien am bisherigen Pfad erzeugt. Sie sind noch nicht auf der alten Domain aktiv:

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

Zusätzlich sind 14 alte `icalrepeat.detail`-Adressen den übernommenen Terminen zugeordnet. Ein Termin mit Zusatzinformationen führt zur Detailseite, sonst direkt zum betreffenden Kalendereintrag. Diese Anker bleiben erhalten, wenn der Auftritt ins Archiv wechselt. Wird ein zugeordneter Termin im CMS entfernt oder ausgeblendet, führt der alte Link zur Kalenderübersicht. Die zwei Aufführungen vom 16. Dezember wurden nach Uhrzeit mit dem Original abgeglichen. `npm run test:redirects` prüft die Zuordnung; die Build-Prüfung kontrolliert alle tatsächlichen Ziele und Anker, auch im GitHub-Unterordner.

Nicht übernommene historische Konzertdetailseiten bleiben unbekannte Adressen. Es gibt keine pauschale Umleitung aller Fehlerseiten zur Startseite. Im alten HTML vorhandene Joomla-Query-Links stehen nur in auskommentiertem Code; sie werden nicht als aktuelle Navigation behandelt. Ein selektiver serverseitiger Umgang mit `index.php`-Query-Adressen ist auf GitHub Pages nicht verfügbar. Der alte Joomla-Login wird nicht als neuer Administratorzugang ausgegeben. Das CMS bleibt unverändert unter `app.pagescms.org` erreichbar.

Offene Freigaben: eine gegebenenfalls bereits zugeteilte Wirtschafts-ID klären; Impressum und Datenschutz einschließlich tatsächlicher Dienstnutzung bestätigen; danach die beiden Prüfstatus bewusst setzen. Hannas fehlende Umsatzsteuer-ID ist bestätigt und kein offener Punkt mehr. Die verbleibenden Vorschauhinweise verschwinden erst im freigegebenen Domain-Build. Nicht nur zur Umgehung der Prüfung die Schalter aktivieren.

### Umschaltung in der richtigen Reihenfolge

1. Im bisherigen Hostingkonto ein vollständiges Backup der Joomla-Dateien und Datenbank sowie einen Export der DNS-Zone sichern. Die öffentlich abrufbare Website allein ist kein vollständiges Backup. Zugang zum Hostingkonto wird hierfür noch benötigt. Bestehenden Webspace nicht löschen und Mailbetrieb nicht kündigen.
2. Domain in den persönlichen GitHub-Pages-Einstellungen per dem dort individuell angezeigten TXT-Eintrag verifizieren. Diese Besitzbestätigung ist noch kein Wechsel des Website-Ziels. Vorab vollständige Mail-DNS-Einträge sichern, einschließlich vorhandener DKIM-Selektoren. Diese lassen sich nicht vollständig aus öffentlichen Abfragen aufzählen.
3. Direkt vor dem Start Hannas neueste CMS-Commits mit `git pull --ff-only` übernehmen, Inhalte und Freigaben kontrollieren und `npm run build:release` ausführen. Bei Fehlern nicht umschalten. Eine eventuell schon früher gebaute Version nicht ungeprüft verwenden.
4. Im Umschaltfenster die drei Repository-Variablen wie oben setzen und die Pages-Domain `www.hannazumsande.de` hinterlegen. Anschließend den Workflow manuell starten und den erfolgreichen Build plus Deploy abwarten. Bei unserem Actions-Deployment ist keine `CNAME`-Datei erforderlich. Das Hinterlegen der Domain kann bereits die bisherige GitHub-Adresse weiterleiten, daher nicht beiläufig im Voraus erledigen.
5. Nur die Website-Einträge beim DNS-Anbieter umstellen: `www` als CNAME auf `janolefabian.github.io.` und die Hauptdomain mit den vier unten genannten A-Einträgen. Vorhandene kollidierende A-/AAAA-/CNAME-Einträge nur für diese beiden Website-Namen ersetzen. Keine Wildcard-Regel anlegen und keine Nameserver wechseln. Mail-Einträge beibehalten.
6. DNS-Prüfung bei GitHub und Zertifikatsausstellung abwarten, dann HTTPS erzwingen. GitHub nennt für die Verfügbarkeit von HTTPS bis zu 24 Stunden; einen unterbrechungsfreien Wechsel daher nicht versprechen. Die Varianten HTTP/HTTPS sowie mit/ohne www müssen auf `https://www.hannazumsande.de/` zusammenlaufen.
7. Startseite, Kalender, Konzertdetail, Medien, Downloads, CMS-Veröffentlichung, Impressum, Datenschutz, Weiterleitungen und echte 404-Antwort auf der Domain prüfen. Keine Entwurfshinweise, GitHub-Unterordner oder Indexierungssperre auf den freigegebenen Inhaltsseiten. Sitemap in Search Console einreichen; Impressum, Datenschutz und 404 bleiben bewusst `noindex`.

Geprüfte GitHub-Zielwerte vom 11. Oktober 2026, vor der Umschaltung nochmals mit der offiziellen Dokumentation abgleichen:

| Name | Typ | Ziel |
| --- | --- | --- |
| `www` | CNAME | `janolefabian.github.io.` |
| `@` | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |

IPv6 ist optional. Bei Einrichtung die vier offiziellen GitHub-AAAA-Adressen nutzen; einen alten, abweichenden AAAA-Eintrag nicht stehen lassen. Am 11. Oktober wurden öffentlich für Hauptdomain und www `85.13.164.225` mit TTL 7200 Sekunden abgefragt. Auf der Hauptdomain wurden kein AAAA und kein CAA gefunden. MX war weiterhin `10 w0141a01.kasserver.com.`. SPF war `v=spf1 a mx include:spf.kasserver.com ~all`; kein DMARC-TXT wurde unter `_dmarc` gefunden. Das ist eine öffentliche Stichprobe, kein vollständiger Zonenexport. Insbesondere die Wirkung von SPF `a` ändert sich mit dem Webserverziel; tatsächliche Absender nach dem Umzug prüfen, nicht den Mailbetrieb als automatisch unverändert annehmen.

### Rückfall bei Problemen

Vorherige DNS-Zone, Pages-Domain-Einstellung und Repository-Variablen sichern. Falls der Umzug abgebrochen werden muss, die Website-DNS-Einträge aus diesem Export zurücksetzen und die alte Installation unverändert erreichbar lassen. In GitHub die eigene Pages-Domain entfernen, die drei Release-Variablen auf den bisherigen Vorschauzustand zurücksetzen und erneut erfolgreich bauen. Dabei keine CMS-Inhalte zurücksetzen. DNS-Caches können bis zum Ablauf ihrer TTL weiter auf das jeweils andere Ziel zeigen. Der alte HTTPS-Zertifikatsfehler wird durch einen Rückfall nicht behoben.

Die Vorbereitung hat keine DNS-, Pages-Domain-, Mail- oder Search-Console-Einstellung geändert. Die technische Prüfung umfasst 24 Inhaltsseiten, 27 Weiterleitungen und 11 automatisierte Rechtliches-/Weiterleitungstests. Der Audit vom 11. Oktober meldete auch einschließlich Entwicklungsabhängigkeiten keine bekannten Schwachstellen. Die manuelle Rechtstextfreigabe ist weiterhin offen, daher noch kein freigegebener Domain-Build.

Die Wahl sofortiger HTML-Weiterleitungen richtet sich nach [Googles Dokumentation zu Weiterleitungen](https://developers.google.com/search/docs/crawling-indexing/301-redirects#metarefresh). Die [Astro-Dokumentation für statische Endpunkte](https://docs.astro.build/en/guides/endpoints/) beschreibt die Erzeugung der Dateien am exakten alten Pfad.

Quellen für diese Vorbereitung: [Pages CMS: Dateinamen](https://pagescms.org/docs/configuration/content/filename/), [GitHub Pages: Datenerhebung](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [GitHub: Datenschutz](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement), [GitHub: eigene Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Google: Datenschutz](https://policies.google.com/privacy?hl=de), [Google: Datenübermittlungen](https://policies.google.com/privacy/frameworks?hl=de), [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html), [§ 25 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html).
