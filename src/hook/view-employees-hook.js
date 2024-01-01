import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllEmployees,
  getAllEmployeesPage,
  getAllEmployeesSearch
} from "../redux/actions/employeeAction";
const ViewEmployeesHook = () => {
      let limit = 4;
   const dispatch = useDispatch()
  useEffect(() => {

  dispatch(getAllEmployees(`limit=${limit}`))
}, [])
  
  const dataEmployees = useSelector(state => state.employeesReducer.employees)
  const loading = useSelector(state => state.employeesReducer.loading)

// let pagination = [];
// try {
//   if (dataEmployees.paginationResult)
//     pagination = dataEmployees.paginationResult.numberOfPages;
//   else pagination = [];
// } catch (e) {}

// const onPress = async (page) => {

//   await dispatch(
//     getAllEmployees(
//       `limit=${limit}&page=${page}`
//     )
//   );
// };
     let pageCount = 0;
     try {
       if (dataEmployees.paginationResult)
         pageCount = dataEmployees.paginationResult.numberOfPages;
     } catch (e) {}
     //when press pagination
     const getPage = (page) => {
       dispatch(getAllEmployeesPage(page, limit));
  
  };
  

  let items = [];
  if (dataEmployees) {
    items = dataEmployees;
  } else {
    items = [];
  }
   
return [items, loading, pageCount, getPage];
  
}

export default ViewEmployeesHook;
