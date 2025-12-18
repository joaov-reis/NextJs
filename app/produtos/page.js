import Image from "next/image";
import Link from "next/link";

export default function Vendas() {
    return (
        <main className="bg-[#f5f5dc] text-[#5e503f] min-h-screen flex-col text-center p-12">
            <h1 className="font-bold text-2xl">Produtos</h1>
            <h4 className="font-bold text-lg p-4">Confira nossos principais produtos</h4>

            <div className="flex flex-col m-5">
                <Link className="font-bold text-lg" href="/produtos/cereal">Cereal</Link>
                <p className="pb-7">
                    Este é Cereal Mati®: energia e crocância para suas manhas.
                </p>

                <Link className="font-bold text-lg" href="/produtos/granola"> Granola</Link>
                <p className="pb-7">
                    Feita com grãos nobres, castanhas variadas e frutas desidratadas, nossa granola combina crocância e leveza em cada colherada.
                </p>

                <Link className="font-bold text-lg" href="/produtos/iogurte"> Iogurte</Link>
                <p className="pb-7">
                    Produzido com leite fresco, nosso iogurte é fonte de cálcio, proteínas e probióticos que cuidam do seu corpo e regulam a flora intestinal.
                </p>
            </div>
        </main>
    );
}