import React from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'

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