import type {profileStore} from '../components/types'

let initialState: profileStore = {
    appIsEnable: true,
    userName:'',
    userToken:'',
    userTokenLiveTime:600,
    userTokenLiveStart:'',
    userRefreshToken:'',
    userFieldsEnable:false
}

const profileReducer = (state = initialState, action: any) => {
    
    //console.log(state)
    return state

}

export default profileReducer