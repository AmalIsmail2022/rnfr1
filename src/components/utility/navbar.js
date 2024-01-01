import React, { useEffect, useState } from "react";
import { Container, Form, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import NavSearchHook from "../../hook/nav-search-hook";

const Navy = () => {
  const [user, setUser] = useState("");
  const [admin, setAdmin] = useState("");

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  useEffect(() => {
    if (localStorage.getItem("admin") != null)
      setUser(JSON.parse(localStorage.getItem("admin")));
  }, []);

 

 
  return (
    <div>
      <Navbar className="nav" expand="lg" style={{ height: "246px" }}>
        <Container>
          <Navbar.Brand>
            <a href="#/">
              <h1 style={{ color: "#0dcaf0", zIndex: "12" }}>CRUD SYSTEM</h1>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 papa"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="d-flex">
                {user != "" ? (
                  <Nav.Link
                    href="#/home"
                    refresh="true"
                    className="nav-link"
                    style={{ marginRight: "25px", marginLeft: "25px" }}
                  >
                    Home
                  </Nav.Link>
                ) : (
                  <Nav.Link
                    href="#/"
                    refresh="true"
                    className="nav-link"
                    style={{ marginRight: "25px", marginLeft: "25px" }}
                  >
                    Home
                  </Nav.Link>
                )}

                {user != "" ? (
                  <NavDropdown
                    className="dropdown1 ndrop"
                    title={user.name}
                    id="basic-nav-dropdown"
                    style={{
                      textTransform: "capitalize",
                      background: "none",
                      inset: " 0px 0px 0px 0px",
                    }}
                  >
                    {user.role === "admin" ? (
                      <NavDropdown.Item >
                        Admin Page <i class="fa-solid fa-user-slash"></i>
                      </NavDropdown.Item>
                    ) : (
                      <NavDropdown.Item >
                        Profile <i class="fa-solid fa-user-slash"></i>
                      </NavDropdown.Item>
                    )}
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut} href="/">
                      LogOut{" "}
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    href="#/login"
                    className="fw-bold"
                    style={{ color: "#b0664d" }}
                  >
                    Login{" "}
                  </Nav.Link>
                )}
              </div>
              {/* <Nav.Link href="#/signup" refresh="true" className="nav-link">
                Sign Up
              </Nav.Link>
              <Nav.Link href="#/login" refresh="true" className="nav-link">
                login
              </Nav.Link> */}
              <div className="addemp">
                {user.role == "admin" ? (
                  <Nav.Link href="#/add" className="nav-link navlink">
                    <Button Button variant="info" className="bton">
                      Add Employee
                    </Button>
                  </Nav.Link>
                ) : (
                  <Nav.Link href="" className="nav-link navlink">
                    <Button Button variant="info" className="bton">
                      Add Employee <i class="fa-solid fa-user-slash"></i>
                    </Button>
                  </Nav.Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navy;
