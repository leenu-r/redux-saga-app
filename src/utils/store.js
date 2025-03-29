import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import userDetailsSlice from "../utils/userDetailsSlice";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        counter: counterSlice,
        userDetails: userDetailsSlice,
    },
    // Use getDefaultMiddleware to include the default middleware and add custom middleware (sagaMiddleware)
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;