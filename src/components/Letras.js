
export default function Letras(props) {
    
    return (
        <div>
            <button disabled={props.habilitar.includes(props.letra) ? true : false }>{props.letra.toUpperCase()}</button>
        </div>
    )
}