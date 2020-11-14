import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { NAVIGATION_ITEMS } from '../../constants/navigation'

const Navigation = () => {
  return (
    <div className="navigation">
      <Menu theme="dark" mode="inline">
        {NAVIGATION_ITEMS.map(({ id, title, path, icon }) => (
          <Menu.Item key={id} icon={icon}>
            <Link to={path}>{title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  )
}

export default Navigation
