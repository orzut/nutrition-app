import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Recipes from "./Recipes";
import _ from "lodash";

const dietTypes = [
  "balanced",
  "high-protein",
  "high-fiber",
  "low-fat",
  "low-carb",
  "low-sodium",
];
const allergyTypes = [
  "gulten-free",
  "peanut-free",
  "dairy-free",
  "soy-free",
  "egg-free",
  "fish-free",
];
const cuisineTypes = [
  "american",
  "mediterranean",
  "japanese",
  "italian",
  "british",
  "world",
  "french",
  "caribbean",
  "chinese",
  "indian",
];
const mealTypes = ["lunch/dinner", "breakfast", "teatime", "snack"];
const dishTypes = [
  "starters",
  "condiments and sauces",
  "main course",
  "alcohol cocktail",
  "drinks",
  "desserts",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const Filter = ({ recipes }) => {
  const [diet, setDiet] = useState([]);
  const [allergy, setAllergies] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  const [meal, setMeal] = useState([]);
  const [dish, setDish] = useState([]);
  const [searchField, setSearchField] = useState("");

  function onChange(ev) {
    const name = ev.target.name;
    const value = ev.target.value;

    if (name === "diet") {
      setDiet(value);
    } else if (name === "allergy") {
      setAllergies(value);
    } else if (name === "cuisine") {
      setCuisine(value);
    } else if (name === "meal") {
      setMeal(value);
    } else if (name === "dish") {
      setDish(value);
    } else if (name === "search") {
      setSearchField(value);
    }
  }

  const searchFilter = recipes.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase())
  );

  const dietFilter = recipes.filter((recipe) => {
    const dietLabels = recipe.recipe.dietLabels;
    const dietCount = dietLabels.reduce((acc, dietLabel) => {
      if (diet.includes(dietLabel.toLowerCase())) acc++;
      return acc;
    }, 0);
    if (dietCount) {
      return recipe;
    }
  });

  const allergyFilter = recipes.filter((recipe) => {
    const healthLabels = recipe.recipe.healthLabels;
    const allergyCount = healthLabels.reduce((acc, healthLabel) => {
      if (allergy.includes(healthLabel.toLowerCase())) acc++;
      return acc;
    }, 0);
    if (allergyCount) {
      return recipe;
    }
  });

  const cuisineFilter = recipes.filter((recipe) => {
    const cuisineTypes = recipe.recipe.cuisineType;
    const cuisineCount = cuisineTypes.reduce((acc, cuisineType) => {
      if (cuisine.includes(cuisineType.toLowerCase())) acc++;
      return acc;
    }, 0);
    if (cuisineCount) {
      return recipe;
    }
  });

  const mealFilter = recipes.filter((recipe) => {
    const mealTypes = recipe.recipe.mealType;
    const mealCount = mealTypes.reduce((acc, mealType) => {
      if (meal.includes(mealType.toLowerCase())) acc++;
      return acc;
    }, 0);
    if (mealCount) {
      return recipe;
    }
  });

  const dishFilter = recipes.filter((recipe) => {
    const dishTypes = recipe.recipe.dishType || [];
    const dishCount = dishTypes.reduce((acc, dishType) => {
      if (dish.includes(dishType.toLowerCase())) acc++;
      return acc;
    }, 0);
    if (dishCount) {
      return recipe;
    }
  });

  const dietFiltered = recipes.filter((recipe) => {
    if (dietFilter.length) {
      return dietFilter.includes(recipe);
    } else {
      return recipe;
    }
  });

  const cuisineFiltered = dietFiltered.filter((recipe) => {
    if (cuisineFilter.length) {
      return cuisineFilter.includes(recipe);
    } else return recipe;
  });
  const allergyFiltered = cuisineFiltered.filter((recipe) => {
    if (allergyFilter.length) {
      return allergyFilter.includes(recipe);
    } else return recipe;
  });
  const mealFiltered = allergyFiltered.filter((recipe) => {
    if (mealFilter.length) {
      return mealFilter.includes(recipe);
    } else return recipe;
  });
  const dishFiltered = mealFiltered.filter((recipe) => {
    if (dishFilter.length) {
      return dishFilter.includes(recipe);
    } else return recipe;
  });

  const allFilters = dishFiltered.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div id="img-margin">
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          m: "auto",
          mb: 3,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Recipes"
          name="search"
          onChange={onChange}
          value={searchField}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <FormControl sx={{ m: 1, width: 230 }}>
        <InputLabel>Diet</InputLabel>
        <Select
          multiple
          value={diet}
          onChange={onChange}
          name="diet"
          input={<OutlinedInput label="Diet" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {dietTypes.map((dietType) => (
            <MenuItem key={dietType} value={dietType}>
              <Checkbox checked={diet.indexOf(dietType) > -1} />
              <ListItemText primary={dietType} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 230 }}>
        <InputLabel>Allergies</InputLabel>
        <Select
          multiple
          value={allergy}
          name="allergy"
          onChange={onChange}
          input={<OutlinedInput label="Allergies" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {allergyTypes.map((allergyType) => (
            <MenuItem key={allergyType} value={allergyType}>
              <Checkbox checked={allergy.indexOf(allergyType) > -1} />
              <ListItemText primary={allergyType} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 230 }}>
        <InputLabel>Cuisine</InputLabel>
        <Select
          multiple
          value={cuisine}
          name="cuisine"
          onChange={onChange}
          input={<OutlinedInput label="Cuisine" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {cuisineTypes.map((cuisineType) => (
            <MenuItem key={cuisineType} value={cuisineType}>
              <Checkbox checked={cuisine.indexOf(cuisineType) > -1} />
              <ListItemText primary={cuisineType} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 230 }}>
        <InputLabel>Meal</InputLabel>
        <Select
          multiple
          value={meal}
          name="meal"
          onChange={onChange}
          input={<OutlinedInput label="Meal" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {mealTypes.map((mealType) => (
            <MenuItem key={mealType} value={mealType}>
              <Checkbox checked={meal.indexOf(mealType) > -1} />
              <ListItemText primary={mealType} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 230 }}>
        <InputLabel>Dish</InputLabel>
        <Select
          multiple
          value={dish}
          name="dish"
          onChange={onChange}
          input={<OutlinedInput label="Dish" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {dishTypes.map((dishType) => (
            <MenuItem key={dishType} value={dishType}>
              <Checkbox checked={dish.indexOf(dishType) > -1} />
              <ListItemText primary={dishType} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {allFilters.length === 0 ? (
        <Recipes recipes={recipes} />
      ) : (
        <Recipes recipes={allFilters} />
      )}
    </div>
  );
};

export default Filter;
