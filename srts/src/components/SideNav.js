import React from "react";
import './SideNav.css';
const SideNav = () => {
  return(
    <div id="sidenav">
      <div id="sidenav-container">
        <div id="sidenav-search-container">
         <input id="sidenav-search" placeholder={"Search By Aircraft Reg#"}></input>
         <button id="sidenav-search-btn"><i class="bi bi-search"></i></button>
        </div>
        <div>
            <ul class="text-start" id="sidenav-aircrafts-list">
              <li class="sidenav-aircraft-item">
                <a class="sidenav-aircraft">
                    <i class="bi bi-caret-right-fill sidenav-aircraft-item-arrow"></i>
                    HZ-HC12
                </a>
              </li>
              <li class="sidenav-aircraft-item">
                <a class="sidenav-aircraft">
                    <i class="bi bi-caret-right-fill sidenav-aircraft-item-arrow"></i>
                    HZ-HC12
                </a>
              </li>
              <li class="sidenav-aircraft-item">
                <a class="sidenav-aircraft">
                    <i class="bi bi-caret-right-fill sidenav-aircraft-item-arrow"></i>
                    HZ-HC12
                </a>
              </li>
              <li class="sidenav-aircraft-item">
                <a class="sidenav-aircraft">
                    <i class="bi bi-caret-right-fill sidenav-aircraft-item-arrow"></i>
                    HZ-HC12
                </a>
              </li>
              <li class="sidenav-aircraft-item">
                <a class="sidenav-aircraft">
                    <i class="bi bi-caret-right-fill sidenav-aircraft-item-arrow"></i>
                    HZ-HC12
                </a>
              </li>
              <li class="sidenav-aircraft-item">
                <a class="sidenav-aircraft">
                    <i class="bi bi-caret-right-fill sidenav-aircraft-item-arrow"></i>
                    HZ-HC12
                </a>
              </li>
            </ul>
        </div>
      </div> 
    </div>
  )
}
export default SideNav;