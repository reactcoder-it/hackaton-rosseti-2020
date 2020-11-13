import React, { useEffect, useState } from 'react'
import { Form, Input, Button, notification } from 'antd'
import { useHistory } from 'react-router-dom'
import { useFirebase } from '../../hooks/firebase'
import { ROUTES } from '../../constants/routes'
import { UserData } from '../../hooks/session/types'

const LoginForm = () => {
  const history = useHistory()
  const firebase = useFirebase()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const listener = firebase?.auth.onAuthStateChanged((user) => {
      if (user != null) {
        firebase.getUserData(user.uid).then((shapshot) => {
          shapshot.forEach((userSnapshot) => {
            const userData = userSnapshot.data() as UserData
            if (userData != null) {
              history.push(ROUTES.HOME)
            }
          })
        })
      }
    })
    return () => {
      if (listener) listener()
    }
  }, [firebase, history, auth])

  interface FormModel {
    email: string
    password: string
  }

  const onFinish = (values: FormModel) => {
    const { email, password } = values
    firebase
      ?.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setAuth(true)
      })
      .catch((error) =>
        notification.error({
          message: 'Ошибка',
          description: error.message,
        })
      )
  }

  return (
    <div>
      <Form name="login" className="login" onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, message: 'Введите ваш email!' }]}>
          <Input placeholder="Email" className="login__input" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Введите пароль!' }]}>
          <Input.Password placeholder="Пароль" className="login__input" />
        </Form.Item>
        <Form.Item className="login__buttons">
          <Button className="login__button" type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm
