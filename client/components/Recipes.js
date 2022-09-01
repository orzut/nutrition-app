import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "./Search";

const Recipes = ({ recipes }) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        return (
          <Link
            to={`/recipes/${recipe.recipe.uri}`}
            key={recipe.recipe.uri}
            className="recipe"
          >
            <img src={recipe.recipe.image}></img>
            <p>{recipe.recipe.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default connect()(Recipes);
