export default async function Page({ params }) {
    const { slug } = await params;
    return (
        <main>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h1>Teste de slug - {slug}</h1>
            </div>
        </main>
    )
}