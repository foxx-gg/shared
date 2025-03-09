export enum UserFlags {
  NONE = 0,
  IS_ACTIVATED = 1 << 0,
  IS_PREMIUM = 1 << 1
}

export enum Permissions {
  NONE = 0,

  ACCESS_ACP = 1 << 10,
  MANAGE_CLANS = 1 << 11,
  MANAGE_MAPS = 1 << 12,
  MANAGE_USERS = 1 << 13,

  ADMINISTRATOR = ~0
}

export const CUSTOM_TITLE_MAX_CHARS = 16;

export const arenas = [
  {
    dbLabel: 'dm',
    name: 'deathmatch',
    image: 'dm.webp',
    children: [
      {
        id: 'dm',
        name: 'regular',
      },
      {
        id: 'hdm',
        name: 'hard',
      },
      {
        id: 'os',
        name: 'oldschool',
      },
      {
        id: 'xdm',
        name: 'xdm',
      }
    ]
  },
  {
    dbLabel: 'dd',
    name: 'derby',
    image: 'dd.webp',
    children: [
      {
        id: 'dd',
        name: 'regular',
      },
      {
        id: 'pdd',
        name: 'power',
      },
    ]
  },
  {
    dbLabel: 'race',
    name: 'race',
    image: 'race.webp',
    children: [
      {
        id: 'race1',
        name: 'alpha',
      },
      {
        id: 'race2',
        name: 'classic',
      },
      {
        id: 'race3',
        name: 'vanilla',
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
    image: 'gr.webp',
    children: [
      {
        id: 'gr',
        name: 'garage',
      },
      {
        id: 'fr',
        name: 'freeroam',
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
    image: 'sh.webp',
    children: [
      {
        id: 'sh1',
        name: 'regular',
      },
      {
        id: 'sh2',
        name: 'jump',
      },
      {
        id: 'ctf1',
        name: 'ctf',
      },
      {
        id: 'ctf2',
        name: 'power ctf',
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