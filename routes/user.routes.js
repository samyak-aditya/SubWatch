import { Router } from "express";

const userRouter = Router();




userRouter.get('/',(req, res) => res.send({title : 'Get all users'}));
userRouter.get('/:id',(req, res) => res.send({title : 'Get user details'}));
userRouter.post('/',(req, res) => res.send({title : 'CREATE all users'}));
userRouter.put('/',(req, res) => res.send({title : 'UPDATE users'}));
userRouter.get('/',(req, res) => res.send({title : 'DELETE users'}));

export default userRouter;