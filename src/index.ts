import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello, world!', 200)
})

 app.get('/:id', async (c) => {
   const { id } = c.req.params

   const url = await URL_KV.get(id)
   if (url) {
     return c.redirect(url)
   } else {
     return c.text('URL not found', 404)
   }
 })

app.all('*', (c) => {
  return c.text('Bad Request', 400)
})

app.fire()
