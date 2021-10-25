export type profileStore = {
    appIsEnable: boolean,
    apiCsrf:string,
    userName:string,
    userToken:string,
    userTokenLiveTime:number,
    userTokenLiveStart:string,
    userRefreshToken:string
    userFieldsEnable:boolean,
    errorConnect:boolean,
 }


export type AllState = {
    profile: profileStore
} 