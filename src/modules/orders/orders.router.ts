import { Router } from "express";
import { ordersController } from "./orders.controller";
import { authentication, UserRole } from "../../middlewares/authentication";

const router = Router();
router.post(
  "/",
  authentication(UserRole.Customer),
  ordersController.createOrders,
);
export const ordersRouter: Router = router;
