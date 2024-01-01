import React from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginUserHook from "../../hook/login-user-hook";
const Login = () => {
  const [
    email,
    password,
    loading,
    isPress,
    onChangeEmail,
    onChangePassword,
    onSubmit,
  ] = LoginUserHook()
  return (
    <div className="viewcont2">
      <ToastContainer
        position="top-center"
        className="toast-container"
        toastClassName="dark-toast"
        toastStyle={{ backgroundColor: "#fff" }}
      />
      <Container style={{ minHeight: "568px" }} className="">
        <Row className="py-5 d-flex justify-content-center login-bg">
          <Col className="d-flex flex-column ">
            <label className="mx-auto title-login">
              {" "}
              <span
                className="maintitleh1"
                style={{ padding: "1px 10px", borderRadius: "10px" }}
              >
                Login
              </span>{" "}
            </label>
            <input
              value={email}
              onChange={onChangeEmail}
              placeholder="Email"
              type="email"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              value={password}
              onChange={onChangePassword}
              placeholder="Password"
              type="password"
              className="user-input text-center mx-auto"
            />
            <Button
              className="btndel"
              variant="info"
              onClick={onSubmit}
              style={{ width: "100px", margin: "auto", marginTop: "20px" }}
            >
              Login
            </Button>
            <label className="mx-auto my-4 new-t1" style={{ color: "#552e27" }}>
              Dont Have Account?{" "}
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="login-un">
                  Signup
                </span>
              </Link>
            </label>

            <label className="mx-auto my-4"></label>

            {isPress === true ? (
              loading === true ? (
                <Spinner
                  animation="border"
                  role="status"
                  variant="info"
                ></Spinner>
              ) : null
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
