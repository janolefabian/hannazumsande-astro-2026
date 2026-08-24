import { withBase } from '../utils/paths';

export const navigation = [
  { href: withBase('/'), label: 'Start' },
  { href: withBase('/vita/'), label: 'Vita' },
  { href: withBase('/termine/'), label: 'Termine' },
  { href: withBase('/repertoire/'), label: 'Repertoire' },
  { href: withBase('/medien/'), label: 'Medien' },
  { href: withBase('/kontakt/'), label: 'Kontakt' },
];

export const gallery = [
  { src: '/media/gallery/palm-006.jpg', alt: 'Porträt von Hanna Zumsande', credit: 'Christian Palm' },
  { src: '/media/gallery/palm-012.jpg', alt: 'Hanna Zumsande im Freien', credit: 'Christian Palm' },
  { src: '/media/gallery/palm-020.jpg', alt: 'Porträt von Hanna Zumsande in der Natur', credit: 'Christian Palm' },
  { src: '/media/gallery/palm-028.jpg', alt: 'Hanna Zumsande, Sopranistin', credit: 'Christian Palm' },
  { src: '/media/gallery/palm-037.jpg', alt: 'Künstlerporträt von Hanna Zumsande', credit: 'Christian Palm' },
  { src: '/media/gallery/taake-1336.jpg', alt: 'Porträt von Hanna Zumsande', credit: 'Annemone Taake' },
].map((image) => ({ ...image, src: withBase(image.src) }));

export const audioTracks = [
  {
    title: 'Nun beut die Flur das frische Grün',
    work: 'J. Haydn, Die Schöpfung, Live Mitschnitt',
    src: '/media/audio/schoepfung-nun-beut-die-flur.mp3',
  },
  {
    title: 'Auf starkem Fittiche',
    work: 'J. Haydn, Die Schöpfung, Live Mitschnitt',
    src: '/media/audio/schoepfung-auf-starkem-fittiche.mp3',
  },
  {
    title: 'Blute nur',
    work: 'J. S. Bach, Matthäus Passion',
    src: '/media/audio/bach-blute-nur.mp3',
  },
  {
    title: 'Ich will Dir mein Herze schenken',
    work: 'J. S. Bach, Matthäus Passion, Live Mitschnitt',
    src: '/media/audio/bach-ich-will-dir-mein-herze-schenken.mp3',
  },
  {
    title: 'Wie gut ist es, Dir, Gott vertrauen',
    work: 'G. P. Telemann, Jubelmusik für die Stadt Altona',
    src: '/media/audio/telemann-wie-gut-ist-es.mp3',
  },
  {
    title: 'Chanson des cueilleuses des lentiques',
    work: 'M. Ravel',
    src: '/media/audio/ravel-lentiques.mp3',
  },
].map((track) => ({ ...track, src: withBase(track.src) }));

export const videos = [
  {
    title: 'Lebe wohl, ich muss dich lassen',
    details: 'C. H. Graun, Arie der Iphigenia, barockwerk hamburg, Ira Hochman',
    href: 'https://www.youtube.com/watch?v=awbnLgUHspU',
  },
  {
    title: 'Du bleibest dennoch unser Gott',
    details: 'G. Ph. Telemann, mit Dominik Wörner und barockwerk hamburg',
    href: 'https://www.youtube.com/watch?v=GNsC2HMysiM',
  },
  {
    title: 'Soll ich das Versprechen lassen',
    details: 'C. H. Graun, Arie der Ilione aus Polydorus',
    href: 'https://www.youtube.com/watch?v=OmlKY1mRMyo',
  },
];

export const concertRepertoire = [
  { composer: 'J. S. Bach', works: ['h Moll Messe, BWV 232', 'Magnificat, BWV 243', 'Matthäus Passion, BWV 244', 'Johannes Passion, BWV 245', 'Weihnachtsoratorium, BWV 248', 'Osteroratorium, BWV 249', 'Kantaten, darunter BWV 51, 82a, 84 und 209'] },
  { composer: 'C. P. E. Bach', works: ['Magnificat, Wq 215', 'Die Auferstehung und Himmelfahrt Jesu, Wq 240'] },
  { composer: 'L. v. Beethoven', works: ['Messe in C Dur, op. 86', 'Ah, perfido, op. 65', 'Christus am Ölberge, op. 85', '9. Sinfonie', 'Missa solemnis'] },
  { composer: 'F. L. Benda', works: ['Der Herr ist König'] },
  { composer: 'J. Brahms', works: ['Ein deutsches Requiem, op. 45'] },
  { composer: 'B. Britten', works: ['Rejoice in the Lamb, op. 30', 'Les Illuminations, op. 18'] },
  { composer: 'A. Bruckner', works: ['Te Deum, WAB 45', 'Messe Nr. 3 in f Moll, WAB 28'] },
  { composer: 'D. Buxtehude', works: ['Membra Jesu nostri, BuxWV 75', 'Diverse Kantaten'] },
  { composer: 'M. A. Charpentier', works: ['Messe de Minuit'] },
  { composer: 'F. Couperin', works: ['Leçons de ténèbres pour le mercredi saint'] },
  { composer: 'G. Fauré', works: ['Requiem, op. 48'] },
  { composer: 'C. Franck', works: ['Les Béatitudes'] },
  { composer: 'G. F. Händel', works: ['Saul, HWV 53', 'Israel in Egypt, HWV 54', 'L’Allegro, il Penseroso ed il Moderato, HWV 55', 'The Messiah, HWV 56', 'Judas Maccabaeus, HWV 63', 'Joshua, HWV 64', 'Solomon, HWV 67', 'Dixit Dominus, HWV 232', 'Neun deutsche Arien, HWV 202 bis 210', 'Gloria, HWV deest'] },
  { composer: 'J. Haydn', works: ['Die Schöpfung, Hob. XXI:2', 'Die Jahreszeiten, Hob. XXI:3', 'Die sieben letzten Worte, Hob. XX:2', 'Messen, darunter die Nelson Messe, Hob. XXII:11'] },
  { composer: 'G. A. Homilius', works: ['Die Freude der Hirten über die Geburt Jesu'] },
  { composer: 'J. N. Hummel', works: ['Der Durchzug durchs Rote Meer'] },
  { composer: 'R. Keiser', works: ['Markus Passion'] },
  { composer: 'G. Mahler', works: ['2. Sinfonie', 'Rückert Lieder'] },
  { composer: 'F. Mendelssohn', works: ['Elias, op. 70', 'Paulus, op. 36', 'Lobgesang, op. 52', 'Hör mein Bitten', 'Psalm 42, Wie der Hirsch schreit, op. 42'] },
  { composer: 'C. Monteverdi', works: ['Marienvesper, SV 206, erster und zweiter Sopran', 'Selva morale'] },
  { composer: 'W. A. Mozart', works: ['Exsultate, jubilate, KV 165', 'Requiem, KV 626', 'Missa in c Moll, KV 427, erster und zweiter Sopran', 'Vesperae solennes de Confessore, KV 339'] },
  { composer: 'C. Orff', works: ['Carmina burana'] },
  { composer: 'G. B. Pergolesi', works: ['Stabat mater'] },
  { composer: 'F. Poulenc', works: ['Gloria, FP 177'] },
  { composer: 'G. Rossini', works: ['Petite Messe solennelle', 'Stabat mater'] },
  { composer: 'C. Saint Saëns', works: ['Oratorio de Noël, op. 12'] },
  { composer: 'F. Schubert', works: ['Messe in G Dur', 'Messe in Es Dur'] },
  { composer: 'R. Schumann', works: ['Requiem für Mignon, op. 98b'] },
  { composer: 'R. Strauss', works: ['Vier letzte Lieder'] },
  { composer: 'G. P. Telemann', works: ['Donnerode, TWV 6:3', 'Machet die Tore weit, TVWV 1:1074', 'Nun komm der Heiden Heiland, TVWV 1:1174', 'O Jesu Christ, dein Kripplein ist, TVWV 1:1200', 'Siehe, ich verkündige Euch große Freude', 'Der Herr hat offenbaret'] },
  { composer: 'M. Tippett', works: ['A Child of Our Time'] },
  { composer: 'A. Vivaldi', works: ['Gloria, RV 589', 'Laudate pueri, RV 600'] },
];

export const operaRepertoire = [
  ['C. Debussy', 'Pelléas et Mélisande', 'Mélisande*'],
  ['C. W. Gluck', 'Orfeo ed Euridice', 'Euridice*'],
  ['G. F. Händel', 'Radamisto', 'Polissena'],
  ['G. F. Händel', 'Rinaldo', 'Sirena'],
  ['G. F. Händel', 'Teseo', 'Agilea'],
  ['G. F. Händel', 'Giulio Cesare', 'Cleopatra*'],
  ['C. Monteverdi', 'L’Orfeo', 'Musica, Euridice'],
  ['W. A. Mozart', 'Le nozze di Figaro', 'Contessa'],
  ['W. A. Mozart', 'Die Zauberflöte', 'Pamina*'],
  ['W. A. Mozart', 'Idomeneo', 'Ilia*'],
  ['O. Nicolai', 'Die lustigen Weiber', 'Frau Fluth*'],
  ['H. Pfitzner', 'Das Christelflein', 'Christkind'],
  ['H. Purcell', 'Dido and Aeneas', 'Dido'],
  ['F. Schwenk', 'gehen gehen gehen', 'Sängerin'],
  ['R. Strauss', 'Ariadne', 'Echo*'],
  ['R. Strauss', 'Elektra', 'Vierte Magd*'],
  ['I. Strawinsky', 'The Rake’s Progress', 'Ann Truelove*'],
  ['G. Verdi', 'Nabucco', 'Anna'],
  ['G. Verdi', 'Giovanna d’Arco', 'Giovanna'],
  ['R. Wagner', 'Parsifal', 'Blumenmädchen II.1*'],
] as const;

export const liedComposers = ['Brahms', 'Britten', 'Debussy', 'Dowland', 'Grieg', 'Hindemith', 'Jost', 'Mahler', 'Marx', 'Mendelssohn', 'Mozart', 'Pfitzner', 'Purcell', 'Ravel', 'Reger', 'Schönberg', 'Schubert', 'Schumann', 'Strauss', 'Tippett', 'Wolf'];

export const discography = [
  { cover: '/media/covers/cd01-brockes.jpg', title: 'Brockes Passion', subtitle: 'G. F. Händel, Passion nach Brockes, HWV 48', artists: 'Concerto Copenhagen, Leitung Lars Ulrik Mortensen', label: 'cpo, 2019' },
  { cover: '/media/covers/cd02-telemann.jpg', title: 'Einweihungskantaten für Hamburg und Altona', subtitle: 'Georg Philipp Telemann', artists: 'barockwerk Hamburg, Leitung Ira Hochman', label: 'cpo, 2019' },
  { cover: '/media/covers/cd03-goettinger-stadtmusik.jpg', title: 'Göttinger Stadtmusik', subtitle: 'Werke von W. F. Bach, C. F. Rudorff und C. P. E. Bach', artists: 'Göttinger Barockorchester, Leitung Antonius Adamske', label: 'Coviello, 2019' },
  { cover: '/media/covers/cd04-graziani.jpg', title: 'Vespro della beata vergine', subtitle: 'Bonifazio Graziani', artists: 'la festa musicale, Collegium Vocale Hannover, Leitung Florian Lohmann', label: 'Arcantus, 2019' },
  { cover: '/media/covers/cd05-air-music.jpg', title: 'Air Music', subtitle: 'Tales of Flying Creatures and Heavenly Breezes', artists: 'Capella de la Torre, Leitung Katharina Bäuml', label: 'DHM, 2019' },
  { cover: '/media/covers/cd06-seliges-erwaegen.jpg', title: 'Das selige Erwägen', subtitle: 'G. Ph. Telemann, Passionsoratorium', artists: 'Freiburger Barockorchester, Leitung Gottfried von der Goltz', label: 'Aparte, 2018' },
  { cover: '/media/covers/cd07-alceste.jpg', title: 'Die getreue Alceste', subtitle: 'Georg Caspar Schürmann', artists: 'barockwerk Hamburg, Leitung Ira Hochman', label: 'cpo, 2018' },
  { cover: '/media/covers/cd08-selva.jpg', title: 'Selva morale e spirituale', subtitle: 'Claudio Monteverdi', artists: 'Balthasar Neumann Chor und Ensemble, Leitung Pablo Heras Casado', label: 'harmonia mundi, 2017' },
  { cover: '/media/covers/cd09-telemann-wolken.jpg', title: 'Die dicken Wolken scheiden sich', subtitle: 'G. Ph. Telemann, Festmusiken für Altona', artists: 'barockwerk Hamburg, Leitung Ira Hochman', label: 'cpo, 2017' },
  { cover: '/media/covers/cd10-cpe-bach.jpg', title: 'Bürgercapitainsmusik 1780', subtitle: 'Carl Philipp Emanuel Bach', artists: 'barockwerk Hamburg, Leitung Ira Hochman', label: 'cpo, 2016' },
  { cover: '/media/covers/cd11-marienvesper.jpg', title: 'Marienvesper', subtitle: 'Claudio Monteverdi', artists: 'amarcord und Gäste', label: 'carus, 2014' },
  { cover: '/media/covers/cd12-marienkirche.jpg', title: 'Vokal und Instrumentalmusik aus der Marienkirche zu Lübeck', subtitle: 'Werke von Hasse, Tunder und Buxtehude', artists: 'Capella St. Marien, Leitung Johannes Unger', label: '' },
  { cover: '/media/covers/cd13-barocke-buehne.jpg', title: 'Musik für die barocke Bühne', subtitle: 'Schauspielmusiken von Schein, Neumark, Widman und anderen', artists: 'Bell’Arte Salzburg, Leitung Annegret Siedel', label: 'Cantate, 2013' },
  { cover: '/media/covers/cd14-kirchenlieder.jpg', title: 'Wer nur den lieben Gott lässt walten', subtitle: 'Kirchenlieder von Luther bis Bach', artists: 'Leitung Hans Christoph Becker Foss', label: 'Ambiente, 2014' },
  { cover: '/media/covers/cd15-freu-dich.jpg', title: 'Freu dich sehr, o meine Seele', subtitle: '', artists: 'Leitung Hans Christoph Becker Foss', label: 'Ambiente, 2011' },
  { cover: '/media/covers/cd16-quartalsmusiken.jpg', title: 'Hamburger Quartalsmusiken', subtitle: 'C. P. E. Bach', artists: 'Himlische Cantorey, Les Amis de Philippe, Leitung Ludger Rémy', label: '' },
].map((disc) => ({ ...disc, cover: withBase(disc.cover) }));
