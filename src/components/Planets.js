import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'
import Navigation from './Navigation';

const fetchPlanets = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
    return res.json()
}

const Planets = () => {
    const [ page, setPage ] = useState(1)
    const { data, status } = useQuery(['planets', page], fetchPlanets)
    return <div>
        <Navigation page={page} setPage={setPage}/>
        <h2>Planets</h2>
        {status === 'loading' && (
            <div>Loading data</div>
        )}
        {status === 'error' && (
            <div>Error fetching data</div>
        )}
        {status === 'success' && (
            <div>
                {data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
            </div>
        )}
    </div>
}

export default Planets