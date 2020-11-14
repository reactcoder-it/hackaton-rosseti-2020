import React, { useState } from 'react'

import DeviceSelection from './components/DeviceSelection'
import Device from './components/Device'

import './Trainer.css'

export interface DeviceInfo {
  id: number
  name: string
  position: { x: number; y: number }
  options: DeviceOptions
}

export interface DeviceOptions {
  IP: string
  GCB_NAME: string
  GOOSE_ID: string
  MAC_ADDRESS: string
  APP_ID: string
  VLAN_ID: string
  MIN_TIME: number
  MAX_TIME: number
}

const Trainer = () => {
  const [devices, setDevices] = useState<DeviceInfo[]>([])
  const [count, setCount] = useState<number>(0)

  const handleAddNewDevice = (name: string, position: { x: number; y: number }) => {
    const newDevice: DeviceInfo = {
      id: count,
      name,
      position,
      options: {
        IP: '',
        GCB_NAME: '',
        GOOSE_ID: '',
        MAC_ADDRESS: '',
        APP_ID: '',
        VLAN_ID: '',
        MIN_TIME: 0,
        MAX_TIME: 0,
      },
    }
    setDevices([...devices, newDevice])
    setCount(count + 1)
  }

  const handleUpdateDevice = (device: DeviceInfo) => {
    const idx = devices.findIndex(({ id }) => id === device.id)

    setDevices([...devices.slice(0, idx), device, ...devices.slice(idx + 1)])
  }

  return (
    <div className="trainer" id="trainer">
      <DeviceSelection onAddNewDevice={handleAddNewDevice} />
      <div>
        {devices.map((props) => (
          <Device {...props} key={props.id} onUpdateDevice={handleUpdateDevice} />
        ))}
      </div>
    </div>
  )
}

export default Trainer
