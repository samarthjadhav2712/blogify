import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Bloglist from '../components/Bloglist'
import NewLetter from '../components/NewLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Bloglist></Bloglist>
      <NewLetter></NewLetter>
      <Footer></Footer>
    </>
  )
}

export default Home
