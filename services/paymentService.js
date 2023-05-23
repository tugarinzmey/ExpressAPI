import Payment from "../models/Payment.js";
import Service from "../models/Service.js";

class PaymentService {
    async create(payment) {
        const service = await Service.findById(payment.serviceId); 
        const total = service.price * (payment.quantity ? payment.quantity : 1);
        const createdPayment = await Payment.create({
            ...payment,
            total,
        });
        return createdPayment;
    }

    async getAll() {
        const payments = await Payment.find();
        return payments
    }

    async getOne(id) {
        if (!id) {
            throw new Error("There is no id provided")
        }
        const payment = await Payment.findById(id);
        return payment;
    }

    async update(payment) {
        if (!payment._id) {
            throw new Error("There is no id provided")
        }
        const service = await Service.findById(payment.serviceId); 
        const total = service.price * (payment.quantity ? payment.quantity : 1);

        const updated = await Payment.findByIdAndUpdate(payment._id, {
            ...payment,
            total
        }, { new: true });
        return updated;
    }

    async delete(id) {
        if (!id) {
            throw new Error("There is no id provided")
        }
        const deleted = await Payment.findByIdAndDelete(id);
        return deleted;
    }
}

export default new PaymentService();