'use client'

import React, { useEffect, useState } from 'react'

import { useParams } from 'next/navigation'

import { restaurants } from '../../../data'

import { RestaurantType } from '@/types/Restaurant'

import Cart from '../../../components/Cart'

import MenuItem from '../../../components/MenuItem'


function RestaurantPage() {
    const params = useParams()
    const [restaurant, setRestaurant] = useState<RestaurantType>();

    useEffect(() => {
        const result = restaurants.filter(item => item.id.toString() === params.id);

        setRestaurant(result[0]);
    }, [restaurants])



    return (
        <>
            <div className="container mb-11 lg:mb-0 mx-auto py-10 px-4">
                <h1 className='font-bold mb-6 text-2xl'>{restaurant?.name}</h1>
                <ul className='grid gap-5'>
                    {
                        restaurant?.menu.map((item) => {
                            return <li key={item.id} className='flex rounded-md shadow-md'>
                                <MenuItem {...item} />
                            </li>
                        })
                    }
                </ul>
            </div>
            <Cart />
        </>
    )
}

export default RestaurantPage