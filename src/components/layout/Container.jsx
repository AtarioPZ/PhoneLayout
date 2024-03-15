import Title from "../common/title";
import Header from "../common/header";
import Feed from "../pages/Feed";
import Footer from "../common/footer";

const Container = () => {
    return (
        <div className="flex justify-center items-top h-screen p-10">
            <div className="bg-white rounded-lg shadow-lg" style={{ width: '376px', height: '666px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <section> <Title /> </section>
                    <section> <Header /> </section>
                    <section> <Feed /> </section>
                </div>
                <section> <Footer /> </section>
            </div>            
        </div>
    )
}

export default Container;