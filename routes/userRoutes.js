import { Router } from "express";
import UserController from "../controllers/UserController.js";
const userController = new UserController()

const userRoutes = Router()


// userRoutes.get("/", (req, res) => { res.send("routes ok")})
userRoutes.post("/", userController.create)
userRoutes.get("/", userController.getAll)
userRoutes.get("/:id", userController.getUserById)
userRoutes.put("/:id", userController.updateUser)
userRoutes.delete("/:id", userController.deleteUser)


export default userRoutes