export type profileStore = {
    appIsEnable: boolean
    
    /*token: string | undefined,
    userId: number | undefined,
    userName: string | undefined,
    userLastName: string | undefined,
    userMiddleName: string | undefined,
    myMessages: any, 
    catigories: Catigories | undefined,*/
 }

let initialState: profileStore = {
    appIsEnable: true
}

const profileReducer = (state = initialState, action: any) => {
    return state
}
export default profileReducer