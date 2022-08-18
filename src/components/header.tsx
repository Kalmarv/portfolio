import Link from 'next/link'
import Logo from './logo'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full backdrop-blur-md'>
      <div className='flex p-4 font-bold gap-4'>
        <Link href='/'>
          <a
            className='transition w-6 h-6 p-1 bg-k-dark rounded hover:bg-k-primary stroke-k-primary fill-k-primary hover:stroke-k-dark hover:fill-k-dark'
            href='https://kalmarv.xyz/'>
            <Logo />
          </a>
        </Link>
        <Link href='/#about'>
          <a className='hover:cursor-pointer'>About</a>
        </Link>
        <Link href='/#projects'>
          <a className='hover:cursor-pointer'>Projects</a>
        </Link>
        <Link href='/#contact'>
          <a className='hover:cursor-pointer'>Contact</a>
        </Link>
        <Link href='/blog'>
          <a className='hover:cursor-pointer'>Blog</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
