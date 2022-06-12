import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hacker News Api</title>
        <meta name="description" content="Hacker News Api" />
      </Head>

      <main className={styles.main}>
        <header>
        <h1 className={styles.any}>
          Hacker News
        </h1>
        </header>

        <p className={styles.any}>
          story
        </p>
        <p className={styles.any}>
          FDA urges patch of Illumina devices with three<br>
          critical flaws ranked 10 in severity(scmagazine.com)</br>
        </p>
        /// div で囲んでグリッド配置を設定
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
