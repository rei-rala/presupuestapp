import type { NextPage } from 'next'
import Head from 'next/head'

import { Navbar, Section, Footer } from '../components'
import styles from '../styles/Base.module.css'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Home - PresupuestAPP</title>
        <meta name="description" content="Presupuestos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar style={styles.navbar} />

      <Section style={styles.section}>
        <h1>HOME</h1>
      </Section>

      <Footer style={styles.footer} />

    </>
  )
}

export default Home