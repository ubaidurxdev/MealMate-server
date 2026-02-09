import express, { Application } from "express";
import { mealsRouter } from "./modules/meals/meals.router";
import errorHandler from "./middlewares/globalErrorHandler";
const app: Application = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to MealMate server");
});
app.use("/api/provider", mealsRouter);
app.use(errorHandler)
export default app;
