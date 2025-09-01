import React, { useState, useContext } from 'react'

import { IconBasket } from '@tabler/icons-react';

import { CartContext } from '@/context/CartContext'
import { TotalContext } from '@/context/TotalContext'

type Props = {}

function Cart({ }: Props) {
    const [cartItems, setCartItems] = useContext(CartContext);
    const { total, setTotal } = useContext(TotalContext);

    const [responsiveState, setResponsiveState] = useState<Boolean>(true);

    const cartView = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        setResponsiveState(true)
    }

    const orderButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        setResponsiveState(false)
    }

    const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.preventDefault();

        const cartArray = cartItems.map((item) => {
            if (item.id === id) {
                item.count++;
            }
            setTotal(total + item.price)
            return item;
        });

        setCartItems(cartArray);
    }

    const subtractItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.preventDefault();

        const cartArray = cartItems.map((item) => {
            if (item.id === id) {
                item.count--;
            }
            setTotal(total - item.price)
            return item;
        });
        setCartItems(cartArray);

        const newArray = cartArray.filter((item) => item.count > 0);
        setCartItems(newArray);
    }

    return (
        <>
            {
                cartItems.length <= 0 &&
                    !responsiveState ? <></>
                    :         
                    <div className={`${responsiveState ? 'fixed bottom-0' : 'fixed h-full top-0'}  bg-white left-0 w-full shadow-[2px_4px_8px_4px_rgba(0,0,0,.06)] p-5 z-10 lg:relative lg:w-80 lg:h-auto`}>
                        <div className='sticky top-8 left-8'>
                            <div className={`${responsiveState ? 'hidden' : 'mb-5 block'} justify-center items-center flex lg:block`}>
                                <h3 className='text-2xl font-extrabold text-center mr-auto lg:mr-0'>Winkelmandje</h3>
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden" onClick={(e) => cartView(e)}>
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {
                                (cartItems.length <= 0) ?
                                    responsiveState ?
                                        <div className='hidden pt-10 lg:flex flex-col items-center'>
                                            <div className='mb-4'>
                                                <IconBasket stroke={2} size={44} />
                                            </div>
                                            <h3 className='text-2xl font-extrabold text-center mb-2 lg:mr-0'>Vul je mandje</h3>
                                            <p>Je winkelmandje is nog leeg</p>
                                        </div>
                                        :
                                        <></>
                                    :
                                    <>
                                        <ul className={`${responsiveState ? 'hidden' : 'block'} lg:block mb-4`}>
                                            {
                                                cartItems.map((item) => {
                                                    return (
                                                        <li className="py-4 border-b border-gray-300" key={item.id}>
                                                            <div className="flex flex-col items-end">
                                                                <div className="w-full">
                                                                    <div className="flex items-center mb-3">
                                                                        <p className="font-bold mr-auto underline text-sm">{item.title}</p>
                                                                        <p>€{(item.price * item.count).toFixed(2)}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='flex bg-gray-100 rounded-2xl'>
                                                                    <button className='rounded-[50%] w-[33px] h-[33px] flex items-center justify-center px-2 font-light text-3xl hover:bg-gray-200' onClick={(e) => subtractItem(e, item.id)}>-</button>
                                                                    <div className="flex items-center justify-center px-2 text-lg">{item.count}</div>
                                                                    <button className='rounded-[50%] w-[33px] h-[33px] flex items-center justify-center px-2 font-light text-3xl hover:bg-gray-200' onClick={(e) => addItem(e, item.id)}>+</button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <div>
                                            <p className='mb-3 font-bold'>Totaal: €{Math.abs(total).toFixed(2)}</p>
                                            <button className="block w-full text-center text-lg font-bold bg-orange-400 text-white p-2 rounded-3xl" onClick={(e) => orderButton(e)}>Bestellen (€{Math.abs(total).toFixed(2)})</button>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default Cart