import React from 'react'

import { IconClock, IconBike, IconBasket, IconStarFilled } from '@tabler/icons-react';

import Image from 'next/image'

import { RestaurantType } from '@/types/Restaurant'

function Restaurant({ name, categories, image, reviews, delivery_time, delivery_cost, minimum_order_cost }: RestaurantType) {

    const ratingArray = reviews?.map((item) => {
        return item.rating;
    }).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
    )

    const averageRrating = (ratingArray / reviews?.length).toFixed(1);

    return (
        <>
            <div className='flex rounded-l-md shadow-md'>
                <figure className='hidden lg:block rounded-l-md' style={{ position: 'relative', width: '200px', minHeight: '120px' }}>
                    <Image
                        src={image?.img}
                        sizes="150px"
                        priority
                        fill
                        style={{
                            objectFit: 'cover',
                            borderTopLeftRadius: '6px',
                            borderBottomLeftRadius: '6px'
                        }}
                        alt="Picture of the author"
                    />
                </figure>
                <div className='p-5 bg-gray-100 grow group-hover:bg-gray-200 transition-colors rounded-r-md'>
                    <h3 className='font-bold mb-2 text-xl'>{name}</h3>
                    <div className='flex mb-2'>
                        <div className='text-sm flex items-center font-bold mr-3'>
                            <div className='w-4 h-4 mr-2 -mt-0.5'>
                                <IconStarFilled stroke={2} size={17} color="orange" />
                            </div>
                            <span className='inline-block mr-1'>{averageRrating}</span>
                            <span className='font-normal inline-block text-sm'>({reviews?.length})</span>
                        </div>
                        <p className='text-sm'>{categories}</p>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-sm mr-4 inline-flex items-center'>
                            <div className='w-4 h-4 mr-2 -mt-1'>
                                <IconClock stroke={2} size={17} />
                            </div>
                            <span>{delivery_time} min</span>
                        </span>
                        <span className='text-sm mr-4 inline-flex items-center'>
                            <div className='w-4 h-4 mr-2 -mt-1'>
                                <IconBike stroke={2} size={17} />
                            </div>
                            <span>€ {delivery_cost}</span>
                        </span>
                        <span className='text-sm inline-flex items-center'>
                            <div className='w-4 h-4 mr-2 -mt-0.5'>
                                <IconBasket stroke={2} size={17} />
                            </div>
                            <span>€ {minimum_order_cost}</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurant