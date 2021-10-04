import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './price-card.module.css'

const PriceCard = (props) => {
  return (
    <div className={` ${styles['card']} ${styles[props.rootClassName]} `}>
      <div className={styles['card-heading']}>
        <span className={` ${styles['price']} ${projectStyles['heading3']} `}>
          {props.plan_name}
        </span>
      </div>
      <div className={styles['card-content']}>
        <div className={styles['feature']}>
          <span className={styles['name']}>{props.name}</span>
          <span className={styles['limit']}>{props.limit}</span>
        </div>
        <div className={styles['feature1']}>
          <span className={styles['name1']}>{props.name1}</span>
          <span className={styles['limit1']}>{props.limit1}</span>
        </div>
        <div className={styles['feature2']}>
          <span className={styles['name2']}>{props.name2}</span>
          <span className={styles['limit2']}>{props.limit2}</span>
        </div>
        <div className={styles['feature3']}>
          <span className={styles['name3']}>{props.name3}</span>
          <span className={styles['limit3']}>{props.limit3}</span>
        </div>
        <button className={` ${styles['choose']} ${projectStyles['button']} `}>
          {props.CTA}
        </button>
      </div>
    </div>
  )
}

PriceCard.defaultProps = {
  limit: 'TBD',
  name3: 'Feature four',
  limit2: 'UNLIMITED',
  name2: 'Feature three',
  rootClassName: '',
  limit1: 'TBD',
  limit3: 'UNLIMITED',
  plan_name: 'Plan',
  name1: 'Feature two',
  CTA: 'Request a demo',
  name: 'Feature one',
}

PriceCard.propTypes = {
  limit: PropTypes.string,
  name3: PropTypes.string,
  limit2: PropTypes.string,
  name2: PropTypes.string,
  rootClassName: PropTypes.string,
  limit1: PropTypes.string,
  limit3: PropTypes.string,
  plan_name: PropTypes.string,
  name1: PropTypes.string,
  CTA: PropTypes.string,
  name: PropTypes.string,
}

export default PriceCard
