import React, { useEffect, useState } from "react";
import axios from "axios";
import "./tabledata.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const TableData = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    return axios
      .get("http://127.0.0.1:4000/api")
      .then((response) => setData(response.data.data));
  };
  console.log("this is list", data);
  useEffect(() => {
    fetchData();
  }, []);
  console.log("hello");

  return (
    <>
      {data.map((item) => {
        return (
          <div className="container" key={item.id}>
            <div className="table-data">
              <div className="category">
                <span className="location bill-category">
                  <ElectricBoltIcon />
                  {item.energy_type} <span className="tatal-data">{data.length}</span>
                </span>
                {/* <span className='location bill-category'><SolarPowerIcon />Solar</span> */}
                <div className="filter-area">
                  <span className="location location bill-category">
                    <LocationOnIcon />
                    2000, NSW
                  </span>
                </div>
              </div>
              <div className="details">
                <div className="box1">
                  <h3 className="brand-name">{item.provider_name}</h3>

                  <img src={item.provider_image} alt="" />

                  <div
                    dangerouslySetInnerHTML={{ __html: item.features }}
                    style={{ textAlign: "left", padding: "10px" }}
                  ></div>
                </div>
                <div className="box2">
                  <div>
                    <div>
                      <h3 className="updating-price">
                        {item.dmo_percentage.Ausgrid + " "}
                        {item.plan_name_below_data}
                      </h3>
                    </div>
                    <div className="options">
                      <div style={{ display: "flex" }}>
                        <span>
                          <CheckCircleOutlineIcon className="circle" />
                        </span>
                        <span>12 Month Energy Plan Period</span>
                      </div>

                      <div style={{ display: "flex" }}>
                        <span>
                          <CheckCircleOutlineIcon className="circle" />
                        </span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item.view_contract,
                          }}
                        ></span>
                      </div>
                      <div style={{ display: "flex" }}>
                        <span>
                          <CheckCircleOutlineIcon className="circle" />
                        </span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item.view_exit_fee,
                          }}
                        ></span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          background: "rgb(1, 64, 85)",
                          alignItems: "center",
                          marginTop: "40px",
                          borderRadius: "5px",
                          padding: "0px 10px 5px 10px",
                          color: "white",
                        }}
                      >
                        <span>{/* <CheckCircleOutlineIcon /> */}</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item.view_discount,
                          }}
                        ></span>
                      </div>
                    </div>

                    <div></div>
                  </div>
                </div>
                <div className="box3">
                  <h3 className="cost">Estimated Cost $</h3>
                  <div className="price">
                    <h2 className="year-cost">
                      ${item.expected_bill_amount}^
                      <span style={{ color: "white", fontSize: "15px" }}>
                        /yr
                      </span>
                    </h2>
                  </div>
                  <div className="price">
                    <h3 className="month-cost">
                      ${item.expected_monthly_bill_amount}
                      <span style={{ color: "white", fontSize: "15px" }}>
                        /mo
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <br />
              <div className="advantage">
                <div
                  dangerouslySetInnerHTML={{ __html: item.dmo_content.Ausgrid }}
                ></div>
              </div>
              <div>
                <div className="connect-data">
                  <div style={{ display: "flex", minWidth:"200px" }}>
                    <span>
                      <CheckCircleOutlineIcon className="circle" />
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.cooling_off_period,
                      }}
                    ></span>
                  </div>
                  <div style={{ display: "flex", minWidth:"200px" }}>
                    <span>
                      <CheckCircleOutlineIcon className="circle" />
                    </span>
                    <span>Secure Sign Up in 5 Mins</span>
                  </div>
                  <div style={{ display: "flex", minWidth:"200px" }}>
                    <span>
                      <CheckCircleOutlineIcon className="circle" />
                    </span>
                    <span>Save Time & Effort</span>
                  </div>
                  <div>
                    <button className="connect-btn">
                      Connect Online Today
                    </button>
                  </div>
                </div>
                <div className="advantage">
                  <p>{item.plan_desc}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TableData;
