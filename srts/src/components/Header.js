import React from "react";
import logo from "../assets/images/Logo.png";
import './Header.css';
const Header = () => {
   return(
    <div id="header">
       <div id="header-container">
         <div>
            <img src={logo} height="80"/>
         </div>
       </div>
    </div>
   )
}
export default Header;