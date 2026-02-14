import { Router } from "express";
import { mealsController } from "./meals.controller";
import { authentication, UserRole } from "../../middlewares/authentication";

const router = Router();

router.post("/meals",authentication(UserRole.Customer), mealsController.createMeals)

export const mealsRouter: Router = router;
