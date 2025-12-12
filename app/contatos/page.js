export const revalidate = false; //Gera no build, não revalida nunca (SSG)

async function getContatos() {
    let contatos;
    await fetch("https://jsonplaceholder.typicode.com/users", {cache: "force-cache"})
        .then(response => response.json())
        .then(data => (contatos = data));
    return contatos;
}

export async function Contatos() {

   let results = await getContatos();

    return (
        <main>
            <h1>Contatos ISR</h1>
            {results.map((contato) => {
                return <p className="m-2" key={contato.id}>
                {contato.name} - {contato.email}</p>;
            })}
        </main>
    );
}

export default async function ContatosPage() {
  const contatos = await fetch("http://localhost:3000/api/contatos")
    .then(response => response.json());

    return (
    <main>
      <h1>Contatos (REST)</h1>

      {contatos.map(contato => (
        <p key={contato.id}>{contato.name} - {contato.email}</p>
      ))}
    </main>
  );
}