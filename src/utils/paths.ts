const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
    return path;
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (base && (normalized === base || normalized.startsWith(base + '/'))) return normalized;
  return `${base}${normalized}`;
};

export const withoutBase = (path: string) =>
  base && (path === base || path.startsWith(base + '/')) ? path.slice(base.length) || '/' : path;
