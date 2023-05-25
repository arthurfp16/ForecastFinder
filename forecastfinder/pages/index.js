import Head from 'next/head'
import style from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Forecast Finder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/imgs/favicon.ico" />
      </Head>
      <main className={style.main}>
        <p>Hello word!</p>
      </main>
    </>
  )
}