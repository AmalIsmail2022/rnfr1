import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddEmployeeHook from "./../../hook/add-employee-hook";

const AddUser = () => {
  const [
    name,
    img,
    age,
    gender,
    email,
    phone,
    position,
    rating,
    setName,
    setImg,
    setAge,
    setGender,
    setEmail,
    setPhone,
    setPosition,
    setRating,
    addNew,
    onimagechange,
  ] = AddEmployeeHook();
 
  return (
    <Form onSubmit={addNew}>
      <ToastContainer
        position="top-center"
        className="toast-container"
        toastClassName="dark-toast"
        toastStyle={{ backgroundColor: "#fff" }}
      />
      <Container>
        <div className="viewcont1">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label for="upload-photo">
              <img src={img} height="140px" style={{ cursor: "pointer" }} />
            </Form.Label>
            <Form.Control
              type="file"
              name="photo"
              onChange={onimagechange}
              id="upload-photo"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="btndel" variant="info">
            Add Employee
          </Button>
        </div>
      </Container>
    </Form>
  );
};

export default AddUser;
