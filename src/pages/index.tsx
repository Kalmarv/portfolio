import type { NextPage } from 'next'
import Logo from '../components/logo'
import About from '../components/sections/about'
import Contact from '../components/sections/contact'
import Landing from '../components/sections/landing'
import Tech from '../components/sections/tech'

const Home: NextPage = () => {
  return (
    <>
      <div className='fixed top-0 left-0 z-50'>
        <div className='flex p-4 font-bold gap-4'>
          <a
            className='transition w-6 h-6 p-1 bg-branding-dark rounded hover:bg-branding-primary stroke-branding-primary fill-branding-primary hover:stroke-branding-dark hover:fill-branding-dark'
            href='https://portfolio.kalmarv.xyz/'>
            <Logo />
          </a>
          <a className=''>Home</a>
          <a className=''>About</a>
          <a className=''>Contact</a>
        </div>
      </div>

      <Landing />
      <About />
      <Tech />
      <Contact />
    </>
  )
}

export default Home
