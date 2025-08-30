'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { IconChevronLeft, IconMenu2 } from '@tabler/icons-react';

import Filter from './Filter'

type Props = {}

function Header({ }: Props) {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <header className='p-4 shadow-lg overflow-visible relative z-10'>
            <div className='flex items-center'>
                {pathname?.includes('/restaurants')
                    ? (
                        <div className='flex items-center mr-auto'>
                            <button onClick={(e) => router.back()}><IconChevronLeft stroke={2} size={18} color="orange" className='mr-2' /></button>
                            <Link href="/">
                                <h1 className='font-bold text-3xl text-orange-400'>BezorgApp</h1>
                            </Link>
                        </div>
                    )
                    : (<Link href="/" className='mr-auto'>
                        <h1 className='font-bold text-3xl text-orange-400'>BezorgApp</h1>
                    </Link>)
                }
                <IconMenu2 stroke={2} />
            </div>

            {
                pathname?.includes('/restaurants')
                    ? ('')
                    : (<Filter />)
            }
        </header >
    )
}

export default Header