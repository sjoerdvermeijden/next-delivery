import React from 'react'

import Button from './Button/Button'

type Props = {}

function Cart({ }: Props) {
    return (
        <>
            <div className="fixed left-0 w-full lg:relative lg:w-80 lg:h-auto  bg-gray-200 p-5">
                <h3 className='text-2xl text-center mr-auto lg:mr-0'>Winkelmandje</h3>
                <ul className="lg:block cart-items mb-4">
                    <li className="py-4 border-b border-gray-300">
                        <div className="flex flex-col items-end">
                            <div className="w-full">
                                <div className="flex">
                                    <p className="mr-1">(4)</p>
                                    <p className="mb-3 mr-auto">Kapsalon</p>
                                    <p className="font-bold">€99</p>
                                </div>
                            </div>
                            <div>
                                <button className='px-2 bg-gray-500 text-white font-light rounded mr-1'>-</button>
                                <button className='px-2 bg-gray-500 text-white font-light rounded'>+</button>
                            </div>
                        </div>
                    </li>
                    <li className="py-4 border-b border-gray-300">
                        <div className="flex flex-col items-end">
                            <div className="w-full">
                                <div className="flex">
                                    <p className="mr-1">(4)</p>
                                    <p className="mb-3 mr-auto">Kapsalon</p>
                                    <p className="font-bold">€99</p>
                                </div>
                            </div>
                            <div>
                                <button className='px-2 bg-gray-500 text-white font-light rounded mr-1'>-</button>
                                <button className='px-2 bg-gray-500 text-white font-light rounded'>+</button>
                            </div>
                        </div>
                    </li>
                </ul>
                <p className='mb-2 font-bold'>Totaal: €</p>
                <Button>Bestellen</Button>
            </div>
        </>
    )
}

export default Cart