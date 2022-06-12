import { statSync } from 'fs'
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

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>Vectorized and performance-</br>
            <br>portable Quickort</br>
            (googleblog.com)
          </p>
          <p className={styles.any}>
            by slackerIII 22 hours ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
          <br>The children of atomic bomb</br>
          <br>survivors:A genetic study</br>
          (nih.gov)
          </p>
          <p className={styles.any}>
            by bryarasmussen 22 hours ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>Japan tested a giant turbine</br>
            <br>that generates electoricity using</br>
            <br>deep ocean current...</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>Question candidates can ask</br>
            <br>about equity compensation</br>
            <br>(holloway.com)</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>Painless desktop containers</br>
            <br>for everyday development</br>
            <br>(orion3.space)</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Ask
          </p>
          <p className={styles.any}>
            <br>what is the best jurisdiction</br>
            <br>for insternationally distributed</br>
            <br>teams?</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>DDR5 RAM prices crashed by</br>
            <br>20% in May</br>
            <br>(tech4gamers.com)</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>Albert - open-source keyboard</br>
            <br>launcher for linux</br>
            <br>(albertlauncher.github.io)</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>The power C compiler</br>
            <br>(mixsoftware.com)</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>What rr does (rr-project.org)</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>UIstein X-BOW inverted bow</br>
            <br>(ulstein.com)</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>Google alternative that</br>
            <br>shares revenues with creators -</br>
            <br>by Ahefs(yep.com)</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>In a small trial, drugs seemed</br>
            <br>to rejuvenate the body`s</br>
            <br>`epigenetic clock`(2019)</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>Crabs evolved at least five</br>
            <br>times from separate group of</br>
            <br>crustaceans(2021)</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>Pixel Art: Common Mistakes</br>
            <br>(2020) (derekyu.com)</br>
          </p>
          <p className={styles.com}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>Shown HN: Plasmo -a</br>
            <br>framework for building modern</br>
            <br>Chrome extensions...</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>Dear Spotify, can we just get a</br>
            <br>table of songs?</br>
            <br>(neil.computer)</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            <br>Software Automatic Mouth-</br>
            <br>Tiny Speech Synthesizer</br>
            <br>(github.com/s-macke)</br>
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>
        <p>More Ask HN </p>

        
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
