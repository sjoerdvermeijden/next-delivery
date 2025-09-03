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
                <Button variant="outline" className="relative w-full rounded-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='absolute left-2 top-2'>
                    <path
                        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                        fill="currentColor"
                    />
                    </svg>
                    Doorgaan met Apple
                </Button>
            </div>
            <div className='relative mb-4'>
                <p className='flex justify-center w-full before:content-[attr(after)] before:ml-2 before:h-[0.1px] before:bg-gray-200 before:z-10 before:w-[165px] before:absolute before:left-0 before:top-2.5 after:content-[attr(after)] after:ml-2 after:h-[0.1px] after:bg-gray-200 after:z-10 after:w-[165px] after:absolute after:right-0 after:top-2.5 text-gray-600 font-light text-sm'>Of</p>
            </div>
            <form action="" className='flex flex-col mb-4'>
                <label htmlFor="email" className='mb-1 text-xs font-bold'>Naam</label>
                <input className='mb-3 border p-2 rounded-xl' type="text" name="" id="email" />
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