import { Mongoose } from "mongoose";
import Sector from "../models/secotorsModel.js";

export const getSectors = async (req, res) => {
    try {
        const sectors = await Sector.find();
        res.status(200).json(sectors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching Sectors'});
    }
};

export const getSector = async (req, res) => {
    const { id } = req.params;

    try {
        const sector = await News.findById(id);

        if (!sector) {
            return res.status(404).json({ message: 'Sector not found!'});
        }
        res.status(200).json(sector);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching article'});
    }
};

export const createSector = async (req, res) => {
    const { name } = req.body;

    try {
        const newSector = await Sector.create({ name });
        res.status(200).json(newSector);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const updateSector = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const updatedSector = await Sector.findByIdAndUpdate(id, { name }, { new: true });

        if (!updatedSector) {
            return res.status(404).json({ message: 'Sector not found!' });
        }

        res.status(200).json(updatedSector)
    } catch (error) {
        console.error('Error updating sector: ', error)
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteSector = async (req, res) => {}
