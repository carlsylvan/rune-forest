import { useEffect, useState } from "react";
import "./RuneForest.css";
// import {
//   deleteRuneById,
//   getRunes,
//   writeRune,
// } from "../../services/runeService";
import { RuneStone } from "../RuneStone/RuneStone";
import { Button } from "../Button/Button";

export default function RuneForest() {
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
      setRunes((prevRunes) => [...prevRunes, rune]);
    });
  };

  const deleteClick = (id) => {
    deleteRuneById(id).then(() => {
      setRunes((prevRunes) => prevRunes.filter((rune) => rune.id !== id));
    });
  };

  // useEffect(() => {
  //   getRunes().then((runes) => {
  //     setRunes(runes);
  //   });
  // }, []);
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
        <Button
          label="Write"
          size="large"
          backgroundColor="antiquewhite"
          color="white"
          type="submit"
        >
          Write
        </Button>
      </form>

      {runes.map((rune) => (
        <RuneStone key={rune.id}>
          <p>{rune.text}</p>
          <i>{rune.author}</i>
          <Button
            size="small"
            backgroundColor="black"
            label="Erase"
            onClick={() => deleteClick(rune.id)}
          >
            Delete
          </Button>
        </RuneStone>
      ))}
    </div>
  );
}
