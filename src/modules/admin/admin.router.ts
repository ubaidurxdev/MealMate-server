import { Router } from "express";
import { authentication, UserRole } from "../../middlewares/authentication";
import { adminController } from "./admin.controller";

const router = Router();
router.get(
  "/users",
  authentication(UserRole.Admin),
  adminController.getAllUsers,
);
export const adminRouter: Router = router;
