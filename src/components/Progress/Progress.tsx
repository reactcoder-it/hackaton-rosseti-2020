import { Rate, Progress as AntdProgress } from 'antd'
import React from 'react'

import './Progress.css'

const Progress = () => {
  return (
    <div className="progress">
      <div className="progress__rate">
        <h2>Рейтинг: 356</h2>
        <Rate allowHalf={true} defaultValue={3.7} />
      </div>
      <AntdProgress percent={30} />
    </div>
  )
}

export default Progress
