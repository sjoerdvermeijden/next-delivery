'use client'

import React from 'react'

import { TotalComponent } from '@/context/TotalContext'
import { CartComponent } from '@/context/CartContext'

type Props = {
    children: React.ReactNode
}

function Providers({ children }: Props) {
    return (
        <TotalComponent>
            <CartComponent>
                {children}
            </CartComponent>
        </TotalComponent>
    )
}

export default Providers