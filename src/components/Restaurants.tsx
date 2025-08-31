'use client'

import React, { useContext, useEffect } from 'react'

import Link from 'next/link'

import { RestaurantContext } from '@/context/RestaurantContext'

import { restaurants } from '../data'

import Restaurant from '../components/Restaurant'

function Restaurants() {
    const [restaurantItems, setRestaurantItems] = useContext(RestaurantContext);

    useEffect(() => {
    }, [restaurantItems])


    return (
        <>
            <div>
                <h3 className='font-bold mb-4 text-2xl'>Bestel bij 4 locaties</h3>
                <ul className='grid gap-2 items-start'>

                    {
                        restaurantItems.length === 0 ? (
                            restaurants.map((item) => {
                                return <>
                                    <li key={item.id} className='group'>
                                        <Link href={`/restaurants/${item.id}`}>
                                            <Restaurant {...item} />
                                        </Link>
                                    </li>
                                </>
                            }
                            )) : (
                            restaurantItems.map((item) => {
                                return <>
                                    <li key={item.id} className='group'>
                                        <Link href={`/restaurants/${item.id}`}>
                                            <Restaurant {...item} />
                                        </Link>
                                    </li>
                                </>
                            })
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default Restaurants