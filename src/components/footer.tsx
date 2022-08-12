const Github = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className='max-h-8'>
      <path d='M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3' />
    </svg>
  )
}

const Twitter = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className='max-h-8'>
      <path d='M23.95 4.57a10 10 0 0 1-2.82.78 4.96 4.96 0 0 0 2.16-2.73c-.95.56-2 .96-3.13 1.19a4.92 4.92 0 0 0-8.38 4.48A13.94 13.94 0 0 1 1.64 3.16a4.82 4.82 0 0 0-.67 2.48c0 1.7.87 3.21 2.2 4.1a4.9 4.9 0 0 1-2.24-.62v.06A4.92 4.92 0 0 0 4.88 14a5 5 0 0 1-2.21.09 4.94 4.94 0 0 0 4.6 3.42 9.87 9.87 0 0 1-6.1 2.1c-.39 0-.78-.02-1.17-.07a14 14 0 0 0 7.56 2.21c9.05 0 14-7.5 14-13.98 0-.21 0-.42-.02-.63A9.94 9.94 0 0 0 24 4.59z' />
    </svg>
  )
}

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='flex p-4 font-bold gap-4 justify-center'>
        <a
          href='https://github.com/Kalmarv'
          target='_blank'
          rel='noopener noreferrer'
          className='transition w-8 h-8 p-1 bg-branding-dark rounded hover:bg-branding-primary stroke-branding-primary fill-branding-primary hover:stroke-branding-dark hover:fill-branding-dark'>
          <Github />
        </a>
        <a
          href='https://twitter.com/Kalmarv7'
          target='_blank'
          rel='noopener noreferrer'
          className='transition w-8 h-8 p-1 bg-branding-dark rounded hover:bg-branding-primary stroke-branding-primary fill-branding-primary hover:stroke-branding-dark hover:fill-branding-dark'>
          <Twitter />
        </a>
      </div>
    </div>
  )
}

export default Footer
