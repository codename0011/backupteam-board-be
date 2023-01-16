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
   res.send("회원정보")
})

//게시글 리스트 가져오기
app.get('/lists',(req, res) =>{
   const userlist = {
      "user":"test01",
      "contents":"contest"
   }
   console.log(userlist)
   res.send(게시글리스트)
})

//선택 게시글 리스트 상세 가져오기
app.get('/lists/:listID',(req,res)=>{
   console.log(req.params)
   res.send(게시글리스트(상세))
})

//게시글 작성
app.post("/lists/create",(req, res) => {
   const {title, username} = req.body
   console.log(title, username)
   res.send(게시글작성)
   })
   
//게시글 수정
app.post("/lists/:userID/update",(req, res) => {
   const {title, userID} = req.body
   console.log(req.body)
   res.send(수정완료)
   })

//게시글 삭제
app.delete("/lists/delete",(req, res) => {
   const {userID} = req.body
   console.log(req.body)
   res.send(삭제완료)
   })

app.listen(3000,() => {
    console.log("서버 오픈")
})