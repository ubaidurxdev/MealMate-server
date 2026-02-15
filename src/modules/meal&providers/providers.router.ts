import { Router } from "express";
import { providerController } from "./providers.controller";
import { authentication, UserRole } from "../../middlewares/authentication";

const router = Router();
router.get("/meals", providerController.getAllMeals);
router.get("/meals/:id", providerController.getMealsById);
router.get("/providers/:id", providerController.getProviderById);
router.get("/providers", providerController.getAllProviders);
router.post(
  "/providers",
  authentication(UserRole.Provider),
  providerController.createProviders,
);
router.put(
  "/providers/:id",
  authentication(UserRole.Provider),
  providerController.updateProvider,
);
export const providerRouter: Router = router;
