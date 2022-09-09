import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

const mealPlans = [
  {
    id: 1,
    name: "Get Fit",
    image: "images/foods_to_eat_to_lose_weight.jpeg",
    description:
      "Get fit with balanced meals that are rich of healthy nutrients for your body",
  },
  {
    id: 2,
    name: "Gain Muscle",
    image: "images/main-qimg-507a0664289756d2c386a0140d8ff58b-lq.jpeg",
    description: "Gain muscles with high-protein based meals",
  },
  {
    id: 3,
    name: "Lose Weight",
    image:
      "images/selection-of-food-that-is-good-for-the-heart-royalty-free-image-509858326-1543262808.jpeg",
    description:
      "Lose weight with low-carb balanced meals that will still keep you full",
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      mealPlans: [],
    };
    this.fetchRecipes = this.fetchRecipes.bind(this);
  }

  async fetchRecipes() {
    const apiURL = "https://api.edamam.com";
    const apiKey = "c9727e31667074ebf77371526e9e0e61";
    const apiId = "ea2f6d6e";
    let response = await axios.get(
      `${apiURL}/search?q=&app_id=${apiId}&app_key=${apiKey}&to=100&ingr=10`
    );
    const recipes = response.data.hits;
    this.setState({ recipes: recipes });
  }

  componentDidMount() {
    this.fetchRecipes();
    this.setState({ mealPlans: mealPlans });
  }
  render() {
    return (
      <div>
        <Navbar />
        <Routes recipes={this.state.recipes} mealPlans={this.state.mealPlans} />
      </div>
    );
  }
}

export default App;
