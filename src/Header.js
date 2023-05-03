import { Link } from "react-router-dom";

const menus = [{label:"Home", path:'/'},
                {label:"About", path:'/about-us'},
                {label:"Contact Us", path:'/contact-us'},
                {label:"Login",path:'/login'},
                {label:"Settings", path:'/settings'}];

function Header({menuList}){
    return (
        <>
            <div className="header">
                <div className="app-header-logo"><img src="logo192.png"/></div>
                <nav>
                    <ul className="main-menu">
                        {menus.map((item)=><li>
                            <Link to={item.path}>{item.label}</Link>
                        </li>)}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;