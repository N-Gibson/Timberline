import React from 'react'
import Hallway from '../../assets/Venado_Hallway.jpg'
import './History.scss'

const History = () => {
  return (
    <section className="history">
      <article className="history_article">
        <p className="history_article_text">
          Timberline Inc. was founded in 1995 with the goals of creating quality
          solutions in the housing market. It has evolved into a company that
          can do a bit of everything. Etc... this narrative will need some work.
        </p>
        <img
          className="history_main_image"
          src={Hallway}
          alt="hallway in house"
        />
      </article>
    </section>
  )
}

export { History }
