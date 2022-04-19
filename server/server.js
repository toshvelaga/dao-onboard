const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Member = require('./models/member')
require('dotenv').config()

const app = express()
const PORT = 5001

app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.mongoDbURI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log(err)
  })

// add a new member to the database
app.post('/api/members', (req, res) => {
  const { discordName, status, role, onboardDate, onboardTime } = req.body
  const date = new Date()
  const member = new Member({
    discordName,
    status,
    role,
    onboardDate,
    onboardTime,
    dateJoined: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
  })
  member
    .save(member)
    .then(() => {
      res.send(member)
    })
    .catch((err) => {
      res.send(err)
    })
})

// get all the members from the database
app.get('/api/members', (req, res) => {
  Member.find()
    .then((members) => {
      res.send(members)
    })
    .catch((err) => {
      res.send(err)
    })
})

// get one member based on an ID from the database
app.get('/api/member', (req, res) => {
  const { id } = req.query
  console.log(id)
  Member.find({ _id: id })
    .then((members) => {
      res.send(members[0])
    })
    .catch((err) => {
      res.send(err)
    })
})

// edit one member based on an ID from the database
app.put('/api/member', (req, res) => {
  const { id, discordName, status, role } = req.body
  Member.findByIdAndUpdate(id, {
    discordName,
    status,
    role,
    lastUpdated: new Date().valueOf(),
  })
    .then((res) => {
      console.log(res)
      res.send('Member updated')
    })
    .catch((err) => {
      res.send(err)
    })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`)
})
