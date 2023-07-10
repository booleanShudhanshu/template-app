import { Auth } from "../../interface/redux";

const auth: Auth = {
  authenticated: false,
  access_token: null,
  refresh_token: null,
};

export default auth;
