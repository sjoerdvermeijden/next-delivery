import React from 'react'

import { IconClock, IconBike, IconBasket, IconStarFilled } from '@tabler/icons-react';

import Image from 'next/image'

import { RestaurantType } from '@/types/restaurant'

function Restaurant({ name, categories, image, reviews, delivery_time, delivery_cost, minimum_order_cost }: RestaurantType) {

    const ratingArray = reviews?.map((item) => {
        return item.rating;
    }).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
    )

    const averageRrating = (ratingArray / reviews?.length).toFixed(1);

    return (
        <>
            <div className='flex flex-col overflow-hidden rounded-l-md shadow-[0px_2px_6px_2px_rgba(0,0,0,.06)] rounded-2xl lg:flex-row'>
                <figure className='relative min-h-[145px] lg:rounded-l-md lg:w-[290px]'>
                    <Image
                        src={image?.img}
                        sizes="150px"
                        priority
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                        alt="Picture of the author"
                    />
                </figure>
                <div className='p-5 grow transition-colors'>
                    <h3 className='font-bold mb-2 text-xl'>{name}</h3>
                    <div className='flex mb-2'>
                        <div className='text-sm flex items-center font-bold mr-3'>
                            <div className='w-4 h-4 mr-1'>
                                <IconStarFilled stroke={2} size={14} />
                            </div>
                            <span className='inline-block mr-1'>{averageRrating}</span>
                            <span className='font-normal inline-block text-sm'>({reviews?.length})</span>
                        </div>
                        {
                            categories.length <= 1 ? (
                                <p className='text-sm'>{categories}</p>

                            ) : (
                                <p className='text-sm'>{categories.sort().join(', ')}</p>
                            )
                        }
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