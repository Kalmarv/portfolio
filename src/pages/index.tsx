import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useAtom } from 'jotai'
import type { NextPage } from 'next'
import { useRef } from 'react'
import About from '../components/sections/about'
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
          <a className={linkStyle(page, 0)} onClick={() => scroll(0)}>
            Home
          </a>
          <a className={linkStyle(page, 1)} onClick={() => scroll(1)}>
            About
          </a>
        </div>
      </div>

      <Parallax pages={2} ref={parallax}>
        <ParallaxLayer offset={0} speed={1}>
          <Landing />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <About />
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default Home
