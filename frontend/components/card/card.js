import React from "react"
import Link from "next/link"
import NextImage from "../image"
import styles from "./card.module.scss"

const Card = ({ article }) => {
  const pDate = new Date(article.attributes.publishedAt).toLocaleDateString(
    "da-DK",
    { weekday: "long", year: "numeric", month: "short", day: "numeric" }
  )

  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className={`uk-card uk-card-muted ${styles.card}`}>
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.attributes.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.attributes.title}
            </p>
            <p id="date" className={`uk-article-meta ${styles.date}`}>
              {pDate}
            </p>
            <p id="description" className="">
              {article.attributes.description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
