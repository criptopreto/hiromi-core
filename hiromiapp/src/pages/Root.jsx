import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./Index";
import Products from "./Products";
import ResumeProducts from "./ResumeProducts";

export default function Root() {
  return (
    <Router>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/resumenproducts">
        <ResumeProducts />
      </Route>
      <Route exact path="/">
        <Index />
      </Route>
    </Router>
  );
}
