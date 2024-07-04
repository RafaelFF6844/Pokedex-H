import {useState} from 'react';
import '../styles/layout.css'

const Layout = ({data}) => {
    return(
        <>
            <div className="Mcard">
                <div className="card-F">
                    <img src={data.sprites.front_default}/>
                    <h3>{data.name}</h3>
                    <p>#{data.id}</p>
                </div>
                <div className="card-S">
                    <div className='card-S-type'>
                        <h4>Type</h4>
                        {data.types.map(type => (
                            <li key={"pktype"+type.slot}>{type.type.name}</li>
                        ))
                        }
                    </div>
                    <div className='card-S-stats'>
                        <h4>Stats</h4>
                        {data.stats.map(stat => (
                            <li key={"pktype"+stat}>{stat.stat.name} {stat.base_stat}</li>
                        ))
                        }
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Layout;