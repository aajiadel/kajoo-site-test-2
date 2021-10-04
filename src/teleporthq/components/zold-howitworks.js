import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './zold-howitworks.module.css'

const ZoldHowitworks = (props) => {
  return (
    <div className={styles['features']}>
      <div className={styles['heading-container']}>
        <h2 className={` ${styles['text']} ${projectStyles['heading1']} `}>
          {props.heading2}
        </h2>
      </div>
      <div className={styles['cards-container']}>
        <div className={styles['card']}>
          <div className={styles['icon-container']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M362 576l-148 192h596l-192-256-148 192zM896 810q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596q34 0 60 26t26 60v596z"></path>
            </svg>
          </div>
          <div className={styles['container']}>
            <h3
              className={` ${styles['text01']} ${projectStyles['heading2']} `}
            >
              <span className={styles['text02']}>UPLOAD AN IMAGE</span>
            </h3>
          </div>
          <div className={styles['content-container']}>
            <span className={styles['text03']}>
              <span>
                Upload an image of a wireframe or create one using Kajoo’s
                library of 21 building blocks.
              </span>
            </span>
          </div>
        </div>
        <div className={styles['card1']}>
          <div className={styles['icon-container1']}>
            <svg
              viewBox="0 0 1022.8297142857142 1024"
              className={styles['icon02']}
            >
              <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
            </svg>
          </div>
          <div className={styles['content-container1']}>
            <div className={styles['container1']}>
              <h3
                className={` ${styles['text05']} ${projectStyles['heading2']} `}
              >
                <span className={styles['text06']}>STYLE</span>
              </h3>
            </div>
            <span className={styles['text07']}>
              <span>
                Define your brand colors and styles, and apply them easily to
                your wireframes. Save them as a ‘style guide’ to reuse in future
                projects.
              </span>
            </span>
          </div>
        </div>
        <div className={styles['card2']}>
          <div className={styles['icon-container2']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
              <path d="M256 192l-128-128h-64v64l128 128zM320 0h64v128h-64zM576 320h128v64h-128zM640 128v-64h-64l-128 128 64 64zM0 320h128v64h-128zM320 576h64v128h-64zM64 576v64h64l128-128-64-64zM1010 882l-636.118-636.118c-18.668-18.668-49.214-18.668-67.882 0l-60.118 60.118c-18.668 18.668-18.668 49.214 0 67.882l636.118 636.118c18.668 18.668 49.214 18.668 67.882 0l60.118-60.118c18.668-18.668 18.668-49.214 0-67.882zM480 544l-192-192 64-64 192 192-64 64z"></path>
            </svg>
          </div>
          <div className={styles['container2']}>
            <h3
              className={` ${styles['text09']} ${projectStyles['heading2']} `}
            >
              <span className={styles['text10']}>CONVERT</span>
            </h3>
          </div>
          <div className={styles['content-container2']}>
            <span className={styles['text11']}>
              <span>
                Kajoo’s trained AI neural network algorithms will convert your
                styled wireframes to functioning web elements.
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles['cards-container1']}>
        <div className={styles['card3']}>
          <div className={styles['icon-container3']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
              <path d="M150 810l206-298-206-298h468q44 0 70 36l186 262-186 262q-26 36-70 36h-468z"></path>
            </svg>
          </div>
          <div className={styles['content-container3']}>
            <span
              className={` ${styles['heading']} ${projectStyles['heading2']} `}
            >
              {props.heading}
            </span>
            <span className={styles['text13']}>
              <span>
                Name your web elements and map them to Sitecore fields using an
                easy-to-use visual interface.
              </span>
            </span>
          </div>
        </div>
        <div className={styles['card4']}>
          <div className={styles['icon-container4']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
              <path d="M348.629 768c-21.845 0-43.648-8.32-60.331-25.003l-188.331-188.331 188.331-188.331c33.323-33.323 87.424-33.323 120.661 0 33.323 33.323 33.323 87.339 0 120.661l-67.627 67.669 67.627 67.669c33.323 33.323 33.323 87.339 0 120.661-16.64 16.683-38.485 25.003-60.331 25.003z"></path>
              <path d="M675.371 768c-21.845 0-43.691-8.32-60.331-25.003-33.323-33.323-33.323-87.339 0-120.661l67.627-67.669-67.627-67.669c-33.323-33.323-33.323-87.339 0-120.661 33.237-33.323 87.339-33.323 120.661 0l188.331 188.331-188.331 188.331c-16.64 16.683-38.485 25.003-60.331 25.003z"></path>
            </svg>
          </div>
          <div className={styles['content-container4']}>
            <span
              className={` ${styles['heading1']} ${projectStyles['heading2']} `}
            >
              {props.heading1}
            </span>
            <span className={styles['text15']}>
              <span>
                Hit the “Generate Code” button, import the generated code into
                Sitecore and you have a draft page ready for content.
              </span>
            </span>
          </div>
        </div>
        <div className={styles['card5']}>
          <div className={styles['icon-container5']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon11']}>
              <path d="M854 768v-384h-172v384h172zM640 554v-170h-470v170h470zM640 768v-170h-470v170h470zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
          </div>
          <div className={styles['content-container5']}>
            <span
              className={` ${styles['heading2']} ${projectStyles['heading2']} `}
            >
              {props.heading3}
            </span>
            <span className={styles['text17']}>
              <span>
                Add content, publish, and get back the hours you’d
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className={styles['text19']}></span>
              <span>
                have spent on endless back-and-forth and tedious work.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

ZoldHowitworks.defaultProps = {
  heading: 'Name and map',
  heading2: 'How it works',
  heading3: 'Add content and publish',
  heading1: 'Generate code',
}

ZoldHowitworks.propTypes = {
  heading: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  heading1: PropTypes.string,
}

export default ZoldHowitworks
