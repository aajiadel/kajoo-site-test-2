import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './zold-backupoffeaturecomponent.module.css'

const ZoldBackupoffeaturecomponent = (props) => {
  return (
    <div className={styles['feature']}>
      <div className={styles['Upload-and-convert']}>
        <div className={styles['container']}>
          <div className={styles['heading-container']}>
            <span
              className={` ${styles['text']} ${projectStyles['heading2']} `}
            >
              {props.text}
            </span>
            <span className={` ${styles['text1']} ${projectStyles['body2']} `}>
              <span>
                Upload an image of a wireframe or create one using Kajoo’s
                library of 21 building blocks. Kajoo’s trained AI neural network
                algorithms will convert your wireframe to functioning web
                elements.
              </span>
            </span>
          </div>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['Image']}
        />
      </div>
    </div>
  )
}

ZoldBackupoffeaturecomponent.defaultProps = {
  image_alt: 'image',
  text: 'Upload',
  image_src: 'ef333728-ea15-4088-ae74-f95248ff196a',
}

ZoldBackupoffeaturecomponent.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default ZoldBackupoffeaturecomponent
