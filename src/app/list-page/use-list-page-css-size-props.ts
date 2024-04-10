import {useMediaQuery} from "react-responsive";
import React from "react";

export function useListPageCssSizeProps() {
    const isMobileOrTablet = useMediaQuery({maxWidth: 900})

    let cssProps: React.CSSProperties = {
        width: '50vw',
        minWidth: '900px',
        maxWidth: '1200px',
        height: '100%',
    }

    if (isMobileOrTablet) {
        cssProps = {
            width: '100%',
            paddingLeft: '16px',
            paddingRight: '16px',
            height: '100%',
        }
    }

    return { cssProps }
}
