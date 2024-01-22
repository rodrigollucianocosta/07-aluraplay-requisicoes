import { conectaApi } from "./conectApi.js";

async function buscaVideo(evento){
    evento.preventDefault()

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaApi.buscaVideo(dadosDePesquisa)
    console.log(busca)
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")
botaoDePesquisa.addEventListener("click",evento => buscaVideo(evento))