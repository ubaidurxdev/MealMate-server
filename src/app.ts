import express, { Application } from "express";
import { mealsRouter } from "./modules/meals/meals.router";
import errorHandler from "./middlewares/globalErrorHandler";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:3000 ",
    credentials: true,
  }),
);
app.get("/", (req, res) => {
  res.send("Welcome to MealMate server");
});

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use("/api/provider", mealsRouter);
app.use(errorHandler);
export default app;
