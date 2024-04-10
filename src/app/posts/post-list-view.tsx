import {PostCard} from "./post-card";
import {LoadMoreCard} from "../list-page";
import React from "react";
import {PostItem} from "../+requests";
import {useScrollToEndListener} from "../+utils/use-scroll-to-end-listener";

interface Props {
    list: PostItem[]
    isLoadingMorePost?: boolean;
    onScrollToEnd: () => void;
}

export function PostListView({
    list,
    isLoadingMorePost,
    onScrollToEnd,
}: Props) {
    useScrollToEndListener({onScrollToEnd})

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            {list.map((post, index) => (
                <PostCard key={index} post={post}/>
            ))}
            <LoadMoreCard isVisible={isLoadingMorePost}/>
        </div>
    )
}
