import { Reducer } from "redux";
import { Action, TYPES, User } from "./types";

type State = {
    users: Array<User>;
    total: number;
    page: number;
    isFetchingUsers: boolean;
    isFetchingUsersNext: boolean;
    isError: boolean;
};

const initialState: State = {
    users: [],
    total: 0,
    page: 1,
    isFetchingUsers: false,
    isFetchingUsersNext: false,
    isError: false,
};

const reducers = (state = initialState, { type, payloads }: Action): State => {
    switch (type) {
        case TYPES.REQUESTING_USERS:
            return { ...state, users: [], total: 0, page: 1, isFetchingUsers: true, isError: false };

        case TYPES.REQUEST_USERS_COMPLETED:
            return { ...state, users: payloads.users, total: payloads.total, isFetchingUsers: false };

        case TYPES.REQUEST_USERS_ERROR:
            return { ...state, isFetchingUsers: false, isError: true };

        case TYPES.REQUESTING_USERS_NEXT:
            return { ...state, page: state.page + 1, isFetchingUsersNext: true, isError: false };

        case TYPES.REQUEST_USERS_NEXT_COMPLETED:
            return { ...state, users: payloads.users, isFetchingUsersNext: false };

        case TYPES.REQUEST_USERS_NEXT_ERROR:
            return { ...state, isFetchingUsersNext: false, isError: true };

        default:
            return state;
    }
};

export default reducers;
