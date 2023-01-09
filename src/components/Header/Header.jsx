import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='title-1'> MY WEBSITE</div>
        <div className='main-header'>
        <div className='emptydiv'></div>
        <Link to={'/About'}><div className='button-ab-ho-co'>About </div> </Link>
        <Link to={'/'}><div className='button-ab-ho-co'>Home </div> </Link>
        <Link to={'/Contact'}><div className='button-ab-ho-co'>Contact </div> </Link>
        <div className='emptydiv'></div>
        </div>
    </>
  )
}

export default Header