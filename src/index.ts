import { Hono } from 'hono'

// Honoアプリのインスタンスを作成
const app = new Hono()

// 短縮URLリダイレクト用のルート
app.get('/:id', async (c) => {
  const { id } = c.req.params

  // KV ストアから URL を取得
  const url = await URL_KV.get(id)
  if (url) {
    return c.redirect(url)
  } else {
    return c.text('URL not found', 404)
  }
})

// Honoアプリの起動
app.fire()