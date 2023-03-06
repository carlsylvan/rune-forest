import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { IRune } from "../../models/IRune";
import { fetchFromLocalStorage } from "../../services/localStorageService";

let runes: IRune[] = [{id: 0, text: "Hej hej", author: "Carl"}];

localStorage.setItem("localStorageRunes", JSON.stringify(runes));

export const Runestone = () => {
    const [rune, setRune] = useState<IRune>();
    const { id } = useParams();
  
    useEffect(() => {
      const getRune = () => {
        if (id) {
          const localRunes: IRune[] = fetchFromLocalStorage();
          const localRune = localRunes.find((r: IRune) => r.id === +id);
          if (localRune) {
            setRune(localRune);
          }
        }
      };
    
      getRune();
    }, [id]);

    return (
        <div>{rune?.text}</div>
    )
};