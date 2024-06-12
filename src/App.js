import React, { useState } from "react";
import CurrentLocation from "./components/currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a target="_blank" href="https://github.com/SwarupDeb">
        Github
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://swarupdeb.github.io/My-PortFolio/">
          Swarup Deb
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;