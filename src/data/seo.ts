import settings from './settings.json';

type PageMeta = { title: string; description: string; index?: boolean; type?: string };
export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: `${settings.name} | ${settings.role}`,
    description: `${settings.name}, ${settings.role} aus Hamburg: Konzert, Oper und Lied von der Alten Musik bis zur Moderne. Auftritte, Biografie, Hörbeispiele und Kontakt.`,
  },
  '/vita/': {
    title: 'Vita | Hanna Zumsande',
    description: 'Hanna Zumsandes künstlerischer Weg: internationale Konzerttätigkeit, Opernrollen und Aufnahmen sowie ihre Lehre an der Hochschule für Musik und Theater Hamburg.',
    type: 'ProfilePage',
  },
  '/termine/': {
    title: 'Kalender | Hanna Zumsande',
    description: 'Auftritte von Hanna Zumsande: kommende Konzerte mit Datum und Veranstaltungsort sowie ein Rückblick auf vergangene Auftritte.',
    type: 'CollectionPage',
  },
  '/medien/': {
    title: 'Medien | Hanna Zumsande',
    description: 'Hanna Zumsande hören und entdecken: Audio und Video, Porträts, Diskografie sowie Vita und Pressefotos zum Herunterladen.',
    type: 'CollectionPage',
  },
  '/medien/audio/': {
    title: 'Audio und Video | Hanna Zumsande',
    description: 'Hörbeispiele und Videos mit Hanna Zumsande, Sopran: Arien und Liveaufnahmen mit Musik von Bach, Haydn, Telemann, Graun und Ravel.',
    type: 'CollectionPage',
  },
  '/medien/fotos/': {
    title: 'Fotos | Hanna Zumsande',
    description: 'Hanna Zumsande im Porträt und auf der Bühne. Fotografien von Christian Palm, Simon Redel und Klaus Landry sowie ausgewählte Pressebilder zum Download.',
    type: 'CollectionPage',
  },
  '/medien/diskografie/': {
    title: 'Diskografie | Hanna Zumsande',
    description: 'Aufnahmen mit Hanna Zumsande: Musik von Händel, Telemann, Monteverdi und weiteren Komponisten, mit Ensembles und Informationen zu den Veröffentlichungen.',
    type: 'CollectionPage',
  },
  '/medien/downloads/': {
    title: 'Downloads | Hanna Zumsande',
    description: 'Unterlagen für Veranstalter, Agenturen und Presse: die Vita von Hanna Zumsande als PDF sowie ausgewählte Pressefotos mit Fotocredits.',
    type: 'CollectionPage',
  },
  '/kontakt/': {
    title: 'Kontakt | Hanna Zumsande',
    description: 'Kontakt zu Hanna Zumsande und Weiler Artists Management Berlin für Konzerte, Programme, Presseinformationen und künstlerische Zusammenarbeit.',
    type: 'ContactPage',
  },
  '/repertoire/': {
    title: 'Repertoire | Hanna Zumsande',
    description: 'Das Repertoire von Hanna Zumsande, Sopran: Oratorien, Passionen, Messen, Opernpartien und Lieder von der Alten Musik bis zur Moderne.',
    type: 'CollectionPage',
  },
  '/repertoire/konzert/': {
    title: 'Konzertrepertoire | Hanna Zumsande',
    description: 'Konzertrepertoire von Hanna Zumsande: Oratorien, Passionen, Messen und sinfonische Werke von Bach, Händel, Haydn, Mendelssohn und weiteren Komponisten.',
    type: 'CollectionPage',
  },
  '/repertoire/oper/': {
    title: 'Opernrepertoire | Hanna Zumsande',
    description: 'Opernpartien im Repertoire von Hanna Zumsande, Sopran, mit Werken von Monteverdi und Händel bis zu Strauss, Strawinsky, Verdi und Wagner.',
    type: 'CollectionPage',
  },
  '/repertoire/lied/': {
    title: 'Liedrepertoire | Hanna Zumsande',
    description: 'Liedrepertoire von Hanna Zumsande mit Werken von Brahms, Debussy, Mahler, Ravel, Schubert, Schumann, Strauss und Wolf.',
    type: 'CollectionPage',
  },
  '/links/': {
    title: 'Links | Hanna Zumsande',
    description: 'Ausgewählte künstlerische Partner von Hanna Zumsande mit Links zu Ensembles und zur Fotografie.',
    type: 'CollectionPage',
  },
  '/impressum/': { title: 'Impressum | Hanna Zumsande', description: 'Impressum und Bildnachweise der Website von Hanna Zumsande.', index: false },
  '/datenschutz/': { title: 'Datenschutz | Hanna Zumsande', description: 'Hinweise zum Datenschutz auf der Website von Hanna Zumsande.', index: false },
  '/404.html': { title: 'Seite nicht gefunden | Hanna Zumsande', description: 'Die gesuchte Seite wurde nicht gefunden.', index: false },
};
