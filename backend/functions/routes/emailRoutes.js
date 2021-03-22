import express from "express";
// eslint-disable-next-line new-cap
const router = express.Router();
import {sendEmail} from "../controllers/emailController.js";

router.post("/", sendEmail);

export default router;
