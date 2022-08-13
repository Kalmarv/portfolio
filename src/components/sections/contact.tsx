import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useIntersectionObserver, useWindowSize } from 'usehooks-ts'
import Confetti from 'react-confetti'
import AnimatedChildren from '../animated-children'
import { config } from 'react-spring'

const WOW: React.FC<{ party: boolean }> = ({ party }) => {
  const { width, height } = useWindowSize()
  return (
    <div className='fixed top-0 left-0'>
      <Confetti
        numberOfPieces={party ? 500 : 0}
        onConfettiComplete={(confetti) => {
          confetti?.reset()
        }}
        width={width}
        height={height}
      />
    </div>
  )
}

const Contact = () => {
  const [open, setOpen] = useState(false)
  type formData = { name: string; email: string; message: string }
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 0.75 })
  const isVisible = !!entry?.isIntersecting
  const { register, handleSubmit } = useForm()
  const [party, setParty] = useState(false)

  useEffect(() => {
    if (party) setParty(true)
    setTimeout(() => setParty(false), 1000)
  }, [party])

  useEffect(() => {
    if (isVisible) setOpen(true)
  }, [isVisible])

  const sendEmail = (data: formData) => {
    fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({
        name: data?.name,
        email: data?.email,
        message: data?.message,
      }),
    })
    setParty(true)
  }

  return (
    <>
      <WOW party={party} />
      <div className='py-8'></div>
      <div className='flex flex-col justify-center place-items-center' ref={ref}>
        <div className='max-w-sm md:max-w-lg p-2 w-full'>
          <AnimatedChildren
            containerStyle='max-w-sm md:max-w-lg p-2'
            outerStyle='relative w-full'
            trailConfig={{
              config: config.stiff,
              opacity: open ? 1 : 0,
              x: open ? 0 : 40,
              from: { opacity: 0, x: 40 },
            }}>
            <h1 className='text-2xl md:text-3xl font-bold'>Contact Me</h1>
            <div className='py-2'></div>
            <p className='md:text-xl'>
              If you have any questions, comments, or concerns, please feel free to reach out to me.
            </p>
            <div className='py-2'></div>
            <form onSubmit={handleSubmit((data) => sendEmail(data as formData))}>
              <div className='flex flex-col justify-center place-items-center'>
                <div className='grid grid-cols-2 w-full gap-4'>
                  <input
                    className='bg-branding-dark rounded p-2 text-white md:text-xl'
                    {...register('name')}
                    placeholder='Name'
                  />
                  <input
                    className='bg-branding-dark rounded p-2 text-white md:text-xl'
                    {...register('email')}
                    placeholder='Email'
                  />
                </div>
                <textarea
                  className='bg-branding-dark w-full h-40 rounded m-4 p-2 text-white md:text-xl'
                  {...register('message')}
                  placeholder='Type your message here'
                />
                <input
                  className='bg-branding-dark rounded-full px-4 py-2 font-bold text-white'
                  type='submit'
                />
              </div>
            </form>
          </AnimatedChildren>
        </div>
      </div>
      <div className='py-8'></div>
    </>
  )
}

export default Contact
