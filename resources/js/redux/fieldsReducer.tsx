export type fieldsStore = {
    appIsEnable: boolean
    
    /*token: string | undefined,
    userId: number | undefined,
    userName: string | undefined,
    userLastName: string | undefined,
    userMiddleName: string | undefined,
    myMessages: any, 
    catigories: Catigories | undefined,*/
 }

let initialState: fieldsStore = {
    appIsEnable: true
}

const fieldsReducer = (state = initialState, action: any) => {
    return state
}
export default fieldsReducer