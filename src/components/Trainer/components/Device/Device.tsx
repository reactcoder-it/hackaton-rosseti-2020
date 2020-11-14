import React, { useEffect, useState, FC } from 'react'
import { Button, Card } from 'antd'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'
import { DeviceInfo } from '../../Trainer'

import './Device.css'

interface DeviceProps extends DeviceInfo {
  onUpdateDevice: (device: DeviceInfo) => void
}

const Device: FC<DeviceProps> = ({ id, name, position, options, onUpdateDevice }) => {
  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    const maxX = trainer && device ? trainer.offsetWidth - device.offsetWidth - 16 : 0
    const maxY = trainer && device ? trainer.clientHeight - device.clientHeight - 16 : 0

    const newPosition = { x: data.x, y: data.y }

    if (data.x < 16) {
      newPosition.x = 16
    } else if (data.x > maxX) {
      newPosition.x = maxX
    }

    if (data.y < 16) {
      newPosition.y = 16
    } else if (data.y > maxY) {
      newPosition.y = maxY
    }

    onUpdateDevice({ id, name, position: newPosition, options })
  }

  const [trainer, setTrainer] = useState<HTMLElement | null>()
  const [device, setDevice] = useState<HTMLElement | null>()

  useEffect(() => {
    setTrainer(document.getElementById('trainer'))
    setDevice(document.getElementById(`device-${id}`))
  }, [id])

  return (
    <Draggable position={position} onStop={handleStop}>
      <div className="device" id={`device-${id}`}>
        <Card title={name} style={{ width: 300 }} className="device__card">
          <Button>Настройка</Button>
        </Card>
      </div>
    </Draggable>
  )
}

export default Device
