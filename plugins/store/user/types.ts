export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export enum TYPES {
    REQUESTING_USERS = "REQUESTING_USERS",
    REQUEST_USERS_COMPLETED = "REQUEST_USERS_COMPLETED",
    REQUEST_USERS_ERROR = "REQUEST_USERS_ERROR",
    REQUESTING_USERS_NEXT = "REQUESTING_USERS_NEXT",
    REQUEST_USERS_NEXT_COMPLETED = "REQUEST_USERS_NEXT_COMPLETED",
    REQUEST_USERS_NEXT_ERROR = "REQUEST_USERS_NEXT_ERROR",
}

export type Action = {
    type: TYPES;
    payloads?: {
        users?: Array<User>;
        total?: number;
    };
};
