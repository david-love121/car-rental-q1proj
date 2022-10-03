import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/landing'
import Header from '../components/header'
import { useState, useEffect } from 'react'
import ReviewsScroll from '../components/reviews'


const Home: NextPage = () => {
  const [navTrans, setNavTrans] = useState(true);
  const onScroll = (ev: Event):void => {
    console.log("test");
    if (window.scrollY >= 50) {
      setNavTrans(false);
    }
    if (window.scrollY < 50) {
      setNavTrans(true);
      
    }
  } 
  useEffect(():void => {
    window.addEventListener('scroll', onScroll);
  })
  return (
    <div className="h-screen landing-bg poly-bg-img">
      <Header transparent={navTrans}/>
      <Landing />
      <ReviewsScroll />
      <Landing />
    </div>
  )
}

export default Home
