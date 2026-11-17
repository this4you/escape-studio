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

export interface PriceOption {
  // Label in the pill on the card, e.g. «АБОНЕМЕНТ НА 8 ЗАНЯТЬ».
  tag: string;
  amount: number;
  unit: 'грн' | 'грн/міс';
  // Thin caption under the price, e.g. «2 рази на тиждень».
  note?: string;
}

export interface PriceCard {
  title: string;
  subtitle?: string;
  // Highlighted card (the single-class price).
  featured?: boolean;
  // One option = a regular card. Several options with the same title = one wide card:
  // the options side by side and a shared plate with the title underneath.
  options: PriceOption[];
}

export const directions: Direction[] = [
  { name: 'Йога-терапія', photo: 'yoga-therapy', icon: 'lotus', description: 'Мʼяка практика для спини, суглобів і спокійної голови.' },
  { name: 'Пілатес', photo: 'pilates', icon: 'mat', description: 'Сильний центр, рівна постава та контроль кожного руху.' },
  { name: 'High Heels', photo: 'high-heels', icon: 'heel', description: 'Танець на підборах: пластика, впевненість, жіночність.' },
  { name: 'Lady Dance', photo: 'lady-dance', icon: 'star', description: 'Жіночна танцювальна пластика, грація та впевненість у собі.' },
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

const twice = '2 рази на тиждень';
const combinable = 'Напрямки можна поєднувати';

export const prices: PriceCard[] = [
  {
    title: 'Разове заняття',
    featured: true,
    options: [{ tag: 'Без абонемента', amount: 400, unit: 'грн' }],
  },
  {
    title: 'Пілатес, Body Intensive, Relax Stretching',
    subtitle: combinable,
    options: [
      { tag: 'Абонемент на 8 занять', amount: 1750, unit: 'грн/міс', note: twice },
      { tag: 'Абонемент на 12 занять', amount: 1999, unit: 'грн/міс', note: '3 рази на тиждень' },
    ],
  },
  {
    title: 'Йога-терапія',
    options: [{ tag: 'Йога-терапія 8 занять', amount: 1950, unit: 'грн/міс', note: twice }],
  },
  {
    title: 'Lady Dance, High Heels',
    subtitle: combinable,
    options: [{ tag: 'Танцювальний абонемент 8 занять', amount: 1950, unit: 'грн/міс', note: twice }],
  },
  {
    title: 'Дитяча група 3–6 р.',
    options: [{ tag: 'Дитячий абонемент 8 занять', amount: 1450, unit: 'грн/міс', note: twice }],
  },
  {
    title: 'Modern Dance 7+ р.',
    options: [{ tag: 'Підлітковий абонемент 8 занять', amount: 1750, unit: 'грн/міс', note: twice }],
  },
];
