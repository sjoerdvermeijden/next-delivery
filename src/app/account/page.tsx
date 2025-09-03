import React from 'react'

import Wrap from '@/components/Wrap'
import FormContainer from '@/components/FormContainer'
import LoginForm from '@/components/LoginForm'

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