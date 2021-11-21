export const selectAuthEmail = (state) => state.auth.email;
export const selectAuthPassword = (state) => state.auth.password;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthError = (state) => state.auth.hasError;