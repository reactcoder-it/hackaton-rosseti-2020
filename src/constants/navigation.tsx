import {
  BulbOutlined,
  AreaChartOutlined,
  PlayCircleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import React from 'react'
import { ROUTES } from './routes'

export const NAVIGATION_ITEMS = [
  {
    id: 0,
    title: 'Задания',
    path: ROUTES.TASKS,
    icon: <BulbOutlined />,
  },
  {
    id: 1,
    title: 'Результаты',
    path: ROUTES.RESULTS,
    icon: <AreaChartOutlined />,
  },
  {
    id: 2,
    title: 'Вебинары',
    path: ROUTES.WEBINARS,
    icon: <PlayCircleOutlined />,
  },
  {
    id: 3,
    title: 'Помощь',
    path: ROUTES.HELP,
    icon: <QuestionCircleOutlined />,
  },
]
