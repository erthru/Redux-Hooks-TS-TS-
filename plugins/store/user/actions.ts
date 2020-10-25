import { Dispatch } from "redux";
import { Action, TYPES } from "./types";
import * as repo from "../../api/repository";

export const getUsers = (page: number) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: TYPES.REQUEST_USERS_INITIAL });
        const response = await repo.getUsers(page);
        dispatch({ type: TYPES.REQUEST_USERS_COMPLETED, payloads: { users: response.data, total: response.total } });
    } catch (e: any) {
        dispatch({ type: TYPES.ON_ERROR });
    }
};

export const cleanUsers = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: TYPES.REQUEST_USERS_INITIAL });
};
