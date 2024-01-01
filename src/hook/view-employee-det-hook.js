import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOneEmployee } from '../redux/actions/employeeAction';
const ViewEmployeeDetHook = (id) => {
        const dispatch = useDispatch()
useEffect(() => {

  dispatch(getOneEmployee(id))
}, [])
    const dataoneonlyEmployee = useSelector(state => state.employeesReducer.employee)
    let item = []
    if (dataoneonlyEmployee) {
        item = dataoneonlyEmployee
    }
    else {
        item = []
    }
        console.log("item:" + item.name)

    return [item]
}

export default ViewEmployeeDetHook;
