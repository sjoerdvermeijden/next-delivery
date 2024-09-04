'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'

import { useParams } from 'next/navigation'

import { restaurants } from '../../../data'

import Layout from '../../../components/Layout'
import Cart from '../../../components/Cart'

import { RestaurantType } from '@/types/Restaurant'

function RestaurantPage() {
    const params = useParams()
    const [restaurant, setRestaurant] = useState<RestaurantType>();

    useEffect(() => {
        const result = restaurants.filter(item => item.id.toString() === params.id);

        setRestaurant(result[0]);
    }, [restaurants])

    return (
        <>
            <Layout>
                <div className="container mb-11 lg:mb-0 mx-auto py-10 px-4">
                    <h1 className='font-bold mb-6 text-2xl'>{restaurant?.name}</h1>
                    <ul className='grid gap-5'>
                        {
                            restaurant?.menu.map((item) => {
                                return <li key={item.id} className='flex'>
                                    <figure className='hidden lg:block' style={{ position: 'relative', width: '200px', minHeight: '120px' }}>
                                        <Image
                                            src={item?.image.img}
                                            sizes="150px"
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                borderTopLeftRadius: '6px',
                                                borderBottomLeftRadius: '6px'
                                            }}
                                            alt="Picture of the author"
                                        />
                                    </figure>
                                    <div className='p-5 bg-gray-100 relative grow rounded-r-md'>
                                        <button className='absolute right-0 top-0 bg-gray-400 text-white py-2 px-4 rounded-tr-md rounded-bl-md hover:bg-gray-500 transition-colors'>+</button>
                                        <h3 className='font-bold text-xl mb-2'>{item.title}</h3>
                                        <p className='mb-2'>{item.description}</p>
                                        <span className='font-bold'>€{item.price}</span>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <Cart />
            </Layout >
        </>
    )
}

export default RestaurantPage