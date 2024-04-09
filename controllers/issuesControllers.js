import mongoose from "mongoose";
import Issue from "../models/issuesModel.js";

export const getIssues = async (req, res) => {
    try {
        const issues = await Issue.find();
        res.status(200).json(issues);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching Issues' });
    }
};

export const getIssue = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID!' });
        }

        const issue = await Issue.findById(id);

        if (!issue) {
            return res.status(404).json({ message: 'Issue not found!' });
        }
        res.status(200).json(issue);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching issue' });
    }
};

export const createIssue = async (req, res) => {
    const { title } = req.body;
    const { cover, pdf } = req.files;

    try {
        // Check if the article already exists
        const existingIssue = await Issue.findOne({ title });
        if (existingIssue) {
            return res.status(400).json({ message: 'Issue already exists!' });
        }

        const newIssue = await Issue.create({ title, pdfUrl: pdf[0].path, coverUrl: cover[0].path });
        res.status(200).json(newIssue);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const updateIssue = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID!' });
        }

        const updatedIssue = await Issue.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedIssue) {
            return res.status(404).json({ message: 'Issue not found!' });
        }

        res.status(200).json(updateIssue)
    } catch (error) {
        console.error('Error updating issue: ', error)
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteIssue = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const deletedIssue = await Issue.findByIdAndDelete(id);

        if (!deletedIssue) {
            return res.status(404).json({ message: 'Issue not found!' });
        }

        res.status(200).json({ message: 'Issue deleted successfully!' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error!' });
    }
};
