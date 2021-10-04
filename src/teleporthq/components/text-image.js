import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './text-image.module.css'

const TextImage = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['Feature']}>
        <div className={styles['container1']}>
          <div className={styles['heading-container']}>
            <span
              className={` ${styles['text']} ${projectStyles['heading2']} `}
            >
              {props.text}
            </span>
            <span className={styles['text1']}>{props.text1}</span>
          </div>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
      </div>
    </div>
  )
}

TextImage.defaultProps = {
  image_alt: 'image',
  text1: 'Rquest a free demo ',
  image_src: '/playground_assets/default-img.svg',
  text: 'turn mockups to Sitecore pages in minutes',
}

TextImage.propTypes = {
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default TextImage
