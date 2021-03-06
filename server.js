const express = require("express");
const PORT = 8000;
const address = require("./db.json");
let app = express();

app.use(express.json());

app.get("/addresses",(req,res)=>{
res.json(address)
})

app.post("/addresses",(req,res)=>{
address.push(req.body);
res.json(req.body);
})



app.put("/addresses/:id",(req,res)=>{
    const {id} = req.params;
    const userBody = req.body;
    const updateAddress = address.map((item)=>(item.id === Number(id) ? userBody: item))
    res.status(200).json(updateAddress);

})
app.delete("/addresses/:id",(req,res)=>{
    const {id} = req.params;
  
    const updateAddress = address.filter((item)=>item.id !== Number(id) )
    res.json(updateAddress);

})



app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}`);
})