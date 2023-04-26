import { db } from "../services/databaseService";

export const RuneController = {
    getRunes: (req, res) => {
        db.all('SELECT * FROM runes', (err, rows) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
    },
    getRuneById: (req, res) => {
        db.get(`SELECT * FROM runes WHERE id = ${req.params.id}`, (err, row) => {
            if (err) {
                throw err;
            }
            res.json(row);
        });
    },
    addRune: (req, res) => {
        db.run(`INSERT INTO runes (text, author) VALUES ('${req.body.text}', '${req.body.author}')`, (err) => {
            if (err) {
                throw err;
            }
            res.json({ message: 'Rune added successfully' });
        });
    }
};