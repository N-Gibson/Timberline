import React from "react";
import Hallway from "../../assets/Venado_Hallway.jpg";
import "./History.scss";

export default function History() {
  return (
    <section className="about">
      <article className="about_article">
        <p className="about_article_text">
          Timberline Inc. was founded in 1995 with the goals of creating quality
          solutions in the housing market. It has evolved into a company that
          can do a bit of everything. Etc... this narrative will need some work.
        </p>
        <img
          className="about_main_image"
          src={Hallway}
          alt="(change later when pic is available)"
        />
      </article>
    </section>
  );
}
