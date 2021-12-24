const db = require("../db");
const fileService = require("./file.service");

class ProductService {
    async create(post, picture) {
        const { heading, descriptions, remainder, price } = post;
        const fileName = fileService.saveFile(picture);
        const result = await db.query("INSERT INTO product (heading, descriptions, remainder, price, picture) VALUES ($1, $2, $3, $4, $5) RETURNING *", [heading, descriptions, remainder, Number(price), fileName])
        return result;
    }

    async getAll() {
        const posts = await db.query("SELECT * FROM product ORDER BY id DESC");
        if (posts.rows.length > 0) {
            return posts.rows;
        } else {
            return "Нет товаров!";
        }
    }
    async getOneProduct(id) {
        if (!id) {
            throw new Error("id не указан!")
        }
        const posts = await db.query("SELECT * FROM product WHERE id=$1", [id]);
        return posts;
    }
    async update(post, picture) {
        if (!post.id) {
            throw new Error("id не указан!")
        }
        const { heading, descriptions, remainder, price, id } = post;
        const fileName = fileService.saveFile(picture);
        const updatePost = await db.query("UPDATE product SET heading=$1, descriptions=$2, remainder=$3, price=$4, picture=$5 WHERE id=$6 RETURNING *", [heading, descriptions, remainder, price, fileName, id])
        return updatePost;
    }

    async delete(id) {
        if (!id) {
            throw new Error("id не указан!");
        }
        const result = await db.query("DELETE FROM product WHERE id=$1", [id]);
        return result;
    }
}

module.exports = new ProductService();