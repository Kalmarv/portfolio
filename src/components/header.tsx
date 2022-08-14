import Logo from './logo'

const Header = () => {
  // yeah yeah I know
  const scroll = (id: string, offset: number) => {
    const element = document.querySelector(`#${id}`)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className='fixed top-0 left-0 z-50 w-full backdrop-blur-md'>
      <div className='flex p-4 font-bold gap-4'>
        <a
          className='transition w-6 h-6 p-1 bg-branding-dark rounded hover:bg-branding-primary stroke-branding-primary fill-branding-primary hover:stroke-branding-dark hover:fill-branding-dark'
          href='https://kalmarv.xyz/'>
          <Logo />
        </a>
        <a onClick={() => scroll('home', 0)} className='hover:cursor-pointer'>
          Home
        </a>
        <a onClick={() => scroll('about', -75)} className='hover:cursor-pointer'>
          About
        </a>
        <a onClick={() => scroll('projects', -75)} className='hover:cursor-pointer'>
          Projects
        </a>
        <a onClick={() => scroll('contact', 0)} className='hover:cursor-pointer'>
          Contact
        </a>
      </div>
    </div>
  )
}

export default Header
