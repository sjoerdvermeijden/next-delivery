'use client'

import React, { useEffect, useState } from 'react'

import { IconClock, IconBike, IconBasket } from '@tabler/icons-react';

import Image from 'next/image'

import { useParams } from 'next/navigation'

import { restaurants } from '../../../data'

import { RestaurantType } from '../../../types/restaurant'

import Cart from '../../../components/cart'

import MenuItem from '../../../components/menu-item'

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
                <div className='relative h-[200px] lg:h-[480px] overflow-hidden'>
                    {
                        restaurant &&
                        <>
                            <Image
                                priority
                                src={restaurant.image.img}
                                width={910}
                                height={200}
                                style={{ position: 'absolute', top: '0px', right: '0px', bottom: '0px', left: '0px', objectFit: "cover", width: '100%' }}
                                quality={100}
                                alt="Picture of the author"
                            />
                        </>
                    }
                </div>
                {
                    restaurant &&
                    <div className="container mb-11 lg:mb-0 mx-auto py-10 px-4">
                        <h1 className='font-bold mb-2 text-2xl'>{restaurant?.name}</h1>
                        <div className='flex items-center mb-6'>
                            <span className='text-sm mr-2 inline-flex items-center after:w-1 after:h-1 after:bg-black after:rounded-[50%] after:ml-2'>
                                <div className='w-4 h-4 mr-2 -mt-1'>
                                    <IconClock stroke={2} size={17} />
                                </div>
                                <span>{restaurant.delivery_time} min</span>
                            </span>
                            <span className='text-sm mr-2 inline-flex items-center after:w-1 after:h-1 after:bg-black after:rounded-[50%] after:ml-2'>
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