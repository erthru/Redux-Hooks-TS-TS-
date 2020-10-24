import Layout from "../layout";
import { getUsers, resetUsers } from "../plugins/store/user/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppReducers } from "../plugins/store";
import { User } from "../plugins/store/user/types";
import UserItem from "../components/userItem";

const Index = () => {
    const dispatch = useDispatch();
    const total = useSelector((reducers: AppReducers) => reducers.userReducers.total) as number;
    const users = useSelector((reducers: AppReducers) => reducers.userReducers.users) as Array<User>;
    const [combinedUsers, setCombinedUsers] = useState<Array<User>>([]);
    let page = 1;

    useEffect(() => {
        fetchUsers();

        return () => {
            dispatch(resetUsers());
        };
    }, []);

    useEffect(() => {
        if (users.length > 0) {
            const usersTemp: Array<User> = combinedUsers;
            users.map((user) => usersTemp.push(user));
            setCombinedUsers(usersTemp);
        }
    }, [users]);

    const fetchUsers = () => {
        page = 1;
        setCombinedUsers([]);

        dispatch(getUsers(page));
    };

    const fetchUsersNext = () => {
        page += 1;
        dispatch(getUsers(page));
    };

    return (
        <Layout>
            {combinedUsers.map((user, index) => {
                return (
                    <div className={index > 0 ? "mt-6" : null}>
                        <UserItem key={index} firstName={user.first_name} lastName={user.last_name} email={user.email} avatar={user.avatar} />
                    </div>
                );
            })}

            {total > combinedUsers.length ? (
                <div className="flex mt-3 cursor-pointer" onClick={fetchUsersNext}>
                    <span className="mx-auto text-gray-600 font-medium text-xl">Load More</span>
                </div>
            ) : null}
        </Layout>
    );
};

export default Index;
