import { useEffect, useState } from "react";
import "./RuneForest.css";
import {
  deleteRuneById,
  getRunes,
  writeRune,
} from "../../services/runeService";
import { RuneStone } from "../RuneStone/RuneStone";

export const RuneForest = () => {
  const [runes, setRunes] = useState([]);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRune = {
      text,
      author,
    };
    writeRune(newRune).then((rune) => {
      setText("");
      setAuthor("");
    });
  };

  const deleteClick = (id) => {
    deleteRuneById(id);
  };

  useEffect(() => {
    getRunes().then((runes) => {
      setRunes(runes);
    });
  }, []);

  // The return statement is now here, outside of handleSubmit but still inside RuneForest
  return (
    <div>
      <h1>Rune Forest</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your rune here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Write your name here"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Write</button>
      </form>

      {runes.map((rune) => (
        <RuneStone key={rune.id}>
          <h2>{rune.text}</h2>
          <h3>{rune.author}</h3>
          <button onClick={() => deleteClick(rune.id)}>Delete</button>
        </RuneStone>
      ))}
    </div>
  );
};
