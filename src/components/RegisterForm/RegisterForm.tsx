import React, { useEffect, useState } from 'react'
import { Form, Input, Button, notification } from 'antd'
import { useHistory } from 'react-router-dom'
import { useFirebase } from '../../hooks/firebase'
import { ROUTES } from '../../constants/routes'
import { UserData } from '../../hooks/session/types'

const RegisterForm = () => {
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
    firstName: string
    middleName: string
    lastName: string
    numberOfEducationGroup: number
    email: string
    password: string
  }

  const onFinish = (values: FormModel) => {
    const { firstName, middleName, lastName, numberOfEducationGroup, email, password } = values
    firebase
      ?.doCreateUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        if (user != null) {
          return firebase?.addUserData(
            firstName,
            middleName,
            lastName,
            numberOfEducationGroup,
            user?.uid
          )
        } else {
          return Promise.reject(new Error('User is empty'))
        }
      })
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
      <Form name="register" className="register" onFinish={onFinish}>
        <Form.Item name="firstName" rules={[{ required: true, message: 'Введите ваше имя!' }]}>
          <Input size="large" placeholder="Имя" className="register__input" />
        </Form.Item>
        <Form.Item
          name="middleName"
          rules={[{ required: true, message: 'Введите ваше отчество!' }]}
        >
          <Input size="large" placeholder="Отчество" className="register__input" />
        </Form.Item>
        <Form.Item name="lastName" rules={[{ required: true, message: 'Введите вашу фамилию!' }]}>
          <Input size="large" placeholder="Фамилия" className="register__input" />
        </Form.Item>
        <Form.Item
          name="numberOfEducationGroup"
          rules={[{ required: true, message: 'Введите ваш номер учебной группы!' }]}
        >
          <Input size="large" placeholder="Номер учебной группы" className="register__input" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true, message: 'Введите ваш email!' }]}>
          <Input size="large" placeholder="Email" className="register__input" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Введите пароль!' }]}>
          <Input.Password size="large" placeholder="Пароль" className="register__input" />
        </Form.Item>
        <Form.Item className="register__buttons">
          <Button size="large" className="register__button" type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default RegisterForm
