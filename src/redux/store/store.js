import { createStore , applyMiddleware} from 'redux'
import rootReducer from '../reducers/rootReducer'
import {thunk} from 'redux-thunk'
const initialState=[]
// export const store = createStore(employeesReducer, applyMiddleware(thunk))
const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
export default store