import sqlite from 'sqlite3';

export const db = new sqlite.Database('./database.db');

const createQueries = [

    `CREATE TABLE IF NOT EXISTS runes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        author TEXT NOT NULL
    )
    `];

createQueries.forEach(query => {
    db.run(query, (err) => {
        if (err) {
            throw err;
        }
    });
});

export const addRune = (text, author) => {
    const query = `INSERT INTO runes (text, author) VALUES ('${text}', '${author}')`;
    db.run(query, (err) => {
        if (err) {
            throw err;
        }
    });
};