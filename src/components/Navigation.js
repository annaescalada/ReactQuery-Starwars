import React from 'react'

const Navigation = ({ page, setPage }) => {
    console.log(page)
    return [1,2,3].map(index => <button key={index} className={page === index ? 'active' : ''} onClick={() => setPage(index)}>{`Page ${index}`}</button>)
}

export default Navigation