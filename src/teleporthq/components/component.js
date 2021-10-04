import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles['container']}>
      <button
        type="submit"
        className={` ${styles['cta-btn']} ${projectStyles['button']} `}
      >
        <span className={` ${styles['text']} ${projectStyles['navbar-Link']} `}>
          {props.text}
        </span>
      </button>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'Request a demo',
}

AppComponent.propTypes = {
  text: PropTypes.string,
}

export default AppComponent
