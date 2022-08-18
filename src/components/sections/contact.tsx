import { ErrorMessage } from '@hookform/error-message'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useForm } from 'react-hook-form'
import { useWindowSize } from 'usehooks-ts'

const ErrorIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-5 w-5'
      viewBox='0 0 20 14'
      fill='currentColor'>
      <path
        fillRule='evenodd'
        d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
        clipRule='evenodd'
      />
    </svg>
  )
}

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
  type formData = { name: string; email: string; message: string }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: 'all',
  })
  const [party, setParty] = useState(false)

  useEffect(() => {
    if (party) setParty(true)
    setTimeout(() => setParty(false), 1000)
  }, [party])

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
      <div id='contact' className='flex flex-col place-items-center justify-center'>
        <div className='w-full max-w-sm p-2 md:max-w-lg'>
          <div className='max-w-sm p-2 md:max-w-lg'>
            <h1 className='text-2xl font-bold md:text-3xl'>Contact Me</h1>
            <div className='py-2'></div>
            <p className='md:text-xl'>
              If you have any questions, comments, or concerns, please feel free to reach out to me.
            </p>
            <div className='py-2'></div>
            <form onSubmit={handleSubmit((data) => sendEmail(data as formData))}>
              <div className='flex flex-col place-items-center justify-center'>
                <div className='grid w-full grid-cols-2 gap-4'>
                  <input
                    className='rounded bg-k-dark p-2 text-white md:text-xl'
                    {...register('name', { required: 'Please include a name' })}
                    placeholder='Name'
                  />
                  <input
                    className='rounded bg-k-dark p-2 text-white md:text-xl'
                    {...register('email', { required: 'Please include an email' })}
                    placeholder='Email'
                  />
                </div>
                <textarea
                  className='m-4 h-40 w-full rounded bg-k-dark p-2 text-white md:text-xl'
                  {...register('message', { required: 'Please include a message' })}
                  placeholder='Type your message here'
                />
                <div className='flex flex-col gap-2 place-self-start'>
                  <div className='px-2 font-bold'>
                    <ErrorMessage
                      errors={errors}
                      name='name'
                      render={({ message }) => (
                        <div className='flex'>
                          <ErrorIcon />
                          <p>{message}</p>
                        </div>
                      )}
                    />
                  </div>
                  <div className='px-2 font-bold'>
                    <ErrorMessage
                      errors={errors}
                      name='email'
                      render={({ message }) => (
                        <div className='flex'>
                          <ErrorIcon />
                          <p>{message}</p>
                        </div>
                      )}
                    />
                  </div>
                  <div className='rounded-md px-2 font-bold'>
                    <ErrorMessage
                      errors={errors}
                      name='message'
                      render={({ message }) => (
                        <div className='flex'>
                          <ErrorIcon />
                          <p>{message}</p>
                        </div>
                      )}
                    />
                  </div>
                </div>
                <div className='py-2'></div>
                <input
                  className='rounded-full bg-k-dark px-4 py-2 font-bold text-white'
                  type='submit'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='py-8'></div>
    </>
  )
}

export default Contact
