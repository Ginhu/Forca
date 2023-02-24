import imagem0 from "../assets/forca0.png"
import imagem1 from "../assets/forca1.png"
import imagem2 from "../assets/forca2.png"
import imagem3 from "../assets/forca3.png"
import imagem4 from "../assets/forca4.png"
import imagem5 from "../assets/forca5.png"
import imagem6 from "../assets/forca6.png"

export default function Imagem(props) {
    const imagens = [imagem0, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6]

    return (
        <>
            <img src={imagens[props.contador]}/>
        </>
    )
}


