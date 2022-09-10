import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@mui/material";
/**
 * COMPONENT
 */

export const Home = (props) => {
  const { mealPlans } = props;
  return (
    <div id="img-margin">
      <h2>Choose your weekly health goal</h2>
      <div className="meal-plans">
        {mealPlans.map((mealPlan) => {
          return (
            <Link
              to={{ pathname: `/mealPlans/${mealPlan.id}`, state: mealPlan }}
              key={mealPlan.id}
            >
              <Card sx={{ maxWidth: 345, minHeight: 250 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={mealPlan.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {mealPlan.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {mealPlan.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
