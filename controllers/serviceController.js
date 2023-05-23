import servicesService from "../services/servicesService.js";

export default class ServiceController {
    async create(req, res) {
        try {
            const service = await servicesService.create(req.body);
            res.status(200).json(service);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const services = await servicesService.getAll();
            return res.status(200).json(services);
        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const service = await servicesService.getOne(req.params.id);
            return res.status(200).json(service)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updated = await servicesService.update(req.body);
            return res.json(updated);
        }
        catch (error) {
            res.status(500).json(error.message)
        }
    }

    async delete(req, res) {
        try {
            const deleted = await servicesService.delete(req.params.id)
            return res.json(deleted);
        }
        catch (error) {
            res.status(500).json(error.message)
        }
    }
}