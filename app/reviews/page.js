import { getReviews } from "./reviews";

export const revalidate = false; //Gera no build, não revalida nunca (SSG)

export default async function ReviewsPage() {
  const reviews = await getReviews(10);

  return (
    <main className="bg-[#f5f5dc] text-[#5e503f] flex min-h-screen flex-col text-center items-center p-10">
      <h1 className="font-black text-xl">Reviews</h1>
      <h1 className="text-lg p-2">Últimas avaliações de nossos clientes</h1>

      <table className="border border-black w-fit" border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th className="border border-black">Usuário</th>
            <th className="border border-black">Comentário</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td className="border border-black px-2 py-1">{review.email}</td>
              <td className="border border-black px-2 py-1">{review.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}