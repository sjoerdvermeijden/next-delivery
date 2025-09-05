'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { IconChevronLeft, IconMenu2, IconShoppingBag, IconInfoCircle, IconScooter, IconBuilding, IconLayersIntersect, IconCreditCard, IconBuildingStore } from '@tabler/icons-react';

import {
    Dialog,
    DialogContent,
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
                        <DialogContent className='fixed top-0 right-0 bottom-0 left-0 w-full translate-y-0 translate-x-0 bg-white border-0 p-5 md:-mt-20 md:top-[45%] md:right-[50%] md:left-[50%] md:bottom-[auto] md:-translate-y-[50%] md:-translate-x-[50%] md:rounded-2xl md:w-[600px] md:max-w-[600px]'>
                            <DialogHeader>
                                <DialogTitle className='text-2xl font-bold mb-4'>Mijn account</DialogTitle>
                                    <div className='flex'>
                                        <DialogClose asChild>
                                            <Link href="/account" className='text-center mr-4 text-lg text-black font-bold bg-gray-100 p-2 rounded-3xl w-[50%]'>Inloggen</Link>
                                        </DialogClose>
                                        <DialogClose asChild>
                                            <Link href="/create-account" className='text-center text-lg font-bold bg-orange-500 text-white p-2 rounded-3xl w-[50%]'>Registreren</Link>
                                        </DialogClose>
                                    </div>
                            </DialogHeader>
                            <div className="flex flex-col gap-0">
                                <ul className='border-b pb-2 mb-2'>
                                    <li className='flex items-center px-4 py-3 text-gray-600 font-light text-sm hover:bg-gray-100 hover:cursor-pointer'>
                                        <span className='inline-block mr-4'>
                                            <IconShoppingBag stroke={2} size={24} />
                                        </span>
                                        Bestellingen
                                    </li>
                                </ul>
                                <ul className='border-b pb-2 mb-2'>
                                    <li className='flex items-center px-4 py-3 text-gray-600 font-light text-sm hover:bg-gray-100 hover:cursor-pointer'>
                                        <span className='inline-block mr-4'>
                                            <IconLayersIntersect stroke={2} size={24} />
                                        </span>
                                        Stempelkaarten
                                    </li>
                                    <li className='flex items-center px-4 py-3 text-gray-600 font-light text-sm hover:bg-gray-100 hover:cursor-pointer'>
                                        <span className='inline-block mr-4'>
                                            <IconInfoCircle stroke={2} size={24} />
                                        </span>
                                        Hulp nodig
                                    </li>
                                    <li className='flex items-center px-4 py-3 text-gray-600 font-light text-sm hover:bg-gray-100 hover:cursor-pointer'>
                                        <span className='inline-block mr-4'>
                                            <IconCreditCard stroke={2} size={24} />
                                        </span>
                                        Cadeaukaarten
                                    </li>
                                </ul>
                                <ul>
                                    <li className='flex items-center px-4 py-3 text-gray-600 font-light text-sm hover:bg-gray-100 hover:cursor-pointer'>
                                        <span className='inline-block mr-4'>
                                            <IconScooter stroke={2} size={24} />
                                        </span>
                                        Wordt bezorger
                                    </li>
                                    <li className='flex items-center px-4 py-3 text-gray-600 font-light text-sm hover:bg-gray-100 hover:cursor-pointer'>
                                        <span className='inline-block mr-4'>
                                            <IconBuilding stroke={2} size={24} />
                                        </span>
                                        Thuisbezorgd.nl for business
                                    </li>
                                    <li className='flex items-center px-4 py-3 text-gray-600 font-light text-sm hover:bg-gray-100 hover:cursor-pointer'>
                                        <span className='inline-block mr-4'>
                                            <IconBuildingStore stroke={2} size={24} />
                                        </span>
                                        Word partner
                                    </li>
                                </ul>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </header >
    )
}

export default Header