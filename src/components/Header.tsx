'use client'

import React, { useEffect } from 'react'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import Filter from './Filter'

type Props = {}

function Header({ }: Props) {
    const pathname = usePathname()

    useEffect(() => {


    }, [])


    return (
        <header className='p-4 shadow-lg overflow-visible relative z-10'>
            <Link href="/">
                <h1 className='font-bold text-3xl text-red-500'>BezorgApp</h1>
            </Link>
            {pathname?.includes('/restaurants')
                ? ('')
                : (<Filter />)
            }
        </header>
    )
}

export default Header