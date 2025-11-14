import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/layout';

export async function getStaticProps() {
  console.log ("getStaticProps");
  let user;
  await fetch('https://jsonplaceholder.typicode.com/users/2')
    .then((response) => response.json())
    .then((data) => {
      user = data;
    });
  return {
    props: { user },
    revalidate: 600
  };
}

export default function Pagina2(props) {
  return (
    <Layout>
      <Head>
        <title>SSG</title>
      </Head>

      <main>
        <h1>Static Site Redering</h1>
        <h3>Olá {props.user.name}</h3>
        <Link href="/">Home</Link>
      </main>
    </Layout>
  );
}