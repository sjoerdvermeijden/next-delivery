import React from 'react'

import { Button } from "@/components/ui/button"

import Link from 'next/link'

type Props = {}

function RegisterForm({ }: Props) {
    return (
        <>
            <h3 className='text-2xl font-bold mb-2'>Registreren</h3>
            <div className='mb-4'>
                <Button variant="outline" className="relative w-full rounded-3xl mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='absolute left-2 top-2'>
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Doorgaan met Google
                </Button>
                <Button variant="outline" className="relative w-full rounded-3xl bg-blue-500 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" className='absolute left-2 top-2'>
                        <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" />
                    </svg>
                    Doorgaan met Facebook
                </Button>
            </div>
            <div className='flex items-center mb-4'>
                <span className='inline-flex w-full grow h-1.5 border-t border-t-gray-200 mt-1 mr-4'></span>
                <p className='flex justify-center text-gray-600 font-light text-sm mr-4'>Of</p>
                <span className='inline-flex w-full h-1.5 border-t border-t-gray-200 mt-1'></span>
            </div>
            <form action="" className='flex flex-col mb-4'>
                <label htmlFor="name" className='mb-1 text-xs font-bold'>Naam</label>
                <input className='mb-3 border p-2 rounded-xl' type="text" name="" id="name" />
                <label htmlFor="email" className='mb-1 text-xs font-bold'>E-mailadres</label>
                <input className='mb-3 border p-2 rounded-xl' type="email" name="" id="email" />
                <label htmlFor="wachtwoord" className='mb-1 text-xs font-bold'>Wachtwoord</label>
                <input className='mb-4 border p-2 rounded-xl' type="password" name="" id="wachtwoord" />
                <input className='bg-orange-500 p-2 text-white font-bold rounded-3xl' type="submit" value="Registreren" />
            </form>
            <div className='flex justify-center text-xs'>
                <p className='inline-block mr-1.5'>Heb je al een account? </p>
                <Link href="/account" className='underline'>Inloggen</Link>
            </div>
        </>
    )
}

export default RegisterForm