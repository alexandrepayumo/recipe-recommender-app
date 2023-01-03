//idk if i need to import bootstrap since its already imported in _app?
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
  //i think the navbar can only fixed if it is made in each page and isn't include in _app
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id={styles.navbar}>
      <div class="container-fluid">
        <Link class="navbar-brand" href="/">ReciMender</Link>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link href="/ingredientRecommendation" id={styles.navLink}>Recipe Recommender</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
