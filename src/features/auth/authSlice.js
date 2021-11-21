import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    email: '',
    password: '',
    hasError: false,
}

const testAuth = (state) => {
    if (state.email === 'example@example.com' && state.password === 'password'){
        state.isAuthenticated = true;
    } else {
        state.isAuthenticated = false;
    }
}

export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        setUserEmail: (state, action) => {
            state.email = action.payload;
            testAuth(state);
        },
        setUserPassword: (state, action) => {
            state.password = action.payload;
            testAuth(state);
        },
        authUser: (state) => {
            if (state.isAuthenticated) {
                state.hasError = false;
            } else {
                state.hasError = true;
            }
        },
        setAuth: (state) => {
            state.isAuthenticated = !state.isAuthenticated;
        }
        
    }
});

export const { setUserEmail, setUserPassword, authUser, setAuth } = authSlice.actions;

export default authSlice.reducer;