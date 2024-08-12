import React  from 'react'
import "./navbar.css";


const navbar = () => {


  return (
    <nav>
       <a href="#" className='title'>
        Viprab Technologies
      </a>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#home">Review</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>


    </nav>
  )
}

export default navbar