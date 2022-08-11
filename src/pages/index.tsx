import type { NextPage } from 'next'
import Header from '../components/header'
import About from '../components/sections/about'
import Contact from '../components/sections/contact'
import Landing from '../components/sections/landing'
import Tech from '../components/sections/tech'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Tech />
      <Contact />
    </>
  )
}

export default Home
