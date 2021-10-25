import { SET_CSRF, LOGIN_UPDATE, ERROR_NOT_CONECTED } from '../types';
import axios from 'axios'

const apiUrl = 'http://apptask/';

export const loadCsrfThunk = () => {
    return (dispatch: any) => {

        axios
            .get(apiUrl + 'csrf')
            .then((res: any) => {

                dispatch(savetCSRF(res.data._token));
            })
            .catch((err: any) => {
                dispatch(errorNotConnected(err.message));
            });
    }
}

const savetCSRF = (data: string) => ({
    type: SET_CSRF, csrf: data
});

const errorNotConnected = (data: string) => ({
    type: ERROR_NOT_CONECTED, connect: false
});

export const loginThunk = ({ email, password, csrf }: any) => {
    return (dispatch: any) => {
        axios
            .post(apiUrl + 'login', {
                email: email,
                password: password,
                csrf: csrf
            })
            .then((res: any) => {
                console.log(res)
                // dispatch(savetCSRF(res.data._token));
            })
            .catch((err: any) => {
                console.log(err)
                //dispatch(errorNotConnected(err.message));
            });
    }
}

