import { Router } from "express";
import ServiceController from "../controllers/serviceController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const serviceRouter = new Router();
const serviceController = new ServiceController();


serviceRouter.post('', authMiddleware, serviceController.create);
serviceRouter.get('', serviceController.getAll);
serviceRouter.get('/:id', serviceController.getOne);
serviceRouter.put('', authMiddleware, serviceController.update);
serviceRouter.delete('/:id', authMiddleware, serviceController.delete);

export default serviceRouter