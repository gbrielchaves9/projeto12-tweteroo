import express from "express";
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const usuario =[{
	username: 'bobesponja', 
	avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png" 
}];

app.post('/sign-up' , (req , res)=>{
    const {username , avatar } = req.body;

    usuario.push({username , avatar})

    res.send("OK")
})

app.listen(5000)