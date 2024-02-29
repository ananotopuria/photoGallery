import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../routes/home";
import History from "../../routes/history";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default CustomRoutes;
