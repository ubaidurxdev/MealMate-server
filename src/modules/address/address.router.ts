import { Router } from "express";
import { authentication, UserRole } from "../../middlewares/authentication";
import { addressController } from "./address.controller";

const router = Router();
router.post(
  "/",
  authentication(UserRole.Customer),
  addressController.createAddress,
);
export const addressRouter: Router = router;
