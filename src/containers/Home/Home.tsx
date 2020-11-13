import { Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import { useFirebase } from '../../hooks/firebase'

import { useSession } from '../../hooks/session'

const Home = () => {
  const session = useSession()
  const firebase = useFirebase()
  const history = useHistory()

  const logout = () => {
    firebase?.doSignOut().then(() => {
      history.push(ROUTES.LOGIN)
    })
  }

  return (
    <div>
      <h1>Цифровая подстанция</h1>
      <p>
        Добро пожаловать,{' '}
        {`${session?.userData.firstName} ${session?.userData.middleName} ${session?.userData.lastName}`}
      </p>
      <p>Группа: {session?.userData.numberOfEducationGroup}</p>
      <Button type="primary" onClick={logout}>
        Выйти
      </Button>
    </div>
  )
}

export default Home
