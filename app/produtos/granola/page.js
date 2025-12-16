import { GraphQLClient } from "graphql-request";
import Image from "next/image";
export const client = new GraphQLClient("http://localhost:3000/api/graphql");

export default async function GraphQLPage() {
    const query = `
        query {
            produtos{
                id
                title
                body
            }
        }
    `;

    const data = await client.request(query);
    const produtoId = "2"; // ID do post que você quer
    const produto = data.produtos.find((p) => p.id === produtoId);

    return (
        <main>
            {produto ? (
                <div>
                    <h2>{produto.title}</h2>
                    <p>{produto.body}</p>
                    <Image
                        src="/mayte-baque-LQftwRfGjOM-unsplash.jpg"
                        alt="Granola"
                        width={500}
                        height={300}
                        creditText="Mayte Baque"
                        creditLink="https://unsplash.com/photos/a-jar-filled-with-granola-next-to-a-wooden-spoon-LQftwRfGjOM"
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