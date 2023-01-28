
const app = require("../app")//내가 만든 모듈은 디렉토리 형식으로 입력
const PORT = 3000

app.listen(PORT, () => {
    console.log("서버 가동")
})//listen() 메소드로 서버 port를 열어 가동시킴 

