import React from "react";
import Logo from '../../src/assets/images/Logo.png';
const Header = () => {
   return(
    <div id="header">
       <div id="header-container">
         <div>
            <image src={Logo} height={100}></image>
         </div>
       </div>
    </div>
   )
}
export default Header;