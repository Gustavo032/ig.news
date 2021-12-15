import { Head } from 'next/document'
import styles  from '../styles/home.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>

      <h1 className={styles.title}>
        Hello 

        <span> World! </span> 
      </h1>
    </>
  );
}
