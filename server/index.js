const express = require("express")
const app = express()
//const messages = require
const mc = require("./controler/message_controler")
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

app.post("/api/messages",  mc.create )

app.get("/api/messages", mc.read)

app.put("/api/messages/:id", mc.update)

app.delete(`/api/messages/:id`, mc.delete)


app.listen(3001, ()=>{
    console.log("Up and running at 3001");
})