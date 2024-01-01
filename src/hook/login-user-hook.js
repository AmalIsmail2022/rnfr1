import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../components/utility/useNotify";
import { loginUser } from "../redux/actions/authAction";

const LoginUserHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
const onChangeEmail = (e) => {
  setEmail(e.target.value);
};
const onChangePassword = (e) => {
  setPassword(e.target.value);
};
const onSubmit = async () => {
  setIsPress(true);
  setLoading(true);
  await dispatch(
    loginUser({
      email,
      password,
    })
  );

  setLoading(false);
  setIsPress(false);
    };
        const res = useSelector((state) => state.authReducer.loginuser);

     useEffect(() => {
       if (loading === false) {
         if (res) {
           console.log(res);
           if (res.data.token) {
             localStorage.setItem("token", res.data.token);
             localStorage.setItem("user", JSON.stringify(res.data.data));
             notify("Logged in successfully", "success");
             setTimeout(() => {
               window.location.href = "#/home";
               window.location.reload();
             }, 1500);
           } else {
             localStorage.removeItem("token");
               localStorage.removeItem("user");
            notify("Incorrect email or password", "error");
           }

        //    if (res.data.message === "Incorrect email or password") {
        //      localStorage.removeItem("token");
        //      localStorage.removeItem("user");
        //      notify("Incorrect email or password", "error");
        //    }
           setLoading(true);
         }
       }
     }, [loading]);

  return [
    email,
    password,
    loading,
    isPress,
    onChangeEmail,
    onChangePassword,
    onSubmit,
  ]; 
}
export default LoginUserHook;

