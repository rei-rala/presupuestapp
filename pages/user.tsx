import type { NextPage } from 'next'
import Head from 'next/head'

import { Navbar, Section, Footer } from '../components'
import styles from '../styles/Base.module.css'

import Users from '../db/users.json'
import { User } from '../models'

import { shortify } from '../utils'

const UserPage: NextPage<{ user: User }> = ({ user }) => {

  const shortedId = shortify(user.id)

  return (
    <>
      <Head>
        <title>Usuario - PresupuestAPP</title>
        <meta name="description" content="Presupuestos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar style={styles.navbar} />

      <Section style={styles.section}>
        <h1>{user.userName} <span className='faint'>#{shortedId}</span> </h1>
      </Section>

      <Footer style={styles.footer} />

    </>
  )
}

export async function getServerSideProps() {
  let user = await Users.users[1]

  return {
    props: {
      user
    }
  }
}

export default UserPage