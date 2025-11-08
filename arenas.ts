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
  categories: LeaderboardCategory[];
}

export const leaderboards: Leaderboard[] = [
  {
    name: 'General',
    categories: [
      {
        name: 'Level',
        fields: ['level', 'exp']
      },
      {
        name: 'Money',
        fields: ['money']
      },
      {
        name: 'Playtime',
        fields: ['playTime']
      },
      {
        name: 'Maps Bought',
        fields: ['mapsBought']
      },
      {
        name: 'Events Played',
        fields: ['eventsPlayed']
      },
      {
        name: 'Events Won',
        fields: ['eventsWon']
      }
    ]
  },
  {
    name: 'Deathmatch',
    categories: [
      {
        name: 'EXP',
        fields: ['dm.exp']
      },
      {
        name: 'Playtime',
        fields: ['dm.playTime']
      },
      {
        name: 'Maps Won',
        fields: ['dm.mapsWon']
      },
      {
        name: 'Maps Played',
        fields: ['dm.mapsPlayed']
      },
      {
        name: 'Hunters Reached',
        fields: ['dm.huntersReached']
      },
    ]
  },
  {
    name: 'Derby',
    categories: [
      {
        name: 'EXP',
        fields: ['exp']
      },
      {
        name: 'Playtime',
        fields: ['dd.playTime']
      },
      {
        name: 'Maps Won',
        fields: ['dd.mapsWon']
      },
      {
        name: 'Maps Played',
        fields: ['dd.mapsPlayed']
      },
      {
        name: 'Total Kills',
        fields: ['dd.totalKills']
      },
      {
        name: 'Total Damage',
        fields: ['dd.totalDamage']
      },
    ]
  },
  {
    name: 'Race',
    categories: [
      {
        name: 'EXP',
        fields: ['race.exp']
      },
      {
        name: 'Playtime',
        fields: ['race.playTime']
      },
      {
        name: 'Maps Won',
        fields: ['race.mapsWon']
      },
      {
        name: 'Maps Played',
        fields: ['race.mapsPlayed']
      },
      {
        name: 'Maps Finished',
        fields: ['race.mapsFinished']
      },
    ]
  },
  {
    name: 'Shooter',
    categories: [
      {
        name: 'EXP',
        fields: ['shooter.exp']
      },
      {
        name: 'playTime',
        fields: ['shooter.playTime']
      },
      {
        name: 'Maps Won',
        fields: ['shooter.mapsWon']
      },
      {
        name: 'Maps Played',
        fields: ['shooter.mapsPlayed']
      },
      {
        name: 'Total Kills',
        fields: ['shooter.totalKills']
      },
      {
        name: 'Damage Given',
        fields: ['shooter.damageGiven']
      },
      {
        name: 'Damage Taken',
        fields: ['shooter.damageTaken']
      },
    ]
  },
  {
    name: 'Hunter',
    categories: [
      {
        name: 'EXP',
        fields: ['hunter.exp']
      },
      {
        name: 'Playtime',
        fields: ['hunter.playTime']
      },
      {
        name: 'Maps Won',
        fields: ['hunter.mapsWon']
      },
      {
        name: 'Maps Played',
        fields: ['hunter.mapsPlayed']
      },
      {
        name: 'Total Kills',
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