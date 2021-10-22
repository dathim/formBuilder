import React from "react";
import { useSelector } from 'react-redux'
import { Switch, Route } from "react-router-dom";
import Profile from '../domain/profile'
import Forms from '../domain/forms'
import type {AllState} from '../components/types'
import { Redirect } from 'react-router-dom'
// import { profileStore } from '../redux/profileReducer';

// declare module 'react-redux' {
//     interface DefaultRootState extends profileStore { };
// }

export default function Router() {

    //const dispatch = useDistatch()
    //dispatch({type:ACTIONTYPE})
    const userToken = useSelector((state:AllState) => state.profile.userToken)

    if (userToken == ''){
        return(<Redirect to="/login" />)
    } else {
        return (
            <Switch>
                <Route path="/profile/">
                    <Profile />
                </Route>
                <Route path="/">
                    <Forms />
                </Route>
            </Switch>
        );
    }
    
}
