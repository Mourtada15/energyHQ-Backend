import express from "express";
import * as sectorsControllers from "../controllers/sectorsControllers.js";

const router = express.Router();

router.get('/', sectorsControllers.getSectors);
router.get('/:id', sectorsControllers.getSector);

router.post('/', sectorsControllers.createSector);
router.put('/:id', sectorsControllers.updateSector);
router.delete('/:id', sectorsControllers.deleteSector);

export default router;