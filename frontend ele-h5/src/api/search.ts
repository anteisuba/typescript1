import axios from "./base";
import type { ISearchResultList } from "@/types";

export function fetchSearchData(key = '') {
    console.log('Search key:', key)
    return axios.get<ISearchResultList, ISearchResultList>('home_search', {
        params: { _label_like: key },
    })
}