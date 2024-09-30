import React from 'react'

type Props = {
    children: React.ReactNode;
}

export const Button = () => {
    return <button className='bg-red-500 px-2 py-1 rounded-md text-white'>Check</button>
}