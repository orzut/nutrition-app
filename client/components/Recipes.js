import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        return (
          <Link
            to={{
              pathname: `/recipes/${recipe.recipe.label}`,
              state: recipe.recipe,
            }}
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
