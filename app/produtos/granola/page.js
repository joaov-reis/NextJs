// import { GraphQLClient } from "graphql-request";
// import Image from "next/image";
// export const client = new GraphQLClient("http://localhost:3000/api/graphql");

// export default async function GraphQLPage() {
//     const query = `
//         query {
//             produtos{
//                 id
//                 title
//                 body
//             }
//         }
//     `;

//     const data = await client.request(query);
import Image from "next/image";
export const dynamic = "force-dynamic";

const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL;

export default async function GraphQLPage() {
    const query = `
        query {
            produtos {
                id
                title
                body
            }
        }
    `;

    const response = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        cache: "no-store", // 🔥 ISSO resolve o erro de deploy
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar dados do GraphQL");
    }

    const { data } = await response.json();

    const produtoId = "2"; // ID do post que você quer
    const produto = data.produtos.find((p) => p.id === produtoId);

    return (
        <main className="bg-[#f5f5dc] text-[#5e503f] min-h-screen flex-col text-center p-12">
            {produto ? (
                <div>
                    <h2 className="font-bold text-lg">{produto.title}</h2>
                    <p>{produto.body}</p>
                    <Image
                        className="rounded-lg mx-auto"
                        src="/mayte-baque-LQftwRfGjOM-unsplash.jpg"
                        alt="Granola"
                        width={500}
                        height={300}
                    />
                    <figcaption>
                        Foto por <a href="https://unsplash.com/photos/a-jar-filled-with-granola-next-to-a-wooden-spoon-LQftwRfGjOM"  target="_blank" rel="noopener noreferrer">
                        Mayte Baque
                        </a>
                    </figcaption>
                </div>
            ) : (
                <p>Post não encontrado</p>
            )}
        </main>
    );
}