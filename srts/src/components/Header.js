import React from "react";
import logo from "../assets/images/Logo.png";
import './Header.css';
const Header = () => {
   return(
    <div id="header">
       <div id="header-container" style={{display: 'flex', justifyContent: 'space-between'}}>
         <div>
            <img src={logo} height="80"/>
         </div>
         <div style={{width: '30%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <div id="header-username-container">
              <i id="header-username-icon" class="bi bi-person-fill"></i>
              <span id="header-username">ALHUSSAIN ALHAZMI</span>
            </div>
            <div>
                <button id="logout-btn">
                    <i class="bi bi-box-arrow-left" style={{marginRight: '8px'}}></i>
                    Logout
                </button>
            </div>
         </div>
       </div>
    </div>
   )
}
export default Header;