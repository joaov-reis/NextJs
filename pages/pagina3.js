import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/layout';

export async function getServerSideProps(params) {
    let users;
    await fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => users = data);
    return { props: { users } };
}

export default function Pagina3(props) {
    return (
        <Layout>
            <Head>
                <title>Página 3</title>
            </Head>
            <h1>Usuários</h1>
            {
                props.users.map(user => <p> <Link href={"users/" + user.id}> {user.name} </Link> </p>)
            }
        </Layout>
    )
}