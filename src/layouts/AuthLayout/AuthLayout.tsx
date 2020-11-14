import React, { FC } from 'react'

import './AuthLayout.css'

const AuthLayout: FC = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout__container">{children}</div>
    </div>
  )
}

export default AuthLayout
