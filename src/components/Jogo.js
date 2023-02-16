import Imagem from "./Imagem";

export default function Jogo () {
    return (
        <div className="divJogo">
            <Imagem/>
            <div className="divComandos">
                <div><button>Escolher Palavra</button></div>
                <p>_ _ _ _ _ _ _ _ _</p>
            </div>
        </div>
    )
}