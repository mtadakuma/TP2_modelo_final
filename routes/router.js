import { Router } from "express"
import xRoutes from "./xRoutes.js";
import { notFound } from "../Middlewares/notFound.js";
import cadaverRoutes from "./cadaverRoutes.js";
const router = Router()


router.use("/x", xRoutes)
router.use("/cadaver", cadaverRoutes)
xRoutes.use(notFound)

export default router;