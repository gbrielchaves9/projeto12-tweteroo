import express from "express";
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const usuario =[];
const msgs = [];

app.post('/sign-up' , (req , res)=>{
    const {username , avatar } = req.body;

    usuario.push({username , avatar})

    res.send("OK")
})
app.post('/tweets' , (req , res)=>{
   const twee =req.body
   const verificaLogin  = usuario.find(cadastro => cadastro.username === twee.username)
   if(!verificaLogin) res.send("UNAUTHORIZED")

   msgs.push(twee)
    res.send("Ok")
})

app.get('/tweets' , (req , res)=>{
    const pegaUltimos10 = msgs.slice(-10)


    /*busca a msg do usuario dentro da lista dos usuarios quardando com o find dentro do objeto */
    const PegaMsg = pegaUltimos10.map((msg)=>{
        const pessoa =usuario.find((e)=>e.username === msg.username)
        return {...msg ,avatar : pessoa.avatar}

    })
    res.send(PegaMsg)
 })
const PORT = 5000
app.listen(PORT)