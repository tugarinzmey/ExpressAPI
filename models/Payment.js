import mongoose from "mongoose";

const Payment = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    date: { type: Date, required: true, default: Date.now() },
    quantity: { type: Number, required: true, default: 1 },
    total: { type: Number }
});

export default mongoose.model("Payment", Payment);