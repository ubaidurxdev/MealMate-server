import express, { Application } from "express";
import { mealsRouter } from "./modules/meals/meals.router";
import errorHandler from "./middlewares/globalErrorHandler";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
import { ordersRouter } from "./modules/orders/orders.router";
import { adminRouter } from "./modules/admin/admin.router";
import { providerRouter } from "./modules/meal&providers/providers.router";
import { usersRouter } from "./modules/users/users.router";
const app: Application = express();

app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:3000 ",
    credentials: true,
  }),
);
app.all("/api/auth/*splat", toNodeHandler(auth));
app.get("/", (req, res) => {
  res.send("Welcome to MealMate server");
});

app.use(express.json());
app.use("/api/provider", mealsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/admin", adminRouter);
app.use("/api", providerRouter);
app.use("/api/users", usersRouter);
app.use(errorHandler);
export default app;
