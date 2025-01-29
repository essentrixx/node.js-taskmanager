const express = require('express')
const mongoose = require('mongoose');
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api-test')
    .then(() => console.log('MongoDB Connected! in test'))
    .catch(err => console.log(err))

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app;