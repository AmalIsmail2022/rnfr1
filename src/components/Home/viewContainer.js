import React, { useEffect, useState } from 'react';
import Home1 from './Home1';
import ViewEmployeesHook from '../../hook/view-employees-hook';
import { Button, Container, Form, Row, Spinner, Table } from 'react-bootstrap';
import Pagination from '../utility/pagination';
import NavSearchHook from '../../hook/nav-search-hook';
import SearchEmployeesKook from '../../hook/search-employees-kook';

const ViewContainer = () => {
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
 const path = window.location.pathname;
 if (path != "#/search") {
   window.location.href = "#/search";
 }

        window.location.reload();
        setsearchval(true);
        await OnChangeSearch(searchval);
        setSearchword("");
        setsearchval(false);

       
      }
    } catch {}
  };

  useEffect(() => {
    setTimeout(() => {
      getEMPLOYEE();
    });
  }, [searchval]);

 if (pagination) var pageCount = pagination;
 else pageCount = 0;
  // const [items, loading, pageCount, getPage] = ViewEmployeesHook();

  // const [OnChangeSearch, searchword] = NavSearchHook();
  // let word = "";
  // if (localStorage.getItem("searchWord") != null)
  //   word = localStorage.getItem("searchWord");

 const remove = async (searchword) => {
   try {
     if ("searchWord" != "") {
       setsearchval(true);
       await OnChangeSearch(searchword);

       setSearchword("");
     }
   } catch {}
 };

  return (
    <div className=" d-flex justify-content-center">
      <Container style={{ minHeight: "670px" }}>
        <h1
          className="maintitleh1"
          style={{ color: "black", marginLeft: "30px", marginTop: "150px" }}
        >
          <span style={{ color: "#777" }}> {items.length}</span> Employees Found
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

        {/* {pageCount>1 ? (
            <Pagination pageCount={pageCount} getPage={getPage} />
          ) : null} */}

        <Pagination pageCount={pageCount} onPress={onPress} />

        {/* <Pagination pageCount={pageCount} onPress={getPage} /> */}
      </Container>
    </div>
  );
}

export default ViewContainer;
