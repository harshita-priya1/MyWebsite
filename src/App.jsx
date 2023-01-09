import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import SideBar from './components/SideBar/SideBar'

const App = () => {
  return (
    <div className='main-app'>
        <Header/>
        {/* <SideBar/> */}
        <Footer/>
    </div>
  )
}

export default App