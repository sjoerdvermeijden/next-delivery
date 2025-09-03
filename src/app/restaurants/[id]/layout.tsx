import React from 'react'

import Header from '@/components/header'
import Footer from '@/components/footer'
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