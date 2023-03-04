import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import "../global.css"

const Nav = ()=>{
    return (
        <div className="navBlock">
            <Logo/>
            <Menu/>
        </div>
    )
}
export default Nav