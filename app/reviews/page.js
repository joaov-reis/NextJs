import { getReviews } from "./reviews";

export const revalidate = false; //Gera no build, não revalida nunca (SSG)

export default async function ReviewsPage() {
  const reviews = await getReviews(10);

  return (
    <main>
      <h1>Reviews</h1>

      <table width="900" border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Comentário</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.email}</td>
              <td>{review.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}