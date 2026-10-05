import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { isFinalDomain, legalLaunchIssues } from '../src/utils/legal.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const json = path => JSON.parse(readFileSync(resolve(root, path), 'utf8'));
const finalSite = isFinalDomain(process.env.SITE_URL);
if (!finalSite && !process.argv.includes('--final')) {
  console.log('Vorschaubuild: keine finale Inhaltsfreigabe erforderlich.');
} else {
  const events = readdirSync(resolve(root, 'src/content/termine')).filter(name => /\.mdx?$/.test(name)).map(name => {
    const source = readFileSync(resolve(root, 'src/content/termine', name), 'utf8');
    const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    if (!match) throw new Error('Ungültige Termindatei: ' + name);
    return { ...yaml.load(match[1]), body: source.slice(match[0].length) };
  });
  const issues = legalLaunchIssues(json('src/data/legal.json'), json('src/data/settings.json'), events);
  if (issues.length) {
    console.error('Domainveröffentlichung noch nicht freigegeben:\n' + issues.map(issue => '• ' + issue).join('\n'));
    process.exitCode = 1;
  } else {
    console.log('Pflichtfelder und hinterlegte Freigaben vollständig. Dies ersetzt keine rechtliche Prüfung.');
  }
}
