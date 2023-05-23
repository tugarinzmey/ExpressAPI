import Service from "../models/Service.js";

class ServiceService {
    async create(service) {
        const createdService = await Service.create(service);
        return createdService;
    }

    async getAll() {
        const services = await Service.find();
        return services
    }

    async getOne(id) {
        if (!id) {
            throw new Error("There is no id provided")
        }
        const service = await Service.findById(id);
        return service;
    }

    async update(service) {
        if (!service._id) {
            throw new Error("There is no id provided")
        }
        const updated = await Service.findByIdAndUpdate(service._id, service, { new: true });
        return updated;
    }

    async delete(id) {
        if (!id) {
            throw new Error("There is no id provided")
        }
        const deleted = await Service.findByIdAndDelete(id);
        return deleted;
    }
}

export default new ServiceService();