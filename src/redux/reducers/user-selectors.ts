import {AppStateType} from "../store";

export const getUsers = (state: AppStateType) => {
    return state.usersReducer.users
};

export const getUsersAreLoading = (state: AppStateType) => {
    return state.usersReducer.isLoading
};
