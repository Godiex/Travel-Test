import React from "react";
import "../css/menu.css";
import icon from "../../../../../../Includes/icons/menu.png";

const MenuComponent = ( ) => {
    return (
        <>
            <input type="checkbox" id="btn-menu"/>
            <label for="btn-menu" >
                <img src={icon} alt=""/>
            </label>
            <nav className="menu">
                <ul>
                    <li><a href="#">Vivair</a> </li>
                    <li><a href="#">Avianca</a> </li>
                </ul>
            </nav>
        </>
    );
}

export default MenuComponent;
