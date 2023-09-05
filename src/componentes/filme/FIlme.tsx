import Imagem from '../img/barbie.png'
import './Filme.css'
type FilmeProps = {
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Filme(props:FilmeProps){
    return(
        <div className="filme-content">
            <img className="img-filme" src={Imagem} alt="" />
            <div className="text-barbie">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.sinopse}</p>
            </div>
        </div>
    )
}