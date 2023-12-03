import { Router } from "express";
import CadaverController from "../controllers/CadaverController.js";
const cadaverController = new CadaverController()

const cadaverRoutes = Router()


// xRoutes.post("/", (req, res) => { res.send("routes ok")})
cadaverRoutes.post("/", cadaverController.create)
cadaverRoutes.get("/", cadaverController.getAll)
cadaverRoutes.get("/:amount", cadaverController.getAmount)
cadaverRoutes.delete("/:word", cadaverController.delete)

export default cadaverRoutes