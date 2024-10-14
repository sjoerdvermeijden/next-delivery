'use client'

import React from 'react'

import { TotalComponent } from '@/context/TotalContext'
import { CartComponent } from '@/context/CartContext'
import { FilterComponent } from '@/context/FilterContext'
import { RestaurantComponent } from '@/context/RestaurantContext'

type Props = {
    children: React.ReactNode
}

function Providers({ children }: Props) {
    return (
        <RestaurantComponent>
            <TotalComponent>
                <CartComponent>
                    <FilterComponent>
                        {children}
                    </FilterComponent>
                </CartComponent>
            </TotalComponent>
        </RestaurantComponent>
    )
}

export default Providers