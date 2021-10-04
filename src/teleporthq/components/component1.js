import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component1.module.css'

const Component1 = (props) => {
  return (
    <div className={styles['container']}>
      <a
        href="#request-demo"
        className={` ${styles['link']} ${projectStyles['navbar-Link']} ${projectStyles['thqLink']} `}
      >
        {props.link3}
      </a>
    </div>
  )
}

Component1.defaultProps = {
  link3: 'Request a demo',
}

Component1.propTypes = {
  link3: PropTypes.string,
}

export default Component1
