import React from "react";
import { useSelector } from 'react-redux'
import { Switch, Route, useLocation  } from "react-router-dom";
import Profile from '../domain/profile'
import Forms from '../domain/forms'
import Login from '../domain/login'
import type {AllState} from '../components/types'
import { Redirect } from 'react-router-dom'
// import { profileStore } from '../redux/profileReducer';

// declare module 'react-redux' {
//     interface DefaultRootState extends profileStore { };
// }

export default function Router() {
    const location = useLocation();
    console.log(location.pathname)
    //const dispatch = useDistatch()
    //dispatch({type:ACTIONTYPE})
    const userToken = useSelector((state:AllState) => state.profile.userToken)

    if ((userToken == '') && (location.pathname != '/login-join' )){
        console.log('adawdawd');
        return(<Redirect to="/login-join" />)
    } else {
        
        return (
            <Switch>
                <Route path="/profile/">
                    {console.log('profile page')}
                    <Profile />
                </Route>
              
                <Route path="/login-join">
                {console.log('login page')}
                    <Login />
                </Route>


                <Route path="/">
                    {console.log('/ page')}
                    <Forms />
                </Route>
            </Switch>
        );
    }
    
}
