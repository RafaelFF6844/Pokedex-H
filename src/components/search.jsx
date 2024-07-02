import { useState } from 'react'
import Error from  "./error"
import '../styles/search.css'


const Search = () => {

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
        const api = await fetch ("https://pokeapi.co/api/v2/pokemon/"+pkm)
        const rsp = await api.json()
        console.log(api.status)
        if (api.status != 200){
            console.log("hola error")
            tmpError = {Bvalue:true,msn:"Pokemon no encontrado"}
            setError({...error,tmpError});
            return;
        }
        console.log(rsp)
    }

    return(
        <div className='searchbar'>
            <input className='icon' placeholder='   Type your Pokemon-Name'
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={Buscar}
            />
            {error==true ? <Error text={error.msn} /> :null}
        </div>
    )

}

 export default Search;

 /* https://pokeapi.co/api/v2/pokemon/ditto */