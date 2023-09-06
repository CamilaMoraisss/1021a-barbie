import './Filme.css'
export default function Filme(props:FilmeProps){
    return(
        <div className="filme-content">
         <div className='foto_filme'>
             <img className="img-filme" src={props.imagem} alt="" />
         </div>
           
            <div className="text-barbie">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.sinopse}</p>
            </div>
        </div>
    )
}

type FilmeProps = {
    titulo:string;
    sinopse:string;
    imagem:string
}