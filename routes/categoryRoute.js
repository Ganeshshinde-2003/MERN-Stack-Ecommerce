import express from "express";
import { isAdmin, requireSignin } from "../middleware/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  categoryController,
  singleCategory,
  deleteCategory,
} from "../controller/createCategoryController.js";

const router = express.Router();

router.post(
  "/create-category",
  requireSignin,
  isAdmin,
  createCategoryController
);

router.put(
  "/update-catergory/:id",
  requireSignin,
  isAdmin,
  updateCategoryController
);

router.get("/get-category", categoryController);

router.get("/single-category/:slug", singleCategory);

router.delete("/delete-category/:id", requireSignin, isAdmin, deleteCategory);

export default router;
