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
    async getCustomer(req, res) {
        try {
            const result = await UserService.getCustomer(req.body);
            res.status(200).json(result);
        } catch (e) {
            res.json(e.message);
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
}

module.exports = new UserController();