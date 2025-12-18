import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="m-3">
        <header className="font-bold text-xl bg-[#ceb083] text-[#5e503f] text-center p-4">
          <h1>Mati®</h1>
          <nav className="p-2">
            <Link href="/">Inicio</Link>&nbsp;|&nbsp;
            <Link href="/produtos">Produtos</Link>&nbsp;|&nbsp;
            <Link href="/reviews">Reviews</Link>&nbsp;|&nbsp;
            <Link href="/SAC">SAC</Link>
          </nav>
        </header>
        <hr />
        <div className="min-h-96">{children}</div>
        <hr />
        <footer className="bg-[#ceb083] text-[#5e503f] text-center">
          © 2025 Estudos de NextJS. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}