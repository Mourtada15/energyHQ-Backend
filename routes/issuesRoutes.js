import express from "express";
import * as issuesControllers from "../controllers/issuesControllers.js";

const router = express.Router();

router.get('/', issuesControllers.getIssue);
router.get('/:id', issuesControllers.getIssues);

router.post('/', issuesControllers.createIssue);
router.put('/:id', issuesControllers.updateIssue);
router.delete('/:id', issuesControllers.deleteIssue);

export default router;