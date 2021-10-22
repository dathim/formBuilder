import { combineReducers, createStore, applyMiddleware } from "redux"
import thunkMiddelWare from 'redux-thunk';
import fieldsReducer from './fieldsReducer'
import formsReducer from './formsReducer'
import profileReducer  from './profileReducer'
import responsesReducer from './responsesReducer'

 
let reducers = combineReducers({
    fields: fieldsReducer,
    forms: formsReducer,
    profile: profileReducer,
    responses: responsesReducer 
})

let store = createStore(reducers,applyMiddleware(thunkMiddelWare))
console.log('123')
export default store