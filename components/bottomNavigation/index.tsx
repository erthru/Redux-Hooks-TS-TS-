import { faEnvelopeOpen, faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BottomNavigationItem from "../bottomNavigationitem";

enum Item {
    home = "home",
    message = "message",
    search = "search",
    account = "account",
}

const BottomNavigation = () => {
    useEffect(() => {
        if (router.pathname === "/") setCurrentActiveItem(Item.home);
        if (router.pathname === "/message") setCurrentActiveItem(Item.message);
        if (router.pathname === "/search") setCurrentActiveItem(Item.search);
        if (router.pathname === "/account") setCurrentActiveItem(Item.account);
    }, []);

    const router = useRouter();

    const [currentActiveItem, setCurrentActiveItem] = useState<Item>(undefined);

    const routeToIchiban = () => {
        setCurrentActiveItem(Item.home);
        router.push("/");
    };

    const routeToMessage = () => {
        setCurrentActiveItem(Item.message);
        router.push("/message");

    };

    const routeToSearch = () => {
        setCurrentActiveItem(Item.search);
        router.push("/search");
    };

    const routeToAccount = () => {
        setCurrentActiveItem(Item.account);
        router.push("/account");
    };

    return (
        <div className="bg-white py-3 flex">
            <div className="w-1/4 flex" onClick={routeToIchiban}>
                <div className="mx-auto cursor-pointer">
                    <BottomNavigationItem title="ホーム" icon={faHome} isActive={currentActiveItem === Item.home} />
                </div>
            </div>

            <div className="w-1/4 flex" onClick={routeToMessage}>
                <div className="mx-auto cursor-pointer">
                    <BottomNavigationItem title="メッセージ" icon={faEnvelopeOpen} isActive={currentActiveItem === Item.message} />
                </div>
            </div>

            <div className="w-1/4 flex" onClick={routeToSearch}>
                <div className="mx-auto cursor-pointer">
                    <BottomNavigationItem title="検索" icon={faSearch} isActive={currentActiveItem === Item.search} />
                </div>
            </div>

            <div className="w-1/4 flex" onClick={routeToAccount}>
                <div className="mx-auto cursor-pointer">
                    <BottomNavigationItem title="アカウント" icon={faUser} isActive={currentActiveItem === Item.account} />
                </div>
            </div>
        </div>
    );
};

export default BottomNavigation;
