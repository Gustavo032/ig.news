import { NextApiRequest, NextApiResponse } from "next"

// JWT (Storage)

// Next Auth (quando queremos: um sistema de autenticação simples; fazer login social; não queremos se preocupar em armazenar credenciais do usuario no backend

// cognito, Auth0 (providers de aut. externos.)

export default (request:NextApiRequest, response:NextApiResponse)=>{
        
    const users = [
        { id: 1, name: 'Gustavo'},
        { id: 2, name: 'Matheus'},
        { id: 3, name: 'Guilherme'}
    ]

    return response.json(users)
}
