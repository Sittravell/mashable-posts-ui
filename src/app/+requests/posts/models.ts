import {CollectionAxiosModel} from "../+common/models";

export interface PostItem {
    title: string
    link: string
    date: string
}

export type PostListResponseModel = CollectionAxiosModel<PostItem>

export interface PostListRequest {
    page?: number
    itemsPerPage?: number
}
