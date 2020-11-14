import { Avatar, Typography, Button } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'

import { useSession } from '../../hooks/session'
import { useHistory } from 'react-router-dom'
import { useFirebase } from '../../hooks/firebase'
import { ROUTES } from '../../constants/routes'

import './UserProfile.css'

const { Title, Text } = Typography

const UserProfile = () => {
  const session = useSession()
  const firebase = useFirebase()
  const history = useHistory()

  const logout = () => {
    firebase?.doSignOut().then(() => {
      history.push(ROUTES.LOGIN)
    })
  }

  return (
    <div className="user-profile">
      <Avatar size={128} icon={<UserOutlined />} className="user-profile__avatar" />
      <Title
        className="user-profile__name"
        level={5}
      >{`${session?.userData.firstName} ${session?.userData.middleName} ${session?.userData.lastName}`}</Title>
      <Text className="user-profile__email">{session?.user.email}</Text>
      <Text className="user-profile__group">
        Группа: {session?.userData.numberOfEducationGroup}
      </Text>
      <Button type="ghost" onClick={logout} className="user-profile__logout">
        Выйти
      </Button>
    </div>
  )
}

export default UserProfile
