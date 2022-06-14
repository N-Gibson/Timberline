import React from 'react'

import Hallway from '@timberline/assets/Venado_Hallway.jpg'

import './About.scss'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="about_main">
      <div className="about_banner_container">
        <div id="about_banner">
          <h2>About Us</h2>
        </div>
      </div>
      <section className="about">
        <article className="about_article" id="about_article">
          <p className="about_article_text">
            Timberline Inc. was founded in 1995 with the goals of creating
            quality solutions in the housing market. It has evolved into a
            company that can do a bit of everything. We take pride in creative 
            problem solving for dynamic construction and repair needs.
          </p>
          <img
            className="about_main_image"
            src={Hallway}
            alt="hallway in house"
          />
        </article>
        <article className="about_article">
          <p className="about_article_text">
            Timberline Inc. is not just about creating quality solutions to
            problems that arise throughout the duration of the home owning
            timeline, it is also about creating an extended family within the
            community. Compassion, empathy, understanding are just some of the
            values that sit at the very core of Timberline Inc. Steve Gibson is
            a creative problem solver that will work with you to find the
            perfect solution. If you would like to work with him, please view
            some of the items on his project bucket list!
          </p>
        </article>
        <article className="about_article about_article_bucket_list">
          <h2 className="bucket_list_title">Bucket List</h2>
          <ul className="bucket_list_ul">
            <li>Work on a home from the 1800's</li>
            <li>Build a cabin in Alaska</li>
            <li>Design and build a liveable tree house</li>
          </ul>
        </article>
      </section>
    </section>
  )
}

export { About }
