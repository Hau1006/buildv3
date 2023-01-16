import React, { useState } from 'react'
import './App.css'
interface PanelProps {
  title: string
  image: string
  onClick: () => void
  active: boolean
}
const Panel: React.FC<PanelProps> = ({ title, image, onClick, active }) => {
  // const [webpImage, setWebpImage] = useState<string | null>(null)
  // useEffect(() => {
  //   if (image && typeof createImageBitmap === 'function') {
  //     fetch(image)
  //       .then(response => response.blob())
  //       .then(createImageBitmap)
  //       .then(imageBitmap => {
  //         const canvas = document.createElement('canvas')
  //         canvas.width = imageBitmap.width
  //         canvas.height = imageBitmap.height
  //         canvas.getContext('2d')!.drawImage(imageBitmap, 0, 0)
  //         canvas.toBlob(blob => {
  //           setWebpImage(URL.createObjectURL(blob))
  //         }, 'image/webp')
  //       })
  //   }
  // }, [image])
  return (
    <div className={`panel ${active ? 'active' : ''}`} onClick={onClick} style={{ backgroundImage: `url(${image})` }}>
      <h3>{title}</h3>
      {/* <img
        src={lowResolutionImage}
        srcset={`${lowResolutionImage} 300w, ${image} 1000w`}
        sizes="(max-width: 600px) 300px, 1000px"
        alt={title}
      /> */}
    </div>
  )
}
function App() {
  const [activeIndex, setActiveIndex] = useState(2)
  const panels = [
    {
      title: 'Explore The World',
      image:
        'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Wild Forest',
      image:
        'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Sunny Beach',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
    },
    {
      title: 'City on Winter',
      image:
        'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
    },
    {
      title: 'Mountains - Clouds',
      image:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    }
  ]
  return (
    <div className="container">
      {panels.map((panel, index) => (
        <Panel key={index} onClick={() => setActiveIndex(index)} active={activeIndex === index} {...panel} />
      ))}
    </div>
  )
}

export default App
