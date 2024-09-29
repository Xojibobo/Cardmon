import React from 'react'

const Header = ({ username }) => {
    return (
        <header>
            <h3 className='text-center fw-bold text-success shadow p-3 mb-3 bg-body rounded mt-2'>{username}'s cardmon</h3>
        </header>
    )
}

export default Header
