import Logo from './logo'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full backdrop-blur-md'>
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
  )
}

export default Header
