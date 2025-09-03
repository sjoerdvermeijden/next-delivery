import React from 'react'

import Main from '@/components/main'

type Props = {
    children: React.ReactNode;
}

function PageLayout({ children }: Props) {
    return (
        <>
            <Main>
                {children}
            </Main>
        </>
    )
}

export default PageLayout