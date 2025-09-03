import React from 'react'

type Props = {
    children: React.ReactNode;
}

function Wrap({ children }: Props) {
    return (
        <div className='container mx-auto max-w-3xl'>
            {children}
        </div>
    )
}

export default Wrap