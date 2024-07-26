import express from "express";
import { protectRoute } from "../Middleware/protectRoute.js";
import { getUser } from "../Controllers/user.controller.js";

const route = express.Router();

route.get('/',protectRoute,getUser);

export default route;