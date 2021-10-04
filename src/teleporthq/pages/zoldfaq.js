import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './zoldfaq.module.css'

const Zoldfaq = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>
          z old faq - Kajoo - Build Sitecore pages visually in minutes
        </title>
        <meta
          name="description"
          content="Kajoo takes care of the tedious part of working with Sitecore. Give it a design and watch it convert it to a functioning page in minutes. "
        />
        <meta
          property="og:title"
          content="z old faq - Kajoo - Build Sitecore pages visually in minutes"
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
      <div className={styles['faqs']}>
        <h2 className={` ${styles['text']} ${projectStyles['heading1']} `}>
          Check the most common questions
        </h2>
        <div className={styles['content-container']}>
          <div className={styles['faq']}>
            <div className={styles['question-container']}>
              <span className={styles['question']}>
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className={styles['answer-container']}>
              <span className={styles['answer']}>
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet. Here you would give the answer. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla
                quis sem at nibh elementum imperdiet.
              </span>
              <span>
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
          <div className={styles['faq1']}>
            <div className={styles['question-container1']}>
              <span className={styles['question1']}>
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className={styles['answer-container1']}>
              <span className={styles['answer2']}>
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span>
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </span>
            </div>
          </div>
          <div className={styles['faq2']}>
            <div className={styles['question-container2']}>
              <span className={styles['question2']}>
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className={styles['answer-container2']}>
              <span className={styles['answer4']}>
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span>
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zoldfaq
