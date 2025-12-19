// "use client"
// import { useFormState } from "react-dom";
// import { gravarSAC } from "./form/SAC";

// export default function SAC() {
//   const [state, formAction] = useFormState(gravarSAC, {})

//   return (
//     <main className="bg-[#f5f5dc] text-[#5e503f] flex min-h-screen flex-col text-center items-center p-10">
//       <h1 className="font-black text-xl">SAC - Serviço de atendimento ao consumidor</h1>
//       <p className="text-sm p-2">Teve algum problema com nosso produto ou deseja deixar uma avaliação? Faça login em nosso portal para que possa preenhcer o formulário de atendimento!</p>
//     </main>
//   );
// }
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      router.refresh(); // Atualiza rotas do servidor
      router.push('/SAC/form');
    } else {
      const data = await res.json();
      setError(data.error);
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#f5f5dc] text-[#5e503f] flex min-h-screen flex-col text-center items-center p-10">
      <h1 className="font-black text-xl">SAC - Serviço de atendimento ao consumidor</h1>
      <p className="text-sm">Teve algum problema com nosso produto ou deseja deixar uma avaliação?</p>
      <p className="text-sm">Faça login em nosso portal para que possa preenhcer o formulário de atendimento!</p>

      <div className="flex items-center justify-center text-[#5e503f] mt-10 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white p-6 shadow rounded-2xl"
        >
          <h1 className="text-2xl font-bold mb-4">Login</h1>

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <label className="block mb-2 text-sm font-bold">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full border p-2 mb-4 rounded"
          />

          <label className="block mb-2 text-sm font-bold">Senha</label>
          <input
            name="password"
            type="password"
            required
            className="w-full border p-2 mb-6 rounded"
          />

          <button
            disabled={loading}
            className="w-full bg-[#5e503f] text-white p-2 rounded font-bold"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}