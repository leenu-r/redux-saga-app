import { createSlice } from "@reduxjs/toolkit";


const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {
        getUserDetails: (state) => {
            state.loading = true;

        },
        getUserDetailsSuccess: (state, action) => {
            state.users = action.payload;
            state.loading = false;

        },
        getUserDetailsError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }

    },
});
export const { getUserDetails, getUserDetailsSuccess, getUserDetailsError } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;