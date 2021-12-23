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
        const posts = await Post.find();
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error("id не указан!")
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error("id не указан!")
        }
        const updatePost = await Post.findByIdAndUpdate(post._id, post, { new: true });
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