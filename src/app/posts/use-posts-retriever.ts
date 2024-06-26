import {useCallback, useEffect, useState} from "react";
import {CanceledError, GenericAbortSignal} from "axios";
import {Post, PostItem, PostListResponseModel} from "../+requests";
import moment from "moment/moment";

interface Props {
    page: number;
    startDate: string;
}

export function usePostsRetriever({
    page,
    startDate
}: Props) {
    const [list, setList] = useState<PostItem[]>([])
    const [isListError, setIsListError] = useState(false)
    const [isListLoading, setIsListLoading] = useState(false)
    const [isInitialized, setIsInitialized] = useState(false)
    const [isLastPage, setIsLastPage] = useState(false)

    const getList = useCallback(async (abortSignal?: GenericAbortSignal) => {
        if (isLastPage) {
            return;
        }

        setIsListLoading(true)
        setIsListError(false)

        try {
            const res: PostListResponseModel = await Post.getList(
                {
                    page,
                    items_per_page: 35,
                    end_date: moment().toISOString(),
                    start_date: startDate,
                },
                abortSignal
            )

            const newList = res.data.data

            if (newList.length === 0) {
                setIsLastPage(true)
            }

            setList(list => [...list, ...newList])
        } catch (error) {
            if (!(error instanceof CanceledError)) {
                setIsListError(true)
            }
        } finally {
            setIsListLoading(false)
            setIsInitialized(true)
        }

    }, [isLastPage, page, startDate]);

    useEffect(() => {
        const ac = new AbortController()
        void getList(ac.signal)

        return () => {
            ac.abort()
        }
    }, [getList]);

    return {
        list,
        isListInitialized: isInitialized,
        isListError,
        isListLoading,
        fetchList: getList,
    }
}
