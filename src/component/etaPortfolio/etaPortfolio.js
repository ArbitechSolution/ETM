import React from "react";
import "./etaPortfolio.css";

function EtaPortfolio() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="ETA_Heading text-center">ETA Portfolio</div>
        </div>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-3 col-12 table-background mobile-space">
          <div className=" text-ETA text-uppercase text-center p-2">
            My ETA Portfolio
          </div>
        </div>
        <div className="col-md-3 col-12 table-background mobile-space">
          <div className=" text-ETA text-uppercase text-center p-2">
            Current Round: <spam className="text-white">03</spam>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between mt-3">
        <div className="col-md-3 col-12 col-12 table-background mobile-space ">
          <div className=" text-value text-uppercase text-center p-2">
            Total ETA Purchased : 1100
          </div>
        </div>
        <div className="col-md-3 col-12 table-background mobile-space">
          <div className=" text-value text-uppercase text-center p-2">
            Total USD Spent : $1701
          </div>
        </div>
        <div className="col-md-3 col-12 table-background mobile-space">
          <div className=" text-value text-uppercase text-center p-2">
            Total USD Received : $010.4
          </div>
        </div>
      </div>
    </div>
  );
}

export default EtaPortfolio;
