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
    const updateAddress = address.map((item)=>(item.id === id ? item : userBody))
    res.status(200).json(updateAddress);

})

app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}`);
})