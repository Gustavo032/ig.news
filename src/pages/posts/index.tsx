import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import styles from "./styles.module.scss";
import { GetStaticProps } from "next";


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

export const getStaticProps: GetStaticProps = async()=>{
	const prismic = getPrismicClient()

	const response = await prismic.query([
		Prismic.predicates.at('document.type', 'post')
	], {
		fetch: ['post.title', 'post.content'],
		pageSize: 100,
	})

	console.log(JSON.stringify(response, null, 2))

	return {
		props: {}
	};
}