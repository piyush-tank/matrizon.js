'use client'

import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import AHRiLandingPage from '@/components/ahri-landing-page'
import React from 'react'

const Page = () => {
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard')
    }
  }, [isSignedIn, isLoaded])

  return <AHRiLandingPage />
}

export default Page
