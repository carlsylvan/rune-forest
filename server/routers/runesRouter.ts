import express from "express";
import { RuneController } from "../controllers/runeController";

export const runesRouter = express.Router();


runesRouter.get('/runes', (req, res) => {
    RuneController.getRunes(req, res);
});

runesRouter.get('/runes/:id', (req, res) => {
    RuneController.getRuneById(req, res);
});

runesRouter.post('/runes', (req, res) => {
    RuneController.addRune(req, res);
});