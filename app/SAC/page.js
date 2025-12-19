"use client"
import { useFormState } from "react-dom";
import { gravarSAC } from "./form/SAC";

export default function SAC() {
  const [state, formAction] = useFormState(gravarSAC, {})

  return (
    <main className="bg-[#f5f5dc] text-[#5e503f] flex min-h-screen flex-col text-center items-center p-10">
      <h1 className="font-black text-xl">SAC - Serviço de atendimento ao consumidor</h1>
      <p className="text-sm p-2">Teve algum problema com nosso produto ou deseja deixar uma avaliação? Faça login em nosso portal para que possa preenhcer o formulário de atendimento!</p>

      
    </main>
  );
}