import { Router } from "express";
import { add } from "../controllers/cart.controller";

const router = Router();
router.post("/add", add);

export default router;
