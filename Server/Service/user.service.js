const db = require("../db.js");
const { decode } = require('html-entities');
const { mysql_real_escape_string } = require("./../Utils/sql");
const { generateSalt, hash, compare } = require('./../Utils/passwordHash');
const jwt = require("jsonwebtoken");


class UserService {

    async create(post) {
        const { email, pass } = post

        if (!(email && pass)) {
            throw new Error("Все поля обьязательные")
            return;
        }

        const user = await db.query("SELECT * FROM public.customers WHERE email=$1", [email])

        if (user.rows.length > 0) {
            throw new Error("Пользователь уже существует. Пожалуйста, войдите")
            return;
        }

        let salt = generateSalt(10);

        let password = mysql_real_escape_string(await hash(decode(pass), salt));

        const createdPost = await db.query("INSERT INTO customers (Email, Pass) VALUES ($1, $2) RETURNING *", [email, password])

        const token = jwt.sign(
            { user_id: createdPost.rows[0].id, email },
            process.env.TOKEN_SECRET,
            {
                expiresIn: "2h",
            }
        );

        return {
            "id": createdPost.rows[0].id,
            "email": createdPost.rows[0].email,
            "token": token
        };

    }

    async getAll() {
        const getAll = db.query("SELECT * FROM customers");
        return getAll;
    }

    async getCustomer(customer) {

        let { email, pass } = customer;

        if (!(email && pass)) {
            throw new Error("Все поля обьязательные")
            return;
        }

        const result = await db.query("SELECT * FROM public.customers WHERE email=$1", [email])

        if (result.rows.length === 0) {
            throw new Error("Email не существует!");
            return;
        }

        let match = await compare(pass, JSON.parse(result.rows[0].pass));

        if (match) {

            const token = jwt.sign(
                { user_id: result.rows[0].id, email },
                process.env.TOKEN_SECRET,
                {
                    expiresIn: "2h",
                }
            );

            result.rows[0].token = token;

            return {
                "id": result.rows[0].id,
                "email": result.rows[0].email,
                "token": result.rows[0].token
            };
        } else {
            throw new Error("Неверные учетные данные!");
            return;
        }
    }
}

module.exports = new UserService();