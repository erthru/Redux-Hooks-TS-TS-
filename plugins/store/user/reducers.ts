import { Action, TYPES, State } from "./types";

const initialState: State = {
    users: [],
    total: 0,
    isError: false,
};

const reducers = (state = initialState, { type, payloads }: Action): State => {
    switch (type) {
        case TYPES.REQUEST_USERS_INITIAL:
            return { ...state, users: [], total: 0, isError: false };

        case TYPES.REQUEST_USERS_COMPLETED:
            return { ...state, users: payloads.users, total: payloads.total };

        case TYPES.ON_ERROR:
            return { ...state, isError: true };

        default:
            return state;
    }
};

export default reducers;
