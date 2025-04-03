import Agent from '@/components/Agent';
import { getCurrentUser } from '@/lib/actions/auth.action'
import React from 'react'

const InterviewPage = async () => {

    const user = await getCurrentUser();

    return (
        <>
            <h3>Interview Generation</h3>
            <Agent
            userName={user?.name!}
            type='generate'
            />
        </>
    )
}

export default InterviewPage