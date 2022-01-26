import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de janeiro de 2021</time>
                        <strong>Titulo do Post Em Si</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt quod voluptatem ducimus et sequi in,
                            omnis quo harum
                        </p>
                    </a>
                    <a href="#">
                        <time>12 de janeiro de 2021</time>
                        <strong>Titulo do Post Em Si</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt quod voluptatem ducimus et sequi in,
                            omnis quo harum
                        </p>
                    </a>
                    <a href="#">
                        <time>12 de janeiro de 2021</time>
                        <strong>Titulo do Post Em Si</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt quod voluptatem ducimus et sequi in,
                            omnis quo harum
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
}
