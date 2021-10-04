import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './zold-nav-bar.module.css'

const ZoldNavBar = (props) => {
  return (
    <div
      className={` ${styles['navbar-container']} ${
        styles[props.rootClassName]
      } `}
    >
      <div className={styles['navbar']}>
        <div className={styles['Logo']}>
          <Link to="/" className={styles['navlink']}>
            <img
              alt={props.image_alt}
              src={props.image_src}
              className={` ${styles['image']} ${projectStyles['thqLink']} `}
            />
          </Link>
        </div>
        <div className={styles['links-container']}>
          <a
            href="#request-demo"
            className={` ${styles['link']} ${projectStyles['navbar-Link']} ${projectStyles['thqLink']} `}
          >
            {props.link1}
          </a>
          <Link
            to="/pricing"
            className={` ${styles['link1']} ${projectStyles['navbar-Link']} ${projectStyles['thqLink']} `}
          >
            {props.link}
          </Link>
          <span
            className={` ${styles['link2']} ${projectStyles['navbar-Link']} `}
          >
            {props.link2}
          </span>
        </div>
        <div className={styles['burger-menu']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

ZoldNavBar.defaultProps = {
  image_alt: 'image',
  link: 'Pricing',
  link2: 'For agencies',
  rootClassName: '',
  link1: 'Free demo',
  image_src:
    '/playground_assets/Kajoo_Logo_Horizontal_transparent_BG-1200h.png',
}

ZoldNavBar.propTypes = {
  image_alt: PropTypes.string,
  link: PropTypes.string,
  link2: PropTypes.string,
  rootClassName: PropTypes.string,
  link1: PropTypes.string,
  image_src: PropTypes.string,
}

export default ZoldNavBar
