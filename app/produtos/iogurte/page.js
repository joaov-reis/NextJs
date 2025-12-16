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
    const produtoId = "3"; // ID do post que você quer
    const produto = data.produtos.find((p) => p.id === produtoId);

    return (
        <main>
            {produto ? (
                <div>
                    <h2>{produto.title}</h2>
                    <p>{produto.body}</p>
                    <Image
                        src="/jaqueline-pelzer-neUW-U0NwCU-unsplash.jpg"
                        alt="Iogurte"
                        width={500}
                        height={300}
                        creditText="Jaqueline Pelzer"
                        creditLink="https://unsplash.com/photos/stainless-steel-spoon-on-white-ceramic-plate-neUW-U0NwCU"
                    />
                    <figcaption>
                        Foto por <a href="https://unsplash.com/photos/stainless-steel-spoon-on-white-ceramic-plate-neUW-U0NwCU"  target="_blank" rel="noopener noreferrer">
                        Jaqueline Pelzer
                        </a>
                    </figcaption>
                </div>
            ) : (
                <p>Post não encontrado</p>
            )}
        </main>
    );
}