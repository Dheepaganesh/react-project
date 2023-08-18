import { LOGIN, LOGOUT } from "./type";

const initialstate = {
  user: false,
};

const UserReducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: false,
      };

    default:
      return state;
  }
};

export default UserReducer;
