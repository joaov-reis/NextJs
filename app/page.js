"use client"
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <main className="bg-[#f5f5dc] text-[#5e503f] flex min-h-screen flex-col text-center items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h2 className="font-black text-xl">Bem vindo a Mati®</h2>

                <div className="my-6 h-1 bg-[#5e503f] rounded" />

                <p>
                    A Mati® acredita que os melhores dias começam com as melhores manhãs. Por isso desenvolvemos uma linha
                    completa de produtos matinais saudáveis, naturais e nutritivos para oferecer leveza e equilíbrio no seu
                    cotidiano. Nosso compromisso vai além do sabor: buscamos promover o bem-estar e incentivar um estilo de
                    vida mais saudável e sustentável, sem comprometer o sabor. Trabalhamos com fornecedores responsáveis,
                    priorizamos processos de produção que respeitam o meio ambiente e garantimos a qualidade que você e sua
                    família merecem.
                </p>

                <div className="my-6 h-1 bg-[#5e503f] rounded" />

                <h4 className="font-bold text-base mb-2">
                    Inspirando você a transformar cada manhã em uma oportunidade de cuidar do corpo, da mente e do planeta.
                </h4>

                <div className="flex justify-between items-center mx-auto max-w-sm w-full mt-10">
                    <button className="bg-[#5e503f] hover:bg-[#ceb083] text-white font-bold py-2 px-4 rounded"
                        onClick={() => router.push("/produtos")}>
                        Produtos
                    </button>

                    <button className="bg-[#5e503f] hover:bg-[#ceb083] text-white font-bold py-2 px-4 rounded"
                        onClick={() => router.push("/reviews")}>
                        Reviews
                    </button>

                    <button className="bg-[#5e503f] hover:bg-[#ceb083] text-white font-bold py-2 px-4 rounded"
                        onClick={() => router.push("/SAC")}>
                        SAC
                    </button>
                </div>
            </div>
        </main>
    );
}