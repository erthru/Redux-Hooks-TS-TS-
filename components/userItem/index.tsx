import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../card";

type Props = {
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
};

const UserItem = (props: Props) => (
    <Card>
        <div>
            <div className="flex z-998">
                <div className="ml-auto w-8 h-8 bg-gray-300 flex rounded-full cursor-pointer z-10">
                    <FontAwesomeIcon icon={faThumbtack} className="text-sm m-auto text-gray-700" />
                </div>
            </div>

            <div className="flex flex-wrap -mt-6">
                <div className="w-full">
                    <img className="mx-auto h-20 w-20 rounded-full" src={props.avatar} />
                </div>

                <div className="mt-3 w-full flex text-gray-900">
                    <span className="mx-auto text-xl font-medium">{props.firstName + " " + props.lastName}</span>
                </div>

                <div className="-mt-1 w-full flex text-gray-600">
                    <span className="mx-auto text-sm">{props.email}</span>
                </div>
            </div>
        </div>
    </Card>
);

export default UserItem;
