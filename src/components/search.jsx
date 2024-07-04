import { useState } from 'react'
import Error from  "./error"
import '../styles/search.css'


const Search = ({setData}) => {

    const [text,setText] = useState("")
    const [error,setError] = useState({
        Bvalue:false,
        msn:""
    })

    const Buscar = (event) => {
        if (event.key === "Enter" || event.key === "Intro") {
            ConsultarApi(text)
        }
    }

    const ConsultarApi = async(pkm) => {
        if (pkm == null || pkm == ""){
            console.log("hola error text")
            setError({Bvalue:true,msn:"Campo Vacio"});
            return;
        }
        try{
            setError({Bvalue:false,msn:""});
            const api = await fetch ("https://pokeapi.co/api/v2/pokemon/"+pkm)
            const rsp = await api.json()
            console.log(api.status)
            console.log(rsp)
            setData(rsp)
        }catch(erro){
            console.log("hola error")
            setError({Bvalue:true,msn:"Pokemon no encontrado"});
        }
    }

    return(
        <>
            {error.Bvalue==true ? <Error text={error.msn} /> :null}
            <div className='searchbar'>
                <input className='icon' placeholder='   Type your Pokemon-Name'
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyDown={Buscar}
                />
            </div>
        </>
    )

}

 export default Search;

 /* https://pokeapi.co/api/v2/pokemon/ditto */