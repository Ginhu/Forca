import Imagem from "./Imagem";
import palavras from "../palavras";
import Palavra from "./Palavra";

export default function Jogo (props) {
    let p
    function iniciarJogo() {
        props.setHabilitar([])
        props.setEscondido("")
        props.setContador(0)
        p=Palavra();
        props.setPalavra(p[0])
        props.setPalavraEscondida(p[1])
        props.setJogoGanho("")
        props.setJogoPerdido("")
    }

    return (
        <div className="divJogo">
            <Imagem contador={props.contador} setContador={props.setContador}/>
            <div className="divComandos">
                <div><button onClick={iniciarJogo}>Escolher Palavra</button></div>
                <input value={props.palavraEscondida.join("")} disabled className={`${props.escondido} ${props.jogoGanho} ${props.jogoPerdido}`}></input>
            </div>
        </div>
    )
}