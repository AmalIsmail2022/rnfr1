import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import SearchEmployeesKook from './search-employees-kook';

const NavSearchHook = () => {
    const [items, loading, pageCount, getPage, getEMPLOYEE, results] =
      SearchEmployeesKook();
    const [searchword, setSearchword] = useState("");
    const OnChangeSearch = (e) => {
        localStorage.setItem("searchWord", e.target.value);
        setSearchword(e.target.value);



        const path = window.location.pathname;
        if (path != "#/search") {
            window.location.href = "#/search"
      
        };
    }

    useEffect(() => {
      setTimeout(() => {
        getEMPLOYEE();
      }, 1000);
    }, [searchword]);
  return [OnChangeSearch, searchword, setSearchword];
     

}

export default NavSearchHook;
