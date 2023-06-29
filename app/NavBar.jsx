import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav>
        <div className='nav_container'>
            <h1><b>Edie</b></h1>
            <div className='links'>
            <ul>
                <li> <Link href={"/"}>Home</Link> </li>
                <li><Link href={"/Services"}>Services</Link></li>
                <li><Link href={"/OurWorks"}>Our Works</Link></li>
                <li><Link href={"/Clients"}>Clients</Link></li>
                <li><Link href={"/Contact"}>Contact</Link></li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
