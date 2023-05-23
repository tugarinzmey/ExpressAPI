import paymentService from "../services/paymentService.js";

export default class PaymentController {
    async create(req, res) {
        try {
            const payment = await paymentService.create(req.body);
            res.status(200).json(payment);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const payments = await paymentService.getAll();
            return res.status(200).json(payments);
        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const payment = await paymentService.getOne(req.params.id);
            return res.status(200).json(payment)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updated = await paymentService.update(req.body);
            return res.json(updated);
        }
        catch (error) {
            res.status(500).json(error.message)
        }
    }

    async delete(req, res) {
        try {
            const deleted = await paymentService.delete(req.params.id)
            return res.json(deleted);
        }
        catch (error) {
            res.status(500).json(error.message)
        }
    }
}