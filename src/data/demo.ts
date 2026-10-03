// Demo-only options for the client presentation (see DemoSwitcher.astro). Remove once choices are final.
export const designs = [
  { id: 'neon', label: 'Дизайн 1' },
  { id: 'graphite', label: 'Дизайн 2' },
] as const;

export interface FontPair {
  id: string;
  label: string;
  display: string;
  body: string;
  // Google Fonts css2 `family=` values; every family must ship a Cyrillic subset.
  families: string[];
}

export const fonts: FontPair[] = [
  {
    id: 'unbounded',
    label: 'Unbounded',
    display: 'Unbounded',
    body: 'Manrope',
    families: ['Unbounded:wght@300;400;500', 'Manrope:wght@400;500;600;700'],
  },
  {
    id: 'comfortaa',
    label: 'Comfortaa',
    display: 'Comfortaa',
    body: 'Nunito',
    families: ['Comfortaa:wght@300;400;500', 'Nunito:wght@400;500;600;700'],
  },
  {
    id: 'cormorant',
    label: 'Cormorant',
    display: 'Cormorant Garamond',
    body: 'Montserrat',
    families: ['Cormorant+Garamond:wght@300;400;500', 'Montserrat:wght@400;500;600;700'],
  },
  {
    id: 'jost',
    label: 'Jost',
    display: 'Jost',
    body: 'Jost',
    families: ['Jost:wght@300;400;500;600;700'],
  },
  {
    id: 'tenor',
    label: 'Tenor Sans',
    display: 'Tenor Sans',
    body: 'Raleway',
    families: ['Tenor+Sans', 'Raleway:wght@400;500;600;700'],
  },
];

export const defaultDesign = 'graphite';
export const defaultFont = fonts[0].id;

// Browsers download font files only for faces actually used, so one stylesheet for all pairs is cheap.
export const fontsHref = `https://fonts.googleapis.com/css2?${[...new Set(fonts.flatMap((f) => f.families))]
  .map((f) => `family=${f}`)
  .join('&')}&display=swap`;

export const fontsCss = fonts
  .map(
    (f) =>
      `:root[data-font='${f.id}']{--font-display:'${f.display}',system-ui,sans-serif;--font-body:'${f.body}',system-ui,sans-serif}`,
  )
  .join('');
