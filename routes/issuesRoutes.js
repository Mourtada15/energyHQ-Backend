import express from "express";
import * as issuesControllers from "../controllers/issuesControllers.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get('/', issuesControllers.getIssue);
router.get('/:id', issuesControllers.getIssues);

router.post('/', upload.fields([{ name: 'cover', maxCount: 1 }, { name: 'pdfUrl', maxCount: 1 }]), issuesControllers.createIssue);
router.put('/:id', issuesControllers.updateIssue);
router.delete('/:id', issuesControllers.deleteIssue);

export default router;