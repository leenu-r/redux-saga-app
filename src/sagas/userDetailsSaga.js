import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
// Import the actions from the slice
import { getUserDetails, getUserDetailsError, getUserDetailsSuccess } from "../utils/userDetailsSlice"


// Saga to handle fetching of user details
function* fetchUserdetailsSaga() {
    try {
        const users = yield call(fetchUserDetails);
        // Dispatch the getUserDetailsSuccess action with the user data
        yield put(getUserDetailsSuccess(users));
    } catch (error) {
        // If there is an error, dispatch the getUserDetailsError action with the error message
        yield put(getUserDetailsError(error.message));
    }
}



// Watcher Saga
function* userDetailsSaga() {
    // Listen for the loginUser action and call the handleLogin saga when dispatched
    yield takeLatest(getUserDetails.type, fetchUserdetailsSaga);
}

export default userDetailsSaga;

// API call to fetch user details
export const fetchUserDetails = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'An error occurred during fetch user details');
    }
};