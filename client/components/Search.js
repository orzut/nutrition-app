import React, { useState } from "react";
import { connect } from "react-redux";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Recipes from "./Recipes";
import Filter from "./Filter";

const Search = ({ recipes }) => {
  const [searchField, setSearchField] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase())
  );
  function onChange(ev) {
    setSearchField(ev.target.value);
  }

  return (
    <div>
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          m: "auto",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Recipes"
          onChange={onChange}
          value={searchField}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Filter recipes={recipes} />
      {filteredRecipes.length === 0 ? (
        <h2>No Recipes Found!</h2>
      ) : (
        <Recipes recipes={filteredRecipes} />
      )}
    </div>
  );
};

export default connect()(Search);
