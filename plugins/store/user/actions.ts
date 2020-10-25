import { Dispatch } from "redux";
import { Action, TYPES } from "./types";
import * as repo from "../../api/repository";
import store from "..";

export const getUsers = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUESTING_USERS });
        const response = await repo.getUsers(store.getState().user.page);
        dispatch({ type: TYPES.REQUEST_USERS_COMPLETED, payloads: { users: response.data, total: response.total } });
    } catch (e: any) {
        dispatch({ type: TYPES.REQUEST_USERS_ERROR });
    }
};

export const getUsersNext = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUESTING_USERS_NEXT });

        const response = await repo.getUsers(store.getState().user.page);
        const usersTemp = [...store.getState().user.users];

        response.data.map((user) => {
            usersTemp.push(user);
        });

        dispatch({ type: TYPES.REQUEST_USERS_NEXT_COMPLETED, payloads: { users: usersTemp } });
    } catch (e: any) {
        dispatch({ type: TYPES.REQUEST_USERS_NEXT_ERROR });
    }
};
