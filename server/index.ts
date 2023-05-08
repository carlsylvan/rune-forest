import express from "express";
import { runesRouter } from "./routers/runesRouter";

import cors from "cors";
const app = express();

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
