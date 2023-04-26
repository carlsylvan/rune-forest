import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { IRune } from "../../models/IRune";
import { fetchFromLocalStorage, saveToLocalStorage } from "../../services/localStorageService";

let runes: IRune[] = [{id: 0, text: "hej hej", author: "Carl"}, {id: 1, text: "hejff hejffff", author: "jarl"}, {id: 2, text: "heasdasj heasdasdj", author: "Blabla"}];


export const Runestone = () => {
  const [rune, setRune] = useState<IRune>();
  const [text, setText] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getRune = () => {
      if (id) {
        const localRunes: IRune[] = fetchFromLocalStorage();
        const localRune = localRunes.find((r: IRune) => r.id === +id);
        if (localRune) {
          setRune(localRune);
          setText(localRune.text);
        }
      }
    };
    
    getRune();
  }, [id]);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }

  const handleSaveClick = () => {
    if (rune) {
      const updatedRune = { ...rune, text };
      const localRunes: IRune[] = fetchFromLocalStorage();
      const highestId = localRunes.reduce((maxId, r) => Math.max(maxId, r.id), -1);
      const newRune = { ...updatedRune, id: highestId + 1 };
      setRune(newRune);
      saveToLocalStorage(newRune);
      setText(newRune.text);
    }
  };
    
  
  return (
    <div>
      <textarea value={text} onChange={handleTextChange} />
      <button onClick={handleSaveClick}>Save</button>
      <div>{text}</div>
    </div>
  )
};