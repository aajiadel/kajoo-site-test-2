import React from 'react'

import projectStyles from '../style.module.css'
import styles from './left-alignedheading.module.css'

const LeftAlignedheading = () => {
  return (
    <div className={styles['heading-container']}>
      <h1 className={` ${styles['text']} ${projectStyles['heading2']} `}>
        <span>The story behind Kajoo</span>
      </h1>
    </div>
  )
}

export default LeftAlignedheading
