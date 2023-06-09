import { configureStore } from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        stage: 1,
        user: null
    },
    reducers: {
        next: (state) => {
            state.stage = state.stage + 1;
        },
        reset: (state) => {
            state.stage = 1;
            state.user = null;
        },
        setUser: (state,action) => {
            state.user = action.payload;
        }
    }
})

export const userActions = userSlice.actions;

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export default store;