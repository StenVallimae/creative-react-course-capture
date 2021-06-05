import React from "react";
import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
//router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
