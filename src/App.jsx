import { useState } from 'react'
import Search from './components/search'
import Layout from './components/layout'
import './App.css'


function App() {
  
  const [data,setData] = useState(null)

  return (
    <>
      <div className='nav'>
        <img className='nav-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png' />
        <h2 className='nav-title'>Pokedex -H</h2>

        <div className='nav-items'>
          <div>This project</div>
          <div>About me</div>
        </div>
      </div>

      <div className='content'>
        <Search setData={setData} />
        {data != null ? <Layout data={data} /> :null}
        
      </div>
    </>
  )
}

export default App
