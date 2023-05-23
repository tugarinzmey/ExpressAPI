import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import PaymentController from "../controllers/paymentController.js";

const paymentRouter = new Router();
const paymentController = new PaymentController();


paymentRouter.post('', authMiddleware, paymentController.create);
paymentRouter.get('', authMiddleware, paymentController.getAll);
paymentRouter.get('/:id', authMiddleware, paymentController.getOne);
paymentRouter.put('', authMiddleware, paymentController.update);
paymentRouter.delete('/:id', authMiddleware, paymentController.delete);

export default paymentRouter