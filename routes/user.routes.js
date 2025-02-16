import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();




userRouter.get('/',authorize, getUsers);

userRouter.get('/:id',authorize, getUser);

userRouter.post('/',(req, res) => res.send({title : 'CREATE all users'}));
userRouter.put('/',(req, res) => res.send({title : 'UPDATE users'}));
userRouter.get('/',(req, res) => res.send({title : 'DELETE users'}));

export default userRouter;