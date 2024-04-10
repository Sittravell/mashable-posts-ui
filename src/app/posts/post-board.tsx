import React from "react";
import {PostListView} from "./post-list-view";
import {PostItem} from "../+requests";

interface Props {
    list: PostItem[]
    isLoadingMorePost?: boolean;
    onScrollToEnd: () => void;
}

export function PostBoard({
    list,
    isLoadingMorePost = false,
    onScrollToEnd,
}: Props) {
    if (list.length === 0) {
        return <p>There are no posts from Mashable.</p>
    }

    return (
        <PostListView
            list={list}
            isLoadingMorePost={isLoadingMorePost}
            onScrollToEnd={onScrollToEnd}/>
    )
}
