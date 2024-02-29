import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import CustomRoutes from "./components/routes";
import { BrowserRouter } from "react-router-dom";
import AppTopBar from "./components/appTopBar";

function App() {
  return (
    <BrowserRouter>
    <AppTopBar />
      <div className="App">
        <CustomRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
