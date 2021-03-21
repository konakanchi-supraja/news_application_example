import {types} from "./types";
export function fetchData() {
    console.log("supraja")
    return {
        type: types.SEND_REQUEST
}
}

export const fetchDataSuccess = (users) => {
    return {
        type:types.SEND_REQUEST_SUCCESS,
        payload:users
    }
}

export const fetchDataFailure = (error) => {
    return {
        type:types.SEND_REQUEST_FAILURE,
        payload:{},
        error:error
    }
}