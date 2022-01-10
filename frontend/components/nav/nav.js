import { React, useEffect } from "react"
import { useContext } from "react"
import { GlobalContext } from "../../pages/_app"
import Link from "next/link"
import UIkit from "uikit"
import Icons from "uikit/dist/js/uikit-icons"
import styles from "./nav.module.scss"

const Nav = ({ categories }) => {
  useEffect(() => {
    UIkit.use(Icons)
  })

  const { siteName } = useContext(GlobalContext)
  return (
    <div>
      <nav
        className={`uk-navbar-container uk-navbar ${styles.container}`}
        data-uk-navbar
      >
        <a className="uk-navbar-item uk-logo" href="/">
          {siteName}
        </a>

        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="uk-link-reset">{category.attributes.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav uk-iconnav">
            <li>
              <a
                href="https://www.instagram.com/afvejen/"
                uk-icon="icon: instagram"
              ></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
