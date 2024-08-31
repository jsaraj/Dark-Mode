import Cards from './Cards'
import Header from './Header'
import React, { useEffect, useState } from 'react'

function DarkMode() {

    const getMode = () => {
        // const windowDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        // if (windowDark) {
        //     return true
        // } else {
        //     return false
        // }

        return JSON.parse(localStorage.getItem('mode'))

}


const [value, setValue] = useState(getMode());

useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(value))
}, [value])

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