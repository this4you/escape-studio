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
}

export interface PriceItem {
  title: string;
  note?: string;
  prices: { label?: string; value: string }[];
}

export const directions: Direction[] = [
  { name: 'Йога-терапія', photo: 'yoga-therapy', icon: 'lotus', description: 'Мʼяка практика для спини, суглобів і спокійної голови.' },
  { name: 'Пілатес', photo: 'pilates', icon: 'mat', description: 'Сильний центр, рівна постава та контроль кожного руху.' },
  { name: 'Стретчинг', photo: 'stretching', icon: 'heart', description: 'Гнучкість, легкість і розслаблені мʼязи.' },
  { name: 'High Heels', photo: 'high-heels', icon: 'heel', description: 'Танець на підборах: пластика, впевненість, жіночність.' },
  { name: 'Степ-аеробіка', photo: 'step-aerobics', icon: 'dumbbell', description: 'Енергійне кардіо під музику на степ-платформі.' },
  { name: 'Body Intensive', photo: 'body-intensive', icon: 'bolt', description: 'Функціональне тренування на все тіло та витривалість.' },
  { name: 'Relax Stretching', photo: 'relax-stretching', icon: 'sparkle', description: 'Повільна розтяжка для відновлення після дня.' },
  { name: 'Дитячі танці', photo: 'kids-dance', icon: 'people', description: 'Сучасні танці для дітей від 3 років і підлітків.' },
];

export const adultSchedule: ScheduleGroup[] = [
  {
    days: 'Пн · Ср',
    tone: 'pink',
    rows: [
      { time: '09:00', title: 'Pilates', trainer: 'Олександра' },
      { time: '18:00', title: 'Степ-аеробіка', trainer: 'Поліна' },
      { time: '19:00', title: 'High Heels', trainer: 'Олександра' },
      { time: '20:00', title: 'Relax Stretching', trainer: 'Ірина' },
    ],
  },
  {
    days: 'Вт · Чт · Пт',
    tone: 'gold',
    rows: [
      { time: '18:00', title: 'Йога з елементами терапії', note: 'тільки Вт та Пт', trainer: 'Валерія' },
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
      { time: '16:00', title: 'Сучасні танці', note: 'середня група', trainer: 'Поліна' },
      { time: '17:00', title: 'Молодша група', note: '3–6 років', trainer: 'Ірина' },
      { time: 'На канікулах', title: 'Сучасні танці', note: 'старша група', trainer: 'Поліна' },
    ],
  },
];

export const trainers: Trainer[] = [
  { name: 'Олександра', photo: 'trainer-oleksandra', specialties: ['High Heels', 'Стретчинг'] },
  { name: 'Ірина', photo: 'trainer-iryna', specialties: ['Йога', 'Пілатес', 'Relax'] },
  { name: 'Поліна', photo: 'trainer-polina', specialties: ['Фітнес', 'Степ-аеробіка'] },
  { name: 'Валерія', photo: 'trainer-valeriia', specialties: ['Дитячі групи', 'Танці', 'Стретчинг'] },
];

export const aboutFeatures: { label: string; icon: IconName }[] = [
  { label: 'Сучасний зал', icon: 'lotus' },
  { label: 'Професійні тренери', icon: 'heart' },
  { label: 'Дружня атмосфера', icon: 'sparkle' },
  { label: 'Для дітей та дорослих', icon: 'people' },
];

export interface PriceGroup {
  label: string;
  // Rendered as up to two columns.
  columns: PriceItem[][];
}

export const prices: PriceGroup[] = [
  {
    label: 'Для дорослих',
    columns: [
      [
        { title: 'Разове заняття', prices: [{ value: '400 грн' }] },
        { title: 'Абонемент 4 заняття', prices: [{ value: '1100 грн' }] },
        { title: 'Абонемент 8 занять', prices: [{ value: '2000 грн' }] },
      ],
      [
        {
          title: 'High Heels, Йога-терапія, Степ-аеробіка',
          note: '2 рази на тиждень',
          prices: [{ value: '1950 грн/міс' }],
        },
        {
          title: 'Body Intensive + Stretching, Пілатес, Relax Stretching',
          prices: [
            { label: '2 рази на тиждень', value: '1750 грн/міс' },
            { label: '3 рази на тиждень', value: '1999 грн/міс' },
          ],
        },
        { title: 'Кінезіотейпування', note: '1 зона', prices: [{ value: '300 грн' }] },
      ],
    ],
  },
  {
    label: 'Для дітей',
    columns: [
      [
        { title: 'Дитяча група 3–6 р.', note: '2 рази на тиждень', prices: [{ value: '1450 грн/міс' }] },
        { title: 'Modern Dance 7+ та 10+', note: '2 рази на тиждень', prices: [{ value: '1750 грн/міс' }] },
      ],
    ],
  },
];
