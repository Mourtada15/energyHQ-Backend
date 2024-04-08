import express from "express";
import * as packagesControllers from "../controllers/packagesControllers.js";

const router = express.Router();

router.get('/', packagesControllers.getPackage);
router.get('/:id', packagesControllers.getPackages);

router.post('/', packagesControllers.createPackage);
router.put('/:id', packagesControllers.updatePackage);
router.delete('/:id', packagesControllers.deletePackage);

export default router;