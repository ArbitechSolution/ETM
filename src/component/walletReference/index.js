import React, { useEffect, useState } from "react";
import "./wallet.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { connectionAction } from "../../Redux/connection/actions";
import { contractAddress, contractAddressAbi } from "../utils/contractaddress";

function WalletRef() {
  const [ref, setRef] = useState();
  // const dispatch = useDispatch();
  let acc = useSelector((state) => state.connect?.connection);
  console.log(acc);

  const referral = async () => {
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
        let defaultReferral = await contract.methods.defaultRefer().call();
        console.log("contractaddress", defaultReferral);
        setRef(defaultReferral);
      }
    } catch (e) {
      console.log("Error While Buying Tokens", e);
    }
  };

  useEffect(() => {
    referral();
  }, [acc]);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 col-md-12">
          <div className="row  gap-3">
            <div className="col-md-12 col-12  input-box">
              <div className="row ">
                <div className="col-lg-4 col-md-5 col-12  ">
                  <h4 className="text-heading p-3 ">Wallet Address:</h4>
                </div>
                <div className=" col-lg-8 col-md-7 col-12  ">
                  <h4 className="text-address p-3 "> {acc}</h4>
                </div>
                {/* 
                <p className="text-address p-3">
                 
                </p> */}
              </div>
            </div>
            <div className="col-md-12 col-12  input-box">
              <div className="row  ">
                <div className="col-lg-4 col-md-4 col-12">
                  <h4 className="text-heading p-3 ">Referral Link:</h4>
                </div>
                <div className="col-lg-8 col-md-8 col-12 ">
                  <h4 className="text-address p-3 ">{ref}</h4>
                </div>
                {/* 
                <p className="text-address p-3">
                 
                </p> */}
              </div>
            </div>
            <div className="col-md-12 col-12 border ">
              <div className="row d-flex justify-content-between">
                <div className="col-md-9">
                  <input
                    className="input-box"
                    style={{ width: "100%" }}
                  ></input>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-lg btn-primary" style={{width:"100%"}}>Register</button>
                </div>
              </div>
              {/* <input className="input-box">
              </input> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletRef;
