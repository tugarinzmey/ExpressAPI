import express from "express";
import mongoose from "mongoose";
import clientRouter from "./routers/clientRouter.js";
import authRouter from "./routers/authRouter.js";
import paymentRouter from "./routers/paymentRouter.js";
import serviceRouter from "./routers/serviceRouter.js";

const PORT = 3000;
const DB_URL = 'mongodb+srv://user:root@kotlinfullstack.dqk5ihb.mongodb.net/?retryWrites=true&w=majority'
const app = express()

app.use(express.json())
app.use("/clients", clientRouter);
app.use("/auth", authRouter);
app.use("/payments", paymentRouter);
app.use("/services", serviceRouter);

async function startApp() {
    try {
        await mongoose.connect(DB_URL,
            { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, () => {
            console.log("started on port " + PORT)
        })
    }
    catch (e) {
        console.log(e)
    }
}

startApp()