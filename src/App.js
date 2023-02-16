import alfabeto from "./alfabeto";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import "./css/reset.css";
import "./css/style.css";


function App() {
  return (
    <div className="principal">
      <Jogo/>
      <div className="divLetras">
        {alfabeto.map((c)=> <Letras letra={c}/>)}
      </div>
    </div>
    
  )
}

export default App;
