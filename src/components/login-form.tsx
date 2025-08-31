import React from 'react'

import Link from 'next/link'

type Props = {}

function LoginForm({ }: Props) {
    return (
        <>
            <h3 className='text-2xl font-bold mb-2'>Inloggen</h3>
            <form action="" className='flex flex-col mb-4'>
                <label htmlFor="email" className='mb-1 text-sm'>Email</label>
                <input className='mb-2 border p-2 rounded-xl' type="email" name="" id="email" />
                <label htmlFor="wachtwoord" className='mb-1 text-sm'>Wachtwoord</label>
                <input className='mb-4 border p-2 rounded-xl' type="password" name="" id="wachtwoord" />
                <input className='bg-orange-400 p-2 text-white font-bold rounded-xl' type="submit" value="Log in" />
            </form>
            <div className='relative mb-4'>
                <p className='flex justify-center w-full before:content-[attr(after)] before:ml-2 before:h-[0.1px] before:bg-gray-200 before:z-10 before:w-[95px] before:absolute before:left-0 before:top-2.5 after:content-[attr(after)] after:ml-2 after:h-[0.1px] after:bg-gray-200 after:z-10 after:w-[95px] after:absolute after:right-0 after:top-2.5 text-gray-600 font-light text-sm'>Nog niet geregistreerd?</p>
            </div>
            <Link href="/create-account" className='border border-gray-400 text-black p-2 text-center font-bold rounded-3xl transition-colors block hover:bg-gray-100'>Account aanmaken</Link>
        </>
    )
}

export default LoginForm