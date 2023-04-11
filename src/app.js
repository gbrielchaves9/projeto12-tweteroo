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
   if(!verificaLogin) return res.send("UNAUTHORIZED")

   msgs.push(twee)
    res.send("OK")
})

app.post('/tweets' , (req , res)=>{
  
 })
/*app.get('/tweets' , (req , res)=>{
    const pegaMsg =msgs.map(twee=> {
    })
})*/
app.listen(5000)