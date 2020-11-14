import { Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import { useFirebase } from '../../hooks/firebase'

import { useSession } from '../../hooks/session'
import MainLayout from '../../layouts/MainLayout'

const Home = () => {
  const session = useSession()
  const firebase = useFirebase()
  const history = useHistory()

  return (
    <MainLayout>
      <h1>Тест</h1>
      <p>Тестовая страница</p>
    </MainLayout>
  )
}

export default Home
