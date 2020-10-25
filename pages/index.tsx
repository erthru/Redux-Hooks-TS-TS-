import Layout from "../layout";
import { getUsers, getUsersNext } from "../plugins/store/user/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../plugins/store";
import { User } from "../plugins/store/user/types";
import UserItem from "../components/userItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
    const dispatch = useDispatch();
    const total = useSelector((store: Store) => store.user.total) as number;
    const users = useSelector((store: Store) => store.user.users) as Array<User>;
    const isFetchingUsers = useSelector((store: Store) => store.user.isFetchingUsers) as boolean;
    const isFetchingUsersNext = useSelector((store: Store) => store.user.isFetchingUsersNext) as boolean;

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const loadMore = () => {
        dispatch(getUsersNext());
    };

    return (
        <Layout>
            {isFetchingUsers ? (
                <div className="flex">
                    <FontAwesomeIcon className="text-gray-700 mx-auto text-4xl mt-6" icon={faSpinner} pulse />
                </div>
            ) : null}

            {!isFetchingUsers
                ? users.map((user, index) => {
                      return (
                          <div className={index > 0 ? "mt-6" : null} key={index}>
                              <UserItem firstName={user.first_name} lastName={user.last_name} email={user.email} avatar={user.avatar} />
                          </div>
                      );
                  })
                : null}

            {isFetchingUsersNext ? (
                <div className="flex">
                    <FontAwesomeIcon className="text-gray-700 mx-auto text-4xl mt-6" icon={faSpinner} pulse />
                </div>
            ) : null}

            {total > users.length && (!isFetchingUsers || !isFetchingUsersNext) ? (
                <div className="flex mt-3 cursor-pointer" onClick={loadMore}>
                    <span className="mx-auto text-gray-600 font-medium text-xl">Load Next</span>
                </div>
            ) : null}
        </Layout>
    );
};

export default Index;
