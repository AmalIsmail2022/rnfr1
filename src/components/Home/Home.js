// import React, { useState } from 'react';
// import { Button, Col, Container, Modal, Row, Table} from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { deleteEmployee } from '../../redux/actions/employeeAction';
// import { Link, useParams } from 'react-router-dom';
// import ViewEmployeeDetHook from '../../hook/view-employee-det-hook';
// import notify from '../../components/utility/useNotify'
// import { ToastContainer } from 'react-toastify';


// const Home = ({employee, index}) => {


     
   
//  const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//  const dispatch = useDispatch();

// const handelDelete = async () => {

//     await dispatch(deleteEmployee(employee._id))

//     setShow(false);
//             notify("Employee has been successfully deleted", "success")

// setTimeout(() => {
//                        window.location.reload();
//                     }, 1500);

  
//     }
//     console.log(employee.image)
//     // const url = "http://localhost:5555/employees/";
//     return (
//       <>
//         <Container>
//           <Modal show={show} onHide={handleClose}>
//             <Modal.Header>
//               <Modal.Title>
//                 {" "}
//                 <div className="font">Confirm Delete </div>
//               </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <div className="font">
//                 {" "}
//                 Are you sure you want to delete this employee?{" "}
//               </div>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button
//                 className="font btn-new1"
//                 variant="success"
//                 onClick={handleClose}
//               >
//                 Cancel
//               </Button>
//               <Button className="font " variant="dark" onClick={handelDelete}>
//                 Delete
//               </Button>
//             </Modal.Footer>
//           </Modal>
//           <ToastContainer
//             position="top-center"
//             className="toast-container"
//             toastClassName="dark-toast"
//             toastStyle={{ backgroundColor: "#fff" }}
//           />
//           <Table striped="columns">
//             <thead>
//               <tr>
//                 <th style={{ width: "10%" }}>No.</th>
//                 <th style={{ width: "10%" }}>Name</th>
//                 <th style={{ width: "10%" }}>Image</th>
//                 <th style={{ width: "10%" }}>Age</th>
//                 <th style={{ width: "20%" }}>Email</th>
//                 <th style={{ width: "10%" }}>Phone</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{index + 1}</td>
//                 <td>{employee.name}</td>
//                 <td>
                  
//                   <img style={{width:"100px", borderRadius:"50%"}} alt="zcv" src={employee.image} />
//                 </td>
//                 <td>{employee.age}</td>
//                 <td>{employee.email}</td>
//                 <td>{employee.phone}</td>
//                 <td>
//                   <Link to={`/employees/${employee._id}`}>
//                     <Button className="main-btn ">View</Button>
//                   </Link>
//                   <Link to={`/edituser/${employee._id}`}>
//                     <Button className="main-btn ">Edit</Button>
//                   </Link>
//                   <Button onClick={handleShow} className="main-btn ">
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             </tbody>
//           </Table>
//         </Container>
//       </>
//     );
// }




// export default Home;
