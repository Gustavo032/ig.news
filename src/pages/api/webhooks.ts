import { NextApiRequest, NextApiResponse } from "next"

export default function webhooks(req: NextApiRequest, res: NextApiResponse) {
    console.log('evento recebido')

    res.status(200).json({ ok: true})
}
