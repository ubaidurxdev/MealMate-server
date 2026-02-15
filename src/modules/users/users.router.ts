import { Router } from "express";
import { authentication, UserRole } from "../../middlewares/authentication";
import { usersController } from "./users.controller";

const router = Router();
router.get(
  "/me",
  authentication(UserRole.Admin, UserRole.Customer, UserRole.Provider),
  usersController.getCurrentUser
);
export const usersRouter: Router = router;
