import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import edit from "../../images/edit.png";
import ProfileHook from "../../hook/profile-hook";
import { ToastContainer } from "react-toastify";
const AdminProfile = () => {
  const [
    user,
    show,
    handleClose,
    handleShow,
    handelSubmit,
    name,
    email,
    phone,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    changePassword,
    oldPassword,
    newPassword,
    confirmNewPassword,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmPass,
  ] = ProfileHook();

  return (
    <div>
      <div
        className="admin-content-text sub-tile d-flex justify-content-center  cart-item-body1"
        style={{ textTransform: "capitalize" }}
      >
        {user.name} Profile Page
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">Updating Your Personal Information</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form font d-block px-3"
            placeholder="User Name"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            type="email"
            className="input-form font d-block mt-3 px-3"
            placeholder="Email"
          />
          <input
            value={phone}
            onChange={onChangePhone}
            type="phone"
            className="input-form font d-block mt-3 px-3"
            placeholder="Phone No."
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="font" variant="dark" onClick={handelSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="user-address-card my-3 px-2" style={{ height: "100%" }}>
        <Row className="d-flex justify-content-between pt-1 ">
          <Col xs="7" className="d-flex">
            <div className="p-2 cat-text1">User Name:</div>
            <div
              className="p-2 cat-text"
              style={{ textTransform: "capitalize" }}
            >
              {user.name}
            </div>
          </Col>
          <Col xs="5" className="d-flex justify-content-end">
            <div onClick={handleShow} className="d-flex mx-2 my-2">
              <img
                alt=""
                className="ms-1 mx-2"
                src={edit}
                height="25px"
                width="25px"
                style={{ cursor: "pointer" }}
              />
              <p className=" cat-text me-3" style={{ cursor: "pointer" }}>
                {" "}
                Edit
              </p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2 cat-text1">Phone No. :</div>
            <div className="p-2 cat-text">{user.phone}</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2 cat-text1">Email :</div>
            <div className="p-2 cat-text">{user.email}</div>
          </Col>
        </Row>

        <div className="admin-content-text sub-tile justify-content-center my-4 cart-item-body6 low ">
          Change Your Password
        </div>
        <Row className="  d-flex py-1 ">
          <Col xs="12" className="">
            <input
              value={oldPassword}
              onChange={onChangeOldPass}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="Enter Old Password"
            />
            <input
              value={newPassword}
              onChange={onChangeNewPass}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="Enter New Password"
            />
            <input
              value={confirmNewPassword}
              onChange={onChangeConfirmPass}
              type="password"
              className="input-form d-block mt-3 px-3 my-3"
              placeholder="Confirm New Password"
            />
            <div className="d-flex justify-content-end py-2 ">
              <button
                onClick={changePassword}
                className="btn-save d-inline btn-new my-4"
              >
                {" "}
                Save
              </button>
            </div>
          </Col>
        </Row>
      </div>
      <ToastContainer
        position="top-center"
        className="toast-container"
        toastClassName="dark-toast"
        toastStyle={{ backgroundColor: "#f6edd8" }}
      />
    </div>
  );
};

export default AdminProfile;
