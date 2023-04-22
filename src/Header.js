function Header({menuList}){
    return (
        <>
            <div className="header">
                <ul className="main-menu">{menuList.map((item)=><li>{item}</li>)}</ul>
            </div>
        </>
    );
}

export default Header;