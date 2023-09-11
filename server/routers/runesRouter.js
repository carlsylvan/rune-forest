import { RuneController } from "../controllers/runeController";

export const runesRouter = express.Router();

runesRouter.get("/", (req, res) => {
  RuneController.getRunes(req, res);
});

runesRouter.get("/:id", (req, res) => {
  RuneController.getRuneById(req, res);
});

runesRouter.post("/", (req, res, next) => {
  RuneController.newRune(req, res);
});

runesRouter.delete("/:id", (req, res) => {
  RuneController.deleteRuneById(req, res);
});
