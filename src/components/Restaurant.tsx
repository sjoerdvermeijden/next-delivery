import React from 'react'

import Image from 'next/image'

import { RestaurantType } from '@/types/Restaurant'

function Restaurant({ name, description, image }: RestaurantType) {
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
                    <h3 className='font-bold mb-2'>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Restaurant