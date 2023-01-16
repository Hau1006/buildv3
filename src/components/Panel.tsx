import React from 'react'
import { PanelProps } from '../models/panel/panel'

const Panel: React.FC<PanelProps> = ({ title, onClick, active, image }) => {
  return (
    <div className={`panel ${active ? 'active' : ''}`} onClick={onClick} style={{ backgroundImage: `url(${image})` }}>
      <h3>{title}</h3>
    </div>
  )
}

export default Panel
