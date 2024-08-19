// Login, register routes
import express from "express";
import { register, login } from "../controllers/auth.controllers.js";
import validation from "../middlewares/validation.middleware.js";
import loginAuthSchema from "../utils/login.auth.validation.schema.js";
import registerAuthSchema from "../utils/register.auth.validation.schema.js";

const router = express.Router();

// POST
router.post("/api/login", validation(loginAuthSchema), login); // login
router.post("/api/register", validation(registerAuthSchema), register); // register

export default router;