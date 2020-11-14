import React from 'react'
import TaskList from '../../components/TaskList'
import MainLayout from '../../layouts/MainLayout'

const Tasks = () => {
  return (
    <MainLayout>
      <h1>Задания</h1>
      <TaskList />
    </MainLayout>
  )
}

export default Tasks
