//라우팅
"use strict"

const express = require("express")
const router = express.Router()
const ctrl = require("./home.ctrl")

router.get("/", ctrl.home)//get() 메소드로 페이지를 라우팅함

router.get("/login", ctrl.login)

module.exports = router//모듈이 내보낸다 router를(router가 모듈이 됨)

