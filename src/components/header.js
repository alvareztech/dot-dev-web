import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (<header className={headerStyles.header}>
    <h1>
      <Link to="/" className={headerStyles.title}>
        {data.site.siteMetadata.title}
      </Link>
    </h1>
    <nav>
      <ul className={headerStyles.navList}>
        <li><Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link></li>
        <li><Link to="/contact" className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}>Contact</Link></li>
        <li><Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link>
        </li>
      </ul>
    </nav>
  </header>)
}

export default Header