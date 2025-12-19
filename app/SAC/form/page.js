"use client"
import { useFormState } from "react-dom";
import { gravarSAC } from "./SAC";

export default function SAC() {
  const [state, formAction] = useFormState(gravarSAC, {})

  return (
    <main className="bg-[#f5f5dc] text-[#5e503f] flex min-h-screen flex-col text-center items-center p-10">
      <h1 className="font-black text-xl">SAC - Serviço de atendimento ao consumidor</h1>
      <p className="text-sm">Teve algum problema com nosso produto ou deseja deixar uma avaliação?</p>
      <p className="text-sm">Entre em Contato:</p>

      <form
        className="p-3 m-3 bg-gray-100 w-full max-w-sm"
        action={formAction}
        method="post"
      >

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-nome"
            >
              Nome
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="nome"
              required
              minLength={3}
              defaultValue={state?.nome ?? ""}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700"
              id="inline-nome"
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="email"
              type="email"
              required
              defaultValue={state?.email ?? ""}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700"
              id="inline-email"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-telefone"
            >
              Telefone
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="telefone"
              type="tel"
              required
              placeholder="(11) 12345-6789"
              pattern="^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$"
              defaultValue={state?.telefone ?? ""}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700"
              id="inline-telefone"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-assunto"
            >
              Assunto
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="assunto"
              required
              defaultValue={state?.assunto ?? ""}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700"
              id="inline-assunto"
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-mensagem"
            >
              Mensagem
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="mensagem"
              required
              defaultValue={state?.mensagem ?? ""}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700"
              id="inline-mensagem"
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-gray-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white p-1"
              type="submit"
            >
              Enviar solicitação de SAC
            </button>
          </div>
        </div>
        <div className="text-black">{state.mensagem}</div>
      </form>

      <input type="button" onClick={() => teste()} value="" />
    </main>
  );
}