import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import {Link} from 'react-scroll'


export function Header() {
    const mobile = window.innerWidth<= 768 ? true : false

    const [menuopened, setmenuopened] = useState(false)

    return (
        <>
            <div className="header">
                <img src= {logo} className='logo' />
              {(menuopened===false && mobile===true)? (
                <div 
                onClick={()=> setmenuopened(true)}
                className='bars-img'>
                    <img src= {bars} alt="" className='bars' /></div>
              ) :
              <ul className='header-menu'>
                    <li >
                        <Link
                        onClick={()=> setmenuopened(false)}
                        to='home'
                        activeClass='active'
                        spy = {true}
                        smooth = {true}
                        >Home</Link>
                        </li>
                    <li>
                        <Link
                        onClick={()=> setmenuopened(false)}
                        to='program'
                        spy = {true}
                        smooth = {true}
                        >Programs</Link>
                        </li>
                    <li>
                        <Link
                        onClick={()=> setmenuopened(false)}
                        to='reason'
                        spy = {true}
                        smooth = {true}
                        >Why us</Link>
                    </li>
                    <li>
                        <Link
                        onClick={()=> setmenuopened(false)}
                        to='plan'
                        spy= {true}
                        smooth= {true}
                        >Plans</Link>
                    </li>
                    <li>
                      <Link
                      onClick={()=> setmenuopened(false)}
                      to='testimonials'
                      spy = {true}
                      smooth = {true}
                      >Testimonials</Link>
                    </li>
                </ul>

              }  
                
            </div>
        </>
    )
}
