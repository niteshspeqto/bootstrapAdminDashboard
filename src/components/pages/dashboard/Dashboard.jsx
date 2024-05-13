import React from "react";
import { EarningData } from "./dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Dashboard.css";
import { ProgressBar } from "react-bootstrap";
const Dashboard = () => {
  return (
    <div className="dashboard-card-container">
      {EarningData?.map((el) => {
        return (
          <div
            key={el.id}
            className="dashboard-card"
            style={{ borderLeft: `.25rem solid ${el.borderColor}` }}
          >
            <div className="dashboard-leftCard">
              <div className="dashboard-content">
                <div
                  className="dashboard-title"
                  style={{
                    color: `${el.borderColor}`,
                    fontSize: ".7rem",
                    fontWeight: "700",
                  }}
                >
                  {el.title}
                </div>
                <div
                  className="desc"
                  style={{
                    color: "#5a5c69",
                    fontWeight: "700",
                    fontSize: "20px",
                  }}
                >
                  {el.amount
                    ? el.amount
                    : el.progress
                    ? el.progress
                    : el.requests}
                </div>
              </div>
            </div>
            {el.progress ? (
              <ProgressBar
                variant={"info"}
                className="dashboard-card-progress-bar"
                now={el?.progress}
                min={0}
                max={100}
                style={{ height: "0.6rem" }}
              />
            ) : (
              ""
            )}

            <div className="dashboard-rightCard">
              <FontAwesomeIcon
                icon={el.icon}
                size="2xl"
                style={{ color: "#DDDFEB" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
