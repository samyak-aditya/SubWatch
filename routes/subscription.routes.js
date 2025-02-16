import { Router } from "express";

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => res.send({title : 'GET all subscription'}));
subscriptionRouter.get('/:id', (req, res) => res.send({title : 'GET subscription details'}));
subscriptionRouter.post('/', (req, res) => res.send({title : 'CREATE subscription'}));
subscriptionRouter.put('/', (req, res) => res.send({title : 'UPDATE subscription'}));
subscriptionRouter.delete('/', (req, res) => res.send({title : 'DELETE subscription'}));
subscriptionRouter.get('/user/:id', (req, res) => res.send({title : 'GET all user subscription'}));
subscriptionRouter.get('/:id/cancle', (req, res) => res.send({title : 'CANCLE subscription'}));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title : 'GET all upcoming subscription'}));

export default subscriptionRouter;