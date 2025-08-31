import React from 'react'

import { Switch } from "@/components/ui/switch"

type Props = {}

function RetaurantFilters({ }: Props) {
    return (
        <div className='font-extrabold text-lg w-[312px] mr-6'>
            <h3 className='mb-6'>4 partners</h3>
            <ul className='list-none'>
                <li className='flex items-center mb-4'><span className='inline-block mr-auto'>Nu geopend</span><Switch /></li>
                <li className='flex items-center mb-4'><span className='inline-block mr-auto'>Nieuw</span><Switch /></li>
                <li className='flex items-center mb-4'><span className='inline-block mr-auto'>Gratis bezorging</span><Switch /></li>
                <li className='mb-4'>Minimum bestelbedrag</li>
                <li className='mb-4'>Beoordeling</li>
                <li className='mb-4'>Aanbiedingen en acties</li>
                <li className='mb-4'>Dieetwensen</li>
            </ul>
        </div>
    )
}

export default RetaurantFilters