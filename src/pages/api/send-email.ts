import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

const testInfo = (formData: string) => (formData.length > 0 ? formData : 'No data')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
  const { name, email, message } = JSON.parse(req.body)

  const msg = {
    to: process.env.MY_EMAIL!,
    from: process.env.MY_EMAIL!,
    subject: `Portfolio Contact Form - ${testInfo(name)} - ${testInfo(email)}`,
    text: testInfo(message),
  }

  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error)
      if (error.response) {
        console.error(error.response.body)
        return res.status(400).json(error.response.body)
      }
    }
  )
  return res.status(200).json({ status: 'Ok' })
}
