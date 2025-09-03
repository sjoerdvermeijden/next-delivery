import React from 'react'

type Props = {
    children: React.ReactNode
}

function FormContainer({ children }: Props) {
    return (
        <div className='flex justify-center'>
            <div className='w-full p-4 bg-white lg:p-6 lg:rounded-lg lg:shadow-lg lg:w-[450px]'>
                {children}
            </div>
        </div>
    )
}

export default FormContainer