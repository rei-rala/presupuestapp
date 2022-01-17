import type { NextPage } from 'next'
import Head from 'next/head'

import { Navbar, Section, Footer } from '../components'
import styles from '../styles/Base.module.css'

const UserPage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Usuario - PresupuestAPP</title>
        <meta name="description" content="Presupuestos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar style={styles.navbar} />

      <Section style={styles.section}>
        <h1>USUARIO</h1>
      </Section>

      <Footer style={styles.footer} />

    </>
  )
}

export default UserPage