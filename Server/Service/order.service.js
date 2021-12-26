const db = require("../db");

class OrderProductService {
    async create(post) {
        const { id, email } = post;

        if (!(id && email)) {
            throw new Error("Все поля обьязательные")
            return;
        }

        const SEmail = await db.query("SELECT email From customers WHERE email=$1", [email]);

        if (SEmail.rows.length === 0) {
            throw new Error("Email не существует!")
            return;
        }

        const item = await db.query("SELECT * FROM product WHERE id=$1", [id]);

        if (item.rows.length === 0 || item.rows[0].remainder === 0) {
            throw new Error("Товар не существует!")
            return;
        }
        const addOrder = await db.query("INSERT INTO public.\"order\"(product, email) VALUES ($1, $2) RETURNING *", [id, email])
        const updateItem = await db.query("UPDATE product SET remainder=$1 WHERE id=$2", [item.rows[0].remainder - 1, item.rows[0].id])

        return addOrder;
    }
    async getAllProduct() {
        const result = await db.query("SELECT * FROM public.\"order\" ORDER BY id DESC")
        return result;
    }
}

module.exports = new OrderProductService()