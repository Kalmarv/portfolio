import type { NextPage } from 'next'
import Footer from '../components/footer'
import Header from '../components/header'
import About from '../components/sections/about'
import Contact from '../components/sections/contact'
import Landing from '../components/sections/landing'
import Projects from '../components/sections/projects'
import Tech from '../components/sections/tech'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
