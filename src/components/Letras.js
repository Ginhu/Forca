import alfabeto from "../alfabeto"

export default function Letras(props) {
    function escolheLetra(letra) {
        props.setHabilitar([...props.habilitar, letra])
        let novaPalavra = [...props.palavra]
        let novoEscondido = [...props.palavraEscondida]
        console.log(novaPalavra, novoEscondido)

        if(!novaPalavra.includes(letra)) {
            props.setContador(props.contador+1)
        } else {
            while(novaPalavra.includes(letra)) {
                const index = novaPalavra.indexOf(letra)
                novaPalavra.splice(index, 1, "-")
                novoEscondido[index] = letra
                props.setPalavraEscondida(novoEscondido)
            }
        }

        if(!novoEscondido.includes("_")) {
            props.setJogoGanho("jogoGanho")
            props.setHabilitar([...alfabeto])
        } else if (props.contador == 5) {
            props.setJogoPerdido("jogoPerdido")
            props.setHabilitar([...alfabeto])
        }

        


        

    }

    return (
        <div>
            <button onClick={()=>escolheLetra(props.letra)} disabled={props.habilitar.includes(props.letra) ? true : false } data-test="letter">{props.letra.toUpperCase()}</button>
        </div>
    )
}