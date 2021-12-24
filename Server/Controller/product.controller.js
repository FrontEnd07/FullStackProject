const ProductService = require("../Service/product.service");

class ProductController {
    async createProduct(req, res) {
        try {
            const result = await ProductService.create(req.body, req.files.picture);
            res.status(201).json(result.rows[0]);
        } catch (e) {
            res.json(e.message)
        }
    }

    async getProduct(req, res) {
        try {
            const result = await ProductService.getAll();
            res.status(200).json(result);
        } catch (e) {
            res.json(e.message)
        }
    }
    async getOneProduct(req, res) {
        try {
            const result = await ProductService.getOneProduct(req.params.id);
            res.status(200).json(result.rows[0]);
        } catch (e) {
            res.json(e.message)
        }
    }
    async updateProduct(req, res) {
        try {
            const result = await ProductService.update(req.body, req.files.picture)
            res.status(200).json(result.rows[0])
        } catch (e) {
            req.status(405).json(e.message);
        }
    }

    async deleteProduct(req, res) {
        try {
            const result = await ProductService.delete(req.params.id);
            res.status(200).json(result.rows);
        } catch (e) {
            req.status(405).json(e.message);
        }
    }
}

module.exports = new ProductController();