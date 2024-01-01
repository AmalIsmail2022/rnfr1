import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Dropdown, Modal, NavDropdown, Row, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../redux/actions/employeeAction";
import { Link, useParams } from "react-router-dom";
import ViewEmployeeDetHook from "../../hook/view-employee-det-hook";
import notify from "../../components/utility/useNotify";
import { ToastContainer } from "react-toastify";
import SearchEmployeesKook from "../../hook/search-employees-kook";
import Pagination from "../utility/pagination";


const Home1 = ({ employee, index }) => {




const [user, setUser] = useState("");
const [admin, setAdmin] = useState("");

   useEffect(() => {
     if (localStorage.getItem("user") != null)
       setUser(JSON.parse(localStorage.getItem("user")));
   }, []);
   useEffect(() => {
     if (localStorage.getItem("admin") != null)
       setUser(JSON.parse(localStorage.getItem("admin")));
   }, []); 



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handelDelete = async () => {
  


    await dispatch(deleteEmployee(employee._id));

    setShow(false);
    notify("Employee has been successfully deleted", "success");

    setTimeout(() => {



      window.location.reload();
    }, 1500);
  };
  console.log(employee.image);
  // const url = "http://localhost:5555/employees/";

 


  return (
    <>
      <Col xs="12" sm="6" md="4" lg="3" className="d-flex ">
        <Container>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>
                {" "}
                <div className="font">Confirm Delete </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="font">
                {" "}
                Are you sure you want to delete this employee?{" "}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="font btn-new1"
                variant="success"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button className="font " variant="dark" onClick={handelDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
          <ToastContainer
            position="top-center"
            className="toast-container"
            toastClassName="dark-toast"
            toastStyle={{ backgroundColor: "#fff" }}
          />
          <div className="cardrow">
            <div
              className=" py-2 my-5 cart-item-body1 "
              style={{
                width: "90%",
                height: "320px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "",
                position: "relative",
              }}
            >
              <Row className="d-flex justify-content-center px-2 ">
                <Col className=" d-flex justify-content-end">
                  <div
                    className="item-delete-edit new-t1 drop"
                    style={{ color: "#f6edd8" }}
                  >
                    {user.role == "admin" ? (
                      <NavDropdown class="dropdown ">
                        <Link to={`/employees/${employee._id}`}>
                          <li className="dropdown-item">View</li>
                        </Link>
                        <Dropdown.Divider />
                        <Link to={`/edituser/${employee._id}`}>
                          <li className="dropdown-item">Update</li>
                        </Link>
                        <Dropdown.Divider />

                        <li
                          onClick={handleShow}
                          style={{ cursor: "pointer" }}
                          className="dropdown-item"
                        >
                          Delete
                        </li>
                      </NavDropdown>
                    ) : (
                      <NavDropdown class="dropdown ">
                        <Link to={`/employees/${employee._id}`}>
                          <li className="dropdown-item">View</li>
                        </Link>
                        <Dropdown.Divider />
                        <Link to="">
                          <li className="dropdown-item">
                            Update <i class="fa-solid fa-user-slash"></i>
                          </li>
                        </Link>
                        <Dropdown.Divider />

                        <li
                          style={{ cursor: "pointer" }}
                          className="dropdown-item"
                        >
                          Delete <i class="fa-solid fa-user-slash"></i>
                        </li>
                      </NavDropdown>
                    )}
                  </div>
                  <Link
                    // to={`/admin/editproduct/${item._id}`}
                    style={{ textDecoration: "none" }}
                  ></Link>
                </Col>
              </Row>
              <Link
                to={`/employees/${employee._id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card-r">
                  <Card.Img
                    style={{ backgroundColor: "white", borderRadius: "50%" }}
                    src={employee.image}
                  />
                </div>
                <Card.Body>
                  <div className="d-flex justify-content-center cardtitle">
                    <div style={{ color: "black", marginBottom: "3px" }}>
                      {employee.name}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center cardtitle1">
                    <div
                      style={{
                        color: "#cfd0cf",
                        marginBottom: "13px",
                        fontSize: "12px",
                      }}
                    >
                      {employee.email}
                    </div>
                  </div>

                  <div className="d-flex justify-content-center cardtitle">
                    <div
                    // style={{
                    //   color: "black",
                    //   position:"absolute",
                    //   backgroundColor: "#eee",
                    //   width: "100%",
                    //   height: "50px",
                    //   margin: "0",
                    //   padding: "0",
                    //   borderRadius: "0 0 8px 8px",
                    //   borderTop: "2px solid #e4e4e4",
                    // }}
                    >
                      <h6
                        className="d-flex justify-content-center"
                        style={{
                          marginTop: "15px",
                          color: "#777",
                          zIndex: "6",
                          textAlign: "center",
                          fontSize: "14px",
                        }}
                      >
                        {employee.position}
                      </h6>
                    </div>
                  </div>
                </Card.Body>
              </Link>
            </div>
          </div>
         
        </Container>
      </Col>
    </>
  );
};

export default Home1;
