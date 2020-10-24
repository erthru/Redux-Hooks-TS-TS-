export enum TYPES {
    SET_USERS = "SET_USERS",
    SET_TOTAL = "SET_TOTAL",
    SET_PAGE = "SET_PAGE",
    SET_IS_FETCHING_USERS = "SET_IS_FETCHING_USERS",
    SET_IS_FETCHING_USERS_NEXT = "SET_IS_FETCHING_USERS_NEXT",
    SET_ERROR_MSG = "SET_ERROR_MESSAGE",
}

export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};
