import { Dispatch } from "redux";
import { TYPES } from "./types";
import * as repo from "../../api/repository";

export const getUsers = (page: number) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: TYPES.SET_USERS, payload: [] });
        dispatch({ type: TYPES.SET_ERROR_MSG, payload: "" });
        dispatch({ type: TYPES.SET_TOTAL, payload: 0 });

        const response = await repo.getUsers(page);
        dispatch({ type: TYPES.SET_USERS, payload: response.data });
        dispatch({ type: TYPES.SET_TOTAL, payload: response.total });
    } catch (e: any) {
        dispatch({ type: TYPES.SET_ERROR_MSG, payload: e.message });
    }
};

export const resetUsers = () => (dispatch: Dispatch) => {
    dispatch({ type: TYPES.RESET_USERS });
};
