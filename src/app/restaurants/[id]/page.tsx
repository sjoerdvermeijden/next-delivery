'use client'

import React, { useEffect, useState } from 'react'

import { IconClock, IconBike, IconBasket } from '@tabler/icons-react';

import Image from 'next/image'

import { useParams } from 'next/navigation'

import { restaurants } from '../../../data'

import { RestaurantType } from '../../../types/restaurant'

import Cart from '@/components/cart';

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
                <div className='pt-5 pr-4 pl-4 md:p-0'>
                    <div className='relative h-[170px] rounded-2xl md:rounded-none md:h-[320px] lg:h-[480px] overflow-hidden'>
                        {
                            restaurant &&
                            <>
                                <figure className='absolute top-0 right-0 bottom-0 left-0 w-full'>
                                    <Image
                                        priority
                                        src={restaurant.image.img}
                                        width={910}
                                        height={200}
                                        style={{ objectFit: "cover", width: '100%', height: '100%' }}
                                        quality={100}
                                        alt="Picture of the author"
                                        />
                                </figure>
                                <div className='relative container mx-auto py-4 h-full'>
                                    <figure className='absolute bottom-3 left-3 w-[54px] h-[54px] rounded-lg overflow-hidden lg:bottom-4 lg:h-[80px] lg:w-[80px]'>
                                    <Image
                                        src="https://placehold.co/60x60"
                                        width={100}
                                        height={100}
                                        style={{ objectFit: "cover"}}
                                        quality={75}
                                        alt="placeholder"
                                        />
                                    </figure>
                                </div>
                            </>
                        }
                    </div>
                </div>
                {
                    restaurant &&
                    <div className="container mx-auto pt-4 pb-4 md:px-4 md:mb-6">
                        <div className='px-4 md:px-0 mb-4'>
                            <h1 className='font-bold mb-2 text-2xl'>{restaurant?.name}</h1>
                            <div className='flex items-center'>
                                <span className='text-sm mr-2 inline-flex items-center after:w-1 after:h-1 after:bg-black after:rounded-[50%] after:ml-2'>
                                    <div className='w-4 h-4 mr-2 -mt-0.5'>
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
                        </div>
                        <ul className='grid md:gap-2'>
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