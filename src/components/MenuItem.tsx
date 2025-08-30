import React, { useContext } from 'react'
import Image from 'next/image'

import { CartContext } from '@/context/CartContext'
import { TotalContext } from '@/context/TotalContext'

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

    return (
        <div className='relative flex grow rounded-xl shadow-[0px_2px_6px_2px_rgba(0,0,0,.06)] p-4 hover:bg-gray-100 cursor-pointer'>
            <div className='flex flex-col mr-auto'>
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
    )
}

export default MenuItem;