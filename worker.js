const TELEGRAM_API = "https://api.telegram.org"

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    const url = new URL(request.url)

    // 限制仅允许代理 /bot 开头的请求路径
    if (!url.pathname.startsWith("/bot")) {
      return new Response("Forbidden: Only /bot requests are allowed", { status: 403 })
    }

    // 构造目标 URL：保留路径和查询参数
    const targetUrl = TELEGRAM_API + url.pathname + url.search

    // 克隆请求以发送到 Telegram API
    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.method === "GET" || request.method === "HEAD" ? null : request.body,
      redirect: "follow"
    })

    // 发送请求并获取响应
    const response = await fetch(modifiedRequest)

    // 克隆响应并添加 CORS 头部（防止浏览器跨域问题）
    const newHeaders = new Headers(response.headers)
    newHeaders.set("Access-Control-Allow-Origin", "*")
    newHeaders.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    newHeaders.set("Access-Control-Allow-Headers", "*")

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    })

  } catch (err) {
    return new Response("Proxy error: " + err.toString(), { status: 502 })
  }
}
