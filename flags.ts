export enum UserFlags {
  NONE = 0,
  IS_ACTIVATED = 1 << 0,
  IS_PREMIUM = 1 << 1,
  IS_BANNED = 1 << 2
}

export enum Permissions {
  NONE = 0,

  ACCESS_ACP = 1 << 10,
  MANAGE_CLANS = 1 << 11,
  MANAGE_MAPS = 1 << 12,
  MANAGE_USERS = 1 << 13,

  ADMINISTRATOR = ~0
}
