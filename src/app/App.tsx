import React, {useState} from 'react';
import './App.css';
import {ErrorPage} from "./error-page";
import {LoadingPage} from "./loading-page";
import {ListPage} from "./list-page";
import {usePostsRetriever} from "./posts/use-posts-retriever";

export function App() {
    const [page, setPage] = useState(1)

    const {
        isListLoading,
        isListError,
        list,
        isListInitialized,
    } = usePostsRetriever({page})

    if (isListError) {
        return <ErrorPage/>
    }

    if (!isListInitialized) {
        return <LoadingPage/>
    }

    return (
        <ListPage
            list={list}
            isListLoading={isListLoading}
            onScrollToEnd={() => setPage(page => page + 1)}/>
    )
}

