import { all } from 'redux-saga/effects';
import userDetailsSaga from './userDetailsSaga';

// Root saga
function* rootSaga() {
    yield all([userDetailsSaga(),])
}

export default rootSaga;