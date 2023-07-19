import React from "react";
import './SideNav.css';

var lastOpenedItem = 0;
var ItemOpened = false

const closeItemSublist = (id) => {
    document.getElementById('sublist-'+id).style.display = 'none'
    document.getElementById('i-'+id).classList.remove('bi-caret-down-fill');
    document.getElementById('i-'+id).classList.add('bi-caret-right-fill');
}

const openItemSublist = (id) => {
    document.getElementById('sublist-'+id).style.display = 'block'
    document.getElementById('i-'+id).classList.remove('bi-caret-right-fill');
    document.getElementById('i-'+id).classList.add('bi-caret-down-fill');
}

const handleAircraftClick = (id) => {
  if(document.getElementById('sublist-'+id).style.display == 'none'){
    openItemSublist(id);
    if(ItemOpened === true && lastOpenedItem != id)
      closeItemSublist(lastOpenedItem)
    ItemOpened = true;
    lastOpenedItem = id;
  }
  else{
    closeItemSublist(id)
  }

}
const SideNav = () => {
  return(
    <div id="sidenav" class="text-start">
      <div id="sidenav-container" class="text-start">
        <div id="sidenav-search-container">
         <input id="sidenav-search" placeholder={"Search By Aircraft Reg#"}></input>
         <button id="sidenav-search-btn"><i class="bi bi-search"></i></button>
        </div>
        <div id="sidenav-aircrafts-list-container" class="text-start">
            <ul class="text-start" id="sidenav-aircrafts-list">
              <li class="sidenav-aircraft-item" id="1" onClick={()=>{handleAircraftClick(1)}}>
                <a class="sidenav-aircraft">
                    <i class="bi bi-caret-right-fill sidenav-aircraft-item-arrow" id="i-1"></i>
                    HZ-HC12
                </a>
                <div class="sidenav-aircraft-item-sublist" id="sublist-1" style={{display: 'none'}}>
                    <ul class="sidenav-aircraft-sublist">
                        <li class="sidenav-aircraft-sublist-item">
                            <a class="sidenav-aircraft-sublist-item-anchor">
                                <i class="bi bi-file-earmark-fill sidenav-aircraft-sublist-icon"></i>
                                Documents
                            </a>
                        </li>
                        <li class="sidenav-aircraft-sublist-item">
                            <a class="sidenav-aircraft-sublist-item-anchor">
                                <i class="bi bi-list-task sidenav-aircraft-sublist-icon"></i>
                                Tasks/Status
                            </a>
                        </li>
                        <li class="sidenav-aircraft-sublist-item">
                            <a class="sidenav-aircraft-sublist-item-anchor">
                                <i class="bi bi-calendar-event sidenav-aircraft-sublist-icon"></i>
                                Due List
                            </a>
                        </li>
                    </ul>
                </div>
              </li>
              <li class="sidenav-aircraft-item" id="2" onClick={()=>{handleAircraftClick(2)}}>
                <a class="sidenav-aircraft">
                    <i class="bi bi-caret-right-fill sidenav-aircraft-item-arrow" id="i-2"></i>
                    HZ-HC12
                </a>
                <div class="sidenav-aircraft-item-sublist" id="sublist-2" style={{display: 'none'}}>
                    <ul class="sidenav-aircraft-sublist">
                        <li class="sidenav-aircraft-sublist-item">
                            <a class="sidenav-aircraft-sublist-item-anchor">
                                <i class="bi bi-file-earmark-fill sidenav-aircraft-sublist-icon"></i>
                                Documents
                            </a>
                        </li>
                        <li class="sidenav-aircraft-sublist-item">
                            <a class="sidenav-aircraft-sublist-item-anchor">
                                <i class="bi bi-list-task sidenav-aircraft-sublist-icon"></i>
                                Tasks/Status
                            </a>
                        </li>
                        <li class="sidenav-aircraft-sublist-item">
                            <a class="sidenav-aircraft-sublist-item-anchor">
                                <i class="bi bi-calendar-event sidenav-aircraft-sublist-icon"></i>
                                Due List
                            </a>
                        </li>
                    </ul>
                </div>
              </li>
              <li class="sidenav-aircraft-item" id="3" onClick={()=>{handleAircraftClick(3)}}>
                <a class="sidenav-aircraft">
                    <i class="bi bi-caret-right-fill sidenav-aircraft-item-arrow" id="i-3"></i>
                    HZ-HC12
                </a>
                <div class="sidenav-aircraft-item-sublist" id="sublist-3" style={{display: 'none'}}>
                    <ul class="sidenav-aircraft-sublist">
                        <li class="sidenav-aircraft-sublist-item">
                            <a class="sidenav-aircraft-sublist-item-anchor">
                                <i class="bi bi-file-earmark-fill sidenav-aircraft-sublist-icon"></i>
                                Documents
                            </a>
                        </li>
                        <li class="sidenav-aircraft-sublist-item">
                            <a class="sidenav-aircraft-sublist-item-anchor">
                                <i class="bi bi-list-task sidenav-aircraft-sublist-icon"></i>
                                Tasks/Status
                            </a>
                        </li>
                        <li class="sidenav-aircraft-sublist-item">
                            <a class="sidenav-aircraft-sublist-item-anchor">
                                <i class="bi bi-calendar-event sidenav-aircraft-sublist-icon"></i>
                                Due List
                            </a>
                        </li>
                    </ul>
                </div>
              </li>
              <li class="sidenav-aircraft-item" id="4" onClick={()=>{handleAircraftClick(4)}}>
                <a class="sidenav-aircraft">
                    <i class="bi bi-caret-right-fill sidenav-aircraft-item-arrow" id="i-4"></i>
                    HZ-HC12
                </a>
                <div class="sidenav-aircraft-item-sublist" id="sublist-4" style={{display: 'none'}}>
                    <ul class="sidenav-aircraft-sublist">
                        <li class="sidenav-aircraft-sublist-item">
                            <a class="sidenav-aircraft-sublist-item-anchor">
                                <i class="bi bi-file-earmark-fill sidenav-aircraft-sublist-icon"></i>
                                Documents
                            </a>
                        </li>
                        <li class="sidenav-aircraft-sublist-item">
                            <a class="sidenav-aircraft-sublist-item-anchor">
                                <i class="bi bi-list-task sidenav-aircraft-sublist-icon"></i>
                                Tasks/Status
                            </a>
                        </li>
                        <li class="sidenav-aircraft-sublist-item">
                            <a class="sidenav-aircraft-sublist-item-anchor">
                                <i class="bi bi-calendar-event sidenav-aircraft-sublist-icon"></i>
                                Due List
                            </a>
                        </li>
                    </ul>
                </div>
              </li>
              <li class="sidenav-aircraft-item" id="5">
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