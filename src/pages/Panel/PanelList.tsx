import React, { useCallback, useState } from 'react'
import Panel from '../../components/Panel'
import { panels } from '../../models/panel/panel'

const PanelList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleClick = useCallback(
    (index: number) => {
      setActiveIndex(index)
    },
    [setActiveIndex]
  )
  // const handleClick = (index: number) => {
  //   setActiveIndex(index)
  // }
  return (
    <div className="container">
      {panels.map((panel, index) => (
        <Panel key={panel.id} onClick={() => handleClick(index)} active={activeIndex === index} {...panel} />
      ))}
    </div>
  )
}

export default PanelList
