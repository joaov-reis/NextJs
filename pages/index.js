import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hello NextJs World!</title>
      </Head>

      <main>
        <h1>Hello NextJs World!</h1>
        <Link href="/pagina1">Página 1</Link>
        <Link href="/pagina2">Página 2</Link>
      </main>
    </Layout>
  );
}