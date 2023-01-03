//optionally import stuff here
import styles from '../styles/Footer.module.css'
import Head from 'next/head'

export default function Footer() {
  return (
    <>
        {/*<Head>
            TRY TO GET THE ICONS WORKING!
            <script src="https://kit.fontawesome.com/d4c7de301e.js" crossorigin="anonymous"></script>
  </Head>*/}
        <footer id={styles.footer}>
        <h1 className="text-center" id={styles.footerTitle}>Let&apos;s work together...</h1>
            <p className="text-center">I&apos;m always available!</p>
            <div className={styles.links}>
                <div className={styles.link}>
                    {/*<i className="fa-brands fa-github d-inline-block"></i>*/}
                    <p className={styles.linkText}><a href="https://github.com/alexandrepayumo" id="profile-link" rel="noreferrer" target="_blank" className={styles.hrefLink}>GitHub</a></p>
                </div>
                <div className={styles.link}>
                    {/*<i className="fa-brands fa-linkedin d-inline-block"></i>*/}
                    <p className={styles.linkText}><a href="https://www.linkedin.com/in/alexandre-payumo-029823234/" rel="noreferrer" target="_blank" className={styles.hrefLink}>LinkedIn</a></p>
                </div>
                <div className={styles.link}>
                    {/*<i className="fa-solid fa-at d-inline-block"></i>*/}
                    <p className={styles.linkText}><a href="https://outlook.live.com/mail/0/" rel="noreferrer" target="_blank" className={styles.hrefLink}>Email</a></p>
                </div>
            </div>
        </footer>
    </>
  )
}
