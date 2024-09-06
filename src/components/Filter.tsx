'use client'

import React from 'react'

import { filters } from '../filters';

type Props = {}

function Filter({ }: Props) {

    const addFilter = (e: React.MouseEvent<HTMLElement>) => {
        console.log('test');
    }

    return (
        <div className='p-4 bg-gray-100 flex justify-center'>
            <ul className='flex gap-10'>
                {
                    filters?.map((item) => {
                        return (
                            <li key={Math.random()} onClick={(e) => addFilter(e)}>
                                <div className='w-20 h-12 bg-red-600 rounded mb-1'></div>
                                <span className='text-sm'>{item?.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Filter