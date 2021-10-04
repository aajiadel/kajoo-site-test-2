import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './logos.module.css'

const Logos = (props) => {
  return (
    <div className={styles['clients']}>
      <div className={styles['heading-container']}>
        <h1 className={` ${styles['text']} ${projectStyles['heading1']} `}>
          {props.heading1}
        </h1>
      </div>
      <div className={styles['logo-container']}>
        <img
          alt={props.logo_alt}
          src={props.logo_src}
          className={styles['logo']}
        />
        <img
          alt={props.logo_alt1}
          src={props.logo_src1}
          className={styles['logo1']}
        />
      </div>
    </div>
  )
}

Logos.defaultProps = {
  logo_src: '/playground_assets/loreal-logo-light-gray.svg',
  logo_src1: '/playground_assets/ABA-logo-light-gray.svg',
  heading1: 'Loved by',
  logo_alt1: 'image',
  logo_alt: 'image',
}

Logos.propTypes = {
  logo_src: PropTypes.string,
  logo_src1: PropTypes.string,
  heading1: PropTypes.string,
  logo_alt1: PropTypes.string,
  logo_alt: PropTypes.string,
}

export default Logos
