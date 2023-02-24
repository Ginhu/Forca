export default function Letras(props) {
    function escolheLetra(letra) {
        props.setHabilitar([...props.habilitar, letra])
        let novaPalavra = [...props.palavra]
        let novoEscondido = [...props.palavraEscondida]

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

        


        

    }

    return (
        <div>
            <button onClick={()=>escolheLetra(props.letra)} disabled={props.habilitar.includes(props.letra) ? true : false }>{props.letra.toUpperCase()}</button>
        </div>
    )
}