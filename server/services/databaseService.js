var sqlite = require("sqlite3").verbose();
var db = new sqlite.Database("./database.db");

var createQueries = [
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

var addRune = (text, author, callback) => {
  var query = `
        INSERT INTO runes (text, author)
        VALUES (?, ?)
    `;
  var values = [text, author];

  db.run(query, values, callback);
};

module.exports = {
  db,
  addRune,
};
