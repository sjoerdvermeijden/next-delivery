import React from 'react'

type Props = {
    children: React.ReactNode
}

function FormContainer({ children }: Props) {
    return (
        <div className='flex justify-center'>
            <div className='p-6 bg-white rounded-lg shadow-lg w-[450px]'>
                {children}
            </div>
        </div>
    )
}

export default FormContainer