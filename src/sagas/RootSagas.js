import { all} from 'redux-saga/effects';

import watchfetchDataSagas from "./fetchDataSagas"
export default function* RootSaga() {
    yield all([
        watchfetchDataSagas()
    ])
}