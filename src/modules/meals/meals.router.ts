import { Router } from "express";
import { mealsController } from "./meals.controller";
import { authentication, UserRole } from "../../middlewares/authentication";

const router = Router();

router.post("/meals",authentication(UserRole.Provider), mealsController.createMeals)
router.patch("/meals/:id",authentication(UserRole.Provider),mealsController.updateMeals)
export const mealsRouter: Router = router;
