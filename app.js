const express = require ('express')

const app = express()

const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

//로그인
app.post('/login',(req, res) => {
   const { userid, password } = req.body
   console.log(req.body)
   res.send("로그인")
   })

//회원가입
app.post('/sginUP',(req, res) => {
      const { userid, password, nickname} = req.body
      console.log(req.body)
      res.send("회원가입 완료")
     })

//회원정보 한명 가져오기
app.get("/user",(req, res) =>{
   console.log(req.params)
})

//게시글 리스트 가져오기
app.get('/lists',(req, res) =>{
   console.log(req,params)
})

//게시글 리스트 상세 가져오기
app.get('/listDetail',(req,res)=>{
   console.log(req.params)
})


app.post("/list create",(req, res) => {
   
   })
   
app.post("/list update",(req, res) => {
    
   })

app.post("/list delete",(req, res) => {
   
   })

app.listen(3000,() => {
    console.log("서버 오픈")
})