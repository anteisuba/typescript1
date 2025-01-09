import type { IHomeInfo } from '@/types'
import axios from "axios"

export const fetchHomePageData = () => {
    return axios.get<IHomeInfo>('home_page')
}