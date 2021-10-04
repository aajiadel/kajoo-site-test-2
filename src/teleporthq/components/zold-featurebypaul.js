import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './zold-featurebypaul.module.css'

const ZoldFeaturebypaul = (props) => {
  return (
    <div className={styles['Feature-col-reverse-example']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <div className={styles['heading-container']}>
          <span className={` ${styles['text']} ${projectStyles['heading2']} `}>
            {props.text}
          </span>
          <span className={styles['text1']}>
            <span>
              Define your brand colors and styles, and apply them easily to your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              wireframes. Save them as a ‘style guide’ to reuse in future
              projects.
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

ZoldFeaturebypaul.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000',
  text: 'Style',
}

ZoldFeaturebypaul.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default ZoldFeaturebypaul
