import type { IconName } from '../components/Icon.astro';

export interface Direction {
  name: string;
  // File name in src/assets/photos/<theme>/ (see photos.ts).
  photo: string;
  icon: IconName;
  description: string;
}

export interface ScheduleRow {
  time: string;
  title: string;
  note?: string;
  trainer: string;
}

export interface ScheduleGroup {
  days: string;
  tone: 'pink' | 'gold';
  rows: ScheduleRow[];
}

export interface Trainer {
  name: string;
  photo: string;
  specialties: string[];
  // Optional short description (up to ~300 characters), shown in an expandable block on the trainer card.
  bio?: string;
}

export interface PriceItem {
  title: string;
  note?: string;
  // Highlighted card (e.g. the single-class price).
  featured?: boolean;
  prices: { label?: string; value: string }[];
}

export const directions: Direction[] = [
  { name: 'Йога-терапія', photo: 'yoga-therapy', icon: 'lotus', description: 'Мʼяка практика для спини, суглобів і спокійної голови.' },
  { name: 'Пілатес', photo: 'pilates', icon: 'mat', description: 'Сильний центр, рівна постава та контроль кожного руху.' },
  { name: 'Стретчинг', photo: 'stretching', icon: 'heart', description: 'Гнучкість, легкість і розслаблені мʼязи.' },
  { name: 'High Heels', photo: 'high-heels', icon: 'heel', description: 'Танець на підборах: пластика, впевненість, жіночність.' },
  { name: 'Lady Dance', photo: 'step-aerobics', icon: 'star', description: 'Жіночна танцювальна пластика, грація та впевненість у собі.' },
  { name: 'Body Intensive', photo: 'body-intensive', icon: 'bolt', description: 'Функціональне тренування на все тіло та витривалість.' },
  { name: 'Relax Stretching', photo: 'relax-stretching', icon: 'sparkle', description: 'Повільна розтяжка для відновлення після дня.' },
  { name: 'Дитячі танці', photo: 'kids-dance', icon: 'people', description: 'Kids Dance: танці та розвиток для дітей 3–6 років.' },
  { name: 'Сучасні танці', photo: 'teen-dance', icon: 'music', description: 'Modern Dance для дітей і підлітків від 7 років.' },
];

export const adultSchedule: ScheduleGroup[] = [
  {
    days: 'Пн · Ср',
    tone: 'pink',
    rows: [
      { time: '09:00', title: 'Pilates', trainer: 'Олександра' },
      { time: '18:00', title: 'Lady Dance', trainer: 'Поліна' },
      { time: '19:00', title: 'High Heels', trainer: 'Олександра' },
      { time: '20:00', title: 'Relax Stretching', trainer: 'Ірина' },
    ],
  },
  {
    days: 'Вт · Чт · Пт',
    tone: 'gold',
    rows: [
      { time: '18:00', title: 'Йога з елементами терапії', note: 'тільки Вт та Чт', trainer: 'Валерія' },
      { time: '19:00', title: 'Pilates', trainer: 'Ірина' },
      { time: '20:00', title: 'Body Intensive Stretching', trainer: 'Ірина' },
    ],
  },
];

export const kidsSchedule: ScheduleGroup[] = [
  {
    days: 'Пн · Ср',
    tone: 'pink',
    rows: [
      { time: '16:00', title: 'Сучасні танці', note: 'середня група 7+ років', trainer: 'Поліна' },
      { time: '17:00', title: 'Kids Dance', note: 'молодша група 3–6 років', trainer: 'Ірина' },
    ],
  },
];

export const trainers: Trainer[] = [
  { name: 'Олександра', photo: 'trainer-oleksandra', specialties: ['High Heels', 'Pilates'] },
  { name: 'Ірина', photo: 'trainer-iryna', specialties: ['Pilates', 'Фітнес', 'Дитячі групи'] },
  { name: 'Поліна', photo: 'trainer-polina', specialties: ['Сучасні танці', 'Lady Dance'] },
  { name: 'Валерія', photo: 'trainer-valeriia', specialties: ['Йога', 'Кінезіотейпування'] },
];

export const aboutFeatures: { label: string; icon: IconName }[] = [
  { label: 'Сучасний зал', icon: 'lotus' },
  { label: 'Професійні тренери', icon: 'heart' },
  { label: 'Дружня атмосфера', icon: 'sparkle' },
  { label: 'Для дітей та дорослих', icon: 'people' },
];

export interface PriceGroup {
  // Group heading; omitted for the stand-alone single-class price.
  label?: string;
  // Rendered as up to two columns.
  columns: PriceItem[][];
}

export const prices: PriceGroup[] = [
  {
    columns: [[{ title: 'Разове заняття', featured: true, prices: [{ value: '400 грн' }] }]],
  },
  {
    label: 'Для дітей',
    columns: [
      [{ title: 'Дитяча група 3–6 р.', note: '2 рази на тиждень', prices: [{ value: '1450 грн/міс' }] }],
      [{ title: 'Modern Dance 7+ р.', note: '2 рази на тиждень', prices: [{ value: '1750 грн/міс' }] }],
    ],
  },
  {
    label: 'Для дорослих',
    columns: [
      [
        {
          title: 'High Heels, Йога-терапія, Lady Dance',
          note: '2 рази на тиждень',
          prices: [{ value: '1950 грн/міс' }],
        },
      ],
      [
        {
          title: 'Body Intensive + Stretching, Пілатес, Relax Stretching',
          prices: [
            { label: '2 рази на тиждень', value: '1750 грн/міс' },
            { label: '3 рази на тиждень', value: '1999 грн/міс' },
          ],
        },
      ],
    ],
  },
  {
    label: 'Додатково',
    columns: [[{ title: 'Кінезіотейпування', note: '1 зона', prices: [{ value: '300 грн' }] }]],
  },
];
