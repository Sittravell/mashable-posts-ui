import {PropsWithChildren} from "react";

export function AppContainer({
    children,
}: PropsWithChildren) {

    return (
        <div
            style={{
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
            }}>
            {children}
        </div>
    )
}
