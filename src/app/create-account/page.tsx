import React from 'react'
import FormContainer from '@/components/form-container'
import RegisterForm from '@/components/register-form'

type Props = {}

function CreateAccountPage({ }: Props) {
    return (
        <div className='lg:py-14 bg-gray-100'>
            <FormContainer>
                <RegisterForm />
            </FormContainer>
        </div>
    )
}

export default CreateAccountPage