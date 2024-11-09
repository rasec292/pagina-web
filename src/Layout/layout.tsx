import Routers from "../routers/Routers";
import Header from "../components/Header/Header";
import '../App.css';

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Routers />
                </div>
            </main>
        </>
    )
}

export default Layout;