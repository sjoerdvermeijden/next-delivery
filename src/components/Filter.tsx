'use client'

import React, { useContext, useEffect, useState } from 'react'

import { FilterContext } from '@/context/FilterContext';
import { RestaurantContext } from '@/context/RestaurantContext';

import { restaurants } from '@/data';

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
    const [restaurantItems, setRestaurantItems] = useContext(RestaurantContext);

    const [filterArray, setFilterArray] = useState<string[]>([]);

    useEffect(() => {
        const newArray = restaurants.map((item) => {
            return item.categories
        })
        const uniqArray = [...new Set(newArray.flat(1))];
        setFilterArray([...uniqArray]);
    }, [])

    const toggleFilter = (item: string) => {
        const index = filterItems.indexOf(item);
        if (index !== -1) {
            // Check if item exists in array and remove if so
            filterItems.splice(index, 1);
            setFilterItems([...filterItems])

            // Create new restaurant array if categories don't contain item
            const newArray = restaurantItems.filter((restaurant) => !restaurant.categories.includes(item))
            setRestaurantItems([...newArray]);
        } else {
            // Create new restaurant array of items that contain category 
            const restaurantArray = restaurants.filter((restaurant) => restaurant.categories.includes(item))

            // Set new restaurant and filter arrays containing item
            setRestaurantItems([...restaurantItems, ...restaurantArray]);
            setFilterItems([...filterItems, item])
        }
    }

    return (
        <div className='flex justify-center mt-8'>
            <ul className='flex gap-10'>
                {
                    filterArray.map((item) => {
                        return (
                            <li key={Math.random()} onClick={(e) => toggleFilter(item)} className='hover:cursor-pointer'>
                                <div className={`w-20 h-10 ${filterItems.includes(item) ? 'bg-green-600' : 'bg-red-500'} rounded mb-1`}></div>
                                <span className='text-sm'>{item}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div >
    )
}

export default Filter