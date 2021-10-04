import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './zoldpricing.module.css'

const Zoldpricing = (props) => {
  return (
    <div className={` ${styles['pricing']} ${styles[props.rootClassName]} `}>
      <div className={styles['heading-container']}>
        <h1 className={` ${styles['text']} ${projectStyles['heading1']} `}>
          {props.heading1}
        </h1>
        <span className={` ${styles['text01']} ${projectStyles['body1']} `}>
          {props.text}
        </span>
      </div>
      <div className={styles['pricing-card-container']}>
        <div className={styles['card']}>
          <div className={styles['card-heading']}>
            <span className={styles['type']}>{props.type}</span>
            <span className={projectStyles['heading1']}>{props.price}</span>
          </div>
          <div className={styles['card-content']}>
            <div className={styles['feature']}>
              <span>{props.name}</span>
              <span className={styles['limit']}>{props.limit}</span>
            </div>
            <div className={styles['feature1']}>
              <span>{props.name1}</span>
              <span className={styles['limit1']}>{props.limit1}</span>
            </div>
            <div className={styles['feature2']}>
              <span>{props.name2}</span>
              <span className={styles['limit2']}>{props.limit2}</span>
            </div>
            <div className={styles['feature3']}>
              <span>{props.name3}</span>
              <span className={styles['limit3']}>{props.limit3}</span>
            </div>
            <button
              className={` ${styles['choose']} ${projectStyles['button']} `}
            >
              {props.choose}
            </button>
          </div>
        </div>
        <div className={styles['card1']}>
          <div className={styles['card-heading1']}>
            <span className={styles['type1']}>{props.type1}</span>
            <span className={projectStyles['heading1']}>{props.price1}</span>
          </div>
          <div className={styles['card-content1']}>
            <div className={styles['container']}>
              <span>{props.text1}</span>
              <span className={styles['text03']}>{props.text2}</span>
            </div>
            <div className={styles['container1']}>
              <span>{props.text3}</span>
              <span className={styles['text05']}>{props.text4}</span>
            </div>
            <div className={styles['container2']}>
              <span>{props.text5}</span>
              <span className={styles['text07']}>{props.text6}</span>
            </div>
            <div className={styles['container3']}>
              <span>{props.text7}</span>
              <span className={styles['text09']}>{props.text8}</span>
            </div>
            <button
              className={` ${styles['button']} ${projectStyles['button']} `}
            >
              {props.button}
            </button>
          </div>
        </div>
        <div className={styles['card2']}>
          <div className={styles['card-heading2']}>
            <span className={styles['type2']}>{props.type2}</span>
            <span className={projectStyles['heading1']}>{props.price2}</span>
          </div>
          <div className={styles['card-content2']}>
            <div className={styles['container4']}>
              <span>{props.text9}</span>
              <span className={styles['text11']}>{props.text10}</span>
            </div>
            <div className={styles['container5']}>
              <span>{props.text11}</span>
              <span className={styles['text13']}>{props.text12}</span>
            </div>
            <div className={styles['container6']}>
              <span>{props.text13}</span>
              <span className={styles['text15']}>{props.text14}</span>
            </div>
            <div className={styles['container7']}>
              <span>{props.text15}</span>
              <span className={styles['text17']}>{props.text16}</span>
            </div>
            <button
              className={` ${styles['button1']} ${projectStyles['button']} `}
            >
              {props.button1}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Zoldpricing.defaultProps = {
  text4: 'TBD',
  limit1: 'TBD',
  limit: 'TBD',
  text16: 'UNLIMITED',
  text7: 'Feature four',
  name2: 'Feature three',
  text9: 'Feature one',
  text1: 'Feature one',
  text5: 'Feature three',
  text13: 'Feature three',
  text2: 'TBD',
  text10: 'TBD',
  name: 'Feature one',
  button1: 'CHOOSE',
  text12: 'TBD',
  name1: 'Feature two',
  text14: 'UNLIMITED',
  rootClassName: '',
  limit3: 'UNLIMITED',
  choose: 'CHOOSE',
  type2: 'Premium',
  type1: 'medium',
  text: 'Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  text8: 'UNLIMITED',
  text11: 'Feature two',
  price2: 'Professional',
  type: 'Minimal',
  price: 'Basic',
  text15: 'Feature four',
  heading1: 'Ask for a quote',
  price1: 'Complex',
  name3: 'Feature four',
  text6: 'UNLIMITED',
  text3: 'Feature two',
  button: 'CHOOSE',
  limit2: 'UNLIMITED',
}

Zoldpricing.propTypes = {
  text4: PropTypes.string,
  limit1: PropTypes.string,
  limit: PropTypes.string,
  text16: PropTypes.string,
  text7: PropTypes.string,
  name2: PropTypes.string,
  text9: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  text13: PropTypes.string,
  text2: PropTypes.string,
  text10: PropTypes.string,
  name: PropTypes.string,
  button1: PropTypes.string,
  text12: PropTypes.string,
  name1: PropTypes.string,
  text14: PropTypes.string,
  rootClassName: PropTypes.string,
  limit3: PropTypes.string,
  choose: PropTypes.string,
  type2: PropTypes.string,
  type1: PropTypes.string,
  text: PropTypes.string,
  text8: PropTypes.string,
  text11: PropTypes.string,
  price2: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string,
  text15: PropTypes.string,
  heading1: PropTypes.string,
  price1: PropTypes.string,
  name3: PropTypes.string,
  text6: PropTypes.string,
  text3: PropTypes.string,
  button: PropTypes.string,
  limit2: PropTypes.string,
}

export default Zoldpricing
