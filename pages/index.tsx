import type { NextPage } from 'next'
import Landing from '../components/landing'
import Header from '../components/header'
import ReviewsScroll from '../components/reviews'
const Home: NextPage = () => {
  return (
    <div className="h-screen landing-bg poly-bg-img">
      <Header dark={false}/>
      <Landing />
      <ReviewsScroll />
      
    </div>
  )
}

export default Home
