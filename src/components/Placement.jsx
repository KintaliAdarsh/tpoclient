import React from "react";
import BarChart from "./BarChart";
import "./Placement.css";

function Placement() {
  return (
    <div className="placement-container">
      <p className="place-p">PLACEMENT STATISTICS IT</p>
      <div className="circles-container">
        <div className="rcircle">
          <div className="txt" style={{ top: '4.0625rem' }}>
            Highest Package
          </div>
          <div className="txt" style={{ top: '5.3125rem' }}>
            55 lpa
          </div>
        </div>
        <div className="rcircle">
          <div className="txt" style={{ top: '4.0625rem' }}>
            Average Package
          </div>
          <div className="txt" style={{ top: '5.3125rem' }}>
            15.48 lpa
          </div>
        </div>
        <div className="rcircle">
          <div className="txt" style={{ top: '4.0625rem' }}>
            Median Package
          </div>
          <div className="txt" style={{ top: '5.3125rem' }}>
            14 lpa
          </div>
        </div>
      </div>
      <hr />
      <BarChart />
    </div>
  );
}

export default Placement;