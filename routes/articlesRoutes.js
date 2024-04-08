import express from "express";
import * as articlesControllers from "../controllers/articlesControllers.js";

const router = express.Router();

router.get('/', articlesControllers.getArticle);
router.get('/:id', articlesControllers.getArticles);

router.post('/', articlesControllers.createArticle);
router.put('/:id', articlesControllers.updateArticle);
router.delete('/:id', articlesControllers.deleteArticle);

export default router;