export const CUSTOM_TITLE_MAX_CHARS = 16;

export enum AuditLogEvent {
  USER_SIGN_UP = 1,
  USER_SIGN_IN,
  USER_PASSWORD_CHANGE,
  USER_FORGOT_PASSWORD,
  USER_UPDATE,
  USER_DELETE,

  MAP_CREATE = 20,
  MAP_UPDATE,
  MAP_DELETE,
  MAP_TOPTIME_CREATE,
  MAP_TOPTIME_DELETE,

  CLAN_CREATE = 40,
  CLAN_UPDATE,
  CLAN_DELETE,
  CLAN_MEMBER_ADD,
  CLAN_MEMBER_LEAVE,
  CLAN_MEMBER_KICK,
  CLAN_MEMBER_UPDATE,

  BLOG_POST_CREATE = 60,

  PLAYER_JOIN = 80,
  PLAYER_LEAVE
}
