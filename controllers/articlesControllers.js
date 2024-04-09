import mongoose from "mongoose";
import Article from "../models/articleModel.js";

export const getArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching Articles' });
    }
};

export const getArticle = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID!' });
        }

        const article = await Article.findById(id);

        if (!article) {
            return res.status(404).json({ message: 'Article not found!' });
        }
        res.status(200).json(article);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching article' });
    }
};

export const createArticle = async (req, res) => {
    const { title, body, subSector, source } = req.body;
    const image = req.file.path;

    try {
        // Check if the article already exists
        const existingArticle = await Article.findOne({ title });
        if (existingArticle) {
            return res.status(400).json({ message: 'Article already exists!' });
        }

        const newArticle = await Article.create({ title, body, subSector, source, image });
        res.status(200).json(newArticle);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const updateArticle = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID!' });
        }

        const updatedArticle = await Article.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedArticle) {
            return res.status(404).json({ message: 'Article not found!' });
        }

        res.status(200).json(updatedArticle)
    } catch (error) {
        console.error('Error updating article: ', error)
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteArticle = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const deletedArticle = await Article.findByIdAndDelete(id);

        if (!deletedArticle) {
            return res.status(404).json({ message: 'Article not found!' });
        }

        res.status(200).json({ message: 'Article deleted successfully!' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error!' });
    }
};