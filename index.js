const Koa = require('koa')
const serve = require('koa-static')

const app = new Koa()
app.use(serve('./dist'))

const port = 9090
app.listen(port, () => {
  console.log(`Connected on port ${port}`)  
})
