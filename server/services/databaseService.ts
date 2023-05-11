import sqlite from "sqlite3";

export const db = new sqlite.Database("./database.db");

const createQueries = [
  `
    CREATE TABLE IF NOT EXISTS runes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT,
        author TEXT
    )
`,
];

createQueries.forEach((query) => {
  db.run(query);
});
export const addRune = (text: string, author: string, callback: any) => {
  const query = `
        INSERT INTO runes (text, author)
        VALUES (?, ?)
    `;
  const values = [text, author];

  db.run(query, values, callback);
};
