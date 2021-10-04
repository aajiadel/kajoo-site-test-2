import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './feature.module.css'

const Feature = (props) => {
  return (
    <div className={` ${styles['feature']} ${styles[props.rootClassName]} `}>
      <div className={styles['container']}>
        <span className={` ${styles['text']} ${projectStyles['heading2']} `}>
          {props.feature_title}
        </span>
        <span className={` ${styles['text1']} ${projectStyles['body2']} `}>
          {props.text}
        </span>
      </div>
      <div className={styles['container1']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['Image']}
        />
      </div>
    </div>
  )
}

Feature.defaultProps = {
  rootClassName: '',
  feature_title: 'Title',
  image_src: '/playground_assets/publish-1200h.gif',
  image_alt: 'image',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis velit ullamcorper, iaculis turpis tristique, aliquet velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra,',
}

Feature.propTypes = {
  rootClassName: PropTypes.string,
  feature_title: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
}

export default Feature
