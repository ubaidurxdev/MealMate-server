import { Router } from "express";
import { providerController } from "./providers.controller";

const router = Router();
router.get("/meals", providerController.getAllMeals);
export const providerRouter: Router = router;
