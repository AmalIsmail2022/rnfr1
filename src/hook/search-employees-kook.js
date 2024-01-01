import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllEmployees,
  getAllEmployeesPage,
  getAllEmployeesSearch,
} from "../redux/actions/employeeAction";

const SearchEmployeesKook = () => {
  let limit = 20;
    const dispatch = useDispatch();
    const getEMPLOYEE = async () => {
      getStorge();
      sortData();
        await dispatch(getAllEmployeesSearch(`sort=${sort}&limit=${limit}&keyword=${word}`));
        
    };
    useEffect(() => {
      getEMPLOYEE('');
    }, []);
    





  const dataEmployees = useSelector(
    (state) => state.employeesReducer.employees
  );
  const loading = useSelector((state) => state.employeesReducer.loading);
  

  let items = [];

  try {
    if (dataEmployees) items = dataEmployees;
    else items = [];
  } catch (e) {}

  let results = 0;
  try {
    if (items) results = items;
    else results = 0;
  } catch (e) {}  
    
    let pagination = [];
    try {
      if (dataEmployees.paginationResult)
        pagination = dataEmployees.paginationResult.numberOfPages;
      else pagination = [];
  } catch (e) { }
  

let word = "";
const getStorge = () => {
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");
};
    const onPress = async (page) => {
      getStorge();
  
      await dispatch(
        getAllEmployeesSearch(
          `limit=${limit}&page=${page}&keyword=${word}`
        )
      );
    };
    
    let sortType = "",
      sort;
    
    const sortData = () => {
      if (localStorage.getItem("sortType") !== null) {
        sortType = localStorage.getItem("sortType");
      } else {
        sortType = "";
      }

      if (sortType === "old age") sort = "-age";
      else if (sortType === "youg age") sort = "age";
      else if (sortType === "") sort = "";
      else if (sortType === "high rating") sort = "-rating";
      else if (sortType === "low rating") sort = "rating";

    };


  return [items, loading, pagination, onPress, getEMPLOYEE, results];
};

export default SearchEmployeesKook;
