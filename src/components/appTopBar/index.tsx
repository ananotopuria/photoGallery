import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const AppTopBar = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToHistory = () => {
    navigate("/history");
  };

  return (
    <div className="menu-wrapper">
      <div className="menu-wapper-inner">
        <div className="menu-item" onClick={navigateToHome}>
          Home
        </div>
        <div className="menu-item" onClick={navigateToHistory} >History</div>
      </div>
    </div>
  );
};

export default AppTopBar;
