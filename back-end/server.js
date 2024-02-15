const express =require('express')

const PORT= 3000

const app=express()

const RouteClient=require('./router/clientRoute')

app.use(express.json())

app.use('api/clients/',RouteClient);

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });