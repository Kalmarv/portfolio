import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useAtom } from 'jotai'
import type { NextPage } from 'next'
import { useRef } from 'react'
import Logo from '../components/logo'
import About from '../components/sections/about'
import Contact from '../components/sections/contact'
import Landing from '../components/sections/landing'
import { pageAtom } from '../utils/store'

const linkStyle = (pageAtom: number, pageNumber: number) =>
  `transition duration-300 ease-in-out ${
    pageAtom === pageNumber ? 'text-white' : 'text-black'
  } hover:cursor-pointer`

const Home: NextPage = () => {
  const [page, setPage] = useAtom(pageAtom)
  const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
      setPage(to)
    }
  }

  return (
    <>
      <div className='fixed top-0 left-0 z-50'>
        <div className='flex p-4 font-bold gap-4'>
          <a
            className='transition w-6 h-6 p-1 bg-branding-dark rounded hover:bg-branding-primary stroke-branding-primary fill-branding-primary hover:stroke-branding-dark hover:fill-branding-dark'
            href='https://portfolio.kalmarv.xyz/'>
            <Logo />
          </a>
          <a className={linkStyle(page, 0)} onClick={() => scroll(0)}>
            Home
          </a>
          <a className={linkStyle(page, 1)} onClick={() => scroll(1)}>
            About
          </a>
          <a className={linkStyle(page, 2)} onClick={() => scroll(2)}>
            Contact
          </a>
        </div>
      </div>

      <Parallax pages={3} ref={parallax}>
        <ParallaxLayer offset={0} speed={1}>
          <Landing />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default Home
