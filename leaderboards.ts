
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
        name: 'maps won',
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