const express = require('express')
const app = express()

app.use(express.static("landing"))
app.use(express.urlencoded({extended: true}))


const email = require("./router/email")
app.post("/email", email)

const useRouter = require("./router/apply")
app.post("/message", useRouter)

const message = require("./router/message")
app.use("/message", message)

app.listen(8080)