import sqlite from 'sqlite3';

const db = new sqlite.Database('./database.db');

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