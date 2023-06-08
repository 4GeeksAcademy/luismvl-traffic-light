import React, { useState } from 'react'
import styles from './TrafficLight.module.css'
import Light from './Light.jsx'

const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState('red')
  const [showPurple, setShowPurple] = useState(false)

  const changeColor = () => {
    if (selectedColor === 'red') setSelectedColor('yellow')
    if (selectedColor === 'yellow') setSelectedColor('green')
    if (selectedColor === 'green') setSelectedColor('red')
  }

  const togglePurple = () => {
    setShowPurple(!showPurple)
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.trafficLight}>
        <Light
          color='red'
          colorSetter={setSelectedColor}
          isOn={selectedColor === 'red'}
        />
        <Light
          color='yellow'
          colorSetter={setSelectedColor}
          isOn={selectedColor === 'yellow'}
        />
        <Light
          color='green'
          colorSetter={setSelectedColor}
          isOn={selectedColor === 'green'}
        />
        {showPurple && (
          <Light
            color='purple'
            colorSetter={setSelectedColor}
            isOn={selectedColor === 'purple'}
          />
        )}
      </div>
      <button onClick={changeColor}>Change color</button>
      <button onClick={togglePurple}>Toggle Purple</button>
    </div>
  )
}

export default TrafficLight
