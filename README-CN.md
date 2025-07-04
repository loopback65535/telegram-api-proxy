# telegram-api-proxy / telegram机器人代理
使用cloudflare构建telegram机器人代理，墙内服务器发送端可不启用三方翻墙工具直接发送telegram机器人消息。

## 使用方法：
1. 在cloudflare新建一个workers
2. 拷贝代码到workers.js
3. 部署启用workers
4. 添加你自己的域名到workers
5. 使用标准的telegram bot RESTFul API发送消息，只需替换api.telegram.com为你自己的域名，URL后缀及参数保持不变。

## 注意：
1. 代码只实现基本演示功能，具体的安全策略、id限制等请自行添加
