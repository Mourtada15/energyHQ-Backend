import express from "express";
import * as bannersControllers from "../controllers/bannersControllers.js";

const router = express.Router();

router.get('/', bannersControllers.getBanner);
router.get('/:id', bannersControllers.getBanners);

router.post('/', bannersControllers.createBanner);
router.put('/:id', bannersControllers.updateBanner);
router.delete('/:id', bannersControllers.deleteBanner);

export default router;