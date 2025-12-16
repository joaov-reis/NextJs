import Image from "next/image";
import Link from "next/link";

export default function Vendas() {
    return (
        <main>
            <h1>Produtos</h1>
            <h4>Confira nossos principais produtos</h4>
            <Link href="/produtos/cereal">Cereal</Link> |
            <Link href="/produtos/granola"> Granola</Link> |
            <Link href="/produtos/iogurte"> Iogurte</Link>
        </main>
    );
}