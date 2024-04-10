import {useCallback, useEffect} from "react";

interface Props{
    onScrollToEnd: () => void;
}

export function useScrollToEndListener({
    onScrollToEnd,
}: Props){

    const scrollListener = useCallback(() => {
        if (!document.scrollingElement?.scrollHeight) {
            return;
        }

        if (document.documentElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
            return;
        }

        onScrollToEnd()
    }, [onScrollToEnd]);

    useEffect(() => {
        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [scrollListener])
}
