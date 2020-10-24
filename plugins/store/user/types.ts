export enum TYPES {
    SET_USERS = "SET_USERS",
    SET_ERROR_MSG = "SET_ERROR_MESSAGE",
    SET_TOTAL = "SET_TOTAL",
    RESET_USERS = "RESET_USERS",
}

export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};
