import Image from "next/image";
import Link from "next/link";

export default function Vendas() {
    return (
        <main>
            <h1>Produtos</h1>
            <Link href="/produtos/cereal">Cereal</Link> |
            <Link href="/produtos/granola">Granola</Link> |
            <Link href="/produtos/iogurte">Iogurte</Link>
        </main>
    );
}