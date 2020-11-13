import React, { useEffect, useState } from 'react'
import { Form, Input, Button, notification } from 'antd'
import { useHistory } from 'react-router-dom'
import { useFirebase } from '../../hooks/firebase'
import { ROUTES } from '../../constants/routes'

const LoginForm = () => {
  const history = useHistory()
  const firebase = useFirebase()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const listener = firebase?.auth.onAuthStateChanged((session) => {
      if (session !== null) history.push(ROUTES.HOME)
    })
    return () => {
      if (listener) listener()
    }
  }, [firebase, history, auth])

  const onFinish = (values: { email: string; password: string }) => {
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
      <Form name="signIn" className="signIn" onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, message: 'Введите ваш email!' }]}>
          <Input placeholder="Email" className="signIn__input" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Введите пароль!' }]}>
          <Input.Password placeholder="Пароль" className="signIn__input" />
        </Form.Item>
        <Form.Item className="signIn__container">
          <Button className="signIn__button" type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm
