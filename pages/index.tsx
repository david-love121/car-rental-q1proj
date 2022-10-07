import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/landing'
import Header from '../components/header'
import { useState, useEffect } from 'react'
import ReviewsScroll from '../components/reviews'


const Home: NextPage = () => {
  return (
    <div className="h-screen landing-bg poly-bg-img">
      <Header/>
      <Landing />
      <ReviewsScroll />
    </div>
  )
}

export default Home
