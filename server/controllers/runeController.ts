import { Request, Response } from "express";
import { addRune, db } from "../services/databaseService"

export const RuneController = {
    getRunes: (req: Request, res: Response) => {
        db.all('SELECT * FROM runes', (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });
    },
    getRuneById: (req: Request, res: Response) => {
        db.get(`SELECT * FROM runes WHERE id = ${req.params.id}`, (err, row) => {
            if (err) {
                throw err;
            }
            res.send(row);
        });
    },
    newRune: (req:any, res:any) => {
        const { text, author } = req.body

        addRune(text, author, (error: any) => {
            if (error) {
                res.status(500).send(error)
            } else {
                res.sendStatus(200)
            }
        })
    }
};