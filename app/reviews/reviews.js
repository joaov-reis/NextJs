"use server"

export async function getReviews(limit = 5) {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
    cache: "no-store", // sempre dados atualizados
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar reviews");
  }

  const data = await res.json();

  // limita a quantidade no servidor
  return data.slice(0, limit);
}