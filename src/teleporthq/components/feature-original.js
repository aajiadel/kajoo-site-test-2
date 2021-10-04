import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './feature-original.module.css'

const FeatureOriginal = (props) => {
  return (
    <div className={styles['feature']}>
      <div className={styles['Upload-and-convert']}>
        <div className={styles['container']}>
          <div className={styles['heading-container']}>
            <span
              className={` ${styles['text']} ${projectStyles['heading2']} `}
            >
              {props.feature_title}
            </span>
            <span className={` ${styles['text1']} ${projectStyles['body2']} `}>
              {props.text}
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

FeatureOriginal.defaultProps = {
  rootClassName: '',
  feature_title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis velit ullamcorper, iaculis turpis tristique, aliquet velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra,',
  image_src: 'ef333728-ea15-4088-ae74-f95248ff196a',
  image_alt: 'image',
}

FeatureOriginal.propTypes = {
  rootClassName: PropTypes.string,
  feature_title: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureOriginal
