import getSortedData from "@/lib/arquivos";

export default function Home(){

    const dados = getSortedData();

    return(
        <main>
            <h1>Página inicial</h1>
            <ul>{
                dados.map(dado => (
                    <li key={dado.id}> {dado.data.date} - {dado.data.title}</li>
                ))
            }</ul>
        </main>
    );
}