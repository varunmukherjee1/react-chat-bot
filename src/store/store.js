import { configureStore } from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        stage: 1,
        user: {
            name: "none",
            age: -1
        }
    },
    reducers: {
        next: (state) => {
            state.stage = state.stage + 1;
        },
        reset: (state) => {
            state.stage = 1;
            state.user = {
                name: "none",
                age: -1
            };
        },
        setName: (state,action) => {
            state.user.name = action.payload
        },
        setAge: (state,action) => {
            state.user.age = action.payload
        },
    }
})

export const userActions = userSlice.actions;

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export default store;