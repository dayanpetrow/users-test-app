import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';

const FETCH_USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export default function* rootSaga() {
    yield all([
        watchFetchUsers()
    ]);
}

function* watchFetchUsers() {
    yield takeLatest(
        actions.FETCH_USERS,
        workerFetchUsers
    );
}

function* workerFetchUsers() {
    try {
        const response = yield call(fetchUsersAPI);
        yield delay(1500);
        yield put(actions.fetchUsersSuccess(response.data));
    } catch (error) {
        yield put(actions.fetchUsersFailure(error));
    }
}

function fetchUsersAPI() {
    return axios({
        method: "GET",
        url: FETCH_USERS_URL
    });
}