import React from "react";
import "./wallet.css";

function WalletRef() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 ">
          <div className="row  gap-3">
            <div className="col-md-12 col-12  input-box">
              <div className="row ">
                <div className="col-md-3 col-12  ">
                  <h4 className="text-heading p-lg-3 ">Wallet Address:</h4>
                </div>
                <div className=" col-md-8 col-12  ">
                  <h4 className="text-address p-lg-3 ">
                    {" "}
                    trd456sad123sad4566d123sad123
                  </h4>
                </div>
                {/* 
                <p className="text-address p-3">
                 
                </p> */}
              </div>
            </div>
            <div className="col-md-12 col-12  input-box">
              <div className="row  ">
                <div className="col-md-3 col-12">
                  <h4 className="text-heading p-lg-3 ">Referral Link:</h4>
                </div>
                <div className=" col-md-8 col-12 ">
                  <h4 className="text-address p-lg-3 ">
                    {" "}
                    www.eta.app/trd456sad123sad4566d123sad123
                  </h4>
                </div>
                {/* 
                <p className="text-address p-3">
                 
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletRef;
