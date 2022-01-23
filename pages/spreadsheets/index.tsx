import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Navbar, Section, Footer } from '../../components'
import styles from '../../styles/Base.module.css'

import USERS from '../../db/users.json'
import SPREADSHEETS from '../../db/spreadsheets.json'

import { Spreadsheet, User } from '../../models'
import { formatDate, shortifyString } from '../../utils'

const SpreadsheetsPage: NextPage<{ user: User, spreadsheets: Spreadsheet[] }> = ({ user, spreadsheets }) => {

  return (
    <>
      <Head>
        <title>Planillas - PresupuestAPP</title>
        <meta name="description" content="Presupuestos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className={styles.navbar} />

      <Section className={styles.section}>
        <h1>Planillas de {user.userName}</h1>
        <hr />

        <ul className={styles.spreadsheetLinks}>
          {
            spreadsheets.length > 0
              ? spreadsheets.map(s =>
                <Link
                  key={s.id}
                  href={`/spreadsheets/${s.id}`}
                  passHref
                >
                  <a title={s.title}>{shortifyString(s.title)} - <i>{formatDate(s.created).DDMMYYYY}</i></a>
                </Link>)
              : <li>No has creado presupuestos, ¿<Link href='/spreadsheets?create=true'><a>Crear</a> </Link> uno?</li>
          }
        </ul>

      </Section>

      <Footer className={styles.footer} />
    </>
  )
}

export default SpreadsheetsPage

export async function getStaticProps() {
  const user = await USERS.users[1]
  const spreadsheets = await SPREADSHEETS.spreadsheets.filter(s => s.author === user.id)


  return {
    props: {
      user,
      spreadsheets
    },
  }
}