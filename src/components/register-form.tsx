import React from 'react'

import Link from 'next/link'

type Props = {}

function RegisterForm({ }: Props) {
    return (
        <>
            <h3 className='text-2xl font-bold mb-2'>Registreren</h3>
            <form action="" className='flex flex-col mb-4'>
                <label htmlFor="email" className='mb-1 text-sm'>Name</label>
                <input className='mb-2 border p-2 rounded-xl' type="text" name="" id="email" />
                <label htmlFor="email" className='mb-1 text-sm'>Email</label>
                <input className='mb-2 border p-2 rounded-xl' type="email" name="" id="email" />
                <label htmlFor="wachtwoord" className='mb-1 text-sm'>Wachtwoord</label>
                <input className='mb-4 border p-2 rounded-xl' type="password" name="" id="wachtwoord" />
                <input className='bg-orange-400 p-2 text-white font-bold rounded-3xl' type="submit" value="Registreren" />
            </form>
            <div className='flex justify-center text-xs'>
                <p className='inline-block mr-1.5'>Heb je al een account? </p>
                <Link href="/account" className='underline'>Inloggen</Link>
            </div>
        </>
    )
}

export default RegisterForm