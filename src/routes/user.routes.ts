import { Router } from "express";
import { createUser } from "../controllers/user.controller";

const router = Router()

router.get("/users", createUser)

export default router