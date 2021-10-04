import React from 'react'

import { Helmet } from 'react-helmet'

import HomepageNavbar from '../components/homepage-navbar'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './request-demo.module.css'

const RequestDemo = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>
          request-demo - Kajoo - Build Sitecore pages visually in minutes
        </title>
        <meta
          name="description"
          content="Kajoo takes care of the tedious part of working with Sitecore. Give it a design and watch it convert it to a functioning page in minutes. "
        />
        <meta
          property="og:title"
          content="request-demo - Kajoo - Build Sitecore pages visually in minutes"
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
      <HomepageNavbar rootClassName="rootClassName4"></HomepageNavbar>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <h1 className={` ${styles['text']} ${projectStyles['heading1']} `}>
            Request a demo
          </h1>
          <span className={` ${styles['text1']} ${projectStyles['body1']} `}>
            <span className={styles['text2']}>
              Schedule a free live demo to see Kajoo in action
            </span>
            <br></br>
            <span className={styles['text4']}>
              Brace yourself! Things could get r
            </span>
            <span className={styles['text5']}></span>
            <span className={styles['text6']}>eally magical!</span>
          </span>
        </div>
      </div>
      <Footer rootClassName="rootClassName4"></Footer>
    </div>
  )
}

export default RequestDemo
