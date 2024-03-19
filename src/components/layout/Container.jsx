import Title from "../common/title";
import Header from "../common/header";
import Footer from "../common/footer";
import { Outlet } from "react-router-dom";

const Container = () => {
    return (
        <div className="flex justify-center items-top h-screen p-1">
            <div className="bg-white rounded-lg shadow-lg" style={{ width: '100vw', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <section> <Title /> </section>
                    <section> <Header /> </section>
                    <section className="MainDisplay"> 
                        <Outlet />
                    </section>
                </div>
                <section> <Footer /> </section>
            </div>            
        </div>
    )
}

export default Container;
