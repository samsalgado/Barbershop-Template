import React from 'react'
import Logo from './Pics/logo.png';
//import {InlineWidget} from 'react-calendly'
export const Topbar: React.FC = () => {
    return (
        <div className="Top-header">
            <h1 className='intro'>Barbershop Template</h1>
            <div><img src={Logo} className="logo" alt="" /></div>
           
        </div>
    )
}