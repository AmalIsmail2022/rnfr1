import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import notify from '../components/utility/useNotify'
import { ToastContainer, toast } from 'react-toastify';
import { editOneEmployee, getOneEmployee} from '../redux/actions/employeeAction'
import { useNavigate } from 'react-router-dom';
import avatar from "../images/user-avatar.png";

const EditEmployeeHook = (id) => {
     const dispatch = useDispatch()
useEffect(() => {
    const run = async () => {
        setLoadingData(true)
        await dispatch(getOneEmployee(id))
        setLoadingData(false)

}
 run()
}, [])
    
    const itemem = useSelector(state => state.employeesReducer.employee)

// console.log(itemem.name)
    // console.log("item:"+ itemem)
    
    const navigate = useNavigate()
    const [nname, setnName] = useState('');
    const [nimage, setnImage] = useState([]);
  const [nage, setnAge] = useState('');
      const [ngender, setnGender] = useState("");

    const [nemail, setnEmail] = useState('');
  const [nphone, setnPhone] = useState('');
  const [nposition, setnPosition] = useState("");
     const [nrating, setnRating] = useState("");

    const [loading, setLoading] = useState(true)
    const [loadingData, setLoadingData] = useState(true)
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
   

            if (itemem) {
                setnName(itemem.name)
                setnImage(itemem.image);
              setnAge(itemem.age)
                   setnGender(itemem.gender);
                setnEmail(itemem.email)
                setnPhone(itemem.phone)
              setnPosition(itemem.position);
               setnRating(itemem.rating);
              
            }
        
        // console.log("item:"+itemem.name)
}, [itemem])
const onChangeName = (event) => {
        event.persist();
        setnName(event.target.value)
    }
const onChangeImage = (event) => {
  event.persist();

      setSelectedFile(event.target.files[0]);
      setnImage(URL.createObjectURL(event.target.files[0]));
   
};
const onChangeAge = (event) => {
        event.persist();
        setnAge(event.target.value)
  }
  const onChangeGender = (event) => {
    event.persist();
    setnGender(event.target.value);
  };
const onChangeEmail = (event) => {
        event.persist();
        setnEmail(event.target.value)
    }
const onChangePhone = (event) => {
        event.persist();
        setnPhone(event.target.value)
    }
const onChangePosition = (event) => {
  event.persist();
  setnPosition(event.target.value);
  };
  
const onChangeRating = (event) => {
  event.persist();
  setnRating(event.target.value);
};

    const editEmp = async (e) => {
      e.preventDefault();
      console.log("edit");
      if (
        nname === "" ||
        setSelectedFile === null ||
        nage === "" ||
        ngender === "" ||
        nemail === "" ||
        nphone === "" ||
        nposition === "" ||
        nrating === ""
        
      ) {
        notify("Please enter valid input", "warn");
        return;
      }
      //   const formdata =
      //     {
      //       name: nname,
      //         image: nimage,
      // age:nage,
      // email: nemail,
      // phone: nphone
        // }
            const formData = new FormData();

            formData.append("name", nname);
            formData.append("image", selectedFile);
            formData.append("age", nage);
            formData.append("gender", ngender);
            formData.append("email", nemail);
            formData.append("phone", nphone);
            formData.append("position", nposition);
            formData.append("rating", nrating);
           
        
      setLoading(true);
      await dispatch(editOneEmployee(id, formData));
      setLoading(false);
    }

            const items = useSelector(state => state.employeesReducer.editEmployees)
    
   
const khalas = () => {
  if (loading === false ) {
    setnName("");
    setnImage(avatar);
    setnAge("");
    setnGender("");
    setnEmail("");
    setnPhone("");
    setnPosition("");
    setnRating("");
    notify("Data updated successfully", "success");
    setTimeout(() => {
      navigate("/");
    }, 1500);
      if (loading===true && !items) {
         
    
      notify("Problem in updating", "error");
    
      }
  }
    
};

//     const khalas = () => {
//         if (loading === false) {
             
//             setnName('')
//             setnImage(avatar)
//                 setnAge('')
//                 setnEmail('')
//             setnPhone('')
                    
//                   if (items) {
          
//              notify("Data updated successfully", "success")
//                 setTimeout(() => {
//                      navigate('/')
//                 }, 1500);
//                  } else {
//                      notify("Problem in updating", "error")          
// }        
//                  } 
//     }
    useEffect(() => {
       
          khalas()
        
        
    }, [loading])
    
    
    
    return [
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
    ];
}

export default EditEmployeeHook;
