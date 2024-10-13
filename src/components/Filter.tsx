'use client'

import React, { useContext } from 'react'

import { filters } from '../filters';

import { FilterContext } from '@/context/FilterContext';

type Filter = {
    id: number,
    title: string,
    image: {
        src: string,
        alt: string
    }
}

function Filter() {
    const [filterItems, setFilterItems] = useContext(FilterContext);

    const toggleFilter = (e: React.MouseEvent<HTMLElement>, item: Filter) => {
        const index = filterItems.indexOf(item.title);
        if (index !== -1) {
            let filterList = filterItems
            filterList.splice(index, 1);
            setFilterItems(filterList)
        } else {
            setFilterItems([...filterItems, item.title])
        }
    }

    return (
        <div className='p-4 bg-gray-100 flex justify-center'>
            <ul className='flex gap-10'>
                {
                    filters?.map((item) => {

                        return (
                            <li key={Math.random()} onClick={(e) => toggleFilter(e, item)} className='hover:cursor-pointer'>
                                <div className={`w-20 h-10 ${filterItems.includes(item.title) ? 'bg-green-600' : 'bg-red-500'} rounded mb-1`}></div>
                                <span className='text-sm'>{item?.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div >
    )
}

export default Filter