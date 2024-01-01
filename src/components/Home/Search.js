import React, { useEffect, useState } from 'react';
import EmployeeHeader from './EmployeeHeader';
import Home1 from './Home1';
import { Button, Container, Form, Row } from 'react-bootstrap';
import Pagination from "../utility/pagination";
import SearchEmployeesKook from '../../hook/search-employees-kook';
import NavSearchHook from '../../hook/nav-search-hook';
import SideIcon from '../utility/sideIcon';

const Search = () => {
  const [items, loading, pagination, onPress, getEMPLOYEE, results] =
    SearchEmployeesKook();

  
  
 const [searchword, setSearchword] = useState("");
  const [searchval, setsearchval] = useState(false);
let word = "";
if (localStorage.getItem("searchWord") != null)
  word = localStorage.getItem("searchWord");
 


 const OnChangeSearch = (e) => {
   localStorage.setItem("searchWord", e.target.value);
   setSearchword(e.target.value);


 };


 
 
     
 
  const filtersearch = async () => {
    try {
      if ("searchWord" != "") {
        window.location.reload();
        setsearchval(true);
        await OnChangeSearch(searchval);
        setSearchword("");
        setsearchval(false);

        const path = window.location.pathname;
        if (path != "#/search") {
          window.location.href = "#/search";
        }
       
      }
    } catch {}
  };
  
  useEffect(() => {

  setTimeout(() => {
    getEMPLOYEE();
  },);
}, [searchval]);
  const remove = async (searchword) => {
    try {
       if ('searchWord' != "") {
      setsearchval(true);
              await OnChangeSearch(searchword);

       setSearchword("");
    }
    } catch {
      
    }
   
   
  };



 if (pagination) var pageCount = pagination;
 else pageCount = 0;
  return (
    <div>
      {/* <EmployeeHeader /> */}
      <div className=" d-flex justify-content-center">
        <Container>
          <SideIcon onClick={getEMPLOYEE} />
          <h1
            className="maintitleh1"
            style={{ color: "black", marginLeft: "30px", marginTop: "150px" }}
          >
            <span style={{ color: "#777" }}> {items.length}</span> Employees
            Found
          </h1>
          <Form className="d-flex search" style={{ marginLeft: "30px" }}>
            <Form.Control
              value={word}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={OnChangeSearch}
            />
            <button className="remo" onClick={remove}></button>
            <i class="fa-solid fa-magnifying-glass"></i>
            <Button
              onClick={() => filtersearch(searchval)}
              className="search"
              variant="info"
            >
              Search
            </Button>
          </Form>
          <Row className="d-flex justify-content-center py-2">
            {loading === false ? (
              items.map((employee, index) => {
                return <Home1 key={index} employee={employee} index={index} />;
              })
            ) : (
              // <Spinner animation="border" variant="success" />
              <section class="dots-container">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </section>
            )}
          </Row>
          {pageCount ? (
            <Pagination pageCount={pageCount} onPress={onPress} />
          ) : null}
          {/* <Pagination pageCount={pageCount} onPress={onPress} /> */}
        </Container>
      </div>
    </div>
  );
}

export default Search;
