import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import usePagination from "./Pagination";

const Recipes = ({ recipes }) => {
  let [page, setPage] = useState(1);
  const perPage = 16;

  const count = Math.ceil(recipes.length / perPage);
  const data = usePagination(recipes, perPage);

  const handleChange = (ev, p) => {
    setPage(p);
    data.jump(p);
  };
  return (
    <div>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        showFirstButton
        showLastButton
        sx={{ ml: 50, mt: 5 }}
      />
      <div className="recipes-list">
        {data.currentData().map((recipe) => {
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
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        showFirstButton
        showLastButton
        sx={{ ml: 50 }}
      />
    </div>
  );
};

export default Recipes;
