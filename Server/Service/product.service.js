const db = require("../db");
// import Post from "./Post.js";
const fileService = require("./file.service");

class PostService {
    async create(post, picture) {
        const { heading, descriptions, remainder, price } = post;
        const fileName = fileService.saveFile(picture);
        const result = await db.query("INSERT INTO product (heading, descriptions, remainder, price, picture) VALUES ($1, $2, $3, $4, $5) RETURNING *", [heading, descriptions, remainder, Number(price), fileName])
        return result;
    }

    async getAll() {
        const posts = await db.query("SELECT * FROM product");
        return posts;
    }


    async update(post, picture) {
        if (!post._id) {
            throw new Error("id не указан!")
        }
        const { heading, descriptions, remainder, price } = post;
        const fileName = fileService.saveFile(picture);
        const updatePost = await db.query("UPDATE product SET heading=$1, descriptions=$2, remainder=$3, price=$4, picture=$5 WHERE id=$6 RETURNING *", [heading, descriptions, remainder, price, fileName, id])
        return updatePost;
    }

    async delete(id) {
        if (!id) {
            throw new Error("id не указан!");
        }
        const post = await Post.findByIdAndDelete(id)
        return post;
    }
}

module.exports = new PostService();