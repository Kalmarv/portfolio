import { IParallax } from '@react-spring/parallax'
import { RefObject } from 'react'

const Header: React.FC<{ parallax: RefObject<IParallax> }> = ({ parallax }) => {
  const scroll = (to: number) => {
    console.log('scrolling')
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  return (
    <div className='fixed top-0 left-0'>
      <button onClick={() => scroll(0)}>scrolllll</button>
    </div>
  )
}

export default Header
