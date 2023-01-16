const express = require ('express')
const cookieParser = require('cookie-parser')
const app = express()

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
app.get("/users/:userID",(req, res) =>{
   const {userID} = req.params
   console.log(userID)
   res.send("userget")
})

//게시글 리스트 가져오기
app.get('/posts',(req, res) =>{
   const userlist = {
      "user":"test01",
      "contents":"contest"
   }
   console.log(userlist)
   res.send(userlist)
})

//선택 게시글 리스트 상세 가져오기
app.get('/posts/:post',(req,res)=>{
   console.log(req.params)
   res.send(req.params)
})

//게시글 작성
app.post("/lists",(req, res) => {
   const {title, username} = req.body
   console(title, username)
   res.send(title, username)
   })
   
//게시글 수정   
app.post("/lists/update",(req, res) => {
    
   })

//게시글 삭제
app.post("/list delete",(req, res) => {
   
   })

app.listen(3000,() => {
    console.log("서버 오픈")
})