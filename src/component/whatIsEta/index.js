import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { contractAddress, contractAddressAbi } from "../utils/contractaddress";
import { usdtTokenAdd, usdtTokenAbi } from "../utils/contractUsdtToken";
import {
  usdaceTokenAdd,
  usdaceTokenAddAbi,
} from "../utils/contractUsdaceToken";
import { contractTokenAdd, contractTokenAddAbi } from "../utils/contractToken";
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
  const [usdtUnit, setUsdtUnit] = useState(0);
  const [usdtCost, setusdtCost] = useState(0);
  const [usdaceUnit, setUsdaceUnit] = useState(0);
  const [usdaceCost, setusdaceCost] = useState(0);

  let acc = useSelector((state) => state.connect?.connection);
  // console.log(acc);

  const token = async () => {
    const web3 = window.web3;
    try {
      if (acc == "No Wallet") {
        toast.info("No Wallet");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Wallet");
      } else if (acc == "Connect Wallet") {
        // toast.info("Connect Wallet");
        console.log("Connect Wallet");
      } else {
        let contract = new web3.eth.Contract(
          contractAddressAbi,
          contractAddress
        );
        let usdtToken = new web3.eth.Contract(usdtTokenAbi, usdtTokenAdd);
        // let bal = await usdtToken.methods.balanceOf(acc).call();
        // console.log("usdt Balance", bal);
        if (usdtUnit == 0 || usdtUnit == "") {
          setusdtCost(0);
        } else {
          if (usdtUnit > 0 && usdtUnit <= 100) {
            let value = web3.utils.toWei(usdtUnit);

            let checkinput = await contract.methods.checkPrice(value).call();

            let valueCost = web3.utils.fromWei(checkinput);
            setusdtCost(valueCost);
          } else {
            toast.info("Enter your Value  0 to 100");
          }
        }
      }
    } catch (e) {
      console.log("Error While Buying Tokens", e);
    }
  };

  const usdAceToken = async () => {
    const web3 = window.web3;
    try {
      if (acc == "No Wallet") {
        toast.info("No Wallet");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Wallet");
      } else if (acc == "Connect Wallet") {
        // toast.info("Connect Wallet");
        console.log("Connect Wallet");
      } else {
        let contract = new web3.eth.Contract(
          contractAddressAbi,
          contractAddress
        );
        let usdaceToken = new web3.eth.Contract(
          usdaceTokenAddAbi,
          usdaceTokenAdd
        );
        // let balUsdace = await usdaceToken.methods.balanceOf(acc).call();
        // console.log("usdaceBalance", balUsdace);
        // console.log(usdaceUnit, "usdaceUnit");
        if (usdaceUnit == 0 || usdaceUnit == "") {
          setusdaceCost(0);
        } else {
          if (usdaceUnit > 0 && usdaceUnit <= 100) {
            let valueUsd = web3.utils.toWei(usdaceUnit);
            let checkinputUsdace = await contract.methods
              .checkPrice(valueUsd)
              .call();
            let valueUsdace = web3.utils.fromWei(checkinputUsdace);
            setusdaceCost(valueUsdace);
          } else {
            toast.info("Enter your Value  0 to 100");
          }
        }
      }
    } catch (e) {
      console.log("Error While Buying Tokens", e);
    }
  };

  const buyUsdt = async () => {
    const web3 = window.web3;
    try {
      if (acc == "No Wallet") {
        toast.info("No Wallet");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Wallet");
      } else if (acc == "Connect Wallet") {
        // toast.info("Connect Wallet");
        console.log("Connect Wallet");
      } else {
        let usdtToken = new web3.eth.Contract(usdtTokenAbi, usdtTokenAdd);
        let balOfUsdt = await usdtToken.methods.balanceOf(acc).call();
        balOfUsdt = web3.utils.fromWei(balOfUsdt);
        console.log("usdaceBalance", balOfUsdt);
        if (usdtUnit > 0 && usdtUnit <= 100) {
          if (parseFloat(balOfUsdt) >= parseFloat(usdtCost)) {
            let costValue = web3.utils.toWei(usdtCost);
            console.log("costValue", costValue);
            await usdtToken.methods
              .approve(contractAddress, costValue)
              .send({ from: acc });
            let unitValue = web3.utils.toWei(usdtUnit);
            console.log("unitValue", unitValue);
            let contract = new web3.eth.Contract(
              contractAddressAbi,
              contractAddress
            );
            await contract.methods
              .buy(usdtTokenAdd, costValue, unitValue)
              .send({ from: acc });
          } else {
            console.log("token lessx");
          }
        } else {
          console.log("value does not match");
        }
        // if (usdaceUnit == 0 || usdaceUnit == "") {
        //   setusdaceCost(0);
        // } else {
        //   if (usdaceUnit > 0 && usdaceUnit <= 100) {
        //     let valueUsd = web3.utils.toWei(usdaceUnit);
        //     console.log("valueUsd", valueUsd);
        //     let checkinputUsdace = await contract.methods
        //       .checkPrice(valueUsd)
        //       .call();
        //     console.log("checkinputUsdace", checkinputUsdace);
        //     let valueUsdace = web3.utils.fromWei(checkinputUsdace);
        //     setusdaceCost(valueUsdace);
        //   } else {
        //     toast.info("Enter your Value  0 to 100");
        //   }
        // }
      }
    } catch (e) {
      console.log("Error While Buying Tokens", e);
    }
  };
  useEffect(() => {
    token();
  }, [usdtUnit]);
  useEffect(() => {
    usdAceToken();
  }, [usdaceUnit]);
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
              <div className="col-md-12 table-background  mt-3">
                <div className="text-round text-center mt-3">
                  Buy ETA using USDT
                </div>
                <div className="row d-flex justify-content-center mt-3 mb-3">
                  <div className="col-md-10 col-10 box-backgorund">
                    <div className="d-flex justify-content-between p-3">
                      <label className="p-2 text-unit">Units:</label>
                      <input
                        placeholder="USDT"
                        type="number"
                        onChange={(e) => setUsdtUnit(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-10 col-10 box-backgorund mt-3">
                    <div className="d-flex justify-content-between">
                      <div className="p-2 text-unit">Cost:</div>
                      <div className="p-2 text-value  ">{usdtCost} USDT</div>
                    </div>
                  </div>
                  <div className="col-md-10 col-10  mb-3">
                    <div className="  mt-3">
                      <button
                        className="btn btn-wallet "
                        style={{ width: "100%" }}
                        type="button"
                        onClick={buyUsdt}
                      >
                        Withdraw all ETA to Wallet
                      </button>
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
                    <div className="d-flex justify-content-between p-3">
                      <label className="p-2 text-unit">Units:</label>
                      <input
                        placeholder="USDACE"
                        type="number"
                        onChange={(e) => setUsdaceUnit(e.target.value)}
                      ></input>
                      {/* <div className="p-2 text-unit">Units:</div>
                      <div className="p-2 text-value  ">525 USDT</div> */}
                    </div>
                  </div>
                  <div className="col-md-10 col-10 box-backgorund mt-3">
                    <div className="d-flex justify-content-between">
                      <div className="p-2 text-unit">Cost:</div>
                      <div className="p-2 text-value  ">{usdaceCost} USDT</div>
                    </div>
                  </div>
                  <div className="col-md-10 col-10  mb-3">
                    <div className="  mt-3">
                      <button
                        className="btn btn-wallet "
                        style={{ width: "100%" }}
                        type="button"
                      >
                        Withdraw all ETA to Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIsEta;
