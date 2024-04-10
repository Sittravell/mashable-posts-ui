import React from "react";
import {AppContainer} from "../+common-ui";
import {PostBoard} from "../posts";
import {PostItem} from "../+requests";
import {useListPageCssSizeProps} from "./use-list-page-css-size-props";

interface Props {
    list: PostItem[]
    isListLoading: boolean;
    onScrollToEnd: () => void;
}

export function ListPage({
    list,
    isListLoading,
    onScrollToEnd,
}: Props) {
    const { cssProps: sizeCssProps } = useListPageCssSizeProps()

    const containerProps: React.CSSProperties = {
        marginTop: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px',
        ...sizeCssProps,
    }

    return (
        <AppContainer>
            <div style={containerProps}>
                <h2>Mashable Posts</h2>
                <PostBoard
                    list={list}
                    isLoadingMorePost={isListLoading}
                    onScrollToEnd={onScrollToEnd}/>
            </div>
        </AppContainer>
    )
}
