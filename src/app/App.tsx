import React, {useMemo, useState} from 'react';
import './App.css';
import {ErrorPage} from "./error-page";
import {LoadingPage} from "./loading-page";
import {ListPage} from "./list-page";
import {usePostsRetriever} from "./posts/use-posts-retriever";
import moment from "moment/moment";

export function App() {
    const [page, setPage] = useState(1)

    const startDate = useMemo(
        () => moment('01-01-2022', 'DD-MM-YYYY').toISOString(),
        []
    )

    const {
        isListLoading,
        isListError,
        list,
        isListInitialized,
    } = usePostsRetriever({page, startDate})

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

