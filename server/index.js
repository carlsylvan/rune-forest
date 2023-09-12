var express = require("express");
var cors = require("cors");
var runesRouter = require("./routers/runesRouter");
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/runes", runesRouter);

app.get("/", (req, res) => {
  res.send("Hello Runes!");
});

app.listen(8008, () => {
  console.log("http://localhost:8008");
});
