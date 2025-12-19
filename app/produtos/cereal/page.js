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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
        cache: "no-store",
    });

    const json = await response.json();

    return (
        <main style={{ padding: 40 }}>
            <h1>DEBUG GRAPHQL</h1>

            <pre style={{ textAlign: "left" }}>
                {JSON.stringify(json, null, 2)}
            </pre>
        </main>
    );
}
