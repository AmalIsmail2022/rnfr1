import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ViewEmployeeDetHook from '../../hook/view-employee-det-hook';
import { Button, Container, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../redux/actions/employeeAction';
import notify from '../../components/utility/useNotify'
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ViewUser = () => {

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
  


     const { id } = useParams()
    const [item] = ViewEmployeeDetHook(id)
    const dispatch = useDispatch();
      const navigate = useNavigate()
const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const handelDelete = async () => {

        await dispatch(deleteEmployee(item._id))
        setShow(false);
        notify("Employee has been successfully deleted", "success")

setTimeout(() => {
                         navigate('/');
                    }, 1500);
    }

    return (
      <Container style={{ minHeight: "670px" }}>
        <ToastContainer
          position="top-center"
          className="toast-container"
          toastClassName="dark-toast"
          toastStyle={{ backgroundColor: "#fff" }}
        />
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
        <div className="viewcont">
          <h1
            className="maintitleh1"
            style={{
              color: "black",
              marginLeft: "10px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <span style={{ color: "#929292" }}> {item.name}</span> Profile
          </h1>
          <h1
            style={{
              backgroundColor: "#eee",
              paddingLeft: "10px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Name :
            <span
              style={{
                color: "#787c82",
                fontWeight: "normal",
                paddingLeft: "20px",
              }}
            >
              {" "}
              {item.name}
            </span>{" "}
          </h1>
          <h1
            style={{
              backgroundColor: "#eee",
              paddingLeft: "10px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Image :
            <span
              style={{
                color: "#787c82",
                paddingLeft: "20px",
                fontWeight: "normal",
              }}
            >
              {" "}
              <img
                style={{ width: "100px", borderRadius: "50%" }}
                alt="zcv"
                src={item.image}
              />
            </span>{" "}
          </h1>
          <h1
            style={{
              backgroundColor: "#eee",
              paddingLeft: "10px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Age :
            <span
              style={{
                color: "#787c82",
                paddingLeft: "50px",
                fontWeight: "normal",
              }}
            >
              {" "}
              {item.age}
            </span>{" "}
          </h1>
          <h1
            style={{
              backgroundColor: "#eee",
              paddingLeft: "10px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Gen. :
            <span
              style={{
                color: "#787c82",
                paddingLeft: "50px",
                fontWeight: "normal",
              }}
            >
              {item.gender}
            </span>
          </h1>
          <h1
            style={{
              backgroundColor: "#eee",
              paddingLeft: "10px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Email :{" "}
            <span
              style={{
                color: "#787c82",
                paddingLeft: "30px",
                fontWeight: "normal",
              }}
            >
              {" "}
              {item.email}
            </span>
          </h1>
          <h1
            style={{
              backgroundColor: "#eee",
              paddingLeft: "10px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Phone :{" "}
            <span
              style={{
                color: "#787c82",
                paddingLeft: "20px",
                fontWeight: "normal",
              }}
            >
              {" "}
              {item.phone}
            </span>
          </h1>
          <h1
            style={{
              backgroundColor: "#eee",
              paddingLeft: "10px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Pos. :{" "}
            <span
              style={{
                color: "#787c82",
                paddingLeft: "50px",
                fontWeight: "normal",
              }}
            >
              {" "}
              {item.position}
            </span>
          </h1>

          {/* <!-- START OURSKILLS --> */}
          <div class="skills">
            <div class="container">
              <div class="ourskills">
                <div class="prog-holder">
                  <h5>ANNUAL RATING</h5>
                  <div class="prog">
                    <span
                      style={{ width: `${item.rating}%` }}
                      data-progress={item.rating + "%"}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END OURSKILLS --> */}

          {user.role == "admin" ? (
            <Button className="btndel" variant="info" onClick={handleShow}>
              Delete
            </Button>
          ) : (
            <Button className="btndel" variant="info">
              Delete <i class="fa-solid fa-user-slash"></i>
            </Button>
          )}
        </div>
      </Container>
    );
}

export default ViewUser;
