const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require("../../src/models/user");
const Task = require("../../src/models/task");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    name: 'khan',
    email: 'khan@example.com',
    password: 'test123',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, 'thisismysecretkey'),
    }]
}

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
    _id: userTwoId,
    name: 'Jess',
    email: 'jess@example.com',
    password: 'test123',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, 'thisismysecretkey'),
    }]
}

const taskOne = {
    _id: mongoose.Types.ObjectId(),
    description: 'First task',
    completed: false,
    owner: userOne._id
}

const taskTwo = {
    _id: mongoose.Types.ObjectId(),
    description: 'Second task',
    completed: true,
    owner: userOne._id
}

const taskThree = {
    _id: mongoose.Types.ObjectId(),
    description: 'Third task',
    completed: true,
    owner: userOne._id
}

const setupDatabase = async () => {
    await User.deleteMany();
    await Task.deleteMany();
    await new User(userOne).save();
    await new User(userTwo).save();
    await new Task(taskOne).save();
    await new Task(taskTwo).save();
    await new Task(taskThree).save();
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}