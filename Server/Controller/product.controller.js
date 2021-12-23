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
            const result = await db.query("SELECT * FROM products");
            console.log(result)
            res.status(200).json(result.rows);
        } catch (e) {
            res.json(e.message)
        }
    }

    async getOneProduct(req, res) {
        try {
            const id = req.params.id;
            const result = await db.query("SELECT * FROM products WHERE id=$1", [id]);
            if (result.rows.length == 0) {
                res.status(200).json(`Òîâàð ñ ${id} íå íàéäåí!`);
            }
            res.status(200).json(result.rows[0]);
        } catch (e) {
            res.json(e.message);
        }
    }

    async updateProduct(req, res) {
        try {
            const { id, firstname, price, pcs } = req.body;
            const result = await db.query("UPDATE products SET firstname=$1, price=$2, pcs=$3 WHERE id=$4 RETURNING *", [firstname, price, pcs, id])
            res.status(200).json(result.rows[0])
        } catch (e) {
            req.status(405).json(e.message);
        }
    }

    async deleteProduct(req, res) {
        try {
            const id = req.params.id;
            const result = await db.query("DELETE FROM products WHERE id=$1", [id]);
            res.status(200).json(result.rows[0]);
        } catch (e) {
            req.status(405).json(e.message);
        }
    }
}

module.exports = new ProductController();