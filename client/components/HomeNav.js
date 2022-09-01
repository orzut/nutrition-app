import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <nav id="home-nav">
      <div>All recipes</div>
      <div>Diet</div>
      <div>Allergies</div>
    </nav>
  );
};

export default connect()(HomeNav);
