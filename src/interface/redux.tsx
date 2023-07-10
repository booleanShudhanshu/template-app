export interface Auth {
  authenticated: boolean;
  access_token: string | null;
  refresh_token: string | null;
}
