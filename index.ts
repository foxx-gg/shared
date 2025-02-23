export enum UserFlags {
  NONE = 0,
  IS_ACTIVATED = 1 << 0,
  IS_PREMIUM = 1 << 1
}

export enum Permissions {
  NONE = 0,

  MANAGE_CLANS = 1 << 10,
  MANAGE_MAPS = 1 << 11,
  MANAGE_USERS = 1 << 12,

  ADMINISTRATOR = ~0
}

export const CUSTOM_TITLE_MAX_CHARS = 16;

export const arenas = [
  {
    dbLabel: 'dm',
    name: 'deathmatch',
    children: [
      {
        id: 'dm',
        name: 'regular',
        image: 'dm.webp'
      },
      {
        id: 'hdm',
        name: 'hard',
        image: 'dm.webp'
      },
      {
        id: 'os',
        name: 'oldschool',
        image: 'dm.webp',
      },
      {
        id: 'xdm',
        name: 'xdm',
        image: 'dm.webp',
      }
    ]
  },
  {
    dbLabel: 'dd',
    name: 'derby',
    children: [
      {
        id: 'dd',
        name: 'regular',
        image: 'dd.webp'
      },
      {
        id: 'pdd',
        name: 'power',
        image: 'dd.webp'
      },
    ]
  },
  {
    dbLabel: 'race',
    name: 'race',
    children: [
      {
        id: 'race1',
        name: 'alpha',
        image: 'race.webp'
      },
      {
        id: 'race2',
        name: 'classic',
        image: 'race.webp'
      },
      {
        id: 'race3',
        name: 'vanilla',
        image: 'race.webp'
      },
    ]
  },
  {
    id: 'cw',
    name: 'clanwars',
    image: 'cw.webp'
  },
  {
    dbLabel: 'hu',
    id: 'hu',
    name: 'hunter',
    image: 'hu.webp'
  },
  {
    name: 'playground',
    children: [
      {
        id: 'gr',
        name: 'garage',
        image: 'gr.webp'
      },
      {
        id: 'fr',
        name: 'freeroam',
        image: 'gr.webp'
      },
    ]
  },
  {
    id: 'tr',
    name: 'training',
    image: 'tr.webp'
  },
  {
    dbLabel: 'sh',
    name: 'shooter',
    children: [
      {
        id: 'sh1',
        name: 'regular',
        image: 'sh.webp'
      },
      {
        id: 'sh2',
        name: 'jump',
        image: 'sh.webp'
      },
      {
        id: 'ctf1',
        name: 'ctf',
        image: 'sh.webp'
      },
      {
        id: 'ctf2',
        name: 'power ctf',
        image: 'sh.webp'
      },
    ]
  },
  {
    id: 'turf',
    name: 'turf war',
    image: 'turf.webp'
  },
  {
    id: 'mg',
    name: 'minigames',
    image: 'mg.webp'
  },
];