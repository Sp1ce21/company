import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MarqueeBlock from "./components/Marquee/Marquee";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Main />
      </div>
      <MarqueeBlock />
    </div>
  );
}

export default App;
