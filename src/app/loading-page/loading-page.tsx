import React from "react";
import {AppContainer} from "../+common-ui";

export function LoadingPage(){
    const containerProps: React.CSSProperties = {
        marginTop: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50vw',
        minWidth: '400px',
        maxWidth: '1200px',
        height: '100vh',
    }

    return (
        <AppContainer>
            <div style={containerProps}>
                <h1>Loading...</h1>
            </div>
        </AppContainer>
    )
}
