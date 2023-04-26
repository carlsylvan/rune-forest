import { useEffect, useState } from "react";
import { IRune } from "../../models/IRune";
import { fetchFromLocalStorage } from "../../services/localStorageService";

export const RuneList = () => {
    const [runes, setRunes] = useState<IRune[]>([]);

    useEffect(() => {
        const getRunes = async () => {
            const response = await fetchFromLocalStorage();
            const data = await response;
            setRunes(data);
        };

        getRunes();
    });



    return (
        <div>
            {runes.map((rune: IRune) => (
                <div key={rune.id}>
                    <div>{rune.text}</div>
                    <div>{rune.author}</div>
                </div>
            ))}
        </div>
    )
}