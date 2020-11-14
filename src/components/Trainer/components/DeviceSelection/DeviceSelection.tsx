import React, { useEffect, useState, FC } from 'react'
import { Menu, Card } from 'antd'
import { MailOutlined, AppstoreOutlined, ClusterOutlined, RetweetOutlined } from '@ant-design/icons'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'

import './DeviceSelection.css'

const { SubMenu } = Menu

interface DeviceSelectionProps {
  onAddNewDevice: () => void
}

const DeviceSelection: FC<DeviceSelectionProps> = ({ onAddNewDevice }) => {
  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    const maxX =
      trainer && deviceSelection ? trainer.offsetWidth - deviceSelection.offsetWidth - 16 : 0
    const maxY =
      trainer && deviceSelection ? trainer.clientHeight - deviceSelection.clientHeight - 16 : 0

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

    setPosition(newPosition)
  }

  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 16, y: 16 })
  const [trainer, setTrainer] = useState<HTMLElement | null>()
  const [deviceSelection, setDeviceSelection] = useState<HTMLElement | null>()

  useEffect(() => {
    setTrainer(document.getElementById('trainer'))
    setDeviceSelection(document.getElementById('device-selection'))
  }, [])

  return (
    <Draggable position={position} onStop={handleStop}>
      <div className="device-selection" id="device-selection">
        <Card title="Выбор устройства" style={{ width: 300 }} className="device-selection__card">
          <Menu
            selectable={false}
            style={{ width: '100%' }}
            mode="inline"
            className="device-selection__menu"
          >
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="РЗА">
              <Menu.Item onClick={onAddNewDevice} key="1">
                Устройство 1
              </Menu.Item>
              <Menu.Item onClick={onAddNewDevice} key="2">
                Устройство 2
              </Menu.Item>
              <Menu.Item onClick={onAddNewDevice} key="3">
                Устройство 3
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<ClusterOutlined />} title="Промышленные коммутаторы">
              <Menu.Item key="1">Промышленный коммутатор 1</Menu.Item>
              <Menu.Item key="2">Промышленный коммутатор 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<RetweetOutlined />} title="Подключения">
              <Menu.Item key="1">Подключение 1</Menu.Item>
              <Menu.Item key="2">Подключение 2</Menu.Item>
              <Menu.Item key="3">Подключение 3</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<MailOutlined />} title="Связи передачи данных">
              <Menu.Item key="1">Связь 1</Menu.Item>
              <Menu.Item key="2">Связь 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Card>
      </div>
    </Draggable>
  )
}

export default DeviceSelection
