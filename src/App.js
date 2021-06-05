import React from "react";
import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
