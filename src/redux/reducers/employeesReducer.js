import { allEmployees, oneEmployee, createNewEmployee, deleteoneEmployee, editoneemployee, getError } from '../types/types'


const initialValue = {
    employees: [],
    employee: [],
    deleteEmployees: [],
    editEmployees: [],
    loading: true,
}
const employeesReducer = (state=initialValue, action) => {
    switch (action.type)
    {
        case allEmployees:
            return {
                ...state,
                employees: action.data,
                loading:false
            }
         case oneEmployee:
            return {
                employee: action.data,
                loading:false
            }
         case createNewEmployee:
            return {
                employees: action.data,
                loading:false
            }
        case deleteoneEmployee:
            return {
                ...state,
                deleteEmployees: action.data,
                loading:false
            }
        case editoneemployee:
            return {
              ...state,
                editEmployees: action.data,
                loading:false
            }
        case getError:
            return {
                employees: action.data,
                loading:true,
            }
        default:
            return state
    }
    
}
export default employeesReducer