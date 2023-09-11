import { addRune, db } from "../services/databaseService";

export const RuneController = {
  getRunes: (req, res) => {
    db.all("SELECT * FROM runes", (err, rows) => {
      if (err) {
        throw err;
      }
      res.send(rows);
    });
  },
  getRuneById: (req, res) => {
    db.get(`SELECT * FROM runes WHERE id = ${req.params.id}`, (err, row) => {
      if (err) {
        throw err;
      }
      res.send(row);
    });
  },
  newRune: (req, res) => {
    const { text, author } = req.body;
    addRune(text, author, (error) => {
      if (error) {
        res.status(500).send(error);
      } else {
        db.get(
          `SELECT * FROM runes WHERE id = last_insert_rowid()`,
          (err, row) => {
            if (err) {
              throw err;
            }
            res.send(row);
          }
        );
      }
    });
  },
  deleteRuneById: (req, res) => {
    db.run(`DELETE FROM runes WHERE id = ${req.params.id}`, (err, row) => {
      if (err) {
        throw err;
      }
      res.send(row);
    });
  },
};
