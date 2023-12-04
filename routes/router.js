import { Router } from "express"
import xRoutes from "./xRoutes.js";
import userRoutes from "./userRoutes.js";

const router = Router()

router.use("/x", xRoutes)
router.use("/users", userRoutes)

export default router;