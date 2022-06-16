
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hacker News API</title>
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
        <p className={styles.emhpasisarticle}>
          {`FDA urges patch of Illumina devices with three\n
          critical flaws ranked 10 in severity(scmagazine.com)`}
        </p>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            {'Vectorized and performance-\nportable Quickort\n(googleblog.com)'}
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
          {'The children of atomic bomb\nsurvivors:A genetic study\n`(nih.gov)'}
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
            {'Japan tested a giant turbine\nthat generates electoricity using\ndeep ocean current...'}
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
            {'Question candidates can ask\nabout equity compensation\n(holloway.com)'}
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
            {'Painless desktop containers\nfor everyday development\n(orion3.space)'}
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
            {'what is the best jurisdiction\nfor insternationally distributed\nteams?'}
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
            {'DDR5 RAM prices crashed by\n20% in May\n(tech4gamers.com)'}
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
            {'Albert - open-source keyboard\nlauncher for linux\n(albertlauncher.github.io)'}
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
            {'The power C compiler\n(mixsoftware.com)'}
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
            What rr does (rr-project.org)
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
            {'UIstein X-BOW inverted bow\n(ulstein.com)'}
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
            {'Google alternative that\nshares revenues with creators -\nby Ahefs(yep.com)'}
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
            {'In a small trial, drugs seemed\nto rejuvenate the body`s\n`epigenetic clock`(2019)'}
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
            {'Crabs evolved at least five\ntimes from separate group of\ncrustaceans(2021)'}
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
            {'Pixel Art: Common Mistakes\n(2020) (derekyu.com)'}
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
            {'Shown HN: Plasmo -a\nframework for building modern\nChrome extensions...'}
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
            {'Dear Spotify, can we just get a\ntable of songs?\n(neil.computer)'}
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
            {'Software Automatic Mouth-\nTiny Speech Synthesizer\n(github.com/s-macke)'}
          </p>
          <p className={styles.any}>
            by linuxblender 12 minuts ago
          </p>
        </section>
        <p>More Ask HN </p>

        <p className={styles.any}>The Latest</p>
        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            {'IBM Releases Fully Homorphic\nEncryption Toolkit for macOS and\niOS(2020)(ibm.com)'}
          </p>
          <p className={styles.any}>
            by ddtaylor 0 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Ask
          </p>
          <p className={styles.any}>
            {'What`s your strategy for reading\ndense books with too much\ninformation?'}
          </p>
          <p className={styles.any}>
            by aerovistae 2 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            {'Inspired by "The Book of Why"\nMicrosoft open-sourced a library\ncalled DoWhy(microsoft.com)'}
          </p>
          <p className={styles.any}>
            by RafelMri 3 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            {'Did you know you can post to\nHacker News from Emacs with eww?'}
          </p>
          <p className={styles.any}>
            by midislack 4 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Story
          </p>
          <p className={styles.any}>
            {'Orange Pie 800 keyboard PC-A\nRasberry Pi 400 alternative\npowered by RK3399(cnx)'}
          </p>
          <p className={styles.any}>
            by zdw 6 minuts ago
          </p>
        </section>
        <p>More Latest </p>

        <h1 className={styles.any}>
          Ask HN
        </h1>
        <section>
          <p className={styles.any}>
            Show
          </p>
          <p className={styles.any}>
            {'Examples of Good Technical\nWriting?'}
          </p>
          <p className={styles.any}>
            by cswenshuo 1 hour ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Show
          </p>
          <p className={styles.any}>
            {'Why don`t podcasts/audiobooks\nhave closed captions for\nmisheard words?'}
          </p>
          <p className={styles.any}>
            by jcubic 1 hour ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Show
          </p>
          <p className={styles.any}>
            {'How to Create Vector Art'}
          </p>
          <p className={styles.any}>
            by ddtailor 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Show
          </p>
          <p className={styles.any}>
            {'Anyone else quickly losing\nconfidence in Amazon'}
          </p>
          <p className={styles.any}>
            by ddtailor 12 minuts ago
          </p>
        </section>
        <p>More Ask HN</p>

        <h1 className={styles.any}>
          Shown HN
        </h1>
        <section>
          <p className={styles.any}>
            Show
          </p>
          <p className={styles.any}>
            {'To prevent dry eyes and back\npain, I create a macOS app'}
          </p>
          <p className={styles.any}>
            by cswenshuo 1 hours ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Show
          </p>
          <p className={styles.any}>
            {'Gaiman language for Web-based\nTerminal applications'}
          </p>
          <p className={styles.any}>
            by jcubic 1 hour ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Show
          </p>
          <p className={styles.any}>
            {'Grid.js - Advanced table library\nthat works everywhere(2020)\n(gridjs.io)'}
          </p>
          <p className={styles.any}>
            by ddtailor 12 minuts ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Show
          </p>
          <p className={styles.any}>
            {'An interactive tutorial on\nsymmetrick encryption\n(easylang.online)'}
          </p>
          <p className={styles.any}>
            by ddtailor 12 minuts ago
          </p>
        </section>
        <p>More Show HN</p>

        <h1 className={styles.any}>
          Jobs HN
        </h1>
        <section>
          <p className={styles.any}>
            Job
          </p>
          <p className={styles.any}>
            {'The Muse (YC W12) Is Hiring a\nSenior Software Engineer\n(themus.com)'}
          </p>
          <p className={styles.any}>
            2 hours ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Job
          </p>
          <p className={styles.any}>
            {'Stacker(YC S20)Is Hiring a\nHead of Engineering\n(workable.com)'}
          </p>
          <p className={styles.any}>
            7 hour ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Job
          </p>
          <p className={styles.any}>
            {'Freshpaint (YC S19) is hiring\nengineers to build real-time data\ningestion infra(ashbyhq.com)'}
          </p>
          <p className={styles.any}>
            17 hours ago
          </p>
        </section>

        <section>
          <p className={styles.any}>
            Job
          </p>
          <p className={styles.any}>
            {'Basis (YC S21) Is hiring devs to\nhelp build Figma for data\n(workatastartup.com)'}
          </p>
          <p className={styles.any}>
            17 hours ago
          </p>
        </section>
        <p>More Jobs HN</p>
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
