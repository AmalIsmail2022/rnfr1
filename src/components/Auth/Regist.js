import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RegisterUserHook from "../../hook/register-user-hook";
const Register = () => {
 const [
   name,
   email,
   password,
   confPassword,
   img,
   loading,
   onChangeName,
   onChangeEmail,
   onChangePassword,
   onChangeConfPassword,
   OnSubmit,
//    onimagechange,
 ] = RegisterUserHook();
  return (
    <div className="log-bg viewcont2">
      <Container style={{ minHeight: "568px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search login-bg">
          <Col sm="12" className="d-flex flex-column ">
            <span
              className="maintitleh1"
              style={{
                borderRadius: "10px",
                textAlign: "center",
                padding: "2px 18px",
                margin: "auto",
              }}
            >
              Create Account
            </span>
            {/* <label for="upload-photo">
              <img src={img} height="140px" style={{ cursor: "pointer" }} />
            </label>
            <input
              type="file"
              name="photo"
              //   onChange={onimagechange}
              id="upload-photo"
            /> */}
            <input
              value={name}
              onChange={onChangeName}
              placeholder="Name"
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              value={email}
              onChange={onChangeEmail}
              placeholder="Email"
              type="email"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              value={password}
              onChange={onChangePassword}
              placeholder="Password"
              type="password"
              className="user-input text-center mt-3 mx-auto"
            />
            <input
              value={confPassword}
              onChange={onChangeConfPassword}
              placeholder="Confirm Password"
              type="password"
              className="user-input text-center mt-3 mx-auto"
            />
            <Button
              className="btndel"
              variant="info"
              onClick={OnSubmit}
              style={{ width: "100px", margin: "auto", marginTop: "20px" }}
            >
              Signup{" "}
            </Button>
            <label className="mx-auto my-4 new-t1" style={{ color: "#552e27" }}>
              Already Have Account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="login-un">
                  Login
                </span>
              </Link>
            </label>
          </Col>
        </Row>

        <ToastContainer
          position="top-center"
          className="toast-container"
          toastClassName="dark-toast"
          toastStyle={{ backgroundColor: "#fff" }}
        />
      </Container>
    </div>
  );
};

export default Register;
