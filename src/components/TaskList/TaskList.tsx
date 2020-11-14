import { Button, Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

const TaskList = () => {
  const taskItems = [
    {
      id: 0,
      title: 'Настройка IED на прием-передачу GOOSE-сообщений',
      path: ROUTES.TASK,
    },
    {
      id: 1,
      title: 'Настройка IED на прием-передачу GOOSE-сообщений',
      path: ROUTES.TASK,
    },
    {
      id: 2,
      title: 'Настройка IED на прием-передачу GOOSE-сообщений',
      path: ROUTES.TASK,
    },
  ]
  return (
    <div>
      {taskItems.map(({ id, title, path }) => (
        <Card key={id} style={{ marginBottom: 32 }}>
          <h3>{title}</h3>
          <Link to={path}>
            <Button type="primary" size="large" style={{ marginTop: 16 }}>
              Приступить к заданию
            </Button>
          </Link>
        </Card>
      ))}
    </div>
  )
}

export default TaskList
