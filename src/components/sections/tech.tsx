import { useEffect, useRef, useState } from 'react'
import { config, a, useSpring } from 'react-spring'
import { useIntersectionObserver } from 'usehooks-ts'
import AnimatedChildren from '../animated-children'

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
    <div className='w-12 h-12 md:h-14 md:w-14'>
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
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 0.5 })
  const isVisible = !!entry?.isIntersecting
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

  useEffect(() => {
    if (isVisible) setOpen(true)
  }, [isVisible])

  return (
    <>
      <div className='py-8'></div>
      <div className='flex flex-col justify-center place-items-center' ref={ref}>
        <div className='max-w-sm md:max-w-lg p-2'>
          <h1 className='font-bold text-2xl md:text-3xl'>Tech Stack</h1>
          <div className='p-2'></div>
          <section className='md:text-xl'>
            Here&apos;s some of the technologies I use and love the most.{' '}
          </section>
          <div className='p-4'></div>
        </div>
        <AnimatedChildren
          containerStyle='grid grid-cols-4 gap-6 md:gap-8'
          trailConfig={{
            config: config.stiff,
            opacity: open ? 1 : 0,
            y: open ? 0 : 40,
            from: { opacity: 0, y: 40 },
          }}>
          {icons.map((icon) => (
            <Icon key={icon} icon={icon} />
          ))}
        </AnimatedChildren>
      </div>
    </>
  )
}

export default Tech
