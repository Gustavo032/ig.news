import { NextApiRequest, NextApiResponse } from "next"

export default (request:NextApiRequest, response:NextApiResponse)=>{
    const id = request.query.i
    
    const users = [
        { id: 1, name: 'Gustavo'},
        { id: 2, name: 'Matheus'},
        { id: 3, name: 'Guilherme'}
    ]

    return response.json(users)
}
