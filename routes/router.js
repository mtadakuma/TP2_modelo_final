import { Router } from "express"
import xRoutes from "./xRoutes.js";
import { notFound } from "../Middlewares/notFound.js";
const router = Router()


router.use("/x", xRoutes)
xRoutes.use(notFound)

export default router;