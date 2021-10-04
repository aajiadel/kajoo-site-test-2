import React from 'react'

import projectStyles from '../style.module.css'
import styles from './left-alignedparagraph.module.css'

const LeftAlignedparagraph = () => {
  return (
    <div className={styles['container']}>
      <span className={` ${styles['text']} ${projectStyles['body2']} `}>
        <span>
          “I just love it when it takes blood, sweat, and tears to get my ideas
          from sketches to fully functioning Sitecore experiences” said No-one
          Ever. And it got us thinking: Translating wireframes and mockups to
          Sitecore code is not hard. But it&apos;s tedious. So, we made Kajoo, a
          low-code/no-code solution that converts design to code. Magically.
          Auto-magically!
        </span>
      </span>
    </div>
  )
}

export default LeftAlignedparagraph
