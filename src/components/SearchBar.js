import React from 'react'

export default function SearchBar({ searchTerm }) {
    return (
        <div className="--form-control search">
            <input className="--width-100" name="search" type="text" placeholder="search for profile" onChange={searchTerm} />
        </div>
    )
}
