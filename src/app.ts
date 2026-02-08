import express, { Application } from "express";
import { mealsRouter } from "./modules/meals/meals.router";
const app: Application = express();
app.get("/", (req, res) => {
  res.send("Welcome to MealMate server");
});
app.use("/api/provider", mealsRouter);
export default app;
