import type { NextPage } from 'next'
import Head from 'next/head'

import { Navbar, Section, Footer } from '../../components'
import Field from '../../components/Field'

import { Spreadsheet, User } from '../../models'
import SPREADSHEETS from '../../db/spreadsheets.json'
import USERS from '../../db/users.json'

import { formatDate, shortifyString } from '../../utils'


import styles from '../../styles/Base.module.css'
import spStyles from '../../styles/Spreadsheet.module.css'

const Editing: NextPage<{ spreadsheet: Spreadsheet, user: User }> = ({ spreadsheet, user: { id } }) => {

  return (
    spreadsheet ?
      (
        <>
          <Head>
            <title>{shortifyString(spreadsheet.title, 20)} - PresupuestAPP</title>
            <meta name="description" content="Presupuestos" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Navbar className={styles.navbar} />

          <Section className={styles.section}>
            <h3 title={spreadsheet.title}>{shortifyString(spreadsheet.title)}
              {
                !!(id === spreadsheet.author) && <i className='faint'> Eres el autor</i>
              }
            </h3>
            Creado <span>{formatDate(spreadsheet.created).DDMMYYYY}</span>

            <hr />

            <table className={spStyles.table}>

              <thead>
                <tr>
                  {spreadsheet.columns.map((c, idx) => <th key={`th${idx}`}>{c}</th>)}
                </tr>
              </thead>

              <tbody>
                {
                  spreadsheet?.rows.map((r, ri) => <tr key={`row${ri}`} className={spStyles.row} >
                    {
                      r.isTitle
                        ? <th colSpan={spreadsheet.columns.length}> {r.fields.title == '' ? 'Titulo vacio' : r.fields.title} </th>
                        : Object.keys(r.fields).map((f, fIndex) => <Field content={r.fields[f]} key={`r${ri}-f${fIndex}`} />)
                    }
                  </tr>
                  )
                }
              </tbody>

            </table>

            <div className={spStyles.spreadsheetInfo}>
              <hr />
              <span className='faint'>Creado: {formatDate(spreadsheet.created).full} - Ultimo guardado {formatDate(spreadsheet.updated).full}</span>
            </div>
          </Section>

          <Footer className={styles.footer} />
        </>
      )
      : <b> Loading...</b>
  )
}

export async function getServerSideProps(context: any) {
  let spreadsheet = SPREADSHEETS.spreadsheets.find(s => s.id == context.query.id)
  let user = USERS.users[1]

  console.log(spreadsheet!.rows)
  return {
    props: {
      user,
      spreadsheet
    }
  }
}

export default Editing