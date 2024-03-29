import { useEffect, useState } from "react";
import "./RuneForest.css";
import {
  deleteRuneById,
  getRunes,
  writeRune,
} from "../../services/runeService";
import { RuneStone } from "../RuneStone/RuneStone";
import { Button } from "../../stories/Button";
import WriteRuneButton from "../../stories/WriteRuneButton/WriteRuneButton";

export const RuneForest = () => {
  const [runes, setRunes] = useState([]);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRune = {
      text: text,
      author: author,
    };
    writeRune(newRune).then((rune) => {
      setText("");
      setAuthor("");
      setRunes((prevRunes) => [...prevRunes, rune]);
    });
  };

  const deleteClick = (id) => {
    deleteRuneById(id)
      .then(() => {
        setRunes((prevRunes) => prevRunes.filter((rune) => rune._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting rune:", error);
      });
  };
  useEffect(() => {
    getRunes().then((runes) => {
      setRunes(runes);
    });
  }, []);
  return (
    <div className="runeforest">
      <h1 id="title">Rune Forest</h1>
      <form className="blankrune" onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder="Rune"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <WriteRuneButton
          label="Write"
          size="md"
          color="green"
          type="submit"
          onClick={handleSubmit}
        ></WriteRuneButton>
      </form>

      {runes.map((rune) => (
        <RuneStone key={rune._id}>
          <p>{rune.text}</p>
          <i>{rune.author}</i>
          <Button
            size="small"
            backgroundColor="black"
            label="Erase"
            onClick={() => deleteClick(rune._id)}
          >
            Delete
          </Button>
        </RuneStone>
      ))}
    </div>
  );
};
