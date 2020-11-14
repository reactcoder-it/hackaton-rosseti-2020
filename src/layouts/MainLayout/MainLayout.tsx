import React, { FC, useState } from 'react'

import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import UserProfile from '../../components/UserProfile'
import Navigation from '../../components/Navigation'
import Progress from '../../components/Progress'

import './MainLayout.css'
import Logo from '../../components/Logo'

const { Header, Sider, Content } = Layout

const MainLayout: FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>()

  const toggle = () => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <div className="main-layout">
      <Layout>
        <Sider trigger={null} collapsible={true} collapsed={collapsed} width={320}>
          <UserProfile />
          <Navigation />
        </Sider>
        <Layout className="site-layout">
          <Header className="main-layout__header">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <div className="main-layout__header-container">
              <Progress />
              <Logo />
            </div>
          </Header>
          <Content className="main-layout__content">{children}</Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default MainLayout
