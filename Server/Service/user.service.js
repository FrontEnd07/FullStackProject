const db = require("../db.js");
const { mysql_real_escape_string } = require("./../Utils/sql");
const {
    generateSalt,
    hash,
    compare
} = require('./../Utils/passwordHash');



class UserService {

    async create(post) {
        let salt = generateSalt(10);
        const { email, pass } = post
        const user = await db.query("SELECT * FROM public.customers WHERE email=$1", [email])
        if (user.rows.length === 0) {
            const createdPost = await db.query("INSERT INTO customers (Email, Pass) VALUES ($1, $2) RETURNING *", [email, mysql_real_escape_string(await hash(pass, salt))])
            return createdPost;
        } else {
            return user;
        }
    }

    async getAll() {
        const getAll = db.query("SELECT * FROM customers");
        return getAll;
    }

    async getOne(id) {
        if (!id) {
            throw new Error("id не указан!")
        }
        const post = await Post.findById(id);
        return post;
    }

    async getCustomer(customer) {
        let {
            email,
            pass
        } = customer;
        const result = await db.query("SELECT * FROM public.customers WHERE email=$1", [email])
        let match = await compare(pass, JSON.parse(result.rows[0].pass));
        if (match) {
            return result;
        }
    }

    async delete(id) {
        if (!id) {
            throw new Error("id не указан!");
        }
        const post = await Post.findByIdAndDelete(id)
        return post;
    }
}

module.exports = new UserService();