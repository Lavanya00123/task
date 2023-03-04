import React from "react";
import "../global.css"
const Menu=()=>{
    return(
        <div className="menuBlock">
            <ol>
                <li>
                    <a href="">HOME</a>
                </li>
                <li>
                    <a href="">LOGIN</a>
                </li>
                <li>
                    <a href="">LOGOUT</a>
                </li>
                <li>
                    <a href="">SETTINGS</a>
                </li>
            </ol>
        </div>
    )
}
export default Menu