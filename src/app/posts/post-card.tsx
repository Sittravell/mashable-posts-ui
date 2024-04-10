import {formatPostDate} from "../+utils/date-util";
import React from "react";
import {PostItem} from "../+requests";

interface Props{
    post: PostItem
}

export function PostCard({
    post,
}: Props){
    const containerProps: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        alignItems: 'flex-start'
    }

    return (
        <div style={containerProps}>
            <a href={post.link} target={'_blank'} rel={'noopener noreferrer'}>{post.title}</a>
            <p style={{margin: 0}}>{formatPostDate(post)}</p>
        </div>
    )
}
