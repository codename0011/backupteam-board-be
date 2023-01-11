const express = require ("express")

const app = express()

app.get("/",(req, res) => {
 res.send("어! 나 잘있어!")
})

app.get("/host",(req, res) => {
    res.send("/host 어! 나 잘있어!")
   })
   
app.post("/host",(req, res) => {
    res.send("/host 어! 나 잘있어!")
   })
      

app.listen(3000,() => {
    console.log("잘 있냐?")
})