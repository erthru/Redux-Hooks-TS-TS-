import Layout from "../layout";
import { cleanUsers, getUsers } from "../plugins/store/user/actions";
import { useEffect, useState } from "react";
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
    const [isFetchingData, setIsFetchingData] = useState(false);
    const [isFetchingDataNext, setIsFetchingDataNext] = useState(false);
    const [combinedUsers, setCombinedUsers] = useState<Array<User>>([]);
    let page = 1;

    useEffect(() => {
        loadInitial();

        return () => {
            dispatch(cleanUsers());
        };
    }, []);

    useEffect(() => {
        if (users.length > 0) {
            setIsFetchingData(false);
            setIsFetchingDataNext(false);

            const usersTemp = combinedUsers;

            users.map((user) => {
                usersTemp.push(user);
            });

            setCombinedUsers(usersTemp);
        }
    }, [users]);

    const loadInitial = () => {
        page = 1;
        setCombinedUsers([]);
        setIsFetchingData(true);
        dispatch(getUsers(page));
    };

    const loadMore = () => {
        page += 1;
        setIsFetchingDataNext(true);
        dispatch(getUsers(page));
    };

    return (
        <Layout>
            {isFetchingData ? (
                <div className="flex">
                    <FontAwesomeIcon className="text-gray-700 mx-auto text-4xl mt-6" icon={faSpinner} pulse />
                </div>
            ) : null}

            {!isFetchingData
                ? combinedUsers.map((user, index) => {
                      return (
                          <div className={index > 0 ? "mt-6" : null} key={index}>
                              <UserItem firstName={user.first_name} lastName={user.last_name} email={user.email} avatar={user.avatar} />
                          </div>
                      );
                  })
                : null}

            {isFetchingDataNext ? (
                <div className="flex">
                    <FontAwesomeIcon className="text-gray-700 mx-auto text-4xl mt-6" icon={faSpinner} pulse />
                </div>
            ) : null}

            {total > combinedUsers.length && (!isFetchingData || !isFetchingDataNext) ? (
                <div className="flex mt-3 cursor-pointer" onClick={loadMore}>
                    <span className="mx-auto text-gray-600 font-medium text-xl">Load Next</span>
                </div>
            ) : null}
        </Layout>
    );
};

export default Index;
