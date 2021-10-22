export type profileStore = {
    appIsEnable: boolean,
    userName:string,
    userToken:string,
    userTokenLiveTime:number,
    userTokenLiveStart:string,
    userRefreshToken:string
    userFieldsEnable:boolean
 }


export type AllState = {
    profile: profileStore
} 