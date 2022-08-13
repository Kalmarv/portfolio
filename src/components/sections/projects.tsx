import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { config } from 'react-spring'
import { useIntersectionObserver } from 'usehooks-ts'
import AnimatedChildren from '../animated-children'

type sliderProps = {
  displayName: string
  description: string
  projectName: string
  liveLink: string
  githubLink: string
  slides: number
}

const Slider: React.FC<sliderProps> = ({
  displayName,
  projectName,
  slides,
  description,
  liveLink,
  githubLink,
}) => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <>
      <h1 className='font-bold text-xl md:text-2xl pt-4'>{displayName}</h1>
      <div className='p-2'></div>
      <p>{description}</p>
      <div className='p-4'></div>

      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {Array.from(Array(slides).keys()).map((_, i) => (
            <div className='flex flex-grow-0 flex-shrink-0 basis-full' key={i}>
              <Image
                src={`/project-images/${projectName}-${i + 1}.webp`}
                alt='Music Club'
                width={2300}
                height={1466}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center gap-8'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={liveLink}
          className='bg-branding-dark rounded-full px-4 py-2 font-bold text-white'>
          Visit
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={githubLink}
          className='bg-branding-dark rounded-full px-4 py-2 font-bold text-white'>
          Source
        </a>
      </div>
    </>
  )
}

const Projects = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 0.5 })
  const isVisible = !!entry?.isIntersecting

  useEffect(() => {
    if (isVisible) setOpen(true)
  }, [isVisible])

  return (
    <>
      <div className='py-8'></div>
      <div className='flex flex-col justify-center place-items-center' ref={ref}>
        <AnimatedChildren
          containerStyle='max-w-sm md:max-w-3xl p-2'
          outerStyle='relative w-full'
          trailConfig={{
            config: config.stiff,
            opacity: open ? 1 : 0,
            x: open ? 0 : 40,
            from: { opacity: 0, x: 40 },
          }}>
          <div className='p-2' />
          <h1 className='font-bold text-2xl md:text-3xl'>Projects</h1>
          <Slider
            displayName='Music Club'
            liveLink='https://club.kv7.dev/'
            githubLink='https://github.com/Kalmarv/MusicClub'
            description={
              'My friends and I started an album listening club and I wanted to make a website to share and track our listening experience.'
            }
            projectName='music-club'
            slides={2}
          />
        </AnimatedChildren>
      </div>
    </>
  )
}

export default Projects