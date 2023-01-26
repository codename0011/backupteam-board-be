const express = require ('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const movies = require('./src/models/movie')
const users = require('./src/models/user')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

//영화 제목 리스트 (페이지네이션)
app.get('/movies', (req, res) => {
   const page  = req.query.page || 1
   console.log(page)
   const copymovies = [...movies]
   const endpage = Math.ceil(movies.length / 10)
   const startIndex = (page - 1) * 10
   const pagimovies = copymovies.splice(startIndex, 10)
   
  const movielist = pagimovies.map(movie =>({
   ...movie,
   name:users.find(user => user.id === movie.user_id).name
  }))

  movielist.sort((a, b) => {
   const preTime = new Date(a.created_at).getTime()
   const curTime = new Date(b.created_at).getTime()
   return curTime - preTime
  })

  console.log("startIndex : ", startIndex)
  console.log("endpage : ",  endpage)

  res.send({
      pagedeteil :{
          endpage
      },
      movies :pagimovies
      ,movies :movielist 
   })
})

//hit_count 증가
app.get('/movies/:id',(req,res) =>{
//1.사용자가 보낸 id를 가져옴
const { id } = req.params
//2.id에 해당한 movie를 가져옴
const moviefind = movies.find((movie) => movie.id === Number(id))         //Number?? (숙제!)
//3.가져온 movie 에서 hit_count + 1 을 한 객체만듬
const findmovie = {...moviefind, hit_count: moviefind.hit_count + 1}       //...?(구글링이 안돼면 팀원분들에게 도!!움!!) 문법 (숙제!)
//4.hit_count + 1 한 객체를 movie 내에 기존 객체에 치환(findIndex , splice 사용)
const countPush = movies.findIndex((movie) => movie.id === Number(id))
movies.splice(countPush, 1, findmovie) //splice? (배열로 부터 특정 범위를 삭제 및 새로운 값 추가 및 기존 값 대체 가능)
       //구문 array.splice(startNum, deleteCount??, isertValue)
       //startNum(시작 순서) 부터, deleteCount(제거개수) 몇개를 제거하고 , insertValue(넣을 값) 값을 몇개 넣어라
console.log(movies)
//5.hit_count(조회수)+1 한 객체를 반환
return res.send(moviefind)
})


             
             
//영화등록
app.post('/movies', (req, res) =>{
   //1.사용자가 등록할 영화의 정보를 주면 받아옴 (from요청)(req)
   const newmovie = req.body
   //2.가져온 영화정보에 id 를 부여
   newmovie.id= movies[movies.length - 1].id + 1
   //3.조회수(hit_count) 는 기본으로 0으로 설정
   newmovie.hit_count = 0
   //4.작성일은 현재시간을 넣음
   newmovie.created_at = new Date(). toISOString()
   //5.(2,3,4번)전부 부여된 영화정보를 movies 추가
   movies.push(newmovie)
   console.log(movies)
   res.send(newmovie)
})




/* //로그인
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
app.delete("/lists/:userID/delete",(req, res) => {
   const {userID} = req.body
   console.log(req.body)
   res.send(삭제완료)
   }) */

app.listen(3000,() => {
    console.log("서버 오픈")
})