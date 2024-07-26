import express from "express"
import { sendMessage, getMessage } from "../Controllers/message.controller.js";
import { protectRoute } from "../Middleware/protectRoute.js";
const route = express.Router();
route.get('/:id',protectRoute,getMessage);
route.post('/send/:id',protectRoute,sendMessage);



export default route;