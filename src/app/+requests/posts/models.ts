import {CollectionAxiosModel} from "../+common";

export interface PostItem {
    title: string
    link: string
    date: string
}

export type PostListResponseModel = CollectionAxiosModel<PostItem>

export interface PostListRequest {
    page?: number
    items_per_page?: number
    start_date?: string
    end_date?: string
}
