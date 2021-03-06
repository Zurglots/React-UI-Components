import React from "react";
import "./App.css";
import "./components/HeaderComponents/HeaderContainer";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import CardContainer from "./components/CardComponents/CardContainer";

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
