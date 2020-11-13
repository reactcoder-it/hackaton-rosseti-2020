import React from 'react'

import { useSession } from '../../hooks/session'

const Home = () => {
  const session = useSession()
  return (
    <div>
      <h1>Цифровая подстанция</h1>
      <p>Добро пожаловать, {session?.email}</p>
    </div>
  )
}

export default Home
