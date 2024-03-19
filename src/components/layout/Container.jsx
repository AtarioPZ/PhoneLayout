import Title from "../common/title";
import Header from "../common/header";
import Footer from "../common/footer";
import { Outlet } from "react-router-dom";

const Container = () => {
    return (
        <div className="flex flex-col bg-white h-screen">
            <div className="sticky top-0 z-10">
                <Title />
                <Header />
            </div>
            <div className="overflow-auto flex-grow">
                <Outlet />
            </div>
            <div className="sticky bottom-0 z-10">
                <Footer />
            </div>
        </div>
    )
}

export default Container;
