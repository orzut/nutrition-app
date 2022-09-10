import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Collapse,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CanvasJSReact from "../canvasjs-3.6.7/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Recipe = ({ location }) => {
  const [openMinerals, setOpenMinerals] = useState(false);
  const [openVitamins, setOpenVitamins] = useState(false);

  const recipe = location.state;
  const servingCal = Math.round(recipe.calories / recipe.yield);
  const dailyVal = Math.round(2000 / servingCal);
  const fiber = {
    label: recipe.totalDaily.FIBTG.label,
    y: Math.round(recipe.totalDaily.FIBTG.quantity),
  };
  const data = recipe.digest
    .filter(
      (nutrient) =>
        nutrient.label === "Fat" ||
        nutrient.label === "Carbs" ||
        nutrient.label === "Protein"
    )
    .map((nutrient) => {
      return { label: nutrient.label, y: Math.round(nutrient.daily) };
    })
    .concat(fiber);
  console.log(data);
  const options = {
    title: {
      text: "Daily Value (%)",
    },
    theme: "light2",
    toolTip: {
      shared: true,
    },
    dataPointWidth: 30,
    height: 250,
    legend: {
      verticalAlign: "top",
    },
    axisY: {
      suffix: "%",
    },
    data: [
      {
        type: "bar",
        color: "#027505",
        name: "Nutrients",
        showInLegend: true,
        indexLabel: "{y}",
        indexLabelFontColor: "white",
        yValueFormatString: "#,###'%'",
        dataPoints: data,
      },
    ],
  };

  return (
    <div id="img-margin">
      <h2>{recipe.label}</h2>
      <div id="recipe-page">
        <div id="image">
          <img src={recipe.image}></img>
          <p>
            See full recipe: <a href={recipe.url}>{recipe.source}</a>
          </p>
        </div>
        <div id="details">
          <CanvasJSChart options={options} />
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
              <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpenMinerals(!openMinerals)}
                  >
                    {openMinerals ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "bold" }}
                >
                  Minerals
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={10}
                >
                  <Collapse in={openMinerals} timeout="auto" unmountOnExit>
                    <Table sx={{ width: 500 }} aria-label="simple table">
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            {recipe.totalNutrients.CA.label}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalNutrients.CA.quantity)}{" "}
                            {recipe.totalNutrients.CA.unit}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalDaily.CA.quantity)}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            {recipe.totalNutrients.MG.label}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalNutrients.MG.quantity)}{" "}
                            {recipe.totalNutrients.MG.unit}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalDaily.MG.quantity)}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            {recipe.totalNutrients.ZN.label}
                          </TableCell>
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
                  </Collapse>
                </TableCell>
              </TableRow>

              <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpenVitamins(!openVitamins)}
                  >
                    {openVitamins ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "bold" }}
                >
                  Vitamins
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={10}
                >
                  <Collapse in={openVitamins} timeout="auto" unmountOnExit>
                    <Table sx={{ width: 500 }} aria-label="simple table">
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            {recipe.totalNutrients.TOCPHA.label}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalNutrients.TOCPHA.quantity)}{" "}
                            {recipe.totalNutrients.TOCPHA.unit}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalDaily.TOCPHA.quantity)}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            {recipe.totalNutrients.VITB6A.label}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalNutrients.VITB6A.quantity)}{" "}
                            {recipe.totalNutrients.VITB6A.unit}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalDaily.VITB6A.quantity)}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            {recipe.totalNutrients.VITB12.label}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalNutrients.VITB12.quantity)}{" "}
                            {recipe.totalNutrients.VITB12.unit}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalDaily.VITB12.quantity)}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            {recipe.totalNutrients.VITC.label}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalNutrients.VITC.quantity)}{" "}
                            {recipe.totalNutrients.VITC.unit}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalDaily.VITC.quantity)}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            {recipe.totalNutrients.VITD.label}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalNutrients.VITD.quantity)}{" "}
                            {recipe.totalNutrients.VITD.unit}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(recipe.totalDaily.VITD.quantity)}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Collapse>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
