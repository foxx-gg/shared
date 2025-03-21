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
    dbPrefix: 'dm',
    type: 'label',
    label: 'deathmatch',
    image: 'dm',
    children: [
      {
        type: 'item',
        id: 'dm',
        label: 'regular',
      },
      {
        type: 'item',
        id: 'hdm',
        label: 'hard',
      },
      {
        type: 'item',
        id: 'os',
        label: 'oldschool',
      },
      {
        type: 'item',
        id: 'xdm',
        label: 'mixed',
      }
    ]
  },
  {
    dbPrefix: 'dd',
    type: 'label',
    label: 'derby',
    image: 'dd',
    children: [
      {
        type: 'item',
        id: 'dd',
        label: 'regular',
      },
      {
        type: 'item',
        id: 'pdd',
        label: 'power',
      },
    ]
  },
  {
    dbPrefix: 'race',
    type: 'label',
    label: 'race',
    image: 'race',
    children: [
      {
        type: 'item',
        id: 'race1',
        label: 'alpha',
      },
      {
        type: 'item',
        id: 'race2',
        label: 'classic',
      },
      {
        type: 'item',
        id: 'race3',
        label: 'vanilla',
      },
    ]
  },
  {
    type: 'item',
    id: 'cw',
    label: 'clanwars',
    image: 'cw',
    noMaps: true
  },
  {
    type: 'item',
    dbPrefix: 'hu',
    id: 'hu',
    label: 'hunter',
    image: 'hu',
  },
  {
    type: 'label',
    label: 'playground',
    image: 'gr',
    noMaps: true,
    children: [
      {
        type: 'item',
        id: 'gr',
        label: 'garage',
      },
      {
        type: 'item',
        id: 'fr',
        label: 'freeroam',
      },
    ]
  },
  {
    type: 'item',
    id: 'tr',
    label: 'training',
    image: 'tr'
  },
  {
    type: 'label',
    dbPrefix: 'sh',
    label: 'shooter',
    image: 'sh',
    children: [
      {
        type: 'item',
        id: 'sh1',
        label: 'regular',
      },
      {
        type: 'item',
        id: 'sh2',
        label: 'jump',
      },
      {
        type: 'item',
        id: 'ctf1',
        label: 'ctf',
      },
      {
        type: 'item',
        id: 'ctf2',
        label: 'power ctf',
      },
    ]
  },
  {
    type: 'item',
    id: 'turf',
    label: 'turf war',
    image: 'turf'
  },
  {
    type: 'item',
    id: 'mg',
    label: 'minigames',
    image: 'mg'
  },
];

export const arenaExists = (id: string) => {
  return arenas.some((arena) => {
    if (arena.type === 'label') {
      return arena.children.some((_arena) => _arena.id === id);
    }
    return arena.id === id;
  });
};