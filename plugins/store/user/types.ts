export enum TYPES {
    REQUEST_USERS_INITIAL = "REQUEST_USERS_INITIAL",
    REQUEST_USERS_COMPLETED = "REQUEST_USERS_COMPLETED",
    ON_ERROR = "ON_ERROR",
}

export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export type State = {
    users: Array<User>;
    total: number;
    isError: boolean;
};

export type Action = {
    type: TYPES;
    payloads?: {
        requestingPage?: number;
        users?: Array<User>;
        total?: number;
    };
};
