import React, { useContext } from 'react'
import Image from 'next/image'

import { CartContext } from '@/context/CartContext'
import { TotalContext } from '@/context/TotalContext'

import {
    Dialog,
    DialogContent,
    DialogDescription,
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

    const orderButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.preventDefault();

        const idArray = cartItems.map((item) => item.id);

        if (!idArray.includes(id)) {
            setCartItems([...cartItems, { id, title, description, price, image, count: 1 }])

            setTotal(total + price)
        }

        if (idArray.includes(id)) {

            const cartArray = cartItems.map((item) => {
                if (item.id === id) {
                    item.count++;
                    setTotal(total + item.price)
                    return item;
                } else {
                    return item;
                }
            })

            setCartItems(cartArray);
        }
    }

    const dialogCartButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
        e.preventDefault();

        const idArray = cartItems.map((item) => item.id);

        if (!idArray.includes(id)) {
            setCartItems([...cartItems, { id, title, description, price, image, count: 1 }])

            setTotal(total + price)
        }

        if (idArray.includes(id)) {

            const cartArray = cartItems.map((item) => {
                if (item.id === id) {
                    item.count++;
                    setTotal(total + item.price)
                    return item;
                } else {
                    return item;
                }
            })

            setCartItems(cartArray);
        }
    }

    return (
        <Dialog>
            <DialogTrigger className="w-full">
                <div className='relative flex grow rounded-xl shadow-[0px_2px_6px_2px_rgba(0,0,0,.06)] p-4 hover:bg-gray-100 cursor-pointer'>
                    <div className='flex flex-col items-start mr-auto'>
                        <h1 className='text-xl mb-2 font-bold'>{title}</h1>
                        <p className='font-bold text-sm mb-2'>€{price}</p>
                        <p className='font-light text-sm'>{description}</p>
                        <button className="absolute p-4 w-[20px] h-[20px] bg-white top-2 right-2 flex items-center justify-center rounded-[50%] text-orange-400 text-2xl border z-10" onClick={(e) => orderButton(e, id)}>
                            +
                        </button>
                    </div>
                    <div className='rounded-l-3xl' style={{ position: 'relative', width: '119px', height: '119px', minHeight: '119px' }}>
                        <Image
                            src={image.img}
                            alt="Picture of the author"
                            sizes="150px"
                            priority
                            fill
                            style={{
                                objectFit: 'cover',
                                borderRadius: '8px',
                            }}
                        />
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className='bg-white -mt-20 border-0 p-5 rounded-2xl w-[455px] max-w-[455px]'>
                <DialogHeader>
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
                    <DialogDescription>
                        <div className='flex flex-col mb-8 text-black'>
                            <h3 className='mb-2 font-extrabold text-md'>€ {price}</h3>
                            <p>{description}</p>
                        </div>
                        <div className='flex'>
                            <div className='flex items-center rounded-3xl mr-2 bg-gray-100'>
                                <div className='w-12 h-12 flex items-center justify-center text-3xl text-black font-light rounded-[50%] bg-gray-100 hover:bg-gray-200 cursor-pointer' >-</div>
                                <div className='mx-4 text-2xl text-black bg-gray-100'>0</div>
                                <div className='w-12 h-12 flex items-center justify-center text-3xl text-black font-light rounded-[50%] bg-gray-100 hover:bg-gray-200 cursor-pointer'>+</div>
                            </div>
                            <div className='flex grow text-lg font-bold bg-orange-400 px-4 text-white p-2 rounded-3xl w-[50%] hover:cursor-pointer' onClick={(e) => dialogCartButton(e, id)}><span className='inline-block mr-auto'>Toevoegen</span> <span className='text-right'>€ {price}</span></div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default MenuItem;