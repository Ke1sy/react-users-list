import {ThunkAction} from "redux-thunk";
import {usersAPI} from "../../api/api";
import {AppStateType} from "../store";
import {UserType} from "../../types/types";


export const SET_USERS = 'users/SET_USERS';
export const DELETE_USER = 'users/DELETE_USER';
export const EDIT_USER = 'users/EDIT_USER';
export const ADD_USER = 'users/ADD_USER';
export const TOGGLE_USERS_ARE_LOADING = 'users/TOGGLE_USERS_ARE_LOADING';

const initialState = {
    users: [] as Array<UserType>,
    isLoading: true,
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: UsersActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.user]
            };

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };

        case EDIT_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.user.id ? action.user : user)
            };

        case TOGGLE_USERS_ARE_LOADING:
            return {...state, isLoading: action.isLoading};

        default:
            return state;
    }
};

type UsersActionsTypes = SetUsersActionType |
    ToogleUsersAreLoadingType |
    FakeEditUserActionType |
    FakeAddUserActionType |
    FakeDeleteUserActionType;

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UsersActionsTypes>

export const loadUsers = (): ThunkType => async (dispatch) => {
    dispatch(toogleUsersAreLoading(true));
    const response = await usersAPI.getUsers();
    dispatch(toogleUsersAreLoading(false));
    dispatch(setUsers(response));
};

type ToogleUsersAreLoadingType = { type: typeof TOGGLE_USERS_ARE_LOADING, isLoading: boolean };

export const toogleUsersAreLoading = (isLoading: boolean): ToogleUsersAreLoadingType => ({
    type: TOGGLE_USERS_ARE_LOADING,
    isLoading
});

type SetUsersActionType = { type: typeof SET_USERS, users: UserType[] };

export const setUsers = (users: UserType[]): SetUsersActionType => ({
    type: SET_USERS,
    users
});

type FakeEditUserActionType = { type: typeof EDIT_USER, user: UserType };
export const fakeEditUser = (user: UserType): FakeEditUserActionType => ({
    type: EDIT_USER,
    user
});

type FakeDeleteUserActionType = { type: typeof DELETE_USER, id: string | number };
export const fakeDeleteUser = (id: string | number): FakeDeleteUserActionType => ({
    type: DELETE_USER,
    id
});

type FakeAddUserActionType = { type: typeof ADD_USER, user: UserType };
export const fakeAddUser = (user: UserType): FakeAddUserActionType => ({
    type: ADD_USER,
    user
});

export default usersReducer;
