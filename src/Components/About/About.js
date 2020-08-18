import React from 'react';
import './About.scss';

export const About = () => {
  return (
    <section className="about">
      <article className="about_article">
        <p className="about_article_text">
          Timberline Inc. is not just about creating quality solutions to problems that arise throughout the duration of the home owning timeline, it is also about creating an extended family within the community. Compassion, empathy, understanding are just some of the values that sit at the very core of Timberline Inc. Steve Gibson is a creative problem solver that will work with you to find the perfect solution. If you would like to work with him, please view some of the items on his project bucket list!
        </p>
      </article>
      <article className="about_article">
        <h2 className="bucket_list_title">Bucket List</h2>
        <ul className="bucket_list_ul">
          <li className="bucket_list_li">Work on a home from the 1800's √</li>
          <li className="bucket_list_li">Build a cabin in Alaska</li>
          <li className="bucket_list_li">Design and build a liveable tree house</li>
        </ul>
      </article>
    </section>
  )
}