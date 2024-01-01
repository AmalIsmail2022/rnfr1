import {
  createNewUser,
  loginNewUser,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PASSWORD,
  GET_CURERNT_USER,
} from "../types/types";
import { useInsertData1 } from "../../hooks/useInsertData";
import  useEditDataWithToken from "../../hooks/useEditDataWithToken";
import useGetDataToken from "../../hooks/useGetDataToken";

export const createUser = (data) => async (dispatch) => {
  try {
    const res = await useInsertData1("/api/v1/auth/signup", data);
    dispatch({
      type: createNewUser,
      data: res,
      loading: true,
    });

  } catch (e) {
    dispatch({
      type: createNewUser,
      data: e.res,
    });
  }
};
export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await useInsertData1("/api/v1/auth/login", data);
    dispatch({
      type: loginNewUser,
      data: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: loginNewUser,
      data: e.res,
    });
  }
};

export const getLoggedUser = () => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/users/getme`);
    dispatch({
      type: GET_CURERNT_USER,
      data: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_CURERNT_USER,
      data: e.res,
    });
  }
};

export const updateUserProfileData = (body) => async (dispatch) => {
  try {
    const res = await useEditDataWithToken(`/api/v1/users/updateme`, body);
    console.log(res);
    dispatch({
      type: UPDATE_USER_PROFILE,
      data: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_PROFILE,
      data: e.res,
    });
  }
};

//update  user password
export const updateUserPassword = (body) => async (dispatch) => {
  try {
    const res = await useEditDataWithToken(
      `/api/v1/users/changemypassword`,
      body
    );
    console.log(res);
    dispatch({
      type: UPDATE_USER_PASSWORD,
      data: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_PASSWORD,
      data: e.res,
    });
  }
};