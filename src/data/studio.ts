// Single source of truth for business info: used by the page, meta tags and JSON-LD.
export const studio = {
  name: 'ESCAPE',
  tagline: 'студія руху',
  formerName: 'Alex Studio',
  bookingUrl: 'https://app.hopitude.com/uk/calendar?cl=3696',
  phones: [
    { display: '+38 (099) 006 75 56', tel: '+380990067556', note: 'Олександра' },
    { display: '+38 (093) 834 05 17', tel: '+380938340517' },
  ],
  address: {
    street: 'вул. Юнкерова, 76',
    note: '13 лінія',
    locality: 'Пуща-Водиця',
    localityIn: 'Пущі-Водиці', // locative case: «у Пущі-Водиці»
    city: 'Київ',
    region: 'Київ',
    country: 'UA',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Юнкерова+76+Пуща-Водиця+Київ',
  social: {
    instagram: 'https://www.instagram.com/alex__studio__/',
    telegram: 'https://t.me/alexstudio2023',
  },
  priceRange: '300–2000 грн',
  seo: {
    title: 'ESCAPE — студія руху для дівчат у Пущі-Водиці | Йога, пілатес, High Heels',
    description:
      'Студія руху ESCAPE у Пущі-Водиці (Київ): йога-терапія, пілатес, стретчинг, High Heels, степ-аеробіка, Body Intensive та дитячі танці. Перше заняття безкоштовно — онлайн запис.',
    keywords:
      'студія руху, фітнес для дівчат, йога Пуща-Водиця, пілатес Київ, стретчинг, High Heels, дитячі танці, Оболонь',
  },
} as const;
