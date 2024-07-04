import {useState} from 'react';
import '../styles/layout.css'

const Layout = ({data}) => {
    return(
        <>
            <div className="card">
                <div className="card-F">
                    <img src={data.sprites.front_default}/>
                    <p>#{data.id}</p>
                </div>
                <div className="card-S">

                </div>
            </div>
        </>
    )
}

export default Layout;