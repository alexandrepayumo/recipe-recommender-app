import '../styles/globals.css'
import Footer from '../components/footer.js'
import Header from '../components/header.js'
//import Head from 'next/head'

export default function App({ Component, pageProps }) {
  {/*<Head>
    <script src="https://kit.fontawesome.com/d4c7de301e.js" crossorigin="anonymous"></script>
</Head>*/}
  return (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
  );
}
