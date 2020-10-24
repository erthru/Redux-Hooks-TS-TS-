import { TYPES, User } from "./types";

type State = {
    users: Array<User>;
    total: number;
    page: number;
    isFetchingUsers: boolean;
    isFetchingUsersNext: boolean;
    errorMsg: string;
};

const initialState: State = {
    users: [],
    total: 0,
    page: 1,
    isFetchingUsers: false,
    isFetchingUsersNext: false,
    errorMsg: "",
};

const reducers = (state = initialState, action: any): State => {
    switch (action.type) {
        case TYPES.SET_USERS:
            return { ...state, users: action.payload as Array<User> };

        case TYPES.SET_TOTAL:
            return { ...state, total: action.payload as number };

        case TYPES.SET_PAGE:
            return { ...state, page: action.payload as number };

        case TYPES.SET_IS_FETCHING_USERS:
            return { ...state, isFetchingUsers: action.payload as boolean };

        case TYPES.SET_IS_FETCHING_USERS_NEXT:
            return { ...state, isFetchingUsersNext: action.payload as boolean };

        case TYPES.SET_ERROR_MSG:
            return { ...state, errorMsg: action.payload as string };

        default:
            return state;
    }
};

export default reducers;
