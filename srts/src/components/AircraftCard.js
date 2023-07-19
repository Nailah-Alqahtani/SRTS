import React from "react";
import './AircraftCard.css';
import aircraftImage from "../assets/images/aircraft.png";
const AircraftCard = () => {

    return(
        <div class="card" style={{width: "18rem" , display: 'flex'}}>
            <div class="card-container">
               <div class="card-header">
                  <div >
                     <img src={aircraftImage} height="80"/>
                  </div>
                  <div>
                      <h2 class="card-title"> Aircraft Information</h2>
                  </div>
                <div>
            </div> 
           
             
            <div class="card-body">
             <p class="card-text" align="left" >
                Reg#: HZ-HC12 <br />
                Sirial: 32957 <br />
                Model: AW139<br />
                Analyst: GEOFFRY<br />
                Direct: +1-316-4256<br />
                Main: +1-456-3523<br />
                Certification: 9-jun-22<br />
                A/C Revision Level: OEM Revisions Available For Review<br />
                Manufacturer Revision: Customer Approval Requierd<br />
                Primer Service Facility: -<br />
                Monthly Reports: 
                Reports 15-jun-22
                Workcards 15-jun-22
                <br />
                
             </p>
            </div>
      </div>
      </div> 
      </div>
    );

}
export default AircraftCard;