import type { profileStore } from '../components/types'

import { SET_CSRF,LOGIN_UPDATE,ERROR_NOT_CONECTED } from '../types';



let initialState: profileStore = {
    appIsEnable: true,
    apiCsrf: '',
    userName: '',
    userToken: '',
    userTokenLiveTime: 600,
    userTokenLiveStart: '',
    userRefreshToken: '',
    userFieldsEnable: false,
    errorConnect:false
}

const profileReducer = (state = initialState, action: any) => {

    console.log(action)
    console.log(state)
    switch (action.type) {
        case SET_CSRF: {
            return { ...state, apiCsrf: action.csrf }
        }
        case ERROR_NOT_CONECTED: {
            return { ...state, errorConnect: action.connect }
        }
        case LOGIN_UPDATE: {
            console.log(action.response)
            return { ...state }
        }
        default:
            return state;
    }

}




export default profileReducer