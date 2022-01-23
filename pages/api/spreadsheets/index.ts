// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const create = req.body

  if (req.method === 'GET') {
    res.status(200).json({ name: 'John Doe' })
  } else if (req.method === 'POST' && create) {
    console.log('post!')
    res.status(200).json({ name: 'John Doe' })
  } else {
    res.json({ name: 'John Doe' })
  }
}

export default handler