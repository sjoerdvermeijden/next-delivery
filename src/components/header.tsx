'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { IconChevronLeft, IconMenu2 } from '@tabler/icons-react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"

type Props = {}

function Header({ }: Props) {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <header className='p-4 shadow-lg overflow-visible relative z-20'>
            <div className='flex items-center'>
                {pathname?.includes('/restaurants')
                    ? (
                        <div className='flex items-center mr-auto'>
                            <button onClick={(e) => router.back()}><IconChevronLeft stroke={2} size={18} color="#f97316" className='mr-2' /></button>
                            <Link href="/">
                                <h1 className='font-bold text-2xl text-orange-500'>BezorgApp</h1>
                            </Link>
                        </div>
                    )
                    : (<Link href="/" className='mr-auto'>
                        <h1 className='font-bold text-2xl text-orange-500'>BezorgApp</h1>
                    </Link>)
                }
                <div className='w-10 h-10 rounded-[50%] flex items-center justify-center transition-colors hover:bg-gray-100 cursor-pointer'>
                    <Dialog>
                        <DialogTrigger>
                            <IconMenu2 stroke={2} />
                        </DialogTrigger>
                        <DialogContent className='fixed top-0 right-0 bottom-0 left-0 w-full translate-y-0 translate-x-0 bg-white border-0 p-5 lg:-mt-20 lg:top-[50%] lg:right-[50%] lg:left-[50%] lg:bottom-[auto] lg:-translate-y-[50%] lg:-translate-x-[50%] lg:rounded-2xl lg:w-[455px] lg:max-w-[455px]'>
                            <DialogHeader>
                                <DialogTitle className='text-2xl font-extrabold mb-2'>Mijn account</DialogTitle>
                                    <div className='flex'>
                                        <DialogClose asChild>
                                            <Link href="/account" className='text-center mr-2 text-lg text-black font-bold bg-gray-100 p-2 rounded-3xl w-[50%]'>Inloggen</Link>
                                        </DialogClose>
                                        <DialogClose asChild>
                                            <Link href="/create-account" className='text-center text-lg font-bold bg-orange-500 text-white p-2 rounded-3xl w-[50%]'>Registreren</Link>
                                        </DialogClose>
                                    </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </header >
    )
}

export default Header