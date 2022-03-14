const express = require("express");
const PORT = 8000;
const address = require("./db.json");
let app = express();
app.get("/",(req,res)=>{
res.json(address)
})

app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}`);
})