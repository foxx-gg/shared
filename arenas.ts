type Arena = {
  dbPrefix?: string;
  type: 'label' | 'item';
  id?: string;
  label: string;
  image?: string;
  children?: Arena[];
  noMaps?: boolean;
}

type LeaderboardCategory = {
  name: string;
  fields: string[];
}

type Leaderboard = {
  name: string;
  icon?: string;
  categories: LeaderboardCategory[];
}

export const leaderboards: Leaderboard[] = [
  {
    name: 'global',
    icon: 'chart-simple',
    categories: [
      {
        name: 'level',
        fields: ['level', 'exp']
      },
      {
        name: 'money',
        fields: ['money']
      },
      {
        name: 'playtime',
        fields: ['playTime']
      },
      {
        name: 'maps bought',
        fields: ['mapsBought']
      },
      {
        name: 'events played',
        fields: ['eventsPlayed']
      },
      {
        name: 'events won',
        fields: ['eventsWon']
      }
    ]
  },
  {
    name: 'deathmatch',
    icon: 'car',
    categories: [
      {
        name: 'exp',
        fields: ['dm.exp']
      },
      {
        name: 'playtime',
        fields: ['dm.playTime']
      },
      {
        name: 'maps won',
        fields: ['dm.mapsWon']
      },
      {
        name: 'maps played',
        fields: ['dm.mapsPlayed']
      },
      {
        name: 'hunters reached',
        fields: ['dm.huntersReached']
      },
    ]
  },
  {
    name: 'derby',
    icon: 'car-crash',
    categories: [
      {
        name: 'exp',
        fields: ['exp']
      },
      {
        name: 'playtime',
        fields: ['dd.playTime']
      },
      {
        name: 'maps won',
        fields: ['dd.mapsWon']
      },
      {
        name: 'maps played',
        fields: ['dd.mapsPlayed']
      },
      {
        name: 'total kills',
        fields: ['dd.totalKills']
      },
      {
        name: 'total damage',
        fields: ['dd.totalDamage']
      },
    ]
  },
  {
    name: 'race',
    icon: 'cars',
    categories: [
      {
        name: 'exp',
        fields: ['race.exp']
      },
      {
        name: 'playtime',
        fields: ['race.playTime']
      },
      {
        name: 'maps won',
        fields: ['race.mapsWon']
      },
      {
        name: 'maps played',
        fields: ['race.mapsPlayed']
      },
      {
        name: 'maps finished',
        fields: ['race.mapsFinished']
      },
    ]
  },
  {
    name: 'shooter',
    icon: 'rocket',
    categories: [
      {
        name: 'exp',
        fields: ['shooter.exp']
      },
      {
        name: 'playtime',
        fields: ['shooter.playTime']
      },
      {
        name: 'maps won',
        fields: ['shooter.mapsWon']
      },
      {
        name: 'maps played',
        fields: ['shooter.mapsPlayed']
      },
      {
        name: 'total kills',
        fields: ['shooter.totalKills']
      },
      {
        name: 'damage given',
        fields: ['shooter.damageGiven']
      },
      {
        name: 'damage taken',
        fields: ['shooter.damageTaken']
      },
    ]
  },
  {
    name: 'hunter',
    icon: 'helicopter',
    categories: [
      {
        name: 'exp',
        fields: ['hunter.exp']
      },
      {
        name: 'playtime',
        fields: ['hunter.playTime']
      },
      {
        name: 'maps Won',
        fields: ['hunter.mapsWon']
      },
      {
        name: 'maps played',
        fields: ['hunter.mapsPlayed']
      },
      {
        name: 'total kills',
        fields: ['hunter.totalKills']
      },
    ]
  }
];

export const arenas: Arena[] = [
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
        noMaps: true
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
  return arenas.some((arena: Arena) => {
    if (arena.type === 'label') {
      return arena.children?.some((_arena) => _arena.id === id);
    }
    return arena.id === id;
  });
};

export const getArenaByID = (id: string) => {
  for (const arena of arenas.values()) {
    const index = arena.children?.findIndex(x => x.id === id);
    if (arena?.id === id) {
      return arena;
    }
    else if (arena.children && index !== -1) {
      return { ...arena.children[index], image: arena.image, label: `${arena.label}: ${arena.children[index].label}` };
    }
  }
}