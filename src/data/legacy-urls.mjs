// Read from the public Joomla navigation and calendar on 11 October 2026.
export const legacyPages = {
  '/vita.html': '/vita/',
  '/contact.html': '/kontakt/',
  '/impressum.html': '/impressum/',
  '/links.html': '/links/',
  '/media2/photos.html': '/medien/fotos/',
  '/media2/audio.html': '/medien/audio/',
  '/media2/download.html': '/medien/downloads/',
  '/media2/discography.html': '/medien/diskografie/',
  '/repertoire/2014-05-22-18-41-33.html': '/repertoire/konzert/',
  '/repertoire/2014-05-22-18-41-34.html': '/repertoire/oper/',
  '/repertoire/2014-05-22-18-41-32.html': '/repertoire/lied/',
  '/calendar/archiv-2/range.listevents/-.html': '/termine/',
  '/calendar/archiv/range.listevents/-.html': '/termine/#vergangene-auftritte',
};

export const legacyEvents = {
  '/calendar/archiv-2/icalrepeat.detail/2026/11/01/681/-/f-mendelssohn-bartholdy-lobgesang.html': '2026-11-01-mendelssohn-lobgesang',
  '/calendar/archiv-2/icalrepeat.detail/2026/11/08/679/-/f-mendelssohn-bartholdy-paulus.html': '2026-11-08-1800-mendelssohn-paulus',
  '/calendar/archiv-2/icalrepeat.detail/2026/11/14/682/-/c-monteverdi-marienvesper.html': '2026-11-14-monteverdi-marienvesper',
  '/calendar/archiv-2/icalrepeat.detail/2026/11/21/683/-/j-brahms-ein-deutsches-requiem.html': '2026-11-21-brahms-requiem',
  '/calendar/archiv-2/icalrepeat.detail/2026/12/16/662/-/j-s-bach-weihnachtsoratorium-bwv-248-i-iii.html': '2026-12-16-bach-weihnachtsoratorium-18-uhr',
  '/calendar/archiv-2/icalrepeat.detail/2026/12/16/685/-/j-s-bach-weihnachtsoratorium-bwv-248-i-iii.html': '2026-12-16-bach-weihnachtsoratorium-20-uhr',
  '/calendar/archiv-2/icalrepeat.detail/2026/12/19/686/-/g-p-telemann-weihnachtsoratorium.html': '2026-12-19-telemann-weihnachtsoratorium',
  '/calendar/archiv-2/icalrepeat.detail/2026/12/26/684/-/j-s-bach-weihnachtsoratorium-bwv-248-iv-vi.html': '2026-12-26-bach-weihnachtsoratorium',
  '/calendar/archiv-2/icalrepeat.detail/2026/12/27/687/-/j-s-bach-weihnachtsoratorium-bwv-248-i-iii-vi.html': '2026-12-27-bach-weihnachtsoratorium',
  '/calendar/archiv-2/icalrepeat.detail/2026/12/31/688/-/g-f-haendel-the-messiah-auszuege.html': '2026-12-31-haendel-messiah',
  '/calendar/archiv/icalrepeat.detail/2026/10/04/680/-/f-mendelssohn-bartholdy-elias.html': '2026-10-04-mendelssohn-elias',
  '/calendar/archiv/icalrepeat.detail/2026/10/03/689/-/f-mendelssohn-bartholdy-elias.html': '2026-10-03-mendelssohn-elias',
  '/calendar/archiv/icalrepeat.detail/2026/09/20/678/-/j-s-bach-bwv-95-christus-der-ist-mein-leben.html': '2026-09-20-bach-bwv-95',
  '/calendar/archiv/icalrepeat.detail/2026/08/23/677/-/keiser-und-graefin.html': '2026-08-23-keiser-und-graefin',
};

// Removed or unpublished events must never leave a broken detail-page redirect.
export const legacyRedirects = (eventTargets = new Map()) => ({
  ...legacyPages,
  ...Object.fromEntries(Object.entries(legacyEvents).map(([oldPath, id]) => [
    oldPath, eventTargets.get(id) || '/termine/',
  ])),
});
