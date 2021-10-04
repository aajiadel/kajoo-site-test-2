import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Component1 from './component1'
import projectStyles from '../style.module.css'
import styles from './new-navbar.module.css'

const NewNavbar = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
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
          <div className={styles['links-container']}>
            <Component1></Component1>
          </div>
        </div>
      </div>
    </div>
  )
}

NewNavbar.defaultProps = {
  image_alt: 'image',
  image_src:
    '/playground_assets/kajoo_logo_horizontal_notagline_transparent_bg-1200h.png',
  rootClassName: '',
}

NewNavbar.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NewNavbar
