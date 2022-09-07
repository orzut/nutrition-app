import React from "react";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const Recipe = ({ location }) => {
  const recipe = location.state;
  const servingCal = Math.round(recipe.calories / recipe.yield);
  const dailyVal = Math.round(2000 / servingCal);
  console.log(recipe);
  return (
    <div>
      <h2>{recipe.label}</h2>
      <div id="recipe-page">
        <div id="image">
          <img src={recipe.image}></img>
          <p>
            See full recipe: <a href={recipe.url}>{recipe.source}</a>
          </p>
        </div>
        <div id="details">
          <div id="header">
            <p>{recipe.yield} servings</p>
            <p>{servingCal} cal/serving</p>
            <p>{dailyVal}% daily value</p>
          </div>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Nutrients:</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Total
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Daily Value (%)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{recipe.totalNutrients.PROCNT.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.PROCNT.quantity)}{" "}
                  {recipe.totalNutrients.PROCNT.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.PROCNT.quantity)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.totalNutrients.FAT.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.FAT.quantity)}{" "}
                  {recipe.totalNutrients.FAT.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.FAT.quantity)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.totalNutrients.CHOCDF.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.CHOCDF.quantity)}{" "}
                  {recipe.totalNutrients.CHOCDF.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.CHOCDF.quantity)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.totalNutrients.CA.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.CA.quantity)}{" "}
                  {recipe.totalNutrients.CA.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.CA.quantity)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.totalNutrients.FIBTG.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.FIBTG.quantity)}{" "}
                  {recipe.totalNutrients.FIBTG.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.FIBTG.quantity)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.totalNutrients.CHOLE.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.CHOLE.quantity)}{" "}
                  {recipe.totalNutrients.CHOLE.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.CHOLE.quantity)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.totalNutrients.MG.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.MG.quantity)}{" "}
                  {recipe.totalNutrients.MG.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.MG.quantity)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.totalNutrients.TOCPHA.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.TOCPHA.quantity)}{" "}
                  {recipe.totalNutrients.TOCPHA.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.TOCPHA.quantity)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.totalNutrients.VITB6A.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.VITB6A.quantity)}{" "}
                  {recipe.totalNutrients.VITB6A.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.VITB6A.quantity)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.totalNutrients.VITB12.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.VITB12.quantity)}{" "}
                  {recipe.totalNutrients.VITB12.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.VITB12.quantity)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.totalNutrients.VITC.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.VITC.quantity)}{" "}
                  {recipe.totalNutrients.VITC.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.VITC.quantity)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.totalNutrients.VITD.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.VITD.quantity)}{" "}
                  {recipe.totalNutrients.VITD.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.VITD.quantity)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.totalNutrients.ZN.label}</TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalNutrients.ZN.quantity)}{" "}
                  {recipe.totalNutrients.ZN.unit}
                </TableCell>
                <TableCell align="right">
                  {Math.round(recipe.totalDaily.ZN.quantity)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default connect()(Recipe);
