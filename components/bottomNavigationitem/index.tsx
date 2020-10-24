import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    title: string;
    icon: IconProp;
    isActive: boolean;
};

const BottomNavigationItem = (props: Props) => (
    <div className={props.isActive ? "font-bold text-gray-800" : "text-gray-500"}>
        <div className="flex">
            <FontAwesomeIcon icon={props.icon} className={"text-xl mx-auto " + (props.isActive ? "font-bold text-gray-800" : "text-gray-500")}/>
        </div>

        <span className="text-xs">{props.title}</span>
    </div>
);

export default BottomNavigationItem;
