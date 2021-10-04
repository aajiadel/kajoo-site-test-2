import React from 'react'

import { Helmet } from 'react-helmet'

import HomepageNavbar from '../components/homepage-navbar'
import PriceCard from '../components/price-card'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './pricing.module.css'

const Pricing = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>
          pricing - Kajoo - Build Sitecore pages visually in minutes
        </title>
        <meta
          name="description"
          content="Kajoo takes care of the tedious part of working with Sitecore. Give it a design and watch it convert it to a functioning page in minutes. "
        />
        <meta
          property="og:title"
          content="pricing - Kajoo - Build Sitecore pages visually in minutes"
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
      <HomepageNavbar rootClassName="rootClassName2"></HomepageNavbar>
      <div className={styles['container1']}>
        <div className={styles['pricing']}>
          <div className={styles['heading-container']}>
            <h1 className={` ${styles['text']} ${projectStyles['heading1']} `}>
              <span className={styles['text1']}></span>
              <span>Fair pricing to make everyone&apos;s life easier</span>
            </h1>
          </div>
          <div className={styles['pricing-card-container']}>
            <PriceCard></PriceCard>
            <PriceCard rootClassName="rootClassName"></PriceCard>
            <PriceCard rootClassName="rootClassName1"></PriceCard>
          </div>
        </div>
      </div>
      <Footer rootClassName="rootClassName"></Footer>
    </div>
  )
}

export default Pricing
