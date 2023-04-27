import { useEffect, useState } from "react";
import { getRunes, writeRune } from "../../services/runeService";
import { INewRune, IRune } from "../../models/IRune";
import { Runestone } from "../Runestone/Runestone";
import "./RuneForest.css";

export const RuneForest = () => {
  const [runes, setRunes] = useState<IRune[]>([]);
  const [text, setText] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const newRune: INewRune = {
    text: text,
    author: author,
  };
  writeRune(newRune).then((rune) => {
    setText("");
    setAuthor("");
  });
};

  useEffect(() => {
    getRunes().then((runes) => {
      setRunes(runes);
      console.log(runes);
    });
  }, [writeRune]);

  return (
    <div>
      <h1>Rune Forest</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Write your rune here" value={text} onChange={(e) => setText(e.target.value)} />
        <input type="text" placeholder="Write your name here" value={author} onChange={(e) => setAuthor(e.target.value)} />     
        <button type="submit">Write</button>
      </form>

      {runes.map((rune) => (
        <Runestone key={rune.id}>
          <h2>{rune.text}</h2>
          <h3>//{rune.author}</h3>
        </Runestone>
      ))}
    </div>
  );
};