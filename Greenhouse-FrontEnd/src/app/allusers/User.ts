export class User {
  username: string;
  password: string;
  role: string;
  enabled: boolean;
  authorities: { authority: string }[];
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;

  constructor(
    username: string,
    password: string,
    role: string,
    enabled: boolean,
    authorities: { authority: string }[],
    accountNonExpired: boolean,
    credentialsNonExpired: boolean,
    accountNonLocked: boolean
  ) {
    this.username = username;
    this.password = password;
    this.role = role;
    this.enabled = enabled;
    this.authorities = authorities;
    this.accountNonExpired = accountNonExpired;
    this.credentialsNonExpired = credentialsNonExpired;
    this.accountNonLocked = accountNonLocked;
  }
}
