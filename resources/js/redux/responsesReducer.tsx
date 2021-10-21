export type responsesStore = {
    appIsEnable: boolean
    
    /*token: string | undefined,
    userId: number | undefined,
    userName: string | undefined,
    userLastName: string | undefined,
    userMiddleName: string | undefined,
    myMessages: any, 
    catigories: Catigories | undefined,*/
 }

let initialState: responsesStore = {
    appIsEnable: true
}

const responsesReducer = (state = initialState, action: any) => {
    return state
}
export default responsesReducer