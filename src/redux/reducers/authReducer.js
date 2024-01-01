import {
  createNewUser,
  loginNewUser,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PASSWORD,
  GET_CURERNT_USER,
} from "../types/types";

const initialValue = {
  createuser: [],
  loginuser: [],
  loading: true,
};
const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case createNewUser:
      return {
        ...state,
        createuser: action.data,
        loading: false,
      };
    case loginNewUser:
      return {
        ...state,
        loginuser: action.data,
        loading: false,
      };
    case GET_CURERNT_USER:
      return {
        ...state,
        currentUser: action.data,
      };

    case UPDATE_USER_PROFILE:
      return {
        ...state,
        userProfile: action.data,
      };
    case UPDATE_USER_PASSWORD:
      return {
        ...state,
        userChangePassword: action.data,
      };
    default:
      return state;
  }
};
export default authReducer;
