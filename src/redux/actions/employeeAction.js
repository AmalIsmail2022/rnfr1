import { allEmployees, oneEmployee, createNewEmployee, deleteoneEmployee, editoneemployee, getError } from '../types/types'
import useGetData from '../../hooks/useGetData'
import {useInsertDataWithImage} from "../../hooks/useInsertData";
import useDeleteData from '../../hooks/useDeleteData'
import useEditData from '../../hooks/useEditData'
export const getAllEmployees = (limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/employees?limit=${limit}`);
    dispatch({
      type: allEmployees,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: getError,
      data: "error" + e,
    });
  }
};

export const getAllEmployeesPage = (page, limit) => async (dispatch) => {
  try {
    const res = await useGetData(
      `/api/v1/employees?limit=${limit}&page=${page}`
    );
    dispatch({
      type: allEmployees,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: getError,
      data: "Error " + e,
    });
  }
};
export const getAllEmployeesSearch = (queryString) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/employees?${queryString}`);
    dispatch({
      type: allEmployees,
      data: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: allEmployees,
      data: e.res,
    });
  }
};

export const getOneEmployee =(id)=> async(dispatch) => {

   try {
          const res = await useGetData(`/api/v1/employees/${id}`)
       dispatch( {
            type: oneEmployee,
            data: res
       })
       
    
   } catch (e){
        dispatch( {
            type: getError,
            data: "error" +e
       })
    } 
}
export const addEmployee =(formData)=> async(dispatch) => {

   try {
          const res = await useInsertDataWithImage(
            "/api/v1/employees",
            formData
          );
       dispatch( {
            type: createNewEmployee,
            data: res,
            loading: true
       })
       
    
   } catch (e){
        dispatch( {
            type: getError,
            data: "error" +e
       })
    } 
}

export const deleteEmployee =(id)=> async(dispatch) => {

   try {
          const res = await useDeleteData(`/api/v1/employees/${id}`)
       dispatch( {
            type: deleteoneEmployee,
            data: res,
            loading: true
       })
       
    
   } catch (e){
        dispatch( {
            type: getError,
            data: "error" +e
       })
    } 
}
export const editOneEmployee =(id, data)=> async(dispatch) => {
     
   try {
          const res = await useEditData(`/api/v1/employees/${id}`, data)
       dispatch( {
            type: editoneemployee,
            data: res,
            loading: true
       })
      
    
   } catch (e){
        dispatch( {
            type: getError,
            data: "error" +e
       })
    } 
}