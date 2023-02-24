import { useState } from "react";
import alfabeto from "./alfabeto";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import "./css/reset.css";
import "./css/style.css";

function App() {
  const arr = [...alfabeto]
  const [habilitar, setHabilitar] = useState(arr)
  const [escondido, setEscondido] = useState("escondido")
  const [contador, setContador] = useState(0)
  const [palavra, setPalavra] = useState([])
  const [palavraEscondida, setPalavraEscondida] = useState([])

  return (
    <div className="principal">
      <Jogo 
      habilitar={habilitar} setHabilitar={setHabilitar} 
      escondido={escondido} setEscondido={setEscondido}
      contador={contador} setContador={setContador}
      palavra={palavra} setPalavra={setPalavra}
      palavraEscondida={palavraEscondida} setPalavraEscondida={setPalavraEscondida}
      />
      <div className="divLetras">
        {alfabeto.map((c)=> <Letras key={c} letra={c} 
        habilitar={habilitar} setHabilitar={setHabilitar}
        palavra={palavra} palavraEscondida={palavraEscondida} setPalavraEscondida={setPalavraEscondida}
        contador={contador} setContador={setContador}
        />)}
      </div>
    </div>
  )
}

export default App;
