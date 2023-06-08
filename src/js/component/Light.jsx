import React from 'react'
import styles from './Light.module.css'

const Light = ({ color, colorSetter, isOn }) => {
  return (
    <div
      className={`${styles.light} ${styles[color]} ${isOn && styles.selected}`}
      onClick={() => colorSetter(color)}
    ></div>
  )
}

export default Light
