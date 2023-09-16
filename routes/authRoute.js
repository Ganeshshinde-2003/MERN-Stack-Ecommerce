import express from "express";

import {
  registerController,
  loginController,
  forgotPasswordController,
} from "../controller/authController.js";

import { isAdmin, requireSignin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/forgot-password", forgotPasswordController);

router.get("/user-auth", requireSignin, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/admin-auth", requireSignin, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
