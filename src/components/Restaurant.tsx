import React from 'react'

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { RestaurantType } from '@/types/Restaurant'

function Restaurant({ name, categories, image, reviews, delivery_time, delivery_cost, minimum_order_cost }: RestaurantType) {

    const ratingArray = reviews.map((item) => {
        return item.rating;
    }).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
    )

    const averageRrating = (ratingArray / reviews.length).toFixed(1);

    return (
        <>
            <div className='flex rounded-l-md shadow-md'>
                <figure className='hidden lg:block rounded-l-md' style={{ position: 'relative', width: '200px', minHeight: '120px' }}>
                    <Image
                        src={image?.img}
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
                <div className='p-5 bg-gray-100 grow group-hover:bg-gray-200 transition-colors rounded-r-md'>
                    <h3 className='font-bold mb-2 text-xl'>{name}</h3>
                    <div className='flex mb-1'>
                        <div className='text-sm flex items-center font-bold mr-3'>
                            <div className='w-4 h-4 mr-2'>
                                <FontAwesomeIcon icon={faStar} color="orange" className='flex-shrink-0' />
                            </div>
                            <span className='inline-block mr-1'>{averageRrating}</span>
                            <span className='font-normal inline-block text-sm'>({reviews?.length})</span>
                        </div>
                        <p className='text-sm'>{categories.join(', ')}</p>
                    </div>
                    <div>
                        <span className='text-sm mr-3'>{delivery_time}</span>
                        <span className='text-sm mr-3'>€ {delivery_cost}</span>
                        <span className='text-sm'>€ {minimum_order_cost}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurant