import React from 'react'

const Navbar = ({ page, setPage }) => {
    return (
        <nav>
            <button className={page === 'planets' ? 'active' : ''} onClick={() => setPage('planets')}>Planets</button>
            <button className={page === 'people' ? 'active' : ''} onClick={() => setPage('people')}>People</button>
        </nav>
    )
}

export default Navbar