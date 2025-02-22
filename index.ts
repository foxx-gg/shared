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