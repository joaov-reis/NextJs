"use client"
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h3>Bem vindo a Mati®</h3>

                <p>
                    A Mati® acredita que os melhores dias começam com as melhores manhãs. Por isso desenvolvemos uma linha
                    completa de produtos matinais saudáveis, naturais e nutritivos para oferecer leveza e equilíbrio no seu
                    cotidiano. Nosso compromisso vai além do sabor: buscamos promover o bem-estar e incentivar um estilo de
                    vida mais saudável e sustentável, sem comprometer o sabor. Trabalhamos com fornecedores responsáveis,
                    priorizamos processos de produção que respeitam o meio ambiente e garantimos a qualidade que você e sua
                    família merecem.
                </p>

                <h4>
                    Inspirando você a transformar cada manhã em uma oportunidade de cuidar do corpo, da mente e do planeta.
                </h4>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.push("/produtos")}>
                    Produtos
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.push("/produtos")}>
                    Reviews
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.push("/produtos")}>
                    SAC
                </button>
            </div>
        </main>
    );
}