import React, { useState } from "react";
import { connect } from "react-redux";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import Recipes from "./Recipes";

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
    }
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200, height: 5 }}>
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
      <FormControl sx={{ m: 1, width: 200 }}>
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
      <FormControl sx={{ m: 1, width: 200 }}>
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
      <FormControl sx={{ m: 1, width: 200 }}>
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
      <FormControl sx={{ m: 1, width: 250 }}>
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
    </div>
  );
};

export default connect()(Filter);
