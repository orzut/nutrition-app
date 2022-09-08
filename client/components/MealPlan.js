import React from "react";
import { Link } from "react-router-dom";

export const RecipesList = ({ mealType }) => {
  return (
    <ul>
      {mealType.map((recipe) => {
        return (
          <li key={recipe.recipe.label} className="single-recipe">
            <Link
              to={{
                pathname: `/recipes/${recipe.recipe.label}`,
                state: recipe.recipe,
              }}
            >
              <img src={recipe.recipe.image}></img>
            </Link>
            <div>
              <p>Calories: {Math.round(recipe.recipe.calories)}</p>
              <p>
                Protein:{" "}
                {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)}{" "}
                {recipe.recipe.totalNutrients.PROCNT.unit}
              </p>
              <p>
                Fat: {Math.round(recipe.recipe.totalNutrients.FAT.quantity)}{" "}
                {recipe.recipe.totalNutrients.FAT.unit}
              </p>
              <p>
                Carbs:{" "}
                {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}{" "}
                {recipe.recipe.totalNutrients.CHOCDF.unit}
              </p>
              <hr />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const MealPlan = ({ recipes, location }) => {
  const mealPlan = location.state;
  const getFitRecipes = recipes.filter((recipe) =>
    recipe.recipe.dietLabels.includes("Balanced")
  );
  const gainMuscleRecipes = recipes.filter(
    (recipe) => recipe.recipe.totalDaily.PROCNT.quantity > 40
  );
  const loseWeightRecipes = recipes.filter(
    (recipe) => recipe.recipe.totalDaily.CHOCDF.quantity < 10
  );

  function getPlanRecipes(mealName) {
    if (mealName === "Get Fit") {
      return getFitRecipes;
    } else if (mealName === "Gain Muscle") {
      return gainMuscleRecipes;
    } else if (mealName === "Lose Weight") {
      return loseWeightRecipes;
    }
  }
  const mealPlanRecipes = getPlanRecipes(mealPlan.name);

  const breakfast = mealPlanRecipes
    .filter(
      (recipe) =>
        recipe.recipe.mealType.includes("breakfast") ||
        recipe.recipe.mealType.includes("teatime") ||
        recipe.recipe.mealType.includes("snack")
    )
    .slice(0, 7);
  console.log(breakfast);
  const lunchDinner = mealPlanRecipes
    .filter((recipe) => recipe.recipe.mealType.includes("lunch/dinner"))
    .slice(0, 14);
  return (
    <div id="img-margin">
      <h2>{mealPlan.name}</h2>
      <div className="header">
        <p>Breakfast</p>
        <p>Lunch</p>
        <p>Dinner</p>
      </div>
      <div className="meal-plan-recipes">
        <ul className="days">
          {[1, 2, 3, 4, 5, 6, 7].map((day) => {
            return <li key={day}>Day {day}</li>;
          })}
        </ul>
        <RecipesList mealType={breakfast} />
        <RecipesList mealType={lunchDinner.slice(0, 7)} />
        <RecipesList mealType={lunchDinner.slice(7)} />
      </div>
    </div>
  );
};

export default MealPlan;
