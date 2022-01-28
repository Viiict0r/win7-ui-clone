import React from 'react'
import dynamic from 'next/dynamic'
import type { NextPage } from 'next'

const Desktop = dynamic(() => import('components/pages/Desktop'), {
  ssr: false
})

const Home: NextPage = () => {
  return <Desktop />
}

export default Home
