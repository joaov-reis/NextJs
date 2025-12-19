// import { GraphQLClient } from "graphql-request";
// export const client = new GraphQLClient("http://localhost:3000/api/graphql");
// import Image from "next/image";

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
        cache: "no-store",
    });

    const json = await response.json();

    if (json.errors) {
        console.error("GraphQL errors:", json.errors);
        throw new Error("Erro retornado pelo GraphQL");
    }

    if (!json.data || !json.data.produtos) {
        console.error("Resposta inesperada:", json);
        throw new Error("Formato de resposta inválido");
    }


    const produto = json.data.produtos.find((p) => p.id === "1");

    // const produtoId = "1"; // ID do post que você quer
    // const produto = data.produtos.find((p) => p.id === produtoId);

    return (
        <main className="bg-[#f5f5dc] text-[#5e503f] min-h-screen flex-col text-center p-12">
            {produto ? (
                <div>
                    <h2 className="font-bold text-lg">{produto.title}</h2>
                    <p>{produto.body}</p>
                    <Image
                        className="rounded-lg mx-auto"
                        src="/d-l-samuels-68BiDMSe45U-unsplash.jpg"
                        alt="Cereal-Matinal"
                        width={500}
                        height={300}
                    />
                    <figcaption>
                        Foto por <a href="https://unsplash.com/photos/a-bowl-full-of-dog-treats-on-a-red-surface-68BiDMSe45U" target="_blank" rel="noopener noreferrer">
                            D. L. Samuels
                        </a>
                    </figcaption>
                </div>
            ) : (
                <p>Post não encontrado</p>
            )}
        </main>
    );
}