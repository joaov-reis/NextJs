"use server"

export async function gravarSAC(estadoAnterior, formData) {
    const nome = formData.get("nome");
    const email = formData.get("email");
    const telefone = formData.get("telefone");
    const assunto = formData.get("assunto");
    const mensagem = formData.get("mensagem");
    
    console.log(nome + " - " + email);

    return {
        confirmacao: "Enviado com sucesso",
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: ""
     };}