import type { NextPage } from 'next'
import Head from 'next/head'

import { Navbar, Section, Footer } from '../components'
import styles from '../styles/Base.module.css'

const SpreadsheetsPage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Planillas - PresupuestAPP</title>
        <meta name="description" content="Presupuestos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar style={styles.navbar} />

      <Section style={styles.section}>
        <h1>PLANILLAS</h1>
      </Section>

      <Footer style={styles.footer} />

    </>
  )
}

export default SpreadsheetsPage