import { useEffect, useRef, useState } from 'react'
import { a, useSpring } from 'react-spring'
import { useIntersectionObserver } from 'usehooks-ts'

const Icon: React.FC<{ icon: string }> = ({ icon }) => {
  const [isHovered, setIsHovered] = useState(false)
  const style = useSpring({
    transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
  })

  useEffect(() => {
    if (!isHovered) return
    const timeoutId = window.setTimeout(() => setIsHovered(false), 250)
    return () => window.clearTimeout(timeoutId)
  }, [isHovered])

  const trigger = () => {
    setIsHovered(true)
  }

  return (
    // because the image is an a.img, also I optimized them myself using SVGOMG
    // eslint-disable-next-line @next/next/no-img-element
    <div className='h-12 w-12 md:h-14 md:w-14'>
      <a.img
        onMouseEnter={trigger}
        onTouchStart={trigger}
        style={style}
        alt={icon}
        src={`/icons/${icon}.svg`}
        width='100%'
        height='100%'
      />
    </div>
  )
}

const Tech = () => {
  const icons = [
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Python',
    'Nextjs',
    'React',
    'Svelte',
    'Express',
    'Tailwind',
    'Postgres',
    'Git',
    'Node',
    'NPM',
    'Docker',
    'VSCode',
  ]

  return (
    <>
      <div className='py-8'></div>
      <div className='flex flex-col place-items-center justify-center'>
        <div className='max-w-sm p-2 md:max-w-lg'>
          <h1 className='text-2xl font-bold md:text-3xl'>Tech Stack</h1>
          <div className='p-2'></div>
          <section className='md:text-xl'>
            Here&apos;s some of the technologies I use and love the most.{' '}
          </section>
          <div className='p-4'></div>
        </div>
        <div className='grid grid-cols-4 gap-6 md:gap-8'>
          {icons.map((icon) => (
            <Icon key={icon} icon={icon} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Tech
