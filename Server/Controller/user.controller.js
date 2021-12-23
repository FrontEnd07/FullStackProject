const UserService = require("../Service/user.service");

class UserController {

    async createUser(req, res) {
        try {
            const result = await UserService.create(req.body);
            res.status(201).json(result);
        } catch (e) {
            res.json(e.message)
        }
    }

    async getUser(req, res) {
        try {
            const result = await UserService.getAll()
            res.status(200).json(result.rows);
        } catch (e) {
            res.json(e.message)
        }
    }

    async getOneUser(req, res) {
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
    async getCustomer(req, res) {
        try {
            const result = await UserService.getCustomer(req.body);
            res.status(200).json(result);
        } catch (e) {
            res.json(e.message);
        }
    }
    async updateUser(req, res) {
        try {
            const { id, firstname, price, pcs } = req.body;
            const result = await db.query("UPDATE products SET firstname=$1, price=$2, pcs=$3 WHERE id=$4 RETURNING *", [firstname, price, pcs, id])
            res.status(200).json(result.rows[0])
        } catch (e) {
            req.status(405).json(e.message);
        }
    }

    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            const result = await db.query("DELETE FROM products WHERE id=$1", [id]);
            res.status(200).json(result.rows[0]);
        } catch (e) {
            req.status(405).json(e.message);
        }
    }
}

module.exports = new UserController();