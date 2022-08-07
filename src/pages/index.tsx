import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import type { NextPage } from 'next'
import { useRef, useState } from 'react'
import Landing from '../components/sections/landing'

const Home: NextPage = () => {
  const [page, setPage] = useState(0)
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
          <button
            className={`${page === 0 ? 'text-white' : 'text-black'}`}
            onClick={() => scroll(0)}>
            Home
          </button>
          <button
            className={`${page === 1 ? 'text-white' : 'text-black'}`}
            onClick={() => scroll(1)}>
            About
          </button>
        </div>
      </div>

      <Parallax pages={2} ref={parallax}>
        <ParallaxLayer offset={0} speed={0.5}>
          <Landing />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <div className=''>hi</div>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default Home
