import { useEffect, useState } from "react";
import BottomNavigation from "../components/bottomNavigation";
import Header from "../components/header";
import { isIOS } from "../helpers/deviceDetector";

type Props = {
    children: React.ReactNode;
};

const Layout = (props: Props) => {
    const layoutPosition = "w-full md:w-7/12 lg:w-4/12";
    const [additionalSpacingInBottom, setAdditionalSpacingInBottom] = useState("96px");

    useEffect(() => {
        if (isIOS()) setAdditionalSpacingInBottom("168px");
    }, []);

    return (
        <div className="flex bg-gray-900">
            <div className={"mx-auto bg-gray-200 h-screen overflow-y-auto " + layoutPosition}>
                <div className={"fixed top-0 z-50 " + layoutPosition}>
                    <Header />
                </div>

                <div className={"mt-20 px-6"} style={{ marginBottom: additionalSpacingInBottom }}>
                    {props.children}
                </div>

                <div className={"fixed bottom-0 z-50 " + layoutPosition}>
                    <BottomNavigation />
                </div>
            </div>
        </div>
    );
};

export default Layout;
