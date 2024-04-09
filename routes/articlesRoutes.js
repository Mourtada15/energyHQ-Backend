import express from "express";
import * as articlesControllers from "../controllers/articlesControllers.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get('/', articlesControllers.getArticle);
router.get('/:id', articlesControllers.getArticles);

router.post('/', upload.single('image'), articlesControllers.createArticle);
router.put('/:id', articlesControllers.updateArticle);
router.delete('/:id', articlesControllers.deleteArticle);

export default router;