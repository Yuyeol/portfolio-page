import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import About from "Routes/About";
import Portfolio from "Routes/Portfolio";
import Contact from "Routes/Contact";

const Router = () => (
  <BrowserRouter>
    <>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/about" exact component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
    </>
  </BrowserRouter>
);

export default Router;
