import React, { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { Switch, Route, useLocation } from "react-router-dom";
import Profile from '../domain/profile'
import Forms from '../domain/forms'
import Login from '../domain/login'
import type { AllState } from '../components/types'
import { Redirect } from 'react-router-dom'



import { loadCsrfThunk } from '../actions';


// import { profileStore } from '../redux/profileReducer';

// declare module 'react-redux' {
//     interface DefaultRootState extends profileStore { };
// }

/*

 <button onClick={() => dispatch({ type: 'SET_CSRF' })}>
                    Increment counter
                </button>*/

                

export default function Router() {
    const location = useLocation();
   // console.log(location.pathname)

    const dispatch = useDispatch()
    
    //console.log('useEffect' . dispatch)
  
    useEffect(() => {   
        // Обновляем заголовок документа с помощью API браузера
        console.log('useEffect')
        dispatch(loadCsrfThunk())   
        //dispatch({ type: 'SET_CSRF' }) 

        //dispatch(allActions.userActions.setUser(user))
    });

    const userToken = useSelector((state: AllState) => state.profile.userToken)

    if ((userToken == '') && (location.pathname != '/login-join')) {
        console.log('adawdawd');
        return (<Redirect to="/login-join" />)
    } else {

        return (
            <Switch>
                
                <Route path="/profile/">
                
                    <Profile />
                </Route>

                <Route path="/login-join">
               
                    <Login />
                </Route>


                <Route path="/">
                  
                    <Forms />
                </Route>
            </Switch>
        );
    }

}
