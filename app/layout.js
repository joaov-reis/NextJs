import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="m-3">
        <nav className="bg-sky-500 p-2">
          <Link href="/">Inicio</Link>&nbsp;|&nbsp;
          <Link href="/produtos">Produtos</Link>&nbsp;|&nbsp;
          <Link href="/reviews">Reviews</Link>&nbsp;|&nbsp;
          <Link href="/SAC">SAC</Link>
        </nav>
        <hr />
        <div className="min-h-96">{children}</div>
        <hr />
        Copyright: 2025 Instituto Infnet
      </body>
    </html>
  );
}