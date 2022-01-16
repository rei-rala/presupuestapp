import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import styles from '../styles/Template.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PresupuestAPP</title>
        <meta name="description" content="Presupuestos (?)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className={styles.navbar} />

      <Section className={styles.section}>
        <h1>Seccion test</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, iusto unde inventore sequi dicta quaerat deleniti nobis, ipsam ratione qui provident ut corrupti quidem animi non eum itaque aliquam id!
          Eum, quibusdam. Sit velit quos delectus officiis odio, rerum beatae totam officia cum voluptates minus esse fugit dolore, harum nostrum, ipsum tempore! Quo, vel reprehenderit. Aliquam beatae culpa est aspernatur.
          Quos, laboriosam quibusdam hic minus deserunt blanditiis nobis tenetur, animi qui inventore numquam dolore sunt sed pariatur accusamus ipsa voluptatum suscipit illum aut incidunt amet non? Placeat aliquid distinctio quia!
          Quia quidem nobis eligendi incidunt atque, suscipit reprehenderit architecto nulla obcaecati necessitatibus dignissimos accusamus nam? Qui, laboriosam explicabo dolor ipsum incidunt at voluptatibus, inventore, corporis facere nesciunt quam eius similique.
          Ducimus distinctio mollitia fuga provident repellendus. Ut dicta cumque quo illo ex, modi iusto saepe harum eos natus cupiditate corrupti temporibus? Consequatur in itaque modi eaque, blanditiis eos dolores tempore.
          Molestias sequi, explicabo perspiciatis temporibus asperiores fugit, ab facere hic inventore officiis voluptates! Rem autem animi modi unde dolore! Quibusdam rem quos similique omnis quas perspiciatis magnam a molestias laudantium.
          Et cumque magni vitae aspernatur ut sint inventore? Accusantium, a earum praesentium voluptates tempora nostrum molestias nemo numquam. Saepe sunt nobis odio ex a aperiam. Delectus consequuntur quo modi dolore?
          Fugit officia ea exercitationem quae rem corporis reprehenderit, a aut nisi, quia perferendis pariatur quod dolores quas officiis ratione aspernatur optio sapiente ullam earum. Qui placeat quaerat libero assumenda molestiae.
          Quibusdam vel ipsam odit obcaecati adipisci dignissimos voluptatum, consequatur perspiciatis accusamus labore enim dolorem dolores, officia aut reiciendis laboriosam libero eligendi qui possimus sunt quidem eos illo! Eaque, assumenda quae?
          Fuga inventore minus ratione iusto illum numquam laboriosam quibusdam laborum ad rerum dicta laudantium aspernatur, unde incidunt a! Impedit vel at aut nulla, saepe earum aspernatur qui laboriosam unde rem?</p>
      </Section>

      <Footer className={styles.footer} />

    </>
  )
}

export default Home
