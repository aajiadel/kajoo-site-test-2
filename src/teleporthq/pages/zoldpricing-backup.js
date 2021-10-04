import React from 'react'

import { Helmet } from 'react-helmet'

import ZoldNavBar from '../components/zold-nav-bar'
import projectStyles from '../style.module.css'
import styles from './zoldpricing-backup.module.css'

const ZoldpricingBackup = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>
          z old pricing-backup - Kajoo - Build Sitecore pages visually in
          minutes
        </title>
        <meta
          name="description"
          content="Kajoo takes care of the tedious part of working with Sitecore. Give it a design and watch it convert it to a functioning page in minutes. "
        />
        <meta
          property="og:title"
          content="z old pricing-backup - Kajoo - Build Sitecore pages visually in minutes"
        />
        <meta
          property="og:description"
          content="Kajoo takes care of the tedious part of working with Sitecore. Give it a design and watch it convert it to a functioning page in minutes. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a38aa983-2408-4700-bd13-f066aeb36eea/83457e41-6b15-49f4-9906-02b66d9d751f?org_if_sml=1"
        />
      </Helmet>
      <ZoldNavBar rootClassName="rootClassName1"></ZoldNavBar>
      <div className={styles['section-separator']}></div>
      <div className={styles['section-separator1']}></div>
      <div className={styles['pricing']}>
        <div className={styles['heading-container']}>
          <h1 className={` ${styles['text']} ${projectStyles['heading1']} `}>
            <span className={styles['text01']}></span>
            <span>Fair pricing for making everyone&apos;s life easier</span>
          </h1>
        </div>
        <div className={styles['pricing-card-container']}>
          <div className={styles['card']}>
            <div className={styles['card-heading']}>
              <span className={styles['type']}>Minimal</span>
              <span className={projectStyles['heading1']}>Basic</span>
            </div>
            <div className={styles['card-content']}>
              <div className={styles['feature']}>
                <span>Feature one</span>
                <span className={styles['limit']}>TBD</span>
              </div>
              <div className={styles['feature1']}>
                <span>Feature two</span>
                <span className={styles['limit1']}>TBD</span>
              </div>
              <div className={styles['feature2']}>
                <span>Feature three</span>
                <span className={styles['limit2']}>UNLIMITED</span>
              </div>
              <div className={styles['feature3']}>
                <span>Feature four</span>
                <span className={styles['limit3']}>UNLIMITED</span>
              </div>
              <button
                className={` ${styles['choose']} ${projectStyles['button']} `}
              >
                CHOOSE
              </button>
            </div>
          </div>
          <div className={styles['card1']}>
            <div className={styles['card-heading1']}>
              <span className={styles['type1']}>medium</span>
              <span className={projectStyles['heading1']}>Complex</span>
            </div>
            <div className={styles['card-content1']}>
              <div className={styles['container1']}>
                <span>Feature one</span>
                <span className={styles['text04']}>TBD</span>
              </div>
              <div className={styles['container2']}>
                <span>Feature two</span>
                <span className={styles['text06']}>TBD</span>
              </div>
              <div className={styles['container3']}>
                <span>Feature three</span>
                <span className={styles['text08']}>UNLIMITED</span>
              </div>
              <div className={styles['container4']}>
                <span>Feature four</span>
                <span className={styles['text10']}>UNLIMITED</span>
              </div>
              <button
                className={` ${styles['button']} ${projectStyles['button']} `}
              >
                CHOOSE
              </button>
            </div>
          </div>
          <div className={styles['card2']}>
            <div className={styles['card-heading2']}>
              <span className={styles['type2']}>Premium</span>
              <span className={projectStyles['heading1']}>Professional</span>
            </div>
            <div className={styles['card-content2']}>
              <div className={styles['container5']}>
                <span>Feature one</span>
                <span className={styles['text12']}>TBD</span>
              </div>
              <div className={styles['container6']}>
                <span>Feature two</span>
                <span className={styles['text14']}>TBD</span>
              </div>
              <div className={styles['container7']}>
                <span>Feature three</span>
                <span className={styles['text16']}>UNLIMITED</span>
              </div>
              <div className={styles['container8']}>
                <span>Feature four</span>
                <span className={styles['text18']}>UNLIMITED</span>
              </div>
              <button
                className={` ${styles['button1']} ${projectStyles['button']} `}
              >
                CHOOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZoldpricingBackup
