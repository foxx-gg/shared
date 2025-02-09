export enum UserFlags {
  NONE = 0,
  IS_ACTIVATED = 1 << 0,
}

export enum Permissions {
  NONE = 0,
  MANAGE_CLAN = 1 << 0,
  MANAGE_MAPS = 1 << 1,

  ADMINISTRATOR = 1 << 16
}
