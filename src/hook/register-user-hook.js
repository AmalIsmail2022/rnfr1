import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import avatar from "../images/user-avatar.png";
import notify from "../components/utility/useNotify";
import { createUser } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const RegisterUserHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [img, setImg] = useState(avatar);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfPassword = (e) => {
    setConfPassword(e.target.value);
  };
  // const onChangeImg = (e) => {
  //     setImg(e.target.value);
  // };

//   const onimagechange = (e) => {
//     if (e.target.files[0]) {
//       setImg(URL.createObjectURL(e.target.files[0]));
//       setSelectedFile(e.target.files[0]);
//     }
//   };

  const validation = () => {
    if (name === "" || email === "" || password === "" || confPassword === "") {
      notify("Please enter valid input", "warn");
      return;
    }
  };

  const response = useSelector((state) => state.authReducer.createuser);

  const OnSubmit = async () => {
    validation();
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("image", selectedFile);
    // formData.append("email", email);
    // formData.append("password", password);
    // formData.append("confPassword", confPassword);

    setLoading(true);

      await dispatch(
        createUser({
          name,
          email,
          password,
        //   passwordConfirm: passwordConfirm,
        })
      );
    setName("");
    setImg(avatar);
    setEmail("");
    setPassword("");
    setConfPassword("");
    // notify("New employee has been added successfully", "success");
    setLoading(false);

    // setTimeout(() => {
    //   window.location.reload();
    // }, 1500);
  };

  useEffect(() => {
    if (loading === false) {
        if (response) {
          console.log(response);
         if (response.data.token) {
           localStorage.setItem("token", response.data.token);
           notify("Account has been added successfully", "success");
           setTimeout(() => {
             navigate("/login");
           }, 2000);
            }
            //  if (response.data.errors) {
            //    if (response.data.errors[0].msg === "E-mail already in use")
            //      notify("This email is already in use ", "error");
            //  }
            //  if (response.data.errors) {
            //    if (response.data.errors[0].msg === "accept only egypt phone numbers")
            //      notify("Phone number should be 11 digits", "error");
            //  }

            //  if (response.data.errors) {
            //    if (response.data.errors[0].msg === "must be at least 6 chars")
            //      notify("Password should be at least 6 characters", "error");
            //  }

        } else {
             notify("Error in regisetration", "error");
      }
    }
  }, [loading]);

  return [
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
    // onimagechange,
  ];
};

export default RegisterUserHook;
