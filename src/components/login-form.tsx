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
            <div className='text-center mb-4'>
                <p>Nog niet geregistreerd?</p>
            </div>
            <Link href="/create-account" className='border border-gray-400 text-black p-2 text-center font-bold rounded-3xl transition-colors block hover:bg-gray-100'>Account aanmaken</Link>
        </>
    )
}

export default LoginForm