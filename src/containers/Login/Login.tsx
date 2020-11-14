import React from 'react'
import { Link } from 'react-router-dom'

import LoginForm from '../../components/LoginForm'
import { ROUTES } from '../../constants/routes'
import AuthLayout from '../../layouts/AuthLayout'

const Login = () => {
  return (
    <AuthLayout>
      <h1>Войти</h1>
      <LoginForm />
      <p>
        Нет аккаунта? <Link to={ROUTES.REGISTER}>Регистрация</Link>
      </p>
    </AuthLayout>
  )
}

export default Login
