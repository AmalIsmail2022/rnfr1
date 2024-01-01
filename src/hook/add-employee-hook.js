import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import notify from '../components/utility/useNotify'
import { ToastContainer, toast } from 'react-toastify';
import {addEmployee} from '../redux/actions/employeeAction'
import avatar from "../images/user-avatar.png";

const AddEmployeeHook = () => {
     const dispatch = useDispatch()
const [name, setName] = useState('');
  const [age, setAge] = useState('');
    const [gender, setGender] = useState("");
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState("");
   const [rating, setRating] = useState("");
  const [img, setImg] = useState(avatar);
  const [selectedFile, setSelectedFile] = useState(null);

   const onimagechange = (e) => {
     if (e.target.files[0]) {
       setImg(URL.createObjectURL(e.target.files[0]));
       setSelectedFile(e.target.files[0]);
     }
   };
  const addNew = async (e) => {
    if (
      name === "" ||
      selectedFile === null ||
      age === "" ||
      gender === "" ||
      email === "" ||
      phone === "" ||
      position === "" ||
      rating === ""
    ) {
      notify("Please enter valid input", "warn");
      return;
    }
    e.preventDefault();
    const formData = new FormData()
    formData.append("name", name)
    formData.append("image", selectedFile);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position", position);
    formData.append("rating", rating);
    
    
    // const formData = {
    // name:name,
    // age:age,
    // email: email,
    // phone: phone
    // }
    await dispatch(addEmployee(formData));
    setName("");
    setImg(avatar)
    setAge("");
    setGender("");
    setEmail("");
    setPhone("");
    setPosition("");
    setRating("");
    notify("New employee has been added successfully", "success");

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
    

    return [
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
      onimagechange
    ];
}

export default AddEmployeeHook;
