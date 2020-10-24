import { Dispatch } from "redux";
import { TYPES } from "./types";
import * as repo from "../../api/repository";
import store from "..";

export const getUsers = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: TYPES.SET_USERS, payload: [] });
        dispatch({ type: TYPES.SET_TOTAL, payload: 0 });
        dispatch({ type: TYPES.SET_PAGE, payload: 1 });
        dispatch({ type: TYPES.SET_IS_FETCHING_USERS, payload: true });
        dispatch({ type: TYPES.SET_ERROR_MSG, payload: "" });

        const response = await repo.getUsers(store.getState().user.page);

        dispatch({ type: TYPES.SET_USERS, payload: response.data });
        dispatch({ type: TYPES.SET_TOTAL, payload: response.total });
        dispatch({ type: TYPES.SET_IS_FETCHING_USERS, payload: false });
    } catch (e: any) {
        dispatch({ type: TYPES.SET_ERROR_MSG, payload: e.message });
    }
};

export const getUsersNext = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: TYPES.SET_PAGE, payload: store.getState().user.page + 1 });
        dispatch({ type: TYPES.SET_IS_FETCHING_USERS_NEXT, payload: true });
        dispatch({ type: TYPES.SET_ERROR_MSG, payload: "" });

        const response = await repo.getUsers(store.getState().user.page);
        const usersTemp = [...store.getState().user.users];

        response.data.map((user) => {
            usersTemp.push(user);
        });

        dispatch({ type: TYPES.SET_USERS, payload: usersTemp });
        dispatch({ type: TYPES.SET_IS_FETCHING_USERS_NEXT, payload: false });
    } catch (e: any) {
        dispatch({ type: TYPES.SET_ERROR_MSG, payload: e.message });
    }
};
