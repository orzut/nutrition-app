import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import HomeNav from "./components/HomeNav";
import Recipes from "./components/Recipes";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
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
  }
  render() {
    const { recipes } = this.state;
    return (
      <div>
        <Navbar />
        <Routes />
        <Search recipes={recipes} />
        <Recipes recipes={recipes} />
      </div>
    );
  }
}

export default App;
