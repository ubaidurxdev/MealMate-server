import { Router } from "express";
import { providerController } from "./providers.controller";

const router = Router();
router.get("/meals", providerController.getAllMeals);
router.get("/meals/:id", providerController.getMealsById);
export const providerRouter: Router = router;
