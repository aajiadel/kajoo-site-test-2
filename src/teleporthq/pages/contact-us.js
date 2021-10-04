import React from 'react'

import { Helmet } from 'react-helmet'

import NewNavbar from '../components/new-navbar'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './contact-us.module.css'

const ContactUs = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>
          contact-us - Kajoo - Build Sitecore pages visually in minutes
        </title>
        <meta
          name="description"
          content="Kajoo takes care of the tedious part of working with Sitecore. Give it a design and watch it convert it to a functioning page in minutes. "
        />
        <meta
          property="og:title"
          content="contact-us - Kajoo - Build Sitecore pages visually in minutes"
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
      <NewNavbar rootClassName="rootClassName1"></NewNavbar>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <h1 className={` ${styles['text']} ${projectStyles['heading1']} `}>
            Contact us!
          </h1>
          <span className={` ${styles['text1']} ${projectStyles['body1']} `}>
            <span className={styles['text2']}>
              Let us know how we can help you!
            </span>
          </span>
        </div>
      </div>
      <div className={styles['Container3']}>
        <div className={styles['request-demo']}>
          <div className={styles['container4']}>
            <div id="hubspotcontact" className={styles['Container5']}></div>
          </div>
        </div>
      </div>
      <Footer rootClassName="rootClassName3"></Footer>
    </div>
  )
}

export default ContactUs
