import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import Filter from "./components/Filter";
import MealPlan from "./components/MealPlan";

import { me } from "./store";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, recipes, mealPlans } = this.props;
    return (
      <div>
        <Switch>
          <Route path="/" exact>
            <Filter recipes={recipes} />
          </Route>
          <Route path="/recipes/:recipeLabel" component={Recipe} />
        </Switch>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" exact>
              <Home mealPlans={mealPlans} />
            </Route>

            <Route
              path="/mealPlans/:id"
              render={(props) => <MealPlan {...props} recipes={recipes} />}
            />
            {/* <Redirect to="/home" /> */}
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
