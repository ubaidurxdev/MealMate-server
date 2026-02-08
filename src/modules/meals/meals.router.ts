import { Router } from "express";
import { mealsController } from "./meals.controller";

const router = Router();

router.post("/meals", mealsController.createMeals)

export const mealsRouter: Router = router;
