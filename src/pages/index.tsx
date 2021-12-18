import Head from 'next/head'
import Styles  from '../styles/home.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Ignews</title>
      </Head>
      <h1 className={Styles.title}>
        Hello <span>World!</span> 
      </h1>
    </>
  );
}
