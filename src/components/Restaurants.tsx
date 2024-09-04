import React from 'react'

import Link from 'next/link'

import { restaurants } from '../data'

import Restaurant from '../components/Restaurant'
import Wrap from '../components/Wrap'

function Restaurants() {
    return (
        <>
            <Wrap>
                <div className='py-20'>
                    <h3 className='font-bold mb-6 text-2xl'>Restauranten</h3>
                    <ul className='grid gap-5 items-start'>
                        {
                            restaurants.map((item) => {
                                return <>
                                    <li key={item.id} className='group'>
                                        <Link href={`/restaurants/${item.id}`}>
                                            <Restaurant {...item} />
                                        </Link>
                                    </li>
                                </>
                            })
                        }
                    </ul>
                </div>
            </Wrap>
        </>
    )
}

export default Restaurants