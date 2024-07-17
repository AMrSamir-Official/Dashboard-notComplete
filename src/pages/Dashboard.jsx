/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

import Dashboar from "../components/Dashbord";
import DateTime from "../components/spicial/Datetime";
import LineChart from "../components/spicial/LineChart";
import LinesChart from "../components/spicial/LinesChart";
// import ProgressCircle from "../components/spicial/ProgressCircle";
import PyramidChart from "../components/spicial/PyramidChart ";
// import StatBox from "../components/spicial/StatBox";
import { mockTransactions } from "../data/mockData";
const Dashboard = () => {
  const colors = {
    blueAccent: { 700: "#007bb5" }, // Example color values, replace with your theme
    grey: { 100: "#f5f5f5" },
    primary: { 400: "#303f9f", 500: "#1a237e" },
    greenAccent: { 500: "#4caf50", 600: "#388e3c" },
    grey: { 100: "#f5f5f5" },
  };

  return (
    <div style={{ margin: "20px", marginBottom: "10px" }}>
      <Dashboar />
      <LinesChart />
      <DateTime />
      <PyramidChart />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <button
            style={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IoCloudDownloadOutline
              style={{ marginRight: "10px", fontSize: "20px" }}
            />
            Download Reports
          </button>
        </div>
      </div>

      {/* GRID & CHARTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(175px,1fr))",
          gridAutoRows: "140px",
          gap: "20px",
        }}
      >
        {/* ROW 1 */}
        <div
          className="flex gap-10 flex-wrap m-2
        "
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            width: "98vw",
          }}
        >
          {/* <div
            style={{
              gridColumn: "span 3",
              backgroundColor: colors.primary[400],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StatBox
              title="1,325,134"
              subtitle="Traffic Received"
              progress="0.80"
              increase="+43%"
              icon={
                <MdOutlineTraffic
                  style={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </div> */}
        </div>

        {/* ROW 2 */}
        <div
          style={{
            gridColumn: "span 8",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <div
            style={{
              marginTop: "25px",
              padding: "0 30px",
              maxWidth: "100vw",

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h5 style={{ fontWeight: "600", color: colors.grey[100] }}>
                Revenue Generated
              </h5>
              <h3
                style={{ fontWeight: "bold", color: colors.greenAccent[500] }}
              >
                $59,342.32
              </h3>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <IoCloudDownloadOutline
                  style={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </button>
            </div>
          </div>
          <div style={{ height: "250px", margin: "-20px 0 0 0" }}>
            <LineChart isDashboard={true} />
          </div>
        </div>
        <div
          style={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            overflow: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `4px solid ${colors.primary[500]}`,
              color: colors.grey[100],
              padding: "15px",
            }}
          >
            <h5 style={{ fontWeight: "600", color: colors.grey[100] }}>
              Recent Transactions
            </h5>
          </div>
          {mockTransactions.map((transaction, i) => (
            <div
              key={`${transaction.txId}-${i}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `4px solid ${colors.primary[500]}`,
                padding: "15px",
              }}
            >
              <div>
                <h5
                  style={{ color: colors.greenAccent[500], fontWeight: "600" }}
                >
                  {transaction.txId}
                </h5>
                <p style={{ color: colors.grey[100] }}>{transaction.user}</p>
              </div>
              <div style={{ color: colors.grey[100] }}>{transaction.date}</div>
              <div
                style={{
                  backgroundColor: colors.greenAccent[500],
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                ${transaction.cost}
              </div>
            </div>
          ))}
        </div>

        {/* ROW 3 */}
        {/* <div
          style={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            padding: "30px",
            height: "fit-content",
          }}
        >
      <h5 style={{ fontWeight: "600" }}>Campaign</h5>  
         <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "25px",
            }}
          >
            <ProgressCircle size="125" />
            <h5 style={{ color: colors.greenAccent[500], marginTop: "15px" }}>
              $48,352 revenue generated
            </h5>
            <p>Includes extra misc expenditures and costs</p>
          </div>  
        </div> */}

        {/* <div
          style={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            padding: "30px",
          }}
        >
          <h5 style={{ marginBottom: "15px", fontWeight: "600" }}>
            Geography Based Traffic
          </h5>
          <div>
            <GeographyChart isDashboard={true} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
