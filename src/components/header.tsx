import Link from 'next/link'
import Logo from './logo'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full backdrop-blur-md'>
      <div className='flex gap-4 p-4 font-bold'>
        <Link href='/'>
          <a
            className='h-6 w-6 rounded bg-k-dark fill-k-primary stroke-k-primary p-1 transition hover:bg-k-primary hover:fill-k-dark hover:stroke-k-dark'
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
