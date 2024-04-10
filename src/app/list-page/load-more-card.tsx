import React from "react";

interface Props{
    isVisible?: boolean;
}

export function LoadMoreCard({
    isVisible = false,
}: Props){
    const containerProps: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
    }

    return (
        <div style={containerProps}>
            <p style={{ color: isVisible ? 'unset' : 'white' }}>
                Loading more posts...
            </p>
        </div>
    )
}
