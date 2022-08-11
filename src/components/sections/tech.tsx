import { useEffect, useRef, useState } from 'react'
import { useTrail, config, a, useSpring, easings } from 'react-spring'
import { useIntersectionObserver } from 'usehooks-ts'

type animationProps = {
  open: boolean
  delay?: number
  children: JSX.Element[]
  containerStyle?: string
  outerStyle?: string
  innerStyle?: string
}

const AnimatedIcons: React.FC<animationProps> = ({
  open,
  children,
  delay,
  containerStyle,
  outerStyle,
  innerStyle,
}) => {
  const [trail, api] = useTrail(
    children.length,
    () => ({
      config: config.stiff,
      opacity: open ? 1 : 0,
      y: open ? 0 : 40,
      from: { opacity: 0, y: 40 },
      delay: open ? delay ?? 0 : 0,
    }),
    [open]
  )

  return (
    <div className={containerStyle ?? ''}>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} className={outerStyle ?? ''} style={style}>
          <a.div className={innerStyle ?? ''}>{children[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

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
    <a.img
      onMouseEnter={trigger}
      onTouchStart={trigger}
      style={style}
      alt={icon}
      src={`/icons/${icon}.svg`}
      width={40}
      height={40}
    />
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
        <div className='max-w-sm p-2'>
          <h1 className='font-bold text-2xl'>Tech Stack</h1>
          <div className='p-2'></div>
          <section>Here&apos;s some of the technologies I use and love the most.</section>
          <div className='p-4'></div>
        </div>
        <AnimatedIcons open={open} containerStyle='grid grid-cols-4 gap-6'>
          {icons.map((icon) => (
            <Icon key={icon} icon={icon} />
          ))}
        </AnimatedIcons>
        <div className='p-8 sm:p-0'></div>
      </div>
    </>
  )
}

export default Tech
