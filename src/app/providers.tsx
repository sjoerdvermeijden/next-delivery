'use client'

import React from 'react'

import { TotalComponent } from '@/context/TotalContext'
import { CartComponent } from '@/context/CartContext'
import { FilterComponent } from '@/context/FilterContext'

type Props = {
    children: React.ReactNode
}

function Providers({ children }: Props) {
    return (
        <TotalComponent>
            <CartComponent>
                <FilterComponent>
                    {children}
                </FilterComponent>
            </CartComponent>
        </TotalComponent>
    )
}

export default Providers