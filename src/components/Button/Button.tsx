import React from 'react'

type Props = {
    children: React.ReactNode;
}

function Button({ children }: Props) {
    return (
        <div className='px-2 py-1 bg-red-600 rounded text-white w-full disabled:opacity-50 text-center'>
            {children}
        </div>
    )
}

export default Button