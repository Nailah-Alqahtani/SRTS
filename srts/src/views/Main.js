import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "../components/SideNav";
import './Main.css';
import Header from "../components/Header";

const Main = () =>{
    return(
       <div id="main-div" class="">
         <Header/>
         <div style={{height: '100%', display: 'flex'}}>
            <SideNav/>
            <div>
              <Routes>
                
              </Routes>
            </div>
         </div>
       </div> 
    )
}
export default Main;