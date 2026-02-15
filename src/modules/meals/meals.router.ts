import { Router } from "express";
import { mealsController } from "./meals.controller";
import { authentication, UserRole } from "../../middlewares/authentication";

const router = Router();

router.post(
  "/meals",
  authentication(UserRole.Provider),
  mealsController.createMeals,
);
router.put(
  "/meals/:id",
  authentication(UserRole.Provider),
  mealsController.updateMeals,
);
router.patch("/orders/:id",authentication(UserRole.Provider), mealsController.updateOrderStatus)
router.delete(
  "/meals/:id",
  authentication(UserRole.Provider),
  mealsController.deleteMeals,
);
export const mealsRouter: Router = router;
