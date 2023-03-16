import React from "react";
import "./whatIs.css";

const data = [
  {
    price: 1.05,
    order: 13500,
  },
  {
    price: 1.05,
    order: 13500,
  },
  {
    price: 1.05,
    order: 13500,
  },
  {
    price: 1.05,
    order: 13500,
  },
  {
    price: 1.05,
    order: 13500,
  },
  {
    price: 1.05,
    order: 13500,
  },
  {
    price: 1.05,
    order: 13500,
  },
  {
    price: 1.05,
    order: 13500,
  },
];
function WhatIsEta() {
  return (
    <div className=" background_Pic mt-5" id="whatIsEta">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className="ETA_Heading text-center">WHAT IS ETA</div>
          </div>
        </div>
        <div className="row d-flex justify-content-between mt-5">
          <div className="col-md-5 col-12  table-background">
            <div className="text-center mt-3">
              <h4 className="text-round">
                Round No:<span className="text-white">&nbsp; 03</span>
              </h4>
              <h4 className="text-round">ETA Sell Order</h4>
            </div>
            <div className="table-responsive">
              <table className="table" style={{ width: "100%" }}>
                <thead className="text-center fixed">
                  <tr>
                    <th scope="col">Price</th>
                    <th scope="col">Order</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {data.map((data) => {
                    return (
                      <tr>
                        <td>{data.price}</td>
                        <td>{data.order}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-5 col-12 ">
            <div className="row  mobile-responsive">
              <div className="col-md-12 table-background ">
                <div className="text-round text-center mt-3">
                  Buy ETA using USDT
                </div>
                <div className="row d-flex justify-content-center mt-3 mb-3">
                  <div className="col-md-10 col-10 box-backgorund">
                    <div className="d-flex justify-content-between">
                      <div className="p-2 text-unit">Units:</div>
                      <div className="p-2 text-value  ">525 USDT</div>
                    </div>
                  </div>
                  <div className="col-md-10 col-10 box-backgorund mt-3">
                    <div className="d-flex justify-content-between">
                      <div className="p-2 text-unit">Cost:</div>
                      <div className="p-2 text-value  ">525 USDT</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 table-background  mt-3">
                <div className="text-round text-center mt-3">
                  Buy ETA using USDACE
                </div>
                <div className="row d-flex justify-content-center mt-3 mb-3">
                  <div className="col-md-10 col-10 box-backgorund">
                    <div className="d-flex justify-content-between">
                      <div className="p-2 text-unit">Units:</div>
                      <div className="p-2 text-value  ">525 USDT</div>
                    </div>
                  </div>
                  <div className="col-md-10 col-10 box-backgorund mt-3">
                    <div className="d-flex justify-content-between">
                      <div className="p-2 text-unit">Cost:</div>
                      <div className="p-2 text-value  ">525 USDT</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-wallet" type="button">
                  Withdraw all ETA to Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIsEta;
