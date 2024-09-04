import React from 'react'

type Props = {}

function Filter({ }: Props) {
    return (
        <div className='p-4 bg-gray-100 flex justify-center'>
            <ul className='flex gap-10'>
                <li>
                    <div className='w-20 h-12 bg-red-600 rounded mb-1'></div>
                    <span className='text-sm'>Patat</span>
                </li>
                <li>
                    <div className='w-20 h-12 bg-blue-600 rounded mb-1'></div>
                    <span className='text-sm'>Pizza</span>
                </li>
                <li>
                    <div className='w-20 h-12 bg-green-600 rounded mb-1'></div>
                    <span className='text-sm'>Shoarma</span>
                </li>
                <li>
                    <div className='w-20 h-12 bg-yellow-600 rounded mb-1'></div>
                    <span className='text-sm'>BBQ</span>
                </li>
            </ul>
        </div>
    )
}

export default Filter