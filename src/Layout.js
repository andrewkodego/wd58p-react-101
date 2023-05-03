import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout(){
    return(
        <>
            <Header menuList={[]}/>
            
            <h2>Common to all pages</h2>

            <Outlet />

            <h5>This footer content is common</h5>
            <Footer />
        </>
    )
}

export default Layout;