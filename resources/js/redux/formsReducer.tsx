export type formsStore = {
    appIsEnable: boolean
    
    /*token: string | undefined,
    userId: number | undefined,
    userName: string | undefined,
    userLastName: string | undefined,
    userMiddleName: string | undefined,
    myMessages: any, 
    catigories: Catigories | undefined,*/
}

let initialState: formsStore = {
    appIsEnable: true
}

const formsReducer = (state = initialState, action: any) => {
    return state
}
export default formsReducer