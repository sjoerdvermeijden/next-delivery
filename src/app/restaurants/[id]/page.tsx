'use client'

import React, { useEffect, useState } from 'react'

import { IconClock, IconBike, IconBasket, IconStarFilled } from '@tabler/icons-react';

import Image from 'next/image'

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
            <div className='flex flex-col w-full'>
                {
                    restaurant &&
                    <>
                        <Image
                            priority
                            src={restaurant.image.img}
                            width={410}
                            height={480}
                            style={{ objectFit: "cover", height: '480px', width: '100%', marginBottom: '10px' }}
                            quality={100}
                            alt="Picture of the author"
                        />
                    </>
                }
                {
                    restaurant &&
                    <div className="container mb-11 lg:mb-0 mx-auto py-10 px-4">
                        <h1 className='font-bold mb-2 text-2xl'>{restaurant?.name}</h1>
                        <div className='flex items-center mb-6'>
                            <span className='text-sm mr-4 inline-flex items-center'>
                                <div className='w-4 h-4 mr-2 -mt-1'>
                                    <IconClock stroke={2} size={17} />
                                </div>
                                <span>{restaurant.delivery_time} min</span>
                            </span>
                            <span className='text-sm mr-4 inline-flex items-center'>
                                <div className='w-4 h-4 mr-2 -mt-0.5'>
                                    <IconBasket stroke={2} size={17} />
                                </div>
                                <span>€ {restaurant.minimum_order_cost}</span>
                            </span>
                            <span className='text-sm inline-flex items-center'>
                                <div className='w-4 h-4 mr-2 -mt-1'>
                                    <IconBike stroke={2} size={17} />
                                </div>
                                <span>€ {restaurant.delivery_cost}</span>
                            </span>
                        </div>
                        <ul className='grid gap-2'>
                            {
                                restaurant?.menu.map((item) => {
                                    return <li key={item.id} className='flex grow'>
                                        <MenuItem {...item} />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
            <Cart />
        </>
    )
}

export default RestaurantPage