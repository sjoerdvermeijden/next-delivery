'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { IconChevronLeft } from '@tabler/icons-react';

import Filter from './Filter'

type Props = {}

function Header({ }: Props) {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <header className='p-4 shadow-lg overflow-visible relative z-10'>
            {pathname?.includes('/restaurants')
                ? (
                    <div className='flex items-center'>
                        <button onClick={(e) => router.back()}><IconChevronLeft stroke={2} size={18} color="red" className='mr-2' /></button>
                        <Link href="/">
                            <h1 className='font-bold text-3xl text-red-500'>BezorgApp</h1>
                        </Link>
                    </div>
                )
                : (<Link href="/">
                    <h1 className='font-bold text-3xl text-red-500'>BezorgApp</h1>
                </Link>)
            }

            {
                pathname?.includes('/restaurants')
                    ? ('')
                    : (<Filter />)
            }
        </header >
    )
}

export default Header