'use client'

import React from 'react'
import UsersTable from './_com/diaplay'
import getUser from '@/action/get-user'
import { useNavbarStore } from '../_components/layoutWrapper'
import CreateUserForm from './_com/create-userform'

export default async function page() {
    const {user}= useNavbarStore()
  return (

    <div>
        <CreateUserForm />
        
        <UsersTable orgId={user?.organizationId!}/></div>
  )
}
