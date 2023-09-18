import { useState } from "react";
import "./RuneForest.css";

export const RuneForest = () => {
  const [runes, setRunes] = useState([
    {
      id: 1,
      text: "Hej hej",
      author: "Carl",
    },
  ]);
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

    const deleteClick = (e) => {
      e.preventDefault();
      const id = e.currentTarget.id;
      deleteRuneById(parseInt(id)).then((rune) => {
        console.log(rune);
      });
    };

    useEffect(() => {
      getRunes().then((runes) => {
        setRunes(runes);
        console.log(runes);
      });
    });

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
          <Runestone key={rune.id}>
            <h2>{rune.text}</h2>
            <h3>{rune.author}</h3>
            <button onClick={deleteClick}>Delete</button>
          </Runestone>
        ))}
      </div>
    );
  };
};
