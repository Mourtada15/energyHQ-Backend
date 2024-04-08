import express from "express";
import * as ratesControllers from "../controllers/ratesControllers.js";

const router = express.Router();

router.get('/', ratesControllers.getRate);
router.get('/:id', ratesControllers.getRates);

router.post('/', ratesControllers.createRate);
router.put('/:id', ratesControllers.updateRate);
router.delete('/:id', ratesControllers.deleteRate);

export default router;