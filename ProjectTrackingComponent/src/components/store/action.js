import { LOGIN, LOGOUT } from "./type";

export const Login = () => {
  return {
    type: LOGIN,
  };
};

export const Logout = () => {
  return {
    type: LOGOUT,
  };
};
