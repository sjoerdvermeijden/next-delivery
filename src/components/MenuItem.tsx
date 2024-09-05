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
        <div className='bg-gray-100 relative flex grow rounded-l-md'>
            <figure className='hidden lg:block rounded-l-md' style={{ position: 'relative', width: '200px', minHeight: '120px' }}>
                <Image
                    src={image.img}
                    alt="Picture of the author"
                    sizes="150px"
                    fill
                    style={{
                        objectFit: 'cover',
                        borderTopLeftRadius: '6px',
                        borderBottomLeftRadius: '6px'
                    }}
                />
            </figure>
            <div className='flex flex-col p-4 rounded-r-md'>
                <h1 className='text-xl mb-2 font-bold'>{title}</h1>
                <p className='font-light text-sm mb-2'>{description}</p>
                <p className='font-bold text-sm'>€{price}</p>
                <button className="bg-gray-400  absolute right-0 top-0 text-white py-2 px-4 hover:bg-gray-600 hover:text-white rounded-tr-md rounded-bl-md transition-colors" onClick={(e) => orderButton(e, id)}>
                    +
                </button>
            </div>
        </div>
    )
}

export default MenuItem;