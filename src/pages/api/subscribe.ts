import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { stripe } from '../../services/stripe'

export default async function checkoutSession(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        const session = await getSession({ req })

        const stripeCustomer =  await stripe.customers.create({
            email: session.user.email,
            // metadata:
        })

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items:[
                { price: 'price_1KDMOsEDYtdK8BteWqVZn2ip', quantity:1 }
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        })

        return res.status(200).json({sessionId: stripeCheckoutSession.id})
    }else{
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }
}