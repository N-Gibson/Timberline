import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import purpleAster from '@timberline/assets/Purple_Aster.jpg'
import profile from '@timberline/assets/profile.jpg'
import timberline_text_only from '@timberline/assets/timberline_text_only.png'

import './Home.scss'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="home">
      <div className="banner_container">
        <div className="banner">
          <ScrollAnimation animateIn="fadeIn">
            <div className="logo_text_background">
              <img src={timberline_text_only} alt="timberline logo text"></img>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <section id="home_center_main" className="section_container">
        <article className="article_container">
          <h2 className="article_header">Raise, Repair, Remodel</h2>
          <p className="article_text">
            Timberline Inc. is a locally owned and operated business in Santa
            Fe, New Mexico and surrounding areas since 1992. Specializing in New
            Mexican style builds and remodels, Timberline can do it all. From
            the preservation of original homes dating back to the mid 1800's to
            brand new homes and everything in between! Award winning Timberline
            Inc. can help with repairs, remodels or raising a new project from
            the ground up.
          </p>
        </article>
        <img
          id="rrr_img"
          className="section_img"
          src={purpleAster}
          alt="house in valley"
        />
      </section>
      <section className="section_container" id="home_bottom_main">
        <img
          id="meet_owner_img"
          className="section_img"
          src={profile}
          alt="timberline owner"
        />
        <article className="article_container">
          <h2 className="article_header">Meet the Owner</h2>
          <p className="article_text">
            Stephen Gibson, owner and founder of Timberline Inc. has been
            working in the Santa Fe community for over 35 years and has received
            11 awards in the Santa Fe area Home Builders Association's - A
            Parade of Homes. Steve's passion is crafting quality solutions for
            your construction needs.
          </p>
        </article>
      </section>
    </section>
  )
}

export { Home }
