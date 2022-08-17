import Link from 'next/link'
import Logo from './logo'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full backdrop-blur-md'>
      <div className='flex p-4 font-bold gap-4'>
        <Link href='/'>
          <a
            className='transition w-6 h-6 p-1 bg-branding-dark rounded hover:bg-branding-primary stroke-branding-primary fill-branding-primary hover:stroke-branding-dark hover:fill-branding-dark'
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
