const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('config')
const { Image } = require('./models/image')

const app = express()

mongoose.connect(config.get('db'), { useNewUrlParser: true })

app.all('*', cors({
  allowedHeaders: ['Content-Type']
}))

app.use(express.json({ limit: '50mb' }))

app.get('/img', async (req, res) => {
  const images = await Image.find()

  res.send(images)
})

app.post('/img', async (req, res) => {
  const image = new Image(req.body)
  await image.save()

  res.send(image)
})

app.listen(process.env.PORT || 3000)
