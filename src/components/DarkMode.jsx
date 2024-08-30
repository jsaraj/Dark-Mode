import Cards from './Cards'
import Header from './Header'
import React, { useState } from 'react'

function DarkMode() {

    const [value, setValue] = useState(false);

    return (
        <>
            <div className={`${value ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-800'} h-screen`}>
                <Header value={value} setValue={setValue} />
                <h2 className='flex justify-center text-xl py-10'>{value ? "Dark Mode" : "Light Mode"}</h2>
                <Cards value={value} />
            </div >
        </>
    )
}

export default DarkMode