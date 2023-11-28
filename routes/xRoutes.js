import { Router } from "express";
import XController from "../controllers/XController.js";
const xController = new XController()

const xRoutes = Router()


// xRoutes.post("/", (req, res) => { res.send("routes ok")})
xRoutes.post("/", xController.create)
xRoutes.get("/", xController.getAll)
xRoutes.get("/:amount", xController.getAmount)

export default xRoutes