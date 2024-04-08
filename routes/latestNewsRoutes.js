import express from "express";
import * as latestNewsControllers from "../controllers/latestNewsControllers.js";

const router = express.Router();

router.get('/', latestNewsControllers.getNew);
router.get('/:id', latestNewsControllers.getNews);

router.post('/', latestNewsControllers.createNews);
router.put('/:id', latestNewsControllers.updateNews);
router.delete('/:id', latestNewsControllers.deleteNews);

export default router;