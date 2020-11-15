import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Person from './Person'
import Navigation from './Navigation';

const fetchPeople = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/people/?page=${page}`)
    return res.json()
}

const People = () => {
    const [ page, setPage ] = useState(1)
    const { data, status } = useQuery(['people', page], fetchPeople)

    return <div>
        <Navigation page={page} setPage={setPage} />
        <h2>People</h2>
        {status === 'loading' && (
            <div>Loading data</div>
        )}
        {status === 'error' && (
            <div>Error fetching data</div>
        )}
        {status === 'success' && (
            <div>
                {data.results.map(person => <Person key={person.name} person={person} />)}
            </div>
        )}
    </div>
}

export default People