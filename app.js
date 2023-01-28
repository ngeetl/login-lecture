//express없이 내장 모듈로 서버 띄우기
// const http = require("http")
// const app = http.createServer((req, res) => {
//     console.log(req.url)
//     if(req.url === "/") {
//         res.end("express없이 내장 모듈로 띄운 서버") 
//     }else if(req.url === "/login") {
//         res.end("login 화면입니다.")
//     }
// })

// app.listen(3001, () => {
//     console.log("http로 가동 된 서버")
// })



//모듈 세팅
const express = require("express")//require() 함수로 express 모듈을 가져옴
const app = express()


//라우팅
const home = require("./routes/home")//routes/home디렉토리 안에 있는 파일을 모듈로 사용하겠다.


//앱(페이지에 나올 앱) 세팅
app.set("views", "./views")//view(화면)는 ./views폴더에서 출력하겠다.
app.set("view engine", "ejs")//view engine은 ejs엔진으로 하겠다.(npm install ejs -s)

app.use("/", home)//use()는 미들웨어를 등록해주는 메서드


//모듈화
module.exports = app


//전체 주석 처리: 드래그하고 ctrl + /