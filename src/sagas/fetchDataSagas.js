import {call, put, takeLatest} from "redux-saga/effects";
import { types } from "../redux/types";
import axios from "axios";
import {fetchDataSuccess} from "../redux/actions";

function* asyncFetchRequest(actions) {
    try {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-02-21&sortBy=publishedAt&apiKey=2a68b365a2974beba604778477618863'
        const response = yield call(()=>axios.get(url))
        console.log('============>',response.data.articles);
        yield put(fetchDataSuccess(response.data.articles))
    }
    catch(error) {
        console.log(error);
    }
}

export default function* watchfetchDataSagas() {
    console.log("=====>")
    yield takeLatest(types.SEND_REQUEST, asyncFetchRequest)
}