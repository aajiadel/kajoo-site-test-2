import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HomepageNavbar from '../components/homepage-navbar'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './terms-of-service.module.css'

const TermsOfService = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>
          terms-of-service - Kajoo - Build Sitecore pages visually in minutes
        </title>
        <meta
          name="description"
          content="Kajoo takes care of the tedious part of working with Sitecore. Give it a design and watch it convert it to a functioning page in minutes. "
        />
        <meta
          property="og:title"
          content="terms-of-service - Kajoo - Build Sitecore pages visually in minutes"
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
      <HomepageNavbar rootClassName="rootClassName5"></HomepageNavbar>
      <div className={styles['container1']}>
        <h1 className={` ${styles['text']} ${projectStyles['heading1']} `}>
          <span>Terms of Service (&quot;Terms&quot;)</span>
        </h1>
        <span className={` ${styles['text02']} ${projectStyles['body2']} `}>
          <span>Last updated: October 19, 2020</span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Please read these Terms of Use (&quot;Terms&quot;, &quot;Terms of
            Use&quot;) carefully before using the http://www.kajoo.ca website
            and the Kajoo Plug-in for Sitecore(the &quot;Service&quot;) operated
            by TechGuilds (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users and others who access or use the Service.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            By accessing or using the Service you agree to be bound by these
            Terms. If you disagree with any part of the terms then you may not
            access the Service.
          </span>
          <span></span>
        </span>
        <h2 className={` ${styles['text11']} ${projectStyles['heading21']} `}>
          <span>Termination</span>
        </h2>
        <span className={` ${styles['text13']} ${projectStyles['body2']} `}>
          <span>
            We may terminate or suspend access to our Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            All provisions of the Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity
            and limitations of liability.
          </span>
          <br></br>
          <span></span>
        </span>
        <h2 className={` ${styles['text18']} ${projectStyles['heading21']} `}>
          <span>Links To Other Web Sites</span>
        </h2>
        <span className={` ${styles['text20']} ${projectStyles['body2']} `}>
          <span>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by TechGuilds.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            TechGuilds has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third party web
            sites or services. You further acknowledge and agree that TechGuilds
            shall not be responsible or liable, directly or indirectly, for any
            damage or loss caused or alleged to be caused by or in connection
            with use of or reliance on any such content, goods or services
            available on or through any such web sites or services.
          </span>
          <br></br>
          <span></span>
        </span>
        <h2 className={` ${styles['text25']} ${projectStyles['heading21']} `}>
          <span>Changes</span>
        </h2>
        <span className={` ${styles['text27']} ${projectStyles['body2']} `}>
          <span>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 days&apos; notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </span>
          <br></br>
          <span></span>
        </span>
        <h2 className={` ${styles['text30']} ${projectStyles['heading21']} `}>
          <span>Contact Us</span>
        </h2>
        <span className={` ${styles['text32']} ${projectStyles['body2']} `}>
          <span>
            If you have any questions about these Terms, please
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <Link to="/contact-us" className={projectStyles['thqLink']}>
            <span>contact us</span>
          </Link>
          <span>.</span>
        </span>
      </div>
      <div className={styles['section-separator']}></div>
      <Footer rootClassName="rootClassName2"></Footer>
    </div>
  )
}

export default TermsOfService
