import { combineReducers } from 'redux'
import employeesReducer from './employeesReducer'
import authReducer from "./authReducer";
export default combineReducers({
  employeesReducer: employeesReducer,
  authReducer: authReducer,
});




