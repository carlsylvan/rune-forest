import { useEffect, useState } from "react";
import { getRunes } from "../../services/runeService";
import { IRune } from "../../models/IRune";

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
      <h1>Welcome to Rune-forest!</h1>
    </div>
  );
};