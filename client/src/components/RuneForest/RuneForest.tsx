import { useEffect, useState } from "react";
import { getRunes } from "../../services/runeService";
import { IRune } from "../../models/IRune";
import { Runestone } from "../Runestone/Runestone";
import "./RuneForest.css";

export const RuneForest = () => {

  const [runes, setRunes] = useState<IRune[]>([]);

  useEffect(() => {
    getRunes().then((runes) => {
      setRunes(runes);
      console.log(runes);
    });
  }, []);

  return (
    <div>
      <h1>Rune Forest</h1>

      {runes.map((rune) => (
        <Runestone key={rune.id}>
          <h2>{rune.text}</h2>
          <h3>//{rune.author}</h3>
        </Runestone>
      ))}
    </div>
  );
};