const OrderService = require("../Service/order.service");

class ProductOrderController {
    async createProductOrder(req, res) {
        try {
            const result = await OrderService.create(req.body);
            res.status(201).json(result.rows[0]);
        } catch (e) {
            res.json(e.message)
        }
    }

    async getAllProduct(req, res) {
        try {
            const result = await OrderService.getAllProduct();
            res.status(201).json(result.rows);
        } catch (e) {
            res.json(e.message)
        }
    }
}

module.exports = new ProductOrderController()