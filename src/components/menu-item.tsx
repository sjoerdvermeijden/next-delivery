'use client'

import React, { useContext, useState, useEffect } from 'react'
import Image from 'next/image'

import { CartContext } from '@/context/cart-context'
import { TotalContext } from '@/context/total-context'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"

type Props = {
    id: number,
    title: string,
    description: string,
    image: {
        img: string,
        alt: string,
    }
    price: number,
    count: number
}

function MenuItem({ id, title, description, price, image }: Props) {
    const [cartItems, setCartItems] = useContext(CartContext);
    const { total, setTotal } = useContext(TotalContext);

    const [open, setOpen] = React.useState(false)
    let [mealCounter, setMealCounter] = useState<number>(1);

    useEffect(() => {
      setMealCounter(1);
    }, [open])

    const orderButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
        e.preventDefault();

        const idArray = cartItems.map((item) => item.id);

        if (!idArray.includes(id)) {
            setCartItems([...cartItems, { id, title, description, price, image, count: mealCounter }])

            setTotal(total + price * mealCounter)
        }

        if (idArray.includes(id) && mealCounter > 0) {

            const cartArray = cartItems.map((item) => {
                if (item.id === id) {
                    item.count = item.count + mealCounter;
                    setTotal(total + item.price * mealCounter)
                    return item;
                } else {
                    return item;
                }
            })

            setCartItems(cartArray);
        } else {
            setOpen(false);
        }

        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="w-full">
                <div className='relative flex grow p-4 border-t border-gray-200 md:border-none md:rounded-xl md:shadow-[0px_2px_6px_2px_rgba(0,0,0,.06)] hover:bg-gray-100 cursor-pointer'>
                    <div className='flex flex-col items-start mr-auto text-left pr-4'>
                        <h1 className='text-md mb-2 font-bold lg:text-xl'>{title}</h1>
                        <p className='font-bold text-sm mb-2'>€{price}</p>
                        <p className='font-light text-sm'>{description}</p>
                        <div role="button" className="absolute p-4 w-[20px] h-[20px] bg-white top-2 right-5 lg:right-2 flex items-center justify-center rounded-[50%] text-orange-500 text-2xl border z-10" onClick={(e) => orderButton(e, id)}>
                            +
                        </div>
                    </div>
                    <div className='flex shrink-0 rounded-xl overflow-hidden' style={{ position: 'relative', width: '118px', height: '118px', minHeight: '118px' }}>
                        <Image
                            src={image.img}
                            alt="Picture of the author"
                            sizes="150px"
                            priority
                            fill
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent hideCloseButton className='fixed top-0 right-0 bottom-0 left-0 w-full translate-y-0 translate-x-0 bg-white border-0 p-5 md:-mt-20 md:top-[50%] md:right-[50%] md:left-[50%] md:bottom-[auto] md:-translate-y-[50%] md:-translate-x-[50%] md:rounded-2xl md:w-[455px] md:max-w-[455px]'>
                <DialogClose asChild>
                    <div className='absolute right-8 top-8 w-8 h-8 rounded-[50%] bg-gray-100'>
                        <button type="button" className='relative w-8 h-8'>
                            <span className='inline-block absolute right-2 top-4 w-4 h-0.5 bg-gray-900 rotate-[45deg]'></span>
                            <span className='inline-block absolute right-2 top-4 w-4 h-0.5 bg-gray-900 -rotate-[45deg]'></span>
                        </button>
                    </div>
                </DialogClose>
                <DialogHeader>
                    <div className='mb-20 overlow-y-scroll'>
                        <Image
                            priority
                            src={image.img}
                            width={410}
                            height={417}
                            style={{ objectFit: "cover", height: '417px', width: '100%', borderRadius: '8px', marginBottom: '10px' }}
                            quality={80}
                            alt="Picture of the author"
                        />
                        <DialogTitle className='text-xl mb-2 font-bold'>{title}</DialogTitle>
                        <div className='flex flex-col mb-6 text-black'>
                            <h3 className='mb-2 font-extrabold text-md'>€ {price}</h3>
                            <p>{description}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-5 bg-white shadow-[2px_4px_8px_4px_rgba(0,0,0,.06)]">
                            <div className='flex'>
                                <div className='flex items-center rounded-3xl mr-2 bg-gray-100'>
                                    <button className='w-12 h-12 flex items-center justify-center text-3xl text-black font-light rounded-[50%] bg-gray-100 hover:bg-gray-200 cursor-pointer'>-</button>
                                    <div className='mx-4 text-2xl text-black bg-gray-100'>{mealCounter}</div>
                                    <button className='w-12 h-12 flex items-center justify-center text-3xl text-black font-light rounded-[50%] bg-gray-100 hover:bg-gray-200 cursor-pointer' onClick={() => setMealCounter(mealCounter => mealCounter + 1)}>+</button>
                                </div>
                                <div role="button" className='flex items-center grow text-lg font-bold bg-orange-500 px-4 text-white p-2 rounded-3xl hover:cursor-pointer' onClick={(e) => orderButton(e, id)}><span className='inline-block mr-auto'>Toevoegen</span> <span className='text-right'>€ {price}</span></div>
                            </div>
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default MenuItem;