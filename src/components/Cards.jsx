

import React from 'react'

function Cards({ value }) {
    console.log(value)
    return (
        <div className='flex justify-center'>
            <div className={`${value ? 'bg-gray-800' : 'bg-gray-200'} justify-center flex-wrap flex w-3/12 py-5 px-3 m-5 rounded-md`}>
                <img src='https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full rounded-md'></img>
                <h3 className= "w-full flex justify-center text-lg py-5">Title One</h3>
                <p className= "w-full flex justify-center pb-7">this is message of card one</p>
            </div>
            <div className={`${value ? 'bg-gray-800' : 'bg-gray-200'} justify-center flex-wrap flex w-3/12 py-5 px-3 m-5 rounded-md`}>
                <img src='https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full rounded-md'></img>
                <h3 className= "w-full flex justify-center text-lg py-5">Title Two</h3>
                <p className= "w-full flex justify-center pb-7">this is message of card two</p>
            </div>
            <div className={`${value ? 'bg-gray-800' : 'bg-gray-200'} justify-center flex-wrap flex w-3/12 py-5 px-3 m-5 rounded-md`}>
                <img src='https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full rounded-md'></img>
                <h3 className="w-full flex justify-center text-lg py-5" >Title three</h3>
                <p className=" w-full flex justify-center pb-7">this is message of card three</p>
            </div>


        </div>
    )
}

export default Cards