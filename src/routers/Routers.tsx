import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import Services from "../pages/Services.tsx";
import Contact from "../pages/Contact.tsx";
import Login from "../pages/Login.tsx";
import Signup from "../pages/Signup.tsx";
import Error from "../pages/Error.tsx";

const Routers = () => {
    return  <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/home" element={ <Home /> }></Route>
        <Route path="/services" element={ <Services /> }></Route>
        <Route path="/contact" element={ <Contact /> }></Route>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="/register" element={ <Signup /> }></Route>
        <Route path="/*" element={ <Error /> }></Route>
    </Routes>
}

export default Routers;