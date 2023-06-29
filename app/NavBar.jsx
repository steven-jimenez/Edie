'use client'
import React, { useState } from 'react';
import Link from "next/link";

export default function NavBar() {
  function IconMenu() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="black"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    );
  }

  const handleNav = () => {
    console.log(handleNav);
    setNav(!nav);
  };

  const [nav, setNav] = useState(false);

  return (
    <nav onClick={handleNav}>
      <div className="nav_container">
        <h1>
          <b>Edie</b>
        </h1>
        <IconMenu className="iconMenu" />
        {nav ? (
          <div className="links">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/Services"}>Services</Link>
              </li>
              <li>
                <Link href={"/OurWorks"}>Our Works</Link>
              </li>
              <li>
                <Link href={"/Clients"}>Clients</Link>
              </li>
              <li>
                <Link href={"/Contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/Services"}>Services</Link>
              </li>
              <li>
                <Link href={"/OurWorks"}>Our Works</Link>
              </li>
              <li>
                <Link href={"/Clients"}>Clients</Link>
              </li>
              <li>
                <Link href={"/Contact"}>Contact</Link>
              </li>
            </ul>
      </div>
    </nav>
  );
}