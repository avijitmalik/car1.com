import React from 'react'
import styles from './Driver.module.css'
import dilogo from '../../images/drive.png'
const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={dilogo} alt="dilogo" />
        </div>
        <div>
            <h2>
              Find your perfect car <span>to try before you buy.</span>
            </h2>
            <p>
              Make sure your future wheels works wells with your lifestyle by taking 
              your time in the drive site.
            </p>
            <button>Browser cars</button>
        </div>
    </div>
  )
}

export default Driver