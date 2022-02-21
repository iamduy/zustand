const path = require('path')
const fs = require('fs')
const express = require('express')
const promisify = require('util').promisify
const app = express() // create express app
const isProduction = process.env.NODE_ENV === 'production'
const root = path.join(__dirname, 'dist')
app.use(express.static(root))

const readFile = promisify(fs.readFile)

app.get('*.js', function (req, res) {
  res.set('Content-Type', 'text/javascript')

  if (isProduction) {
    req.url = req.url + '.gz'
    res.set('Content-Encoding', 'gzip')
  }

  res.sendFile(path.join(__dirname, req.url))
})

app.get('*.png', function (req, res) {
  res.sendFile(path.join(__dirname, req.url))
})

app.get('*.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, req.url))
})

app.get('*.css', function (req, res) {
  res.sendFile(path.join(__dirname, req.url))
})

app.get('*.woff', function (req, res) {
  res.sendFile(path.join(__dirname, req.url))
})

app.get('*.eot', function (req, res) {
  res.sendFile(path.join(__dirname, req.url))
})

app.get('*.ico', function (req, res) {
  res.sendFile(path.join(__dirname, req.url))
})

app.get('*.json', function (req, res) {
  res.sendFile(path.join(__dirname, req.url))
})

app.get('*.svg', function (req, res) {
  res.sendFile(path.join(__dirname, req.url))
})

app.get('*', async function (_, res) {
  const html = await readFile(path.join(__dirname, 'dist', 'index.html'), {
    encoding: 'utf-8'
  })
  res.send(html)
})

app.listen(7000, () => {
  console.log('Server started on port 7000')
})
