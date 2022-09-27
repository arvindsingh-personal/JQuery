import React from 'react'
import Component1 from './Component1'

export default function App(){
    return (
        <div>
            <div className='parent'>
                <p id='p1'>Play</p>
                <p id='p2'>HangMan</p>
            </div>
            
            <Component1 />
        </div>
    )
}