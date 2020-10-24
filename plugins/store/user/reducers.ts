import { TYPES, User } from "./types";

type State = {
    users: Array<User>;
    errorMsg: string;
    total: number;
};

const initialState: State = {
    users: [],
    errorMsg: "",
    total: 0,
};

const reducers = (state = initialState, action: any): State => {
    switch (action.type) {
        case TYPES.SET_USERS:
            return { ...state, users: action.payload as Array<User> };

        case TYPES.SET_ERROR_MSG:
            return { ...state, errorMsg: action.payload as string };

        case TYPES.SET_TOTAL:
            return { ...state, total: action.payload as number };

        case TYPES.RESET_USERS:
            return { ...state, users: [] };

        default:
            return state;
    }
};

export default reducers;
