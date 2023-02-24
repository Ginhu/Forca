import palavras from "../palavras";

export default function Palavra() {
    const palavraRandom = palavras[Math.floor(Math.random()*188)].split("");
    let palavraEscondida = []

    for (let i = 0; i<palavraRandom.length; i++) {
        palavraEscondida.push("_");
    }

    return [palavraRandom, palavraEscondida]
}