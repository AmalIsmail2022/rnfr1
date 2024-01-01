
import { Button, Container, Form } from 'react-bootstrap';

import { ToastContainer } from 'react-toastify';
import EditEmployeeHook from '../../hook/edit-employee-hook';
import { useParams } from 'react-router-dom';
const url = "http://localhost:5555/employees/";
const EditUser = () => {
     const { id } = useParams();
 const [
   nname,
   nimage,
   nage,
   ngender,
   nemail,
   nphone,
   nposition,
   nrating,
   setnName,
   setnImage,
   setnAge,
   setnGender,
   setnEmail,
   setnPhone,
   setnPosition,
   setnRating,
   editEmp,
   onChangeName,
   onChangeAge,
   onChangeGender,
   onChangeEmail,
   onChangePhone,
   onChangePosition,
   onChangeRating,
   onChangeImage,
 ] = EditEmployeeHook(id);
  return (
    <Form className="d-flex" onSubmit={editEmp}>
      <ToastContainer
        position="top-center"
        className="toast-container"
        toastClassName="dark-toast"
        toastStyle={{ backgroundColor: "#fff" }}
      />
      <Container className="edpapa">
        <div className="viewcont1">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label for="upload-photo">
              <img
                style={{
                  width: "100px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                src={nimage}
              />
            </Form.Label>
            <input
              type="file"
              // value={url + nimage}
              name="photo"
              onChange={onChangeImage}
              id="upload-photo"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="ed"
              type="text"
              placeholder="Enter Name"
              value={nname}
              onChange={onChangeName}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Age"
              value={nage}
              onChange={onChangeAge}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Gender"
              value={ngender}
              onChange={onChangeGender}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email"
              value={nemail}
              onChange={onChangeEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone"
              value={nphone}
              onChange={onChangePhone}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Position"
              value={nposition}
              onChange={onChangePosition}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Rating"
              value={nrating}
              onChange={onChangeRating}
            />
          </Form.Group>
          <Button type="submit" className="btndel" variant="info">
            Edit Employee
          </Button>
        </div>
      </Container>
    </Form>
  );
}

export default EditUser;
