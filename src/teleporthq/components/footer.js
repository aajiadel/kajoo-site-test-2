import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <div
      className={` ${styles['footer-container']} ${
        styles[props.rootClassName]
      } `}
    >
      <div className={styles['social-and-links-section']}>
        <div className={styles['useful-links']}>
          <Link
            to="/contact-us"
            className={` ${styles['navlink']} ${projectStyles['thqLink']} `}
          >
            <span>Contact Us</span>
          </Link>
        </div>
        <div className={styles['social-links']}>
          <a
            href="https://twitter.com/kajoo_app"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link']}
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={` ${styles['Icon']} ${projectStyles['thqLink']} `}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/kajoo.ca"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link1']}
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={` ${styles['icon2']} ${projectStyles['thqLink']} `}
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/kajoo-app"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link2']}
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={` ${styles['icon4']} ${projectStyles['thqLink']} `}
            >
              <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className={styles['copyright-section']}>
        <div className={styles['logo-copyright-container']}>
          <div className={styles['container']}>
            <Link to="/" className={styles['navlink1']}>
              <img
                alt={props.image_alt}
                src={props.image_src}
                className={` ${styles['image']} ${projectStyles['thqLink']} `}
              />
            </Link>
            <span className={styles['link3']}>{props.link}</span>
          </div>
          <div className={styles['container1']}>
            <div className={styles['container2']}>
              <Link
                to="/terms-of-service"
                className={` ${styles['navlink2']} ${projectStyles['thqLink']} `}
              >
                <span></span>
                <span></span>
                <span>Terms of Service</span>
                <span></span>
              </Link>
              <span className={styles['text5']}>{props.text}</span>
              <Link
                to="/privacy-policy"
                className={` ${styles['navlink3']} ${projectStyles['thqLink']} `}
              >
                <span>Privacy Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  link: 'Copyright © TechGuilds Consulting Inc. 2021',
  image_src:
    '/playground_assets/Kajoo_Logo_Horizontal_transparent_BG-1000h.png',
  text: '|',
  image_alt: 'image',
  rootClassName: '',
}

Footer.propTypes = {
  link: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
