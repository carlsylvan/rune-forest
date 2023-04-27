import axios from "axios";
import { INewRune, IRune } from "../models/IRune";

export const URL = "http://localhost:8008";

export const getRunes = async () => {
    let response = await axios.get<IRune[]>(
        URL + '/runes'
    );
    return response.data;
};

export const getRuneById = async (id: number) => {
    let response = await axios.get<IRune>(
        URL + '/runes/' + id
    );
    return response.data;
};

export const writeRune = async (rune: INewRune) => {
    let response = await axios.post<INewRune>(
        URL + '/runes',
        rune
    );
    return response.data;
}

export const deleteRune = async (id: number) => {
    let response = await axios.delete<IRune>(
        URL + '/runes/' + id
    );
    return response.data;
};