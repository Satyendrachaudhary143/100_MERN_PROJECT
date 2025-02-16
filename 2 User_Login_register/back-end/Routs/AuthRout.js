import express from 'express';
import { login, registerUser } from '../Controls/User.controler.js';

const router = express.Router();
// router.post('/register', registerUser);
router.route("/register").post(registerUser)
router.route("/login").post(login)


export default router;