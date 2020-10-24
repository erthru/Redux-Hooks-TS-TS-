import IGetUserResponse from "../response/getUserResponse";

export const getUsers = async (page: number): Promise<IGetUserResponse> => {
    const response = await fetch("https://reqres.in/api/users?page=" + page);
    return (await response.json()) as IGetUserResponse;
};
