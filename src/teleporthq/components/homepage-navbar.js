import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './homepage-navbar.module.css'

const HomepageNavbar = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['section-separator']}></div>
      <div className={styles['navbar-container']}>
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
          <div className={styles['teleport-menu-mobile']}>
            <a
              href="#request-demo"
              className={` ${styles['link']} ${projectStyles['navbar-Link']} ${projectStyles['thqLink']} `}
            >
              {props.link}
            </a>
            <Link
              to="/pricing"
              className={` ${styles['link1']} ${projectStyles['navbar-Link']} ${projectStyles['thqLink']} `}
            >
              {props.link1}
            </Link>
            <span
              className={` ${styles['link2']} ${projectStyles['navbar-Link']} `}
            >
              {props.link2}
            </span>
          </div>
          <div className={styles['links-container']}>
            <a
              href="#request-demo"
              className={` ${styles['link3']} ${projectStyles['navbar-Link']} ${projectStyles['thqLink']} `}
            >
              {props.link}
            </a>
            <Link
              to="/pricing"
              className={` ${styles['link4']} ${projectStyles['navbar-Link']} ${projectStyles['thqLink']} `}
            >
              {props.link1}
            </Link>
            <span
              className={` ${styles['link5']} ${projectStyles['navbar-Link']} `}
            >
              {props.link2}
            </span>
          </div>
          <div className={styles['teleport-menu-burger']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

HomepageNavbar.defaultProps = {
  link: 'Request demo',
  rootClassName: '',
  link1: 'Pricing',
  link2: 'For agencies',
  image_alt: 'image',
  image_src:
    '/playground_assets/kajoo_logo_horizontal_notagline_transparent_bg-1200h.png',
}

HomepageNavbar.propTypes = {
  link: PropTypes.string,
  rootClassName: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default HomepageNavbar
