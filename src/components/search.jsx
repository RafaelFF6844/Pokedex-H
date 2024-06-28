import { useState } from 'react'
import '../styles/search.css'


const Search = () => {

    const [poketext,setPoketext] = useState("")

    const Buscar = (event) => {
        if (event.key == "Enter") {
            console.log(hola)
        }
    }

    return(
        <div className='searchbar'>
            <input className='icon' placeholder='   Type your Pokemon-Name'
                value={poketext}
                onChange={e => setPoketext(e.target.value)}
                onKeyDown={Buscar(e)}
            />
        </div>
    )

}

 export default Search;

 /* https://pokeapi.co/api/v2/pokemon/ditto */