import React from 'react'
import { Spin } from 'antd'

import './Loading.css'

const Loading = () => {
  return (
    <div className="loading">
      <Spin />
    </div>
  )
}

export default Loading
