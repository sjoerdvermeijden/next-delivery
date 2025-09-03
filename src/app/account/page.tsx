import React from 'react'

import Wrap from '@/components/wrap'
import FormContainer from '@/components/form-container'
import LoginForm from '@/components/login-form'

type Props = {}

function AccountPage({ }: Props) {
    return (
        <div className='py-14 bg-gray-100'>
            <Wrap>
                <FormContainer>
                    <LoginForm />
                </FormContainer>
            </Wrap>
        </div>
    )
}

export default AccountPage