import { Router } from "express";
import { providerController } from "./providers.controller";
import { authentication, UserRole } from "../../middlewares/authentication";

const router = Router();
router.get("/meals", providerController.getAllMeals);
router.get("/meals/:id", providerController.getMealsById);
router.get("/providers", providerController.getAllProviders);
router.post("/providers",authentication(UserRole.Provider), providerController.createProviders);
export const providerRouter: Router = router;
