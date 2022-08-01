import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MarqueeBlock from "./components/Marquee/Marquee";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
      </div>
      <MarqueeBlock />
    </div>
  );
}

export default App;
