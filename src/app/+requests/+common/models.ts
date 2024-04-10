import {AxiosResponse} from "axios";

export type CollectionAxiosModel<T> = AxiosResponse<CollectionResponseModel<T>>

export interface CollectionResponseModel<T> {
    status: number
    success: boolean
    data: T[]
}
