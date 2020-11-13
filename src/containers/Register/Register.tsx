import React from 'react'
import { Link } from 'react-router-dom'

import RegisterForm from '../../components/RegisterForm'

import { ROUTES } from '../../constants/routes'

const Register = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <RegisterForm />
      <p>
        Уже зарегистрированы? <Link to={ROUTES.LOGIN}>Войти</Link>
      </p>
    </div>
  )
}

export default Register
