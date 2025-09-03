'use client'

import React from 'react'

import { TotalComponent } from '@/context/total-context'
import { CartComponent } from '@/context/cart-context'
import { FilterComponent } from '@/context/filter-context'
import { RestaurantComponent } from '@/context/restaurant-context'

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